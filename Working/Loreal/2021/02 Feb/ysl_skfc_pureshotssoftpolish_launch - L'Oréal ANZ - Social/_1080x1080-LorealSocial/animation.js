// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
//let tween;

function initAnimation() {
     startAnimation();
}
function startAnimation() {  
    console.log("startAnimation")
    var tl = gsap.timeline({onComplete: animationEnd});
    //FRAME 1 ANIMATION
    tl.to("#mainContent", {duration: 0.5, visibility: "visible"});
}
function animationEnd() {
     // call this function on the very end of the last animation.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}