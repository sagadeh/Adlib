"use strict";


var defaultValues = {
    frame1Image:"frame1Image.png",
    frame1Headline:"LOREM IPSUM DOLOR SIT AMET, CONSETETUR",
    frame1Subheadline:"SED DIAM NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE",
    frame1Overlay:"LOREM<br>IPSUM<br>DOLORE",
    trigger:"left", //left or right or none
    bgColor:"#FD3087",
    cssAttrib:"/* CSS STYLE */"
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
  trigger:"left,right,none"
}
function populate() {
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#frame1overlay").innerHTML = defaultValues.frame1Overlay;
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  document.querySelector('#frame1Bg').style.backgroundColor = defaultValues.bgColor;
}