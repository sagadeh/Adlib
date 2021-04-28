"use strict";


var defaultValues = {
    frame1Background:"frame1Background.jpg",
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
  document.querySelector('#frame1Background').style.backgroundColor = defaultValues.frame1Background;
}