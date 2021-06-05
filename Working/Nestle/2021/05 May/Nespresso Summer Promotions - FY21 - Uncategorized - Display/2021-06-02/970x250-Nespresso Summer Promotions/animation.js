// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
var tl;

//gsap.set("#leaves-1", {rotationZ:0.01, force3D:false});

function initAnimation() {
    // place all fluid elements before text resize and css attrib.
    Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
    Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
    startAnimation();
}

function startAnimation() {  
    tl = gsap.timeline({
        default: {duration: 0.5, ease: Power1.easeIn},
        onStart: leavesAnimation,
        onComplete: takeScreenshot
    }); //Screenshot FRAME5 / adlibEnd
    tl.to("#mainContent", {duration: 0.5, visibility: "visible"})
      .from("#logo", {opacity: 0})
      .from("#headline-wrapper, #frame1-subheadline, #frame1-subheadline2, #frame1-subheadline3, #cta-container", {opacity: 0, y: "10px", stagger: 0.25});
}

function leavesAnimation () {
    gsap.to("#leaves-1", {duration: 3, transform: "rotate(5deg", yoyo: true, repeat: 3,ease: Power1.easeInOut, rotationZ:0.001, force3D: false});
    gsap.to("#leaves-2", {duration: 4, transform: "rotate(5deg", yoyo: true, repeat: 2,ease: Power1.easeInOut, rotationZ:0.001, force3D: false, onComplete: animationEnd, delay: 0.5});
}

function animationEnd() {
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}