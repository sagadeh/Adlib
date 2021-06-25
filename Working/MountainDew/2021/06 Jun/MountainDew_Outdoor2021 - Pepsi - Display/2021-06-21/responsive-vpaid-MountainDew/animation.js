// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
//gsap.set("#product",{opacity:0})
function initAnimation() {
     Adlib.textResize(); // DO NOT DELETE THIS
     Adlib.templateCSS(defaultValues.cssAttrib) // DO NOT DELETE THIS
     myVideo.addEventListener('ended',completeVideo)
     startAnimation();

     //remove before Phase 2
     document.querySelector('#bigPlayBtn').addEventListener('touchend',startAnimation);
     document.querySelector('#bigPlayBtn').addEventListener('click', startAnimation);


     // Seek
     // myVideo.currentTime = 12;
}
function startAnimation() {  
     tween = gsap.timeline();
     myVideo.play();

     //remove before Phase 2
     myVideo.muted = false;
     vidPlaying = true;
     bigPlayBtn.style.visibility = 'hidden';


}
function animateProduct() {
     tween.set("#product1",{opacity:1});
     tween.set("#product2",{opacity:1});
     tween.set("#product3",{opacity:1});

     tween.to("#product2", {duration: 0.2, ease: "quad.inOut", y:0, delay: 1})
     tween.to("#product1", {duration: 0.2, ease: "quad.inOut", y:0},"-=0.1")
     tween.to("#product3", {duration: 0.2, ease: "quad.inOut", y:0},"-=0.1");


}
function animateHeadline() {
     let mySplitText = new SplitText("#headlineContent", {type:"lines"}), splitElems = mySplitText.lines;
     tween.set("#headlineContent",{opacity:1})
     tween.from(splitElems, {duration: 0.1, opacity:0, stagger: 0.5, onComplete: takeScreenshot});

}
function completeVideo() {
     clearInterval(vidCnt); // Delete this if you will not use the video cue point feature.
     document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // DO NOT DELETE THIS
     takeScreenshot();
     setTimeout(function() {
          adlibEnd();     
          Enabler.close(); // DO NOT DELETE required for VPAID creatives     
     },1000);
}
