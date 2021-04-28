"use strict";


var defaultValues = {
    fontColor1:"rgb(0, 0, 0)",
    frame1Background:"frame1Background.png",
    frame1Image:"frame1Image.png",
    frame1Headline:"ET NETUS ET MALESUADA<BR>FAMES AC TURPIS EGESTA A",
    frame1Headline2:"ET NETUS ET MALESUADA<BR>FAMES AC TURPIS EGESTA A sagadeh",
    frame1Subheadline:"NISL SUSCIPIT ADIPISCING BIBENDUM",
    frame1Overlay:"morbi<br>enim<br>nunc<br>faucib",
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
  document.querySelector("#frame1headline2").innerHTML = defaultValues.frame1Headline2;
  document.querySelector("#frame1overlay").innerHTML = defaultValues.frame1Overlay;
  document.querySelector("#frame1Background").setAttribute("source", defaultValues.frame1Background);
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  
  document.querySelector('#frame1headline').style.backgroundColor = defaultValues.fontColor1;
  document.querySelector('#frame1headline').style.boxShadow = defaultValues.fontColor1 + "-10px 0px 0px 7px,"+ defaultValues.fontColor1 + "10px 0px 0px 7px," + defaultValues.fontColor1 + "0px 0px 0px 7px";
  document.querySelector('#frame1subheadline').style.backgroundColor = defaultValues.fontColor1;
  document.querySelector('#frame1subheadline').style.boxShadow = defaultValues.fontColor1 + "-10px 0px 0px 7px,"+ defaultValues.fontColor1 + "10px 0px 0px 7px," + defaultValues.fontColor1 + "0px 0px 0px 7px";
}