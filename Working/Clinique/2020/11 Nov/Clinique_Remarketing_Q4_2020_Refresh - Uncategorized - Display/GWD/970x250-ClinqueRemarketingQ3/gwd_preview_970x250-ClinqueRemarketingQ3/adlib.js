"use strict";
var defaultValues = {
readableLabel:"Sample Label",
frame1Headline:"Dramatically Different™ Moisturizing BB-Gel",
frame2Headline:"8-hour oil-free hydration<br>naturally perfects, unifies skin<br>tone. In one tint suitable for<br>a range of skin tones.",
baseImage:"bgBasicWhite.png",
logo:"logoClinique.png",
frame1Image:"prodSample.png",
frame2Image:"prodSample2.png",
ctaText:"SHOP NOW",
ctaText2:"SHOP NOW",
landingPage:"https://www.clinique.com/",
cssAttrib:"&nbsp;"
};
function initDynamic() {
  // Dynamic Content variables and sample values
   if (!Enabler.isServingInLiveEnvironment()) {
        defaultValues.readableLabel;
        defaultValues.frame1Headline;
        defaultValues.frame2Headline;
        defaultValues.baseImage;
        defaultValues.logo;
        defaultValues.frame1Image;
        defaultValues.frame2Image;
        defaultValues.ctaText;
        defaultValues.ctaText2;
        defaultValues.landingPage;
        defaultValues.cssAttrib;
       
   }else{
        defaultValues.readableLabel = dynamicContent.dynamicProfileName[0].readableLabel;
        defaultValues.frame1Headline = dynamicContent.dynamicProfileName[0].frame1Headline;
        defaultValues.frame2Headline = dynamicContent.dynamicProfileName[0].frame2Headline;
        defaultValues.baseImage = dynamicContent.dynamicProfileName[0].baseImage.Url;
        defaultValues.logo = dynamicContent.dynamicProfileName[0].logo.Url;
        defaultValues.frame1Image = dynamicContent.dynamicProfileName[0].frame1Image.Url;
        defaultValues.frame2Image = dynamicContent.dynamicProfileName[0].frame2Image.Url;
        defaultValues.ctaText = dynamicContent.dynamicProfileName[0].ctaText;
        defaultValues.ctaText2 = dynamicContent.dynamicProfileName[0].ctaText2;
        defaultValues.landingPage = dynamicContent.dynamicProfileName[0].landingPage.Url;
        defaultValues.cssAttrib = dynamicContent.dynamicProfileName[0].cssAttrib;
       
  }
}
function populate(){
    cssAttrib.innerHTML = "<style>" + defaultValues.cssAttrib + "</style>";
    h1.innerHTML = defaultValues.frame1Headline;
    h2.innerHTML = defaultValues.frame2Headline;
    ctaTxt1.innerHTML = defaultValues.ctaText;
    ctaTxt2.innerHTML = defaultValues.ctaText2;
    bg.setAttribute("source", defaultValues.baseImage);
    logo.setAttribute("source", defaultValues.logo);
    prod1.setAttribute("source", defaultValues.frame1Image);
    prod2.setAttribute("source", defaultValues.frame2Image);
}
