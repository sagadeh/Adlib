"use strict";


var defaultValues = {
    frame1Image:"frame1Image.png",
    frame1Headline:"<span style='color:#F24E7B'>CURSU</span><br>GRAVIDA",
    frame1Headline2:"LOREM IPSUM<br><span style='color:#F24E7B'>ID</span> DOLOR ELAMET",
    disclaimer:"*T&amp;C's Apply.",
    frame1Overlay:"NAMQUA<br>I VAURI!*",
    trigger:"left", //left or right or none
    bgColor:"#FFFFFF",
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
  document.querySelector("#frame2headline").innerHTML = defaultValues.frame1Headline2;
  document.querySelector("#disclaimer").innerHTML = defaultValues.disclaimer;
  document.querySelector("#frame1overlay").innerHTML = defaultValues.frame1Overlay;
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  document.querySelector('#frame1Bg').style.backgroundColor = defaultValues.bgColor;
}