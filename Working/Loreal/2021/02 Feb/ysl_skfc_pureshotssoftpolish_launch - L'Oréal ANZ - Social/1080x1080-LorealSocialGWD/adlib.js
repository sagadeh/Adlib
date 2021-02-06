"use strict";


var defaultValues = {
    frame1Image:"frame1Image.png"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
        defaultValues.frame1Image;
    } else {
      //invocation code from studio here...
    }
}


function populate() {
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
}