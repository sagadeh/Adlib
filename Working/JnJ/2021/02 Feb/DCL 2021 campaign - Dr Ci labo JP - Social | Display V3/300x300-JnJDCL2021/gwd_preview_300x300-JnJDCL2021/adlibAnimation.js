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
  
  if(defaultValues.trigger=="377VC"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    
    //headline container
    document.querySelector("#headline-container").style.top = "238px";
    document.querySelector("#headline-container").style.left = "12px";
    document.querySelector("#headline-container").style.width = "282px";
    document.querySelector("#headline-container").style.height = "44px";
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "286px";
    document.querySelector("#disclaimer-wrapper").style.left = "0px";
    document.querySelector("#disclaimer-wrapper").style.width = "99%";
    document.querySelector("#disclaimer-wrapper").style.height = "9px";
    document.querySelector("#disclaimer-wrapper").style.paddingLeft = "11px";
    document.getElementById("disclaimer").classList.add("disclaimer-377VC");
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-377VC");
  }
  if(defaultValues.trigger=="AQUAINDERM"){
    console.log("AQUAINDERM >>>");
    //headline-container
    document.querySelector("#headline-container").style.top = "98px";
    document.querySelector("#headline-container").style.left = "14px";
    document.querySelector("#headline-container").style.width = "168px";
    document.querySelector("#headline-container").style.height = "172px";
    
    //frame1Image-wrapper
    document.querySelector("#frame1Image-wrapper").style.paddingTop = "7px";
    document.querySelector("#frame1Image-wrapper").style.width = "130px";

    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //document.querySelector("#frame1Headline2-wrapper").style.paddingTop = "2px";
    
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "274px";
    document.querySelector("#disclaimer-wrapper").style.left = "8px";
    document.querySelector("#disclaimer-wrapper").style.width = "96%";
    document.querySelector("#disclaimer-wrapper").style.height = "17px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //headline container
    document.querySelector("#headline-container").style.top = "100px";
    document.querySelector("#headline-container").style.left = "105px";
    document.querySelector("#headline-container").style.width = "191px";
    document.querySelector("#headline-container").style.height = "84px";
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "261px";
    document.querySelector("#disclaimer-wrapper").style.right = "6px";
    document.querySelector("#disclaimer-wrapper").style.width = "285px";
    document.querySelector("#disclaimer-wrapper").style.height = "13px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}

function animationEnd() {
  takeScreenshot();
  setTimeout(function() {adlibEnd();},1000);
}