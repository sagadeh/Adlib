"use strict";
gsap.set(["#main"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element


gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented


//<-- dont delete, this is strictly implemented
function initAnim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  
  console.log("init animation");
  var tl = gsap.timeline({onComplete: animationEnd});
  
  tl.to("#main", {duration: 0.5, visibility: "visible"});
  
  if(defaultValues.trigger=="right"){
    document.querySelector("#circle-wrapper").style.left = "auto";
    document.querySelector("#circle-wrapper").style.right = "64px";
  }
  if(defaultValues.trigger2=="removeTextBackground"){
    document.querySelector('#frame1headline').style.backgroundColor = "transparent";
    document.querySelector('#frame1headline').style.boxShadow = "none";
    document.querySelector('#frame1subheadline').style.backgroundColor = "transparent";
    document.querySelector('#frame1subheadline').style.boxShadow = "none";
  }
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}