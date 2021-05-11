"use strict";


var defaultValues = {
  frame1Headline:"Lorem ipsum<br> dolor sit amaet<br>elit consectetur.",
  frame1Background:"frame1Background.png",
  logo:"logo.png",
  customVariable:"showText", /*showText, hideText*/
  customVariable2:"showLogo", /*showLogo hideLogo*/
  customVariable3:"showCurve", /*showCurve hideCurve*/
  customVariable4:"uCurve" /*rightCurve | UCurve*/
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
  customVariable2:"showLogo,hideLogo",
  customVariable3:"showCurve,hideCurve",
  customVariable4:"rightCurve,uCurve"
}
function populate() {
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector('#frame1background').style.backgroundColor = defaultValues.frame1Background;
}