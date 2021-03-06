"use strict";


var defaultValues = {
    bgColor:"#8D91F2",
    fontColor1: "rgb(0, 0, 0)",
    frame1Image:"frame1Image.png",
    frame1Headline:"Lorem ipsum dolor<br>sit amet hac",
    frame1Subheadline:"Scelerisque eu ultrices<br>gravida auctor sed",
    frame1Overlay:"Quis<br>Viverra!",
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
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#frame1overlay").innerHTML = defaultValues.frame1Overlay;
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  document.querySelector('#bgcolor').style.backgroundColor = defaultValues.bgColor;
  
  document.querySelector('#frame1headline').style.backgroundColor = defaultValues.fontColor1;
  document.querySelector('#frame1headline').style.boxShadow = defaultValues.fontColor1 + "-10px 0px 0px 7px,"+ defaultValues.fontColor1 + "10px 0px 0px 7px," + defaultValues.fontColor1 + "0px 0px 0px 7px";
  document.querySelector('#frame1subheadline').style.backgroundColor = defaultValues.fontColor1;
  document.querySelector('#frame1subheadline').style.boxShadow = defaultValues.fontColor1 + "-10px 0px 0px 7px,"+ defaultValues.fontColor1 + "10px 0px 0px 7px," + defaultValues.fontColor1 + "0px 0px 0px 7px";
}