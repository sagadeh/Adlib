"use strict";
gsap.set(["#main"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element

gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented

//<-- dont delete, this is strictly implemented
function initAnim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  console.log("init animation");
  var tl = gsap.timeline({
    onStart: function(){
    if(defaultValues.frame1Headline == "n/a" || defaultValues.frame1Headline == "N/A") document.getElementById("frame1headline").style.display = "none";
    if(defaultValues.frame1Headline2 == "n/a" || defaultValues.frame1Headline2 == "N/A") document.getElementById("frame1headline2").style.display = "none";
  },onComplete: animationEnd});
  
  tl.to("#main", {duration: 0.5, visibility: "visible"});
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}