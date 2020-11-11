"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>",
  frame1Headline:"HEADLINE TEXT 1",
  frame2Headline:"HEADLINE TEXT 2",
  frame3Headline:"HEADLINE TEXT 3",
  ctaText:"SHOP NOW",
  landingPage:"https://www.google.com"
  
};

function initDynamic() {
  if (!Enabler.isServingInLiveEnvironment()) {
    defaultValues.cssAttrib;
    defaultValues.frame1Headline;
    defaultValues.frame2Headline;
    defaultValues.frame3Headline;
    defaultValues.ctaText;
    defaultValues.landingPage;
  } else {
    //invocation from studio here...
    
    Enabler.setProfileId(10579172);
    var devDynamicContent = {};

    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree = [{}];
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0]._id = 0;
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].id = 1;
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].Reporting_Label = "5f9178a625133300060c57c0-5f917b8d25133300060c5e38_4";
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].Active = true;
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].Weights = 1;
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].Scoring_status = "Unscored";
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].cssAttrib = "<! \u2013\u2013 css styling if necessary \u2013\u2013>";
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].frame1Headline = "HEADLINE TEXT 1111";
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].frame2Headline = "HEADLINE TEXT 2222";
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].frame3Headline = "HEADLINE TEXT 3333";
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].ctaText = "SHOP NOWwww";
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].landingPage = {};
    devDynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].landingPage.Url = "https://www.google.com";
    Enabler.setDevDynamicContent(devDynamicContent);

    
    //defaultValues.cssAttrib = dynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0]
    defaultValues.frame1Headline = dynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].frame1Headline;
    defaultValues.frame2Headline = dynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].frame2Headline;
    defaultValues.frame3Headline  = dynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].frame3Headline;
    defaultValues.ctaText  = dynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].ctaText;
    defaultValues.landingPage = dynamicContent.Paolo_Test_Campaign__Decision_Tree_Paolo_Test_Campaign__Decision_Tree[0].landingPage.Url;
    
    }
  }

function loadDefaultValues() {
   document.querySelector("#headline1").innerHTML = defaultValues.frame1Headline; 
   document.querySelector("#headline2").innerHTML = defaultValues.frame2Headline;
   document.querySelector("#headline3").innerHTML = defaultValues.frame3Headline;
   document.querySelector("#cta-text").innerHTML = defaultValues.ctaText;
}