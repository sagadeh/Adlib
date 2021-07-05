// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
let format = '[^\x00-\x7F]';
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function getStyle(o,prop) {
     return parseInt(window.getComputedStyle(eval(o)).getPropertyValue(prop).match(/\d+/))
 }

function startAnimation() {  
    tween = gsap.timeline();
    
    tween.to(["#frame1Content, #bg"],{opacity:1, duration: 0.0, ease: "power2.in"},"+=0.0")
         .to(["#header"],{opacity:0.99, duration: 0.5, ease: "power1.in"},"+=0.0")
         .to(["#productContainer, #product-bg"],{opacity:0.99, duration: 0.5, ease: "power2.in"},"+=0.1")
    // Headline Animation
         .to("#headlineParent", {opacity:0.99, x:15, duration: 0.5, ease: "power2.inOut"},"-=0.3")
         .to("#tagValueParent", {opacity:0.99, x:15, duration: 0.5, ease: "power2.inOut"},"-=0.4")

    // Legal and CTA Animation
         .to("#ctaParent", {opacity:0.99, x:15, duration: 0.5, ease: "power2.inOut"},"-=0.4")
         .to("#legalsParent", {opacity:0.99, x:15, duration: 0.5, ease: "power2.inOut", onComplete: animationEnd},"-=0.4");
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     // clearInterval(vidCnt) // if you are using the video cue point feature of the template, uncomment the below code:
     // document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // uncomment this for creative using video.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}