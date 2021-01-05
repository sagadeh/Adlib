"use strict";

// VARIABLE DECLARATION
var defaultValues = {
   // FRAME 1
   frame1Headline: "\"PURINA ONE HAS DEFINITELY CONTRIBUTED TO MY BELLA'S WELLBEING\" - PAULA",
   frame1Background: "image1.jpg",
   // FRAME 2
   frame2Headline: "ONLY 1 WEEK TO NOTICE JASPAR'S HIGHER ENERGY LEVELS",
   frame2Background: "image2.jpg",
   // FRAME 3
   frame3Headline: "START THE PURINA ONE 3 WEEK CHALLENGE",
   ctaImage: "BUY_NOW.png",
   frame1Subheadline: "2 FOR €10",
   frame2Subheadline: "*Subject to availability, while stocks last",
   trigger: "",
   trigger2: "Gold",
   frame1Image: "pack1.png",
   frame2Image: "pack2.png",
   frame3Image: "pack3.png",
   // OTHER
   readableLabel: "",
   customVariable: "",
   landingPage: "https://google.com"
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
        defaultValues.trigger2;
        defaultValues.frame1Image;
        defaultValues.frame2Image;
        defaultValues.frame3Image;
        // OTHER
        defaultValues.readableLabel;
        defaultValues.customVariable;
        defaultValues.landingPage;
    }else{
        Enabler.setProfileId(10496977);
        var devDynamicContent = {};

        devDynamicContent.Purina_Gourmet_UK_19Q4_Display = [{}];
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0]._id = 0;
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].id = 1;
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].Reporting_Label = "5d9f12aed001dcc7c2591584-b2d278479738836160045864bdd2e473";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].Active = true;
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].Weights = 1;
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame1Headline = "Hello foodies! Are you seeking portion perfection?";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame1Image = {};
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame1Image.Url = "https://s3.eu-central-1.amazonaws.com/adlib-platform-prod/5d9f12aed001dcc7c2591584/assets/300x600-Purina Gourmet UK/Monpetit.png";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame1Background = {};
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame1Background.Url = "https://s3.eu-central-1.amazonaws.com/adlib-platform-prod/5d9f12aed001dcc7c2591584/assets/300x600-Purina Gourmet UK/Monpetit_Overhead.png";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame2Background = {};
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame2Background.Url = "https://s3.eu-central-1.amazonaws.com/adlib-platform-prod/5d9f12aed001dcc7c2591584/assets/300x600-Purina Gourmet UK/Monpetit_Angled.png";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame3Background = {};
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame3Background.Url = "https://s3.eu-central-1.amazonaws.com/adlib-platform-prod/5d9f12aed001dcc7c2591584/assets/300x600-Purina Gourmet UK/Cat.png";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].ctaText = "TRY NOW";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame1Subheadline = "NOW \u00A31.75";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame2Subheadline = "28 NOV 2019 - 31 DEC 2019";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].frame3Subheadline = "*Subject to availability, while stocks last";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].trigger = "ASDA";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].trigger2 = "Monpetit";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].startDate = {};
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].startDate.RawValue = "11/28/2019";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].startDate.UtcValue = 1574928000000;
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].endDate = {};
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].endDate.RawValue = "12/31/2019";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].endDate.UtcValue = 1577779200000;
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].readableLabel = "Mon Petit - ASDA - OFFER 2-728x90";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].customVariable = "\/* Template CSS *\/";
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].landingPage = {};
        devDynamicContent.Purina_Gourmet_UK_19Q4_Display[0].landingPage.Url = "https://groceries.asda.com/search/gourmet%20mon%20petit";
        Enabler.setDevDynamicContent(devDynamicContent);

        // FETCH DATA
        var data = dynamicContent.Purina_Gourmet_UK_19Q4_Display[0];
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
        defaultValues.trigger2 = data.trigger2;
        defaultValues.frame1Image = data.frame1Image;
        defaultValues.frame2Image = data.frame2Image;
        defaultValues.frame3Image = data.frame3Image;
        // OTHER
        defaultValues.readableLabel = data.readableLabel;
        defaultValues.customVariable = data.customVariable;
        defaultValues.landingPage = data.landingPage.Url;
    }
}



