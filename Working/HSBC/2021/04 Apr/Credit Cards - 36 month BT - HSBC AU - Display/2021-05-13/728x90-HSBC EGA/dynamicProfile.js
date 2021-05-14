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
    Enabler.setProfileId(10638578);
    var devDynamicContent = {};

    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed = [{}];
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0]._id = 0;
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].id = 1;
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].Reporting_Label = "6082186fcda0120006447f3b-6088aaf4cda012000648f9de_41";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].Variant_name = "A";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].Active = true;
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].Weights = 1;
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].Scoring_status = "Unscored";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].animationType = 1;
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Image = {};
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5329a69c0269e89882f10b/assets/singleFiles/608f5c1e07d3bc00069d6b2a/original/crop.png";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Image2 = {};
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Image2.Url = "https://cdn.ad-lib.io/v2/partners/5c5329a69c0269e89882f10b/assets/concepts/5f055ff31605b800062944a9/templates/5f460c040464ed0006bab4a6/content/blank.png";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Headline = "0% p.a.";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Subheadline = "";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Subheadline2 = "Together we thrive";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame2Headline = "&nbsp;Balance Transfer for 36 months.";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame2Subheadline = "";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame3Headline = "One card.<br \/>A world of opportunity.";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame3Subheadline = "";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Headline = "The HSBC Platinum Credit Card";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Subheadline = "T&amp;Cs and lending criteria apply. Australian Credit Licence 232595.";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].logo = {};
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].logo.Url = "https://cdn.ad-lib.io/v2/partners/5c5329a69c0269e89882f10b/assets/concepts/5f055ff31605b800062944a9/templates/5f460c040464ed0006bab4a6/content/logo_white.png";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].logo2 = {};
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].logo2.Url = "https://cdn.ad-lib.io/v2/partners/5c5329a69c0269e89882f10b/assets/concepts/5f055ff31605b800062944a9/templates/5f460c040464ed0006bab4a6/content/logo_black.png";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Image = {};
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5329a69c0269e89882f10b/assets/singleFiles/6098d7e807d3bc0006a5f06d/original/crop.png";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Image2 = {};
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Image2.Url = "https://cdn.ad-lib.io/v3/partners/5c5329a69c0269e89882f10b/assets/singleFiles/608b60ee07d3bc00069ae817/original/blank.png";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].bgColor = "#F7F5F5";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].landingPage = {};
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].landingPage.Url = "https://www.hsbc.com.au/";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].readableLabel = "Non Targeted";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].customVariable = "";
    devDynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].ctaText = "Apply Now";
    Enabler.setDevDynamicContent(devDynamicContent);

    defaultValues.animationType = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].animationType;
    defaultValues.frame1Image = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Image.Url;
    defaultValues.frame1Image2 = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Image2.Url;
    defaultValues.frame1Headline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Headline;
    defaultValues.frame1Subheadline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Subheadline;
    defaultValues.frame1Subheadline2 = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame1Subheadline2;
    defaultValues.frame2Headline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame2Headline;
    defaultValues.frame2Subheadline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame2Subheadline;
    defaultValues.frame3Headline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame3Headline;
    defaultValues.frame3Subheadline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame3Subheadline;
    defaultValues.frame4Headline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Headline;
    defaultValues.frame4Subheadline = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Subheadline;
    defaultValues.logo = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].logo.Url;
    defaultValues.logo2 = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].logo2.Url;
    defaultValues.frame4Image = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Image.Url;
    defaultValues.frame4Image2 = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].frame4Image2.Url;
    defaultValues.ctaText = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].ctaText;
    defaultValues.bgColor = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].bgColor;
    defaultValues.landingPage = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].landingPage.Url;
    defaultValues.readableLabel = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].readableLabel;
    defaultValues.customVariable = dynamicContent.Credit_Cards__36_month_BT_AdLib_Feed[0].customVariable;
  }
}

