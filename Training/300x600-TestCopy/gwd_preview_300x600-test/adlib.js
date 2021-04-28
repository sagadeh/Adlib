"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>",
  logo:"nespresso-whatElse-logo.png",
  frame1Background:"M1_300x600_BG.jpg",
  frame1Headline:"CHOOSING<br>TO BUILD A<br>COMMUNITY MILL",
  //frame1Headline:"Casdadas",
  frame2Headline:"TO ENHANCE<br>THE QUALITY OF<br>YOUR COFFEE",
  frame3Headline:"ENDED UP<br>IMPROVING<br>A LOT MORE",
  frame4Headline:"WE ARE<br>THE CHOICES<br>WE MAKE",
  ctaText:"BOOK TOMORROW",
  landingPage:"https://yourlandingpage.com"
  
};

function initDynamic() {
  if (!Enabler.isServingInLiveEnvironment()) {

    defaultValues.cssAttrib;
    defaultValues.logo;
    defaultValues.frame1Background;
    defaultValues.frame1Headline;
    defaultValues.frame2Headline;
    defaultValues.frame3Headline;
    defaultValues.frame4Headline;
    defaultValues.ctaText;
    defaultValues.landingPage;

  } else {
      //invocation from studio here...
    
    
    }
  }


function loadDefaultValues() {
  document.querySelector("#headline1").innerHTML = defaultValues.frame1Headline; + "<style>"+ defaultValues.cssAttrib; +"<style>";
  document.querySelector("#headline2").innerHTML = defaultValues.frame2Headline;
  document.querySelector("#headline3").innerHTML = defaultValues.frame3Headline;
  document.querySelector("#headline4").innerHTML = defaultValues.frame4Headline;
  document.querySelector("#ctaTxt").innerHTML = defaultValues.ctaText;
  document.querySelector("#logo-img").setAttribute("source", defaultValues.logo);
  document.querySelector("#bg-img").setAttribute("source", defaultValues.frame1Background);

}