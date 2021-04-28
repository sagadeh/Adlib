"use strict";


var defaultValues = {
  cssAttrib:"<! –– css styling if necessary ––>",
  frame1Headline:"text sample...",
  videoUrl:"300x250-myVideo.mp4",
  customVariable:"300x250-myVideo.mp4",
  startDate:"11/10/2020",
  endDate:"12/10/2020",
  readableLabel:"test InBanner Video",
  landingPage:"https://www.google.com/"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
      defaultValues.cssAttrib;
      defaultValues.videoUrl;
      defaultValues.customVariable;
      defaultValues.frame1Headline;
      defaultValues.startDate;
      defaultValues.endDate;
      defaultValues.readableLabel;
      defaultValues.landingPage;
    } else {
      //invocation code from studio here...
      Enabler.setProfileId(10578112);
      var devDynamicContent = {};

      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video = [{}];
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0]._id = 0;
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].id = 1;
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].Reporting_Label = "";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].Active = true;
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].Weights = 1;
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].frame1Headline = "";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].videoUrl = "";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].customVariable = {};
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].customVariable.Type = "video";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].customVariable.Progressive_Url = "";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].startDate = {};
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].startDate.RawValue = "11/10/2020";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].startDate.UtcValue = 1604966400000;
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].endDate = {};
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].endDate.RawValue = "12/10/2020";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].endDate.UtcValue = 1607558400000;
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].readableLabel = "test InBanner Video";
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].landingPage = {};
      devDynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].landingPage.Url = "https://www.google.com";
      Enabler.setDevDynamicContent(devDynamicContent);
      
      defaultValues.customVariable = dynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].customVariable.Progressive_Url;
      defaultValues.frame1Headline = dynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].frame1Headline;
      defaultValues.landingPage = dynamicContent.Paolo_Test_Campaign_InBanner_Video_Paolo_Test_Campaign_InBanner_Video[0].landingPage.Url;

    }
}


function populate() { 
  document.querySelector("#frame1Headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#myVideo").setAttribute("sources", defaultValues.customVariable);
}