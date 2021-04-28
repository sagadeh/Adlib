"use strict";


var defaultValues = {
    bgColor:"#ffffff",
    fontColor1:"rgb(0, 0, 0)",
    frame1Image:"frame1Image.png",
    frame1Headline:"Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqua.<br>Ut enim ad minim veniam, quis nostrud<br> exercitation ullamco laboris nisi utaliq<br>sagadeh",
    frame1Overlay:"LOREM<br>IPSUM<br>DOLORE",
    trigger:"right", //left or right or none
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
  document.querySelector("#bgcolor").style.backgroundColor = defaultValues.bgColor;
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  document.querySelector("#frame1overlay").innerHTML = defaultValues.frame1Overlay;
  
  document.querySelector("#frame1headline1").innerHTML = defaultValues.frame1Headline;
  document.querySelector('#frame1headline1').style.backgroundColor = defaultValues.fontColor1;
  document.querySelector('#frame1headline1').style.boxShadow = defaultValues.fontColor1 + "-10px 0px 0px 7px," + defaultValues.fontColor1 + "10px 0px 0px 7px," + defaultValues.fontColor1 + "0px 0px 0px 7px";
}