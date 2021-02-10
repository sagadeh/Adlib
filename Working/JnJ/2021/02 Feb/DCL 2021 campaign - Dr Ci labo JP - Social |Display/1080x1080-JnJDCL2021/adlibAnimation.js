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
    document.querySelector("#frame1Headline-wrapper").style.top = "446px";
    document.querySelector("#frame1Headline-wrapper").style.left = "40px";
    document.querySelector("#frame1Headline-wrapper").style.width = "690px";
    document.querySelector("#frame1Headline-wrapper").style.height = "48px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "485px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "40px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "730px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "70px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-377VC");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "540px";
    document.querySelector("#disclaimer-wrapper").style.left = "47px";
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
    document.querySelector("#frame1Headline-wrapper").style.top = "57px";
    document.querySelector("#frame1Headline-wrapper").style.left = "271px";
    document.querySelector("#frame1Headline-wrapper").style.width = "500px";
    document.querySelector("#frame1Headline-wrapper").style.height = "125px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "275px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "213px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "620px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "251px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "524px";
    document.querySelector("#disclaimer-wrapper").style.left = "276px";
    document.querySelector("#disclaimer-wrapper").style.width = "470px";
    document.querySelector("#disclaimer-wrapper").style.height = "41px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "154px";
    document.querySelector("#frame1Headline-wrapper").style.left = "423px";
    document.querySelector("#frame1Headline-wrapper").style.width = "720px";
    document.querySelector("#frame1Headline-wrapper").style.height = "160px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "306px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "436px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "700px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "130px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "530px";
    document.querySelector("#disclaimer-wrapper").style.left = "914px";
    document.querySelector("#disclaimer-wrapper").style.width = "250px";
    document.querySelector("#disclaimer-wrapper").style.height = "80px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}

function animationEnd() {
  takeScreenshot();
  setTimeout(function() {adlibEnd();},1000);
}