"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>",
  logo:"logo.png",
  videoUrl:"300x600-Listerine_UK_ORALMALE.mp4",
  customVariable:"300x250-Listerine_UK_ORALMALE.mp4",
  frame1Overlay:"linear-gradient(0deg, rgba(12,18,86,1) 50%, rgba(9,11,62,1) 87%)",
  frame1Headline:"When you're<br>taking care<br>of your teeth…",
  frame2Headline:"…KEEP THEM<br>STRONG<br>AND HEALTHY.",
  frame3Headline:"Upgrade your routine tonight*",
  bgColor:"linear-gradient(330deg, rgb(22, 27, 111,1) 25%, rgb(12, 13, 63,1) 100%)",
  packshot1:"Nightly.png",
  legal:"*Use before and after sleep as part of a regular routine",
  legal2:"UK/LI/19-13232a",
  ctaColor1:"linear-gradient(45deg, rgb(12, 18, 86,1) 0%, rgb(9, 11, 62,1) 55%)",
  ctaText:"BUY NOW",
  startDate:"",
  endDate:"",
  landingPage:"https://www.listerine.co.uk/products/fresh-breath/listerine-nightly-reset"
  
};

function initDynamic() {
  if (!Enabler.isServingInLiveEnvironment()) {

    defaultValues.cssAttrib;
    defaultValues.logo;
    defaultValues.videoUrl;
    defaultValues.customVariable;
    defaultValues.frame1Overlay;
    defaultValues.frame1Headline;
    defaultValues.frame2Headline;
    defaultValues.frame3Headline;
    defaultValues.bgColor;
    defaultValues.packshot1;
    defaultValues.legal;
    defaultValues.legal2;
    defaultValues.ctaColor1;
    defaultValues.ctaText;
    defaultValues.startDate;
    defaultValues.endDate;
    defaultValues.landingPage;

  } else {
      //invocation from studio here...
    }
  }


  function loadDefaultValues() {
    document.querySelector("#logo-img").setAttribute("source", defaultValues.logo);
    document.querySelector("#myVideo").setAttribute("sources", defaultValues.videoUrl);
    // customVariable supposed to be here...
    document.querySelector("#logo-bg-wrapper").style.background = defaultValues.frame1Overlay;
    document.querySelector("#headline1").innerHTML = defaultValues.frame1Headline; + "<style>"+ defaultValues.cssAttrib; +"<style>";
    document.querySelector("#headline2").innerHTML = defaultValues.frame2Headline;
    document.querySelector("#headline3").innerHTML = defaultValues.frame3Headline;
    document.querySelector("#endframe-bg").style.background = defaultValues.bgColor;
    document.querySelector("#packshot-img").setAttribute("source", defaultValues.packshot1);
    document.querySelector("#legalTxt").innerHTML = defaultValues.legal;
    document.querySelector("#legalCode").innerHTML = defaultValues.legal2;
    document.querySelector("#cta-wrapper").style.background = defaultValues.ctaColor1;
    document.querySelector("#ctatxt").innerHTML = defaultValues.ctaText;
   

 }

 // go to this site https://cssgradient.io/ to generate gradientBackground colorS...//
