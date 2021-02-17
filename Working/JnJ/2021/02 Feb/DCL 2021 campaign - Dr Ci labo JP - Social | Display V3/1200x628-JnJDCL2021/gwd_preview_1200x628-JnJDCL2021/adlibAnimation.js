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
    document.querySelector("#headline-container").style.top = "446px";
    document.querySelector("#headline-container").style.left = "40px";
    document.querySelector("#headline-container").style.width = "765px";
    document.querySelector("#headline-container").style.height = "120px";
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "570px";
    document.querySelector("#disclaimer-wrapper").style.left = "48px";
    document.querySelector("#disclaimer-wrapper").style.width = "1115px";
    document.querySelector("#disclaimer-wrapper").style.height = "34px";
    document.getElementById("disclaimer").classList.add("disclaimer-377VC");
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-377VC");
  }
  if(defaultValues.trigger=="AQUAINDERM"){
    console.log("AQUAINDERM >>>");
    //headline-container
    document.querySelector("#headline-container").style.top = "55px";
    document.querySelector("#headline-container").style.left = "204px";
    document.querySelector("#headline-container").style.width = "623px";
    document.querySelector("#headline-container").style.height = "457px";
    
    //frame1Image-wrapper
    document.querySelector("#frame1Image-wrapper").style.paddingTop = "19px";
    document.querySelector("#frame1Image-wrapper").style.width = "450px";

    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //document.querySelector("#frame1Headline2-wrapper").style.paddingTop = "2px";
    
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "524px";
    document.querySelector("#disclaimer-wrapper").style.left = "209px";
    document.querySelector("#disclaimer-wrapper").style.width = "592px";
    document.querySelector("#disclaimer-wrapper").style.height = "41px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //headline container
    document.querySelector("#headline-container").style.top = "153px";
    document.querySelector("#headline-container").style.left = "423px";
    document.querySelector("#headline-container").style.width = "725px";
    document.querySelector("#headline-container").style.height = "360px";
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "531px";
    document.querySelector("#disclaimer-wrapper").style.left = "914px";
    document.querySelector("#disclaimer-wrapper").style.width = "250px";
    document.querySelector("#disclaimer-wrapper").style.height = "79px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}

function animationEnd() {
  takeScreenshot();
  setTimeout(function() {adlibEnd();},1000);
}