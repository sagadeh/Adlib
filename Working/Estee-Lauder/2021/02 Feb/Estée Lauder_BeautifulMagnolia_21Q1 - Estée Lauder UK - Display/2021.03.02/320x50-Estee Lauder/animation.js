// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
function initAnimation() {
     gsap.set("#flare", {opacity:0, x:10, y:0});
     startAnimation();
}
function startAnimation() {  
    var tl = gsap.timeline({onStart: scaleAnim, onComplete: animationEnd});
    tl.to("#mainContent", {duration: 0, opacity: 1})
      .to("#frame1Headline_loc", {duration: 0.5, opacity: 0, force3D: false},'+=2')
      .from("#frame1Subheadline_loc", {duration: 0.5, opacity: 0, force3D: false})
      .to("#frame1Subheadline_loc", {duration: 0.5, opacity: 0, force3D: false},'+=2')
      .from("#frame1Headline2_loc", {duration: 0.5, opacity: 0, force3D: false})
      .to("#frame1Headline2_loc", {duration: 0.5, opacity: 0, force3D: false},'+=2')
      .from("#frame2Headline_loc", {duration: 0.5, opacity: 0, force3D: false})
      .to("#frame2Headline_loc", {duration: 0.5, opacity: 0, force3D: false},'+=2')
      .from("#frame2Subheadline_loc", {duration: 0.5, opacity: 0, force3D: false})
      .to("#frame2Subheadline_loc", {duration: 0.5, opacity: 0, force3D: false},'+=2')
      .from("#frame2Headline2_loc", {duration: 0.5, opacity: 0, force3D: false});
}
function scaleAnim() {
    var tl = gsap.timeline();
    tl.from("#frame1Background_loc", {duration: 9, scale: 1.1, force3D: false, onStart: flareAnimation, onComplete: takeScreenshot})
      .to("#frame1Background_loc", {duration: 0.5, opacity: 0, force3D: false},'-=0.5')
      .from("#frame2Background_loc", {duration: 0.5, opacity: 0, force3D: false},'-=1')
      .from("#frame2Background_loc", {duration: 8, scale: 1.1, force3D: false},'-=1');
}
function animationEnd() {
     // call this function on the very end of the last animation.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}

function flareAnimation() {
gsap.to("#flare", {duration: 3, x:-10, y:0, opacity:1, force3D: false});
gsap.to("#flare", {duration: 2, opacity:0, delay:2.5, force3D: false, onComplete: function(){ gsap.set("#flare", {opacity:0, x:10, y:0});}});
gsap.to("#flare", {duration: 3, x:-10, y:0, delay:5, opacity:1, force3D: false});
gsap.to("#flare", {duration: 2, opacity:0, delay:7, force3D: false});
}