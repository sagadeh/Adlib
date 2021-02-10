"use strict";
gsap.set(["#main"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element


gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented


//<-- dont delete, this is strictly implemented
function initAnim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  
  console.log("init animation");
  var tl = gsap.timeline();
  
  tl.to("#main", {duration: 0.5, visibility: "visible"});
  
  if(defaultValues.trigger=="377VC"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "293px";
    document.querySelector("#frame1Headline-wrapper").style.left = "15px";
    document.querySelector("#frame1Headline-wrapper").style.width = "480px";
    document.querySelector("#frame1Headline-wrapper").style.height = "40px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-377VC");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "315px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "14px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "530px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "55px";
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
    document.querySelector("#frame1Headline-wrapper").style.top = "103px";
    document.querySelector("#frame1Headline-wrapper").style.left = "68px";
    document.querySelector("#frame1Headline-wrapper").style.width = "220px";
    document.querySelector("#frame1Headline-wrapper").style.height = "54px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-AQUAINDERM");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "212px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "40px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "265px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "115px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-AQUAINDERM");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "369px";
    document.querySelector("#disclaimer-wrapper").style.left = "22px";
    document.querySelector("#disclaimer-wrapper").style.width = "270px";
    document.querySelector("#disclaimer-wrapper").style.height = "25px";
    document.getElementById("disclaimer").classList.add("disclaimer-AQUAINDERM");
  }
  if(defaultValues.trigger=="VC100"){
    //frame1Image
    document.querySelector("#frame1Image-wrapper").style.display = "none";
    //frame1Headline
    document.querySelector("#frame1Headline-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline-wrapper").style.top = "131px";
    document.querySelector("#frame1Headline-wrapper").style.left = "224px";
    document.querySelector("#frame1Headline-wrapper").style.width = "320px";
    document.querySelector("#frame1Headline-wrapper").style.height = "75px";
    document.getElementById("frame1Headline").classList.add("frame1Headline-VC100");
    //frame1Headline2
    document.querySelector("#frame1Headline2-wrapper").style.position = "absolute";
    document.querySelector("#frame1Headline2-wrapper").style.top = "209px";
    document.querySelector("#frame1Headline2-wrapper").style.left = "224px";
    document.querySelector("#frame1Headline2-wrapper").style.width = "325px";
    document.querySelector("#frame1Headline2-wrapper").style.height = "61px";
    document.getElementById("frame1Headline2").classList.add("frame1Headline2-VC100");
    //disclaimer
    document.querySelector("#disclaimer-wrapper").style.position = "absolute";
    document.querySelector("#disclaimer-wrapper").style.top = "348px";
    document.querySelector("#disclaimer-wrapper").style.left = "427px";
    document.querySelector("#disclaimer-wrapper").style.width = "130px";
    document.querySelector("#disclaimer-wrapper").style.height = "40px";
    document.getElementById("disclaimer").classList.add("disclaimer-VC100");
  }
}