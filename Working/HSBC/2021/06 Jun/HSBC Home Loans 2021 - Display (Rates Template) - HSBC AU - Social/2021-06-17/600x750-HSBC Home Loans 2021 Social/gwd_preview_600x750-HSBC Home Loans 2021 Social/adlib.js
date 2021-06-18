"use strict";


var defaultValues = {
    cssAttrib:"<! –– css styling if necessary ––>", //<-- dont remove, this is strictly in the first row of default values
    frame1Headline:"Home Value Loan",
    frame1Headline2:"2.44",
    frame1Headline3:"2.45",
    frame1Subheadline:"Owner occupied, principal & interest",
    frame1Subheadline2:"^Comparison rate",
    legal:"^Comparison rate warning, T&C’s, and lending criteria applies. Issued by HSBC<br>Bank Australia Limited. Australian Credit Licence/AFSL 232595.",
    frame1Background:"frame1Background.png",
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
  document.querySelector("#frame1Headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1Headline2").innerHTML = defaultValues.frame1Headline2;
  document.querySelector("#frame1Headline3").innerHTML = defaultValues.frame1Headline3;
  document.querySelector("#frame1Subheadline").innerHTML = defaultValues.frame1Subheadline;
  document.querySelector("#frame1Subheadline2").innerHTML = defaultValues.frame1Subheadline2;
  document.querySelector("#legal").innerHTML = defaultValues.legal;
  document.querySelector("#frame1Background").setAttribute("source", defaultValues.frame1Background);
}