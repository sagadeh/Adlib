"use strict";
CustomEase.create("startAnimation", "0, 0, 0, 0.995");
CustomEase.create("endAnimation", "1, 0.005, 1, 1");

//arrow easing
CustomEase.create("arrowEaseIn", "0, 0, 0.255, 0.995");

var tl = gsap.timeline({ paused: true });
var _loopCount = 0;

gsap.set(["#frame1Wrapper", "#frame2Wrapper","#frame3Wrapper", "#frame4Wrapper", "#ctaWrapper","#chevron","#legaltext"], { opacity: 0, x: 100 });
gsap.set("#curve", { x:320 });

function animation(){
  adlibStart();
  callGWDPlayPause();
  
  tl.play()
    .to("#curve", 1, { x: 100, ease: "startAnimation", force3D: true })
    .to("#frame1Wrapper", 1, { x: 0, opacity: 1, ease: "startAnimation", force3D: true, onComplete: takeScreenshot}, "0.5")
    .add(function(){
        tl.to("#frame1Wrapper", 1, { x: 100, opacity: 0, ease: "endAnimation", force3D: true }, "+=.5")
          .to("#frame2Wrapper", 1, { x: 0, opacity: 1, ease: "startAnimation", force3D: true, onComplete: takeScreenshot })
          .to("#frame2Wrapper", 1, { x: 100, opacity: 0, ease: "endAnimation", force3D: true }, "+=.5")
          .to("#frame3Wrapper", 1, { x: 0, opacity: 1, ease: "startAnimation", force3D: true, onComplete: takeScreenshot })
          .to("#frame3Wrapper", 1, { x: 100, opacity: 0, ease: "endAnimation", force3D: true }, "+=.5")
          .to("#frame4Wrapper", 1, { x: 0, opacity: 1, ease: "startAnimation", force3D: true, onComplete: takeScreenshot })
          .to("#frame4Wrapper", 1, { x: 100, opacity: 0, ease: "endAnimation", force3D: true }, "+=.5")
          .to(["#ctaWrapper","#chevron","#legaltext"], 1, { x: 0, opacity: 1, ease: "startAnimation", force3D: true, onComplete: takeScreenshot })
    })
    .add(function(){
      tl.to("#chevron", 0.2, { x: 0, ease: "arrowEaseIn" })
        .to("#chevron", 0.2, { x: 5, ease: "arrowEaseIn" })
        .to("#chevron", 0.2, { x: 0, ease: "arrowEaseIn"})
        .to("#chevron", 0.2, { x: 5, ease: "arrowEaseIn" })
        .to("#chevron", 0.2, { x: 0, ease: "arrowEaseIn"})
    })
    .add(function(){
      tl.to(["#ctaWrapper","#chevron","#legaltext"], 1, { x: 100, opacity: 0, ease: "endAnimation", force3D: true, /*onComplete:replayAnimation */}, "+=.5")
    })
  
   .add(function(){
      tl.to("#frame1Wrapper", 1, { x: 0, opacity: 1, ease: "startAnimation", force3D: true, onComplete: endframe})
    }) 
  
  
}

/*
function replayAnimation() {
    document.querySelector("#curve").classList.add("curve-disable");
    gsap.delayedCall(0.2, tl.restart());
    _loopCount++;
}*/

function endframe() {
        gsap.globalTimeline.pause();
        adlibEnd();
}