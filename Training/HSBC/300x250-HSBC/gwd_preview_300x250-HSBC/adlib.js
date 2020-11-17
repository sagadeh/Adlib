"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>", 
  
  frame1Headline:"Reward yourself... with<br>the Advance Card from HSBC",
  frame1Image:"frame1Image.png",
  
  frame2Headline:"Up to 3.5% cash back on<br> all purchases",
  frame2Subheadline:"HSBC Advance<br>Credit Card",
  frame2Image:"frame2Image.png",
  
  frame3Headline:"Sign up for HSBC Advance<br>Credit Card and receive",
  productImage1:"productImage1.png",
  productImage2:"price.png",
  
  ctaImage:"cta.png",
  legal:"*Terms and conditions apply",
  logo:"logo.png",
  landingPage:"https://www.hsbc.com"
};

function initDynamic() {
  if (!Enabler.isServingInLiveEnvironment()) {
      defaultValues.frame1Headline;
      defaultValues.frame1Image;
    
      defaultValues.frame2Headline;
      defaultValues.frame2Subheadline;
      defaultValues.frame2Image;
    
      defaultValues.frame3Headline;
      defaultValues.productImage1;
      defaultValues.productImage2;
    
      defaultValues.ctaImage;
      defaultValues.legal;
      defaultValues.logo;
      defaultValues.landingPage;
  }else{
      //invocation code from studio here...
  }
}


function populate() {
  document.querySelector("#frame1Headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  
  document.querySelector("#frame2Headline").innerHTML = defaultValues.frame2Headline;
  document.querySelector("#frame2Subheadline").innerHTML = defaultValues.frame2Subheadline;
  document.querySelector("#frame2Image").setAttribute("source", defaultValues.frame2Image);
  
  document.querySelector("#frame3Headline").innerHTML = defaultValues.frame3Headline;
  document.querySelector("#productImage1").setAttribute("source", defaultValues.productImage1);
  document.querySelector("#price").setAttribute("source", defaultValues.productImage2);
  
  document.querySelector("#cta").setAttribute("source", defaultValues.ctaImage);
  document.querySelector("#legal").innerHTML = defaultValues.legal;
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
}

