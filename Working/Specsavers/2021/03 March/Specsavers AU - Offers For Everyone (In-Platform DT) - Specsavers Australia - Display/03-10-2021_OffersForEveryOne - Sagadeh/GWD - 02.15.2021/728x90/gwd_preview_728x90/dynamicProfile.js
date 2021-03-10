"use strict";
//Read this code from top to bottom
var headline1_HO = document.getElementById('Headline1');
var headline1_SUB = document.getElementById('Headline1_1');
var subHeadline1_SUB = document.getElementById('Subheadline1');
var cta = document.getElementById('cta');
//image
var img1 = document.getElementById('Image1');
//curve
var curve1 = document.getElementById('Curve1');
var curve2 = document.getElementById('Curve2');
//fileControl
var HO = document.getElementById('HO'); // Headline only DIV
var SUB = document.getElementById('SUB');// With Sub headline DIV
//
var curve1Details; //variable handle property of curve1
var curve2Details; //variable handle property of curve2

//----Product set variable
var defaultValues = {
    frame1Image: "_Model",
    frame1Headline: "Last night a blur?",
    frame1Subheadline: "25% off glasses for students",
    ctaText: "Find out more",
    landingPage: "https://www.specsavers.co.uk/",
}

//----Declarition init
function initDynamic(){

  /*
    Enabler.setProfileId(10403331);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch = [{}];
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0]._id = 0;
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].id = 1;
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].Reporting_Label = "5c6541dbe9e8469222271ff0-5c7e65e6539e8f461ac4d4de";
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].Active = true;
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].Weights = 1;
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].isDefault = false;
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].FORMAT = [];
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].FORMAT[0] = {"Width": 120, "Height": 600};
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].frame1Image = {};
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].frame1Image.Url = "https://s3.eu-west-2.amazonaws.com/adlib-templates-test/5c6541dbe9e8469222271ff0/assets/120x600/_Model_GFE.png";
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].frame1Headline = "25% off<br>glasses<br>for over<br>60s";
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].frame1Subheadline = "blank";
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].ctaText = "Find out more";
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].landingPage = {};
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].landingPage.Url = "https://www.specsavers.co.uk/";
    devDynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].CM_Placement_ID = [100006];
    Enabler.setDevDynamicContent(devDynamicContent);
    
    defaultValues.frame1Image = dynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].frame1Image.Url;
    defaultValues.frame1Headline = dynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].frame1Headline;
    defaultValues.frame1Subheadline = dynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].frame1Subheadline;
    defaultValues.ctaText = dynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].ctaText;
    defaultValues.landingPage = dynamicContent.Specsavers_Prospecting_19Q1_FebLaunch_Specsavers_Prospecting_19Q1_FebLaunch[0].landingPage.Url;
    */
    defaultValues.frame1Image;
    defaultValues.frame1Headline;
    defaultValues.frame1Subheadline;
    defaultValues.ctaText;
    defaultValues.landingPage;
    //next function
   adjustHeadlines(defaultValues.frame1Subheadline.split('<br>'));
}

//------Adjust headline top position through breaklines
function adjustHeadlines(_break2){
      switch(_break2.length){
          case 1 :
                headline1_SUB.style.top = "8px";
                subHeadline1_SUB.style.top = "40px";
              break;
      }
    //next function
    manifest(defaultValues.frame1Image, defaultValues.frame1Subheadline);
}

//------Manipulate IMG, Headlines, CTA Text
function manifest(_imgSrc, _subHead) {
//-CTA
   //ctaText manipulation
    if(defaultValues.ctaText.length > 13){
        cta.style.top = "19px";
        cta.style.paddingBottom = "14px";
    }
//-Headline Detection
    var disectSub = _subHead.split(" ");
//-IMG
    //curves base on Image (product/model) and subheadline
    var disectSrc = _imgSrc.split("_");
    var detectSrc;
    for (var i = 0; i < disectSrc.length; i++){
        if(disectSrc[i] == "Model" || disectSrc[i] == "Product"){
            detectSrc = disectSrc[i].toString();
            break;
        }
    }
    switch(detectSrc){
     case "Model" :
      curve1Details = {borderColor:'transparent', color:'#c1d100', width:'1083px', height:'729px', left:'-705px', top:'-97px', opacity:'0.8'};
      curve2Details = {borderColor:'transparent', color:'#016c42', width:'1083px', height:'729px', left:'142px', top:'-97px', opacity:'1'};
          if(disectSub[0].toString() == "↵" || disectSub[0].toString() == "blank" || disectSub[0].toString() == ""){
            HO.style.visibility = "visible";
          }else{
            SUB.style.visibility = "visible";
          }
     break;
     case "Product" :
      //presetColor
      headline1_HO.style.color = "#222222";
      headline1_SUB.style.color = "#016c42";
      subHeadline1_SUB.style.color = "#222222";
      cta.style.color = "#FFFFFF";
      cta.style.backgroundColor = "#016c42"
            
     curve1Details = {borderColor:'#c1d100', color:'transparent', width:'1083px', height:'729px', left:'312px', top:'-636px', opacity:'1'};
     curve2Details = {borderColor:'#016c42', color:'transparent', width:'1083px', height:'729px', left:'433px', top:'-97px', opacity:'1'};
          if(disectSub[0].toString() == "↵" || disectSub[0].toString() == "blank" || disectSub[0].toString() == ""){
            HO.style.visibility = "visible";
            HO.style.left = "130px";
            headline1_HO.style.fontSize = "20px";
          }else{
            SUB.style.visibility = "visible"; 
            SUB.style.left = "130px"; 
          }
     break;
    }
    curve1.style.borderColor = curve1Details.borderColor;
    curve1.style.backgroundColor = curve1Details.color;
    curve1.style.width = curve1Details.width;
    curve1.style.height = curve1Details.height;
    curve1.style.left = curve1Details.left;
    curve1.style.top = curve1Details.top;
    curve1.style.opacity = curve1Details.opacity;
//
    curve2.style.borderColor = curve2Details.borderColor;
    curve2.style.backgroundColor = curve2Details.color;
    curve2.style.width = curve2Details.width;
    curve2.style.height = curve2Details.height;
    curve2.style.left = curve2Details.left;
    curve2.style.top = curve2Details.top;
    curve2.style.opacity = curve2Details.opacity;
    
    
}
