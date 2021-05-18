"use strict";
gsap.set(["#main"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element


gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented
gsap.set("#ver2-container", {opacity: 0});

//<-- dont delete, this is strictly implemented
function initAnim(){
  splitText();
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  console.log("init animation");
  var tl = gsap.timeline({
    onStart: function(){
      if(defaultValues.trigger == "ver2") {
        gsap.set("#ver2-container", {opacity: 1});
        gsap.set("#ver1-container", {opacity: 0});
      }
    },
    onComplete: animationEnd
  });
  
  tl.to("#main", {duration: 0.5, visibility: "visible"});
}
function animationEnd() {
     console.log("animation end");
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}

function splitText() {
  var splitText = new SplitText("#ver1-frame1subheadline2", {type:"words,chars,lines"});
  var text = splitText.lines; 
 
  if(text.length == "2") {
    gsap.set(text[0], {left: "6px", display: "flex", flexDirection: "row", justifyContent: "space-between", letterSpacing: "0.45em"});
  }
}