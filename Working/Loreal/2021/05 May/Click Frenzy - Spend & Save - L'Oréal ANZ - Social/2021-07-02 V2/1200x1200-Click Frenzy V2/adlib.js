"use strict";


var defaultValues = {
    frame1Headline:"n/a",
    frame1Headline2:"$XXX",
    frame1Subheadline:"LOREM IPSUM DOLOR <br>SIT AMET CONSETETUR<br> SADIPSCING ELITR",
    frame1Background:"bg.png",
    logo:"logo.png",
    bgColor:"#F1F1F1"
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

function populate() {
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1headline2").innerHTML = defaultValues.frame1Headline2;
  document.querySelector("#frame1subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#bg-square").style.fill = defaultValues.bgColor;
  
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
  document.querySelector("#background-image").setAttribute("source", defaultValues.frame1Background);
}