"use strict";


var defaultValues = {
    bgColor:"rgb(0, 0, 0)",
    frame1Background:"frame1Background.png",
    frame1Image:"frame1Image.png",
    frame1Headline:"COMPLEXION PERFECTION<br>INCLUDES MY WAY 15ML EDP & MORE!",
    frame1Subheadline:"VALUED AT $290",
    trigger:"left", //left or right
    trigger2:"removeTextBackground", //N/A or removeTextBackground
    fontSize1:"45px",
    fontSize2:"41px",
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

function populate() {
  document.querySelector("#frame1Headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1Headline").style.fontSize = defaultValues.fontSize1;
  document.querySelector("#frame1Subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#frame1Subheadline").style.fontSize = defaultValues.fontSize2;
  document.querySelector("#frame1Background").setAttribute("source", defaultValues.frame1Background);
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  document.querySelector('#frame1Headline').style.backgroundColor = defaultValues.bgColor;
  document.querySelector('#frame1Headline').style.boxShadow = defaultValues.bgColor + "-10px 0px 0px 7px,"+       defaultValues.bgColor + "10px 0px 0px 7px," + defaultValues.bgColor + "0px 0px 0px 7px";
}