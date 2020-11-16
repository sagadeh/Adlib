"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>", 
  
  frame1Headline:"Reward<br> yourself... <br>with<br> the Advance<br> Card from HSBC",
  frame1Image:"frame1Image.png",
  
  frame2Headline:"Up to 3.5% cash<br> back on all<br> purchases",
  frame2Subheadline:"HSBC Advance<br>Credit Card",
  frame2Image:"frame2Image.png",
  
  frame3Headline:"Sign up for HSBC<br> Advance Credit Card<br> and receive",
  productImage1:"productImage1.png",
  price:"price.png",
  
  cta:"cta.png",
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
      defaultValues.price;
    
      defaultValues.cta;
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
  document.querySelector("#price").setAttribute("source", defaultValues.price);
  
  document.querySelector("#cta").setAttribute("source", defaultValues.cta);
  document.querySelector("#legal").innerHTML = defaultValues.legal;
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
}

