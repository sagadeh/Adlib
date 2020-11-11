"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>",
  frame1Headline:"text sample...",
  videoUrl:"300x250-myVideo.mp4",
  customVariable:"300x250-myVideo.mp4",
  startDate:"",
  endDate:"",
  readableLabel:"",
  landingPage:"https://www.google.com/"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
      defaultValues.cssAttrib;
      defaultValues.videoUrl;
      defaultValues.customVariable;;
      defaultValues.frame1Headline;
      defaultValues.landingPage;

    } else {
      //invocation code from studio here...
    }
}


function populate() { 
  document.querySelector("#frame1Headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#myVideo").setAttribute("sources", defaultValues.videoUrl);
}