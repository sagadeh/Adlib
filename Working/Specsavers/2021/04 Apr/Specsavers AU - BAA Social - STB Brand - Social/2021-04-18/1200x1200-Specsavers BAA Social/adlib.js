"use strict";


var defaultValues = {
  frame1Headline:"Lorem ipsum dolor<br> sit amaet elit<br> consectetur.",
  frame1Background:"frame1Background.png",
  customVariable:"showText", /*showText, hideText*/
  customVariable2:"showCurve", /*showCurve hideCurve*/
  customVariable3:"uCurve", /*rightCurve | uCurve*/
  customVariable4:"auto",
  customVariable5:"showLogo", /*showLogo | hideLogo*/
  logo:"logo.png",
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
  customVariable3:"rightCurve,uCurve",
  customVariable5:"showLogo,hideLogo"
}
function populate() {
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector('#frame1background').style.backgroundColor = defaultValues.frame1Background;
  document.querySelector('#frame1headline-wrapper').style.height = defaultValues.customVariable4;
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
}