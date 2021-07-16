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
    var tl = gsap.timeline({onComplete: animationEnd});
    tl.to("#mainContent", {display: "block"})
      .from("#frame1-headline-wrapper, #frame1-headline2-wrapper", {duration: 0.5, left: "300px", stagger: 0.1})
      .from("#frame1-headline3-wrapper, #frame1-headline4-wrapper", {duration: 0.5, left: "300px", stagger: 0.1},'-=0.2')
      .from("#packshot", {duration: 0.5, left: "300px"},'-=0.25')
      .from("#roundel", {duration: 0.3, scale: 0, ease: "back.out(1.7)"})
      .from("#cta-container", {duration: 0.5, opacity: 0})
      .from("#legal", {duration: 0.5, opacity: 0},'-=0.25');
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}