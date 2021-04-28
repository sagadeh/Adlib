// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
gsap.set("#headerContainer",{x:"-100%"})

let tl;
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {  
    tl = gsap.timeline({onStart: function(){
        if(defaultValues.disclaimer == "N/A") document.getElementById("disclaimer").style.opacity = 0;
    },onComplete: animationEnd});
    
    tl.to("#mainContent", {duration: 0, display: "block"})
      .add(panel)
      .from("#logo", {duration: 0.5, opacity: 0},'+=0.5')
      .from("#frame1headline, #frame1subheadline", 0.5, {y: "20%", opacity: 0, force3D: false, stagger: 0.2},"-=0.25")
      .from("#ctaContainer", {duration: 0.5, opacity: 0})
      .from("#footerContainer", {duration: 0.5, opacity: 0, y:"100%"})
      .to("#ctaContainer", {duration: 0.2, scale: 1.12, repeat: 1, yoyo: true, ease: Power2.easeOut});
}
function panel() {
    if(defaultValues.trigger == "withPanel") {
        gsap.to("#headerContainer", {duration: 0.5, x:"0%", force3D: false})
    }else if(defaultValues.trigger == "noPanel") {
        gsap.set("#headerContainer",{x:"0%"})
        gsap.to("#headerContainer", {duration: 0, backgroundColor: "transparent"})  
    }
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}