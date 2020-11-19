"use strict";

// VARIABLE DECLARATION
var defaultValues = {
    // FRAME 1
    frame1Headline: "Discover Exquisite meals today",
    frame1Image: "product.png",
    // FRAME 2
    frame1Background: "Gold_Melting_Heart_1.png",
    // FRAME 3
    frame2Background: "Gold_Melting_Heart_2.png",
    // FRAME 4
    frame3Background: "cat.png",
    // OTHER
    ctaText: "BUY NOW",
    frame1Subheadline: "",
    frame2Subheadline: "",
    frame3Subheadline: "Subject to availability, while stocks last",
    trigger: "ZOOPLUS",
    trigger2: "PERLE",
    startDate: "",
    endDate: "",
    readableLabel: "",
    customVariable: "",
    landingPage: "https://google.com"
};

function initDynamic() {
    if(!Enabler.isServingInLiveEnvironment()){
        // FRAME 1
        defaultValues.frame1Headline;
        defaultValues.frame1Image;
        // FRAME 2
        defaultValues.frame1Background;
        // FRAME 3
        defaultValues.frame2Background;
        // FRAME 4
        defaultValues.frame3Background;
        // OTHER
        defaultValues.ctaText;
        defaultValues.frame1Subheadline;
        defaultValues.frame2Subheadline;
        defaultValues.frame3Subheadline;
        defaultValues.trigger;
        defaultValues.trigger2;
        defaultValues.startDate;
        defaultValues.endDate;
        defaultValues.readableLabel;
        defaultValues.customVariable;
        defaultValues.landingPage;
    }else{
        /*
        // FETCH DATA
        var data = dynamicContent.Purina_Gourmet_UK_19Q4_Display[0];
        // FRAME 1
        defaultValues.frame1Headline = data.frame1Headline;
        defaultValues.frame1Image = data.frame1Image.Url;
        // FRAME 2   
        defaultValues.frame1Background = data.frame1Background.Url;
        // FRAME 3
        defaultValues.frame2Background = data.frame2Background.Url;
        // FRAME 4
        defaultValues.frame3Background = data.frame3Background.Url;
        // OTHER
        defaultValues.ctaText = data.ctaText;
        defaultValues.frame1Subheadline = data.frame1Subheadline;
        defaultValues.frame2Subheadline = data.frame2Subheadline;
        defaultValues.frame3Subheadline = data.frame3Subheadline;
        defaultValues.trigger = data.trigger;
        defaultValues.trigger2 = data.trigger2;
        defaultValues.startDate = data.startDate;
        defaultValues.endDate = data.endDate;
        defaultValues.readableLabel = data.readableLabel;
        defaultValues.customVariable = data.customVariable;
        defaultValues.landingPage = data.landingPage.Url;
        */
    }
}

function populate() {
  
}