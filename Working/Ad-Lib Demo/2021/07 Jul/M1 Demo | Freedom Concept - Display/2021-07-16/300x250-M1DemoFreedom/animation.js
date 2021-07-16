// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
//let tween;
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     //Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {  
    var tl = gsap.timeline();
    
    tl.to(".mainContent", {duration: 0, opacity: 1})
      .from("#frame1-headline", {opacity: 0, top: "20px", force3D: "false"},'+=0.5')
      .from("#frame1-headline2, #frame1-subheadline2, #frame1-subheadline", {opacity: 0, top: "20px", force3D: "false"},'+=0.5')
      .to("#frame1-image", {opacity: 0},'+=1')
      .from("#logo", {opacity: 0})
      .to("#cta-wrapper", {duration: 0.25, scale: "1.1", yoyo: true, repeat: 1},'+=0.5');
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}