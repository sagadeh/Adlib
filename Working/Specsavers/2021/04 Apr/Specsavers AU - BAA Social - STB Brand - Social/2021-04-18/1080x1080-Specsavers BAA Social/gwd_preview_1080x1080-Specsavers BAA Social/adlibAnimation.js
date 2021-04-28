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
  
  if(defaultValues.trigger=="hide text"){
    console.log("hide text")
    document.querySelector("#frame1headline").style.opacity = "0";
  }
  
  if(defaultValues.trigger2=="hide logo"){
    console.log("hide logo");
    document.querySelector("#logo-wrapper").style.display = "none";
  }
  
  if(defaultValues.trigger3=="hide curve"){
    document.querySelector("#curve").style.display = "none";
    document.querySelector("#frame1headline-wrapper").style.backgroundColor = "transparent";
  }
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}