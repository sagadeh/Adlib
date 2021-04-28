"use strict";


var defaultValues = {
    frame1Headline:"LOREM IPSUM DOLOR SIT AMET AC<br>CONSECETUR ADIPISCING",
    frame1Subheadline:"QUAM ID VULPUATE",
    frame1Overlay:"NAMQUA",
    trigger:"right", //left or right or none
    frame1Background:"frame1Background.png",
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
  document.querySelector('#frame1Background').setAttribute("source", defaultValues.frame1Background);
}