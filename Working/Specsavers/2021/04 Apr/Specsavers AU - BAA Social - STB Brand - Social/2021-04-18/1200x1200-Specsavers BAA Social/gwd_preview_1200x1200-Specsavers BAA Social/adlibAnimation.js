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
    document.querySelector("#frame1headline").style.display = "none";
  }
  
  if(defaultValues.customVariable2=="hideCurve"){
    document.querySelector("#curve-wrapper").style.display = "none";
    document.querySelector("#frame1headline-wrapper").style.backgroundColor = "transparent";
  }
  
  if(defaultValues.customVariable5=="hideLogo"){
    document.querySelector("#logo-wrapper").style.display = "none";
  }
  
  if(defaultValues.customVariable3=="uCurve"){
    //document.querySelector("#curve").setAttribute("source", "curve2.png");
    document.querySelector("#right-curve-wrapper").style.display = "none";
    document.querySelector("#u-curve-wrapper").style.display = "block";
  }
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}