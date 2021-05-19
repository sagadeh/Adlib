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
  
  if(defaultValues.customVariable=="hideText"){
    console.log("hide text")
    document.querySelector("#frame1headline").style.opacity = "0";
  }
  
  if(defaultValues.customVariable2=="hideCurve"){
    document.querySelector("#curved-corner-bottomleft").style.display = "none";
    document.querySelector("#curved-corner-bottomright").style.display = "none";
    document.querySelector("#curved-long-bottomright").style.display = "none";
    document.querySelector("#frame1headline-wrapper").style.backgroundColor = "transparent";
  }
  
  if(defaultValues.customVariable3=="uCurve"){
    document.querySelector("#curved-corner-bottomleft").style.display = "block";
    document.querySelector("#curved-corner-bottomright").style.display = "block";
    document.querySelector("#curved-long-bottomright").style.display = "none";
  }
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}