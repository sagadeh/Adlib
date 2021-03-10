"use strict";
gsap.set(["#main"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element


gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented


//<-- dont delete, this is strictly implemented
function initAnim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  
  var tl = gsap.timeline({onStart: function(){
    //console.log("onstart")
    document.getElementById("legal-btn").addEventListener("mouseover", legalMouseOver);
    document.getElementById("legal-close-btn").addEventListener("click", closeLegalClick);
  },onComplete: adlibEnd});
  
  tl.to("#main", {duration: 0.5, visibility: "visible"})
    .from("#frame1Headline", {duration: 0.5, opacity: 0, force3D: false})
    .to("#frame1Image, #frame1Headline", {duration: 0.5, opacity: 0, onComplete: takeScreenshot},'+=2')
    .from("#frame2Headline", {duration: 0.5, opacity: 0, force3D: false})
    .from("#frame2Image, #bg-gradient", {duration: 0.5, opacity: 0})
    .from("#frame2Image2", {duration: 0.5, opacity: 0})
    .from("#cta-wrapper", {duration: 0.5, y: "50%", opacity: 0});
}

function legalMouseOver() {
  //console.log("legal mouseover");
  gsap.to("#legal-text-wrapper", {duration: 0.25, y: "-100%"});
}

function closeLegalClick() {
  gsap.to("#legal-text-wrapper", {duration: 0.25, y: "0%"});
}
