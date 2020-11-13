"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>", //<-- dont remove, this is strictly in the first row of default
  startDate:"10/30/2020 0:00:00",
  endDate:"11/01/2020 0:00:00",
  frame1Headline:"Our lowest ever prices<br> this <span style='color: #000000'>Black Friday</span>",
  frame2Headline:"Lightning-fast and<br> reliable broadband",
  frame1Image:"frame1Image.png",
  frame2Image:"frame2Image.png",
  frame2Image2:"frame2Image2.png",
  ctaText:"Shop now",
  legal:"VIRGIN FIBRE AREAS ONLY. New customers only. Average download speed 108Mbps. £24.99 per month. 18 month minimum term. Standard pricing applies from month 19, currently £44. £35 set up fee. Engineer installation fee (£30) may apply. Legal stuff applies. Offer ends 30/11/2020.",
  legalButton:"Legal stuff&nbsp; ^",
  landingPage:"https://www.virginmedia.com/"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
        defaultValues.frame1Headline;
        defaultValues.frame2Headline;
        defaultValues.frame1Image;
        defaultValues.frame2Image;
        defaultValues.frame2Image2;
        defaultValues.ctaText;
        defaultValues.legal;
        defaultValues.legalButton;
        defaultValues.landingPage;
    } else {
    
        Enabler.setProfileId(10577988);
        var devDynamicContent = {};

        devDynamicContent.Black_Friday__Solus_at_24 = [{}];
        devDynamicContent.Black_Friday__Solus_at_24[0]._id = 0;
        devDynamicContent.Black_Friday__Solus_at_24[0].id = 1;
        devDynamicContent.Black_Friday__Solus_at_24[0].Reporting_Label = "5f7c7f7abaab1200065f07be-5f9aa78a694f690006bd03c3_10";
        devDynamicContent.Black_Friday__Solus_at_24[0].Active = true;
        devDynamicContent.Black_Friday__Solus_at_24[0].Weights = 1;
        devDynamicContent.Black_Friday__Solus_at_24[0].Scoring_status = "Unscored";
        devDynamicContent.Black_Friday__Solus_at_24[0].cssAttrib = "<! \u2013\u2013 css styling if necessary \u2013\u2013>";
        devDynamicContent.Black_Friday__Solus_at_24[0].frame1Headline = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].frame2Headline = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].frame1Image = {};
        devDynamicContent.Black_Friday__Solus_at_24[0].frame1Image.Url = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].frame2Image = {};
        devDynamicContent.Black_Friday__Solus_at_24[0].frame2Image.Url = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].frame2Image2 = {};
        devDynamicContent.Black_Friday__Solus_at_24[0].frame2Image2.Url = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].ctaText = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].legal = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].legalButton = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].landingPage = {};
        devDynamicContent.Black_Friday__Solus_at_24[0].landingPage.Url = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].startDate = {};
        devDynamicContent.Black_Friday__Solus_at_24[0].startDate.RawValue = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].startDate.UtcValue = 1604016000000;
        devDynamicContent.Black_Friday__Solus_at_24[0].endDate = {};
        devDynamicContent.Black_Friday__Solus_at_24[0].endDate.RawValue = "";
        devDynamicContent.Black_Friday__Solus_at_24[0].endDate.UtcValue = 1604188800000;
        Enabler.setDevDynamicContent(devDynamicContent);

        defaultValues.cssAttrib = dynamicContent.Black_Friday__Solus_at_24[0].cssAttrib;
        defaultValues.frame1Headline = dynamicContent.Black_Friday__Solus_at_24[0].frame1Headline;
        defaultValues.frame2Headline = dynamicContent.Black_Friday__Solus_at_24[0].frame2Headline;
        defaultValues.frame1Image = dynamicContent.Black_Friday__Solus_at_24[0].frame1Image.Url;
        defaultValues.frame2Image = dynamicContent.Black_Friday__Solus_at_24[0].frame2Image.Url;
        defaultValues.frame2Image2 = dynamicContent.Black_Friday__Solus_at_24[0].frame2Image2.Url;
        defaultValues.ctaText = dynamicContent.Black_Friday__Solus_at_24[0].ctaText;
        defaultValues.legal = dynamicContent.Black_Friday__Solus_at_24[0].legal;
        defaultValues.legalButton = dynamicContent.Black_Friday__Solus_at_24[0].legalButton;
        defaultValues.landingPage = dynamicContent.Black_Friday__Solus_at_24[0].landingPage.Url;
    }
}


function populate() {
  document.querySelector("#frame1Headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame2Headline").innerHTML = defaultValues.frame2Headline;
  
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
  document.querySelector("#frame2Image").setAttribute("source", defaultValues.frame2Image);
  document.querySelector("#frame2Image2").setAttribute("source", defaultValues.frame2Image2);
  
  document.querySelector("#ctaText").innerHTML = defaultValues.ctaText;
  document.querySelector("#legal").innerHTML = defaultValues.legal;
  document.querySelector("#legalButton").innerHTML = defaultValues.legalButton;
}