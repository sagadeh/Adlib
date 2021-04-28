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
    document.querySelector("#circle-wrapper").style.right = "90px";
  }
  if(defaultValues.trigger=="none"){
    document.querySelector("#circle-wrapper").style.display = "none";
  }
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}