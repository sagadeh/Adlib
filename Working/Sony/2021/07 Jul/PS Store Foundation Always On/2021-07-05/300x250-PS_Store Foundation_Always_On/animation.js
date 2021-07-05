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
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {  
    var tl = gsap.timeline({onComplete: animationEnd});
    
    tl.to("#mainContent", {display: "block", onComplete: takeScreenshot})
      .from("#frame2-bg, #rating", {opacity: 0, duration: 0.5},'+=2')
      .from("#frame2-headline", {opacity: 0, y: "-90%", ease: "back.out(3)", duration: 0.5, onComplete: takeScreenshot},'-=0.25')
      .to("#frame2-headline", {opacity: 0, duration: 0.3},'+=2')
      .from("#single-packshot1-headline-wrapper", {opacity: 0, duration: 0.3})
      .from("#cta-container", {y: "120%", duration: 0.3},'-=0.3')
      .from("#single-packshot1-image", {x: "130%", ease: "back.out(1.5)", duration: 0.5, onComplete: takeScreenshot},'-=0.5')
      .from("#cta", {opacity: 0, duration: 0.3})
      .to("#single-packshot1-headline-wrapper", {opacity: 0, duration: 0.3},'+=1.5')
      .to("#single-packshot1-image", {x: "130%", duration: 0.3},'-=0.3')
      .from("#single-packshot2-headline-wrapper", {opacity: 0, duration: 0.3})
      .from("#single-packshot2-image", {x: "130%", ease: "back.out(1.5)", duration: 0.5, onComplete: takeScreenshot},'-=0.5')
      .to("#single-packshot2-headline-wrapper", {opacity: 0, duration: 0.3},'+=1.5')
      .to("#single-packshot2-image", {x: "130%", duration: 0.3},'-=0.3')
      .from("#single-packshot3-headline-wrapper", {opacity: 0, duration: 0.3})
      .from("#single-packshot3-image", {x: "130%", ease: "back.out(1.5)", duration: 0.5, onComplete: takeScreenshot},'-=0.5')
      .to("#single-packshot3-headline-wrapper", {opacity: 0, duration: 0.3},'+=1.5')
      .to("#single-packshot3-image", {x: "130%", duration: 0.3},'-=0.3')
      .from("#multi-packshot-headline", {scale: 1.2, y: "100%", ease: "power1.in", opacity: 0, duration: 0.3})
      .from("#multi-packshot-image1, #multi-packshot-image2, #multi-packshot-image3", {x: "380%", ease: "back.out(1)", stagger: 0.05, duration: 0.5});
    
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}