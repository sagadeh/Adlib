"use strict";


var defaultValues = {
    frame1Headline:"CLICK FRENZY SPECIAL",
    frame1Headline2:"$15",
    frame1Headline3:"$100",
    frame1Subheadline:"OFF",
    frame1Subheadline2:"SPEND $100",
    trigger:"ver1", //ver1 or ver2
    frame1Background:"background.jpg",
    logo:"logo.png"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
        defaultValues.frame1Headline;
        defaultValues.frame1Background;
        defaultValues.frame1Image;
    } else {
      //invocation code from studio here...
    }
}
var possibleValues = {
  trigger:"ver1,ver2"
}
function populate() {
  document.querySelector("#ver1-frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#ver1-frame1headline2").innerHTML = defaultValues.frame1Headline2;
  document.querySelector("#ver1-frame1subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#ver1-frame1subheadline2").innerHTML = defaultValues.frame1Subheadline2;
  document.querySelector("#ver1-logo").style.backgroundColor = defaultValues.logo;
  
  document.querySelector("#ver2-frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#ver2-frame1headline2").innerHTML = defaultValues.frame1Headline2;
  document.querySelector("#ver2-frame1headline3").innerHTML = defaultValues.frame1Headline3;
  document.querySelector("#ver2-frame1subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#ver2-frame1subheadline2").innerHTML = defaultValues.frame1Subheadline2;
  document.querySelector("#ver2-logo").style.backgroundColor = defaultValues.logo;
  
  document.querySelector("#background-image").style.backgroundColor = defaultValues.frame1Background;
}