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
    document.querySelector("#headline-container").style.top = "873px";
    document.querySelector("#headline-container").style.left = "47px";
    document.querySelector("#headline-container").style.width = "1000px";
    document.querySelector("#headline-container").style.height = "145px";
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "1026px";
    document.querySelector("#disclaimer-wrapper").style.left = "48px";
    document.querySelector("#disclaimer-wrapper").style.width = "1000px";
    document.querySelector("#disclaimer-wrapper").style.height = "34px";
    document.getElementById("disclaimer").classList.add("disclaimer-377VC");
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-377VC");
  }
  if(defaultValues.trigger=="AQUAINDERM"){
    console.log("AQUAINDERM >>>");
    //headline-container
    document.querySelector("#headline-container").style.top = "245px";
    document.querySelector("#headline-container").style.left = "21px";
    document.querySelector("#headline-container").style.width = "538px";
    document.querySelector("#headline-container").style.height = "490px";
    
    //frame1Image-wrapper
    document.querySelector("#frame1Image-wrapper").style.paddingTop = "12px";
    document.querySelector("#frame1Image-wrapper").style.width = "409px";

    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //document.querySelector("#frame1Headline2-wrapper").style.paddingTop = "2px";
    
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "1005px";
    document.querySelector("#disclaimer-wrapper").style.left = "48px";
    document.querySelector("#disclaimer-wrapper").style.width = "525px";
    document.querySelector("#disclaimer-wrapper").style.height = "43px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //headline container
    document.querySelector("#headline-container").style.top = "413px";
    document.querySelector("#headline-container").style.left = "428px";
    document.querySelector("#headline-container").style.width = "636px";
    document.querySelector("#headline-container").style.height = "460px";
    
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.top = "981px";
    document.querySelector("#disclaimer-wrapper").style.left = "818px";
    document.querySelector("#disclaimer-wrapper").style.width = "250px";
    document.querySelector("#disclaimer-wrapper").style.height = "68px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}

function animationEnd() {
  takeScreenshot();
  setTimeout(function() {adlibEnd();},1000);
}