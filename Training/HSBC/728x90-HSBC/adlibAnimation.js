"use strict";
var tl; //gsap timeline
gsap.set(["#main", "#replay-button"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element

gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented

//<-- dont delete, this is strictly implemented
function initAnim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  
  console.log("init animation");
  tl = gsap.timeline({onComplete: function(){
    adlibEnd();
    gsap.to("#replay-button", {duration: 0.5, visibility: "visible"});
    document.getElementById("replay-button").addEventListener("click", replayAddEventListener);
    
  }});
  
  tl.to("#main", {duration: 0.5, visibility: "visible"})
    .from("#frame1Image, #logo", {duration: 0.5, opacity: 0})
    .from("#frame1Headline", {duration: 0.5, opacity: 0})
    .to("#frame1Image-wrapper, #frame1Headline", {duration: 0.5, opacity: 0, onComplete: takeScreenshot},'+=2')
    .from("#frame2Headline, #frame2Image", {duration: 0.5, opacity: 0})
    //.from("#frame2Image", {duration: 0.5, opacity: 0},'-=0.5')
    .from("#frame2Subheadline", {duration: 0.5, y: "25%", opacity: 0})
    .from("#legal", {duration: 0.5, y: "50%", opacity: 0},'-=0.25')
    /*.from("#logo", {duration: 0.5, y: "25%", opacity: 0})*/
    .to("#frame2Headline-wrapper, #frame2Subheadline-wrapper, #frame2Image-wrapper, #legal", {duration: 0.5, opacity: 0, onComplete: takeScreenshot},'+=2')
    .to("#legal", {duration: 0, x: "308px"})
    .from("#frame3Headline", {duration: 0.5, opacity: 0})
    .from("#orText", {duration: 0.5, opacity: 0},'-=0.5')
    .from("#productImage1", {duration: 0.5, x: "-10%", opacity: 0},'-=0.5')
    .from("#price", {duration: 0.5, x: "10%", opacity: 0},'-=0.5')
    .from("#cta", {duration: 0.5, x: "3%", opacity: 0})
    .to("#legal", {duration: 0.5, opacity: 1},'-=0.5')
    .from("#replay", {duration: 0.5, x: "2%", opacity: 0});
}

function replayAddEventListener(){
  switch(event.type) {
    case "click":
      tl.restart();
      gsap.set(["#replay-button"], {visibility: "hidden"});
  }
}