"use strict";

// VARIABLE DECLARATION
var defaultValues = {
   // FRAME 1
   frame1Headline:"\"PURINA ONE HAS DEFINITELY CONTRIBUTED TO MY BELLA'S WELLBEING\" - PAULA",
   frame1Background:"image1.png",
   // FRAME 2
   frame2Headline:"ONLY 1 WEEK TO NOTICE JASPAR'S HIGHER ENERGY LEVELS",
   frame2Background:"image2.png",
   // FRAME 3
   frame3Headline:"START THE PURINA ONE 3 WEEK CHALLENGE",
   ctaImage:"BUY_NOW.png",
   //frame1Subheadline:"2 FOR €10",
   frame2Subheadline:"*Subject to availability, while stocks last",
   // trigger:"ASDA",
   frame1Subheadline:"",
   //frame2Subheadline:"",
   trigger:"ZOOPLUS",
   frame1Image:"product1.png",
   frame2Image:"product2.png",
   frame3Image:"product3.png",
   // OTHER
   readableLabel:"",
   customVariable:"",
   landingPage:"https://google.com"
};

function initDynamic() {
    if(!Enabler.isServingInLiveEnvironment()){
        // FRAME 1
        defaultValues.frame1Headline;
        defaultValues.frame1Background;
        // FRAME 2
        defaultValues.frame2Headline;
        defaultValues.frame2Background;
        // FRAME 3
        defaultValues.frame3Headline;
        defaultValues.ctaImage;
        defaultValues.frame1Subheadline;
        defaultValues.frame2Subheadline;
        defaultValues.trigger;
        defaultValues.frame1Image;
        defaultValues.frame2Image;
        defaultValues.frame3Image;
        // OTHER
        defaultValues.readableLabel;
        defaultValues.customVariable;
        defaultValues.landingPage;
    }else{
        /*
        // FETCH DATA
        var data = dynamicContent.Purina_ONE_IE_19Q4_Display[0];
        // FRAME 1
        defaultValues.frame1Headline = data.frame1Headline;
        defaultValues.frame1Image = data.frame1Background.Url;
        // FRAME 2   
        defaultValues.frame2Headline = data.frame2Headline;
        defaultValues.frame1Background = data.frame2Background.Url;
        // FRAME 3
        defaultValues.frame3Headline = data.frame3Headline;
        defaultValues.ctaText = data.ctaImage;
        defaultValues.frame1Subheadline = data.frame1Subheadline;
        defaultValues.frame2Subheadline = data.frame2Subheadline;
        defaultValues.trigger = data.trigger;
        defaultValues.frame1Image = data.frame1Image.Url;
        defaultValues.frame2Image = data.frame2Image.Url;
        defaultValues.frame3Image = data.frame3Image.Url;
        // OTHER
        defaultValues.readableLabel = data.readableLabel;
        defaultValues.customVariable = data.customVariable;
        defaultValues.landingPage = data.landingPage.Url;
        */
    }
}

function populate() {
  headline1.innerHTML = defaultValues.frame1Headline;
  headline2.innerHTML = defaultValues.frame2Headline;
  headline3.innerHTML = defaultValues.frame3Headline;
  pricetag.innerHTML = defaultValues.frame1Subheadline;
  tcline.innerHTML = defaultValues.frame2Subheadline;
  background1.setAttribute("source", defaultValues.frame1Background);
  background2.setAttribute("source", defaultValues.frame2Background);
  product1.setAttribute("source", defaultValues.frame1Image);
  product2.setAttribute("source", defaultValues.frame2Image);
  product3.setAttribute("source", defaultValues.frame3Image);
  ctaBtn.setAttribute("source", defaultValues.ctaImage);
}