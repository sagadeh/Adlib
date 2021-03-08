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
    document.querySelector("#headline-container").style.top = "298px";
    document.querySelector("#headline-container").style.left = "15px";
    document.querySelector("#headline-container").style.width = "565px";
    document.querySelector("#headline-container").style.height = "82px";
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "377px";
    document.querySelector("#disclaimer-wrapper").style.left = "15px";
    document.querySelector("#disclaimer-wrapper").style.width = "565px";
    document.querySelector("#disclaimer-wrapper").style.height = "auto";
    document.getElementById("disclaimer").classList.add("disclaimer-377VC");
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-377VC");
  }
  if(defaultValues.trigger=="AQUAINDERM"){
    console.log("AQUAINDERM >>>");
    //headline-container
    document.querySelector("#headline-container").style.top = "103px";
    document.querySelector("#headline-container").style.left = "42px";
    document.querySelector("#headline-container").style.width = "264px";
    document.querySelector("#headline-container").style.height = "260px";
    
    //frame1Image-wrapper
    document.querySelector("#frame1Image-wrapper").style.paddingTop = "19px";
    document.querySelector("#frame1Image-wrapper").style.width = "220px";

    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //document.querySelector("#frame1Headline2-wrapper").style.paddingTop = "2px";
    
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "367px";
    document.querySelector("#disclaimer-wrapper").style.left = "22px";
    document.querySelector("#disclaimer-wrapper").style.width = "305px";
    document.querySelector("#disclaimer-wrapper").style.height = "25px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //headline container
    document.querySelector("#headline-container").style.top = "130px";
    document.querySelector("#headline-container").style.left = "224px";
    document.querySelector("#headline-container").style.width = "340px";
    document.querySelector("#headline-container").style.height = "210px";
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "348px";
    document.querySelector("#disclaimer-wrapper").style.left = "427px";
    document.querySelector("#disclaimer-wrapper").style.width = "165px";
    document.querySelector("#disclaimer-wrapper").style.height = "46px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}

function animationEnd() {
  takeScreenshot();
  setTimeout(function() {adlibEnd();},1000);
}