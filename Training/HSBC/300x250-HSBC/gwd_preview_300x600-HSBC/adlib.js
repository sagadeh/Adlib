"use strict";


var defaultValues = {
   cssAttrib:"<! –– css styling if necessary ––>", //<-- dont remove, this is strictly in the first row of default values
  // dynamic naming convension from http://ad-lib.io/internal/tools/adlib.js/
  frame1Background: "frame1Background.png",
  productImage1: "productImage1.png,",
  frame1Headline: "Reward<br> yourself...<br> with<br> the advance<br> card from HSBC",
  frame2Headline: "Up to 3.5% cash back on all purchases",
  frame3Headline: "Sign up for HSBC<br>Advance Credit Card<br>and receive",
  frame2Subheadline: "HSBC Advance<br> Credit Card",
  frame3Subheadline: "A samsonite T5<br>Spinner worth<br>S$560",
  price: "S$150",
  legal: "*Terms and conditions apply",
  ctaText: "Apply Now",
  landingPage:"https://www.hsbc.com/"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
    	// defaultValues.frame1Headline; <-- example dynamic naming convension
    	// defaultValues.baseImage; <-- example dynamic naming convension
      defaultValues.landingPage; //<-- make sure always have a landing page
    	

    } else {
      //invocation code from studio here...
    }
}


function loadDefaultValues() {
  // document.querySelector("#your-text-element").innerHTML = defaultValues.frame1Headline; <-- text headline
  // document.querySelector("#your-image-element").setAttribute("source", defaultValues.baseImage);  <-- image source
  
  document.querySelector("#frame1Background").value = defaultValues.frame1Background;
  document.querySelector("#productImage1").value = defaultValues.productImage1;
  document.querySelector("#headline1").innerHTML = defaultValues.frame1Headline; 
  document.querySelector("#headline2").innerHTML = defaultValues.frame2Headline; 
  document.querySelector("#headline3").innerHTML = defaultValues.frame3Headline; 
  document.querySelector("#subHeadline1").innerHTML = defaultValues.frame2Subheadline; 
  document.querySelector("#subHeadline2").innerHTML = defaultValues.frame3Subheadline; 
  document.querySelector("#price").innerHTML = defaultValues.price; 
  document.querySelector("#legal").innerHTML = defaultValues.legal; 
  document.querySelector("#ctaText").innerHTML = defaultValues.ctaText; 
}