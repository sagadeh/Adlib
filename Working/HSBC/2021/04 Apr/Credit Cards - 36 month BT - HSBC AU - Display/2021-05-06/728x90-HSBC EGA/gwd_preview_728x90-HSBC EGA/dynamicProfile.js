"use strict";

var reportingLabel;
var variationHash;

var defaultValues = {
       animationType:"1",
       frame1Image:"imagewithhex.png",
       frame1Image2:"blank.png",

       frame1Headline:"$0 monthly fees^",
       frame1Subheadline:" ",
       frame1Subheadline2:"Together we thrive",

       frame2Headline:"$0 HSBC ATM fees",
       frame2Subheadline:"Anywhere in the world",

       frame3Headline:"2% cashback",
       frame3Subheadline:"on tap and pay under $100^",

       frame4Headline:"The award-winning HSBC<br>Everyday Global Account.",
       frame4Subheadline:"T&Cs apply.",

       logo:"blank.png",
       logo2:"logo_black.png",
       frame4Image:"card.png",
       frame4Image2:"blank.png",
       ctaText:"Learn more",
       bgColor:"#F7F5F5",
       landingPage:"https://www.hsbc.com.au/",
       readableLabel:"Mock",
       customVariable:" "
      };


function initDynamic() {
  if(!Enabler.isServingInLiveEnvironment()){
     defaultValues.animationType;
     defaultValues.frame1Image;
     defaultValues.frame1Image2;

     defaultValues.frame1Headline;
     defaultValues.frame1Subheadline;
     defaultValues.frame1Subheadline2;

     defaultValues.frame2Headline;
     defaultValues.frame2Subheadline;

     defaultValues.frame3Headline;
     defaultValues.frame3Subheadline;

     defaultValues.frame4Headline;
     defaultValues.frame4Subheadline;

     defaultValues.logo;
     defaultValues.logo2;
     defaultValues.frame4Image;
     defaultValues.frame4Image2;
     defaultValues.ctaText;
     defaultValues.bgColor;
     defaultValues.landingPage;
     defaultValues.readableLabel;
     defaultValues.customVariable;

  }else{


  }
}

