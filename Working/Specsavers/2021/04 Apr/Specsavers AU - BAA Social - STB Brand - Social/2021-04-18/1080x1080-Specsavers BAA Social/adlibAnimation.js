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
  
  if(defaultValues.customVariable2=="hideLogo"){
    console.log("hide logo");
    document.querySelector("#logo-wrapper").style.display = "none";
  }
  
  if(defaultValues.customVariable3=="hideCurve"){
    document.querySelector("#curve").style.display = "none";
    document.querySelector("#frame1headline-wrapper").style.backgroundColor = "transparent";
  }
  
  if(defaultValues.customVariable4=="UCurve"){
    document.querySelector("#curve").setAttribute("source", "curve2.png");
  }
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}