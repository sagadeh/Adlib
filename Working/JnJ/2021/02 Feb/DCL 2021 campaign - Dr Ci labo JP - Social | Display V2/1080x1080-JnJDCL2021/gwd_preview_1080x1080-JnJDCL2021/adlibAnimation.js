"use strict";
gsap.set(["#main"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element

gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented

//<-- dont delete, this is strictly implemented
function initAnim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  var tl = gsap.timeline();
  
  tl.to("#main", {duration: 0.5, visibility: "visible"});
}

function customTrigger(){
  // [hide/show] rating (make sure to use 1x1.png for other layouts that doesnt have any rating)
  if(defaultValues.frame1Image.indexOf("1x1.png") >= 0){
    document.getElementById("rating-wrapper").style.display = "none";
  }

  // condition
  switch(defaultValues.trigger){
    case "VC100":
      document.querySelector("#copy-wrapper").style.cssText = `
        height: 647px;
        width: 614px;
        text-align: right;
        bottom: inherit;
        top: 166px;
        right: 0;
        left: initial;
      `;

      document.querySelector("#legal-wrapper").style.textAlign = "right";
      document.querySelector(".rating-wrapper").style.margin = "0 auto";
    break;
    case "AQUAINDERM":
      document.querySelector("#copy-wrapper").style.cssText = `
        height: 574px;
        width: 614px;
        text-align: center;
        bottom: inherit;
        top: 166px;
      `;


      document.querySelector(".rating-wrapper").style.margin = "0 auto";
    break;
  }

  initAnim();
}