"use strict";


var defaultValues = {
    cssAttrib:"<! –– css styling if necessary ––>",
    frame1Headline:"Stairs or<br>step up?",
    frame1Subheadline:"consectetur adipiscing elit",
    frame1Background:"frame1Background.png",
    disclaimer:"Excepteur sint occaecat cupidatat non proident, sunt in<br>culpa qui lorem eu fugiat nulla officia deserunt mollit anim id est laborum.",
    logo:"logo.png",
    landingPage:"https://www.hsbc.com.au/"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
    	// defaultValues.frame1Headline; <-- example dynamic naming convension
    	// defaultValues.baseImage; <-- example dynamic naming convension
        defaultValues.readableLabel;
        defaultValues.landingPage; //<-- make sure always have a landing page
    	

    } else {
      //invocation code from studio here...
    }
}


function populate() {
  document.querySelector("#frame1headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#disclaimer").innerHTML = defaultValues.disclaimer;
  
  document.querySelector("#frame1background").setAttribute("source", defaultValues.frame1Background);
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
}