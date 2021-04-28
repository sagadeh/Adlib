"use strict";


var defaultValues = {
    frame1Image:"frame1Image.png",
    frame1Headline:"ET NETUS ET MALESUADA<BR>FAMES AC TURPIS EGESTA A",
    frame1Subheadline:"NISL SUSCIPIT ADIPISCING BIBENDUM",
    frame1Overlay:"morbi<br>enim<br>nunc<br>faucib",
    frame1Background:"frame1Background.png",
    trigger:"left", //left or right or none
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
  document.querySelector("#frame1Background").setAttribute("source", defaultValues.frame1Background);
}