"use strict";


var defaultValues = {
    cssAttrib:"<! –– css styling if necessary ––>", //<-- dont remove, this is strictly in the first row of default values
    // dynamic naming convension from http://ad-lib.io/internal/tools/adlib.js/
    // ...
    // ...
    // ...
    readableLabel:" ",
    landingPage:"https.yourUrl.com"
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
	// document.querySelector("#your-text-element").innerHTML = defaultValues.frame1Headline; <-- text headline
	// document.querySelector("#your-image-element").setAttribute("source", defaultValues.baseImage);  <-- image source
}