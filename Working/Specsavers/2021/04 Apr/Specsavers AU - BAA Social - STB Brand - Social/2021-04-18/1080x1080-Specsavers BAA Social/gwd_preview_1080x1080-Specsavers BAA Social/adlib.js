"use strict";


var defaultValues = {
  frame1Headline:"Lorem ipsum<br>dolor sit amaet<br>elit consectetur.",
  frame1Background:"frame1Background.png",
  logo:"logo.png",
  trigger:"show text", /*showText, hideText*/
  trigger2:"show logo", /*showLogo hideLogo*/
  trigger3:"show curve", /*showCurve hideCurve*/
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
  trigger:"show text,hide text",
  trigger2:"show logo,hide logo",
  trigger3:"show curve,hide curve"
}
function populate() {
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector('#frame1background').style.backgroundColor = defaultValues.frame1Background;
}