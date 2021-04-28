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
    document.querySelector("#frame1Headline-wrapper").style.top = "872px";
    document.querySelector("#frame1Headline-wrapper").style.left = "46px";
    document.querySelector("#frame1Headline-wrapper").style.width = "920px";
    document.querySelector("#frame1Headline-wrapper").style.height = "70px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "920px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "46px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "990px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "100px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-377VC");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "1026px";
    document.querySelector("#disclaimer-wrapper").style.left = "48px";
    document.querySelector("#disclaimer-wrapper").style.width = "750px";
    document.querySelector("#disclaimer-wrapper").style.height = "34px";
    document.getElementById("disclaimer").classList.add("disclaimer-377VC");
  }
  if(defaultValues.trigger=="AQUAINDERM"){
    console.log("AQUAINDERM >>>");
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "block";
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "247px";
    document.querySelector("#frame1Headline-wrapper").style.left = "66px";
    document.querySelector("#frame1Headline-wrapper").style.width = "470px";
    document.querySelector("#frame1Headline-wrapper").style.height = "122px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "457px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "42px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "510px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "220px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "1010px";
    document.querySelector("#disclaimer-wrapper").style.left = "48px";
    document.querySelector("#disclaimer-wrapper").style.width = "460px";
    document.querySelector("#disclaimer-wrapper").style.height = "42px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "412px";
    document.querySelector("#frame1Headline-wrapper").style.left = "449px";
    document.querySelector("#frame1Headline-wrapper").style.width = "600px";
    document.querySelector("#frame1Headline-wrapper").style.height = "132px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "548px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "429px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "640px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "119px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "980px";
    document.querySelector("#disclaimer-wrapper").style.left = "818px";
    document.querySelector("#disclaimer-wrapper").style.width = "230px";
    document.querySelector("#disclaimer-wrapper").style.height = "67px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}

function animationEnd() {
  takeScreenshot();
  setTimeout(function() {adlibEnd();},1000);
}