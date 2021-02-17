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
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "238px";
    document.querySelector("#frame1Headline-wrapper").style.left = "11px";
    document.querySelector("#frame1Headline-wrapper").style.width = "250px";
    document.querySelector("#frame1Headline-wrapper").style.height = "20px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "251px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "11px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "275px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "30px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-377VC");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "367px";
    document.querySelector("#disclaimer-wrapper").style.left = "15px";
    document.querySelector("#disclaimer-wrapper").style.width = "390px";
    document.querySelector("#disclaimer-wrapper").style.height = "32px";
    document.getElementById("disclaimer").classList.add("disclaimer-377VC");
  }
  if(defaultValues.trigger=="AQUAINDERM"){
    console.log("AQUAINDERM >>>");
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "block";
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "97px";
    document.querySelector("#frame1Headline-wrapper").style.left = "35px";
    document.querySelector("#frame1Headline-wrapper").style.width = "130px";
    document.querySelector("#frame1Headline-wrapper").style.height = "35px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "161px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "19px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "160px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "69px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "275px";
    document.querySelector("#disclaimer-wrapper").style.left = "8px";
    document.querySelector("#disclaimer-wrapper").style.width = "170px";
    document.querySelector("#disclaimer-wrapper").style.height = "30px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "101px";
    document.querySelector("#frame1Headline-wrapper").style.left = "105px";
    document.querySelector("#frame1Headline-wrapper").style.width = "186px";
    document.querySelector("#frame1Headline-wrapper").style.height = "40px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "141px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "105px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "186px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "35px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "262px";
    document.querySelector("#disclaimer-wrapper").style.left = "196px";
    document.querySelector("#disclaimer-wrapper").style.width = "95px";
    document.querySelector("#disclaimer-wrapper").style.height = "30px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}

function animationEnd() {
  takeScreenshot();
  setTimeout(function() {adlibEnd();},1000);
}