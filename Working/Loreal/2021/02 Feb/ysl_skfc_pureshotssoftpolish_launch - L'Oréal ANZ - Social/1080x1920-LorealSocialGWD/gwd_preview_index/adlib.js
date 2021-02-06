"use strict";


var defaultValues = {
    frame1Background:"frame1Background.png",
    frame1Image:"frame1Image.png",
    frame1Headline:"Revitalise your skincare routine with PURE SHOTS. Receive a complimentary Discovery Kit containing deluxe minis when you spend $120+ and use code PURELOVE.",
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
  document.querySelector("#frame1Background").setAttribute("source", defaultValues.frame1Background);
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
}