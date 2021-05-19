"use strict";


var defaultValues = {
  frame1Headline:"Lorem ipsum dolor sit<br> amaet elit consectetur.",
  frame1Background:"frame1Background.png",
  customVariable:"showText", /*showText, hideText*/
  customVariable2:"showCurve", /*showCurve hideCurve*/
  customVariable3:"uCurve", /*rightCurve | uCurve*/
  customVariable4:"100px"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
        //defaultValues.frame1Headline;
        //defaultValues.frame1Background;
        //defaultValues.frame1Image;
    } else {
      //invocation code from studio here...
    }
}
var possibleValues = {
  customVariable:"showText,hideText",
  customVariable2:"showCurve,hideCurve",
  customVariable3:"rightCurve,uCurve"
}
function populate() {
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector('#frame1background').style.backgroundColor = defaultValues.frame1Background;
  //document.querySelector('#curve').style.height = defaultValues.customVariable4;
  
  document.querySelector("#curved-wrapper").style.height = defaultValues.customVariable4;
  document.querySelector("#curved-corner-bottomleft").style.height = defaultValues.customVariable4;
  document.querySelector("#curved-corner-bottomleft").style.setProperty("--check-secondary", "white -400px "+defaultValues.customVariable4+" 0px 0px");
  document.querySelector("#curved-corner-bottomright").style.height = defaultValues.customVariable4;
  document.querySelector("#curved-corner-bottomright").style.setProperty("--check-secondary", "white 400px "+defaultValues.customVariable4+" 0px 0px");
  document.querySelector("#curved-long-bottomright").style.height = defaultValues.customVariable4;
  document.querySelector("#curved-long-bottomright").style.setProperty("--check-secondary", "white 800px "+defaultValues.customVariable4+" 0px 0px");
}