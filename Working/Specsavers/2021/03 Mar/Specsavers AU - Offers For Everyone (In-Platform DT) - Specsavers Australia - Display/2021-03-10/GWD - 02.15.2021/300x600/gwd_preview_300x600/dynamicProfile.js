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
var curve1_1 = document.getElementById('Curve1_1');
var curve2 = document.getElementById('Curve2');
//fileControl
var HO = document.getElementById('HO'); // Headline only DIV
var SUB = document.getElementById('SUB');// With Sub headline DIV
var goHeadline = "none"; //variable to on queue the headline
//
var curve1Details; //variable handle property of curve1
var curve2Details; //variable handle property of curve2

//----Product set variable
var defaultValues = {
    frame1Image: "path_Model_Student.png",
    frame1Headline: "Designer<br>glasses<br>for all",
    frame1Subheadline: "",
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
    adjustHeadlines(defaultValues.frame1Headline.split('<br>'), defaultValues.frame1Subheadline.split('<br>'));
}

//------Adjust headline top position through breaklines
function adjustHeadlines(_break1, _break2){
    var c1Top;
    var c2Top;
    //HO
    if(defaultValues.frame1Subheadline == "" ||  defaultValues.frame1Subheadline == "blank"){
      switch(_break1.length){
          case 1 : 
          case 2 :
              HO.style.top = '439px';
              c1Top = "395px";
              c2Top = "411px";
              break;
          case 3 : 
          case 4 : 
          case 5 : 
              HO.style.top = '406px';
               c1Top = "361px";
              c2Top = "411px";
              break;
          default:
              c1Top = "361px";
              c2Top = "411px";
      }
    }
    //next function
    manifest(defaultValues.frame1Image,defaultValues.frame1Subheadline, c1Top , c2Top);
}

//------Manipulate IMG, Headlines, CTA Text
function manifest(_imgSrc, _subHead, _c1Top, _c2Top) {
//-CTA    
     //ctaText
    if(defaultValues.ctaText.length > 13){
        cta.style.top = "535px";
         cta.style.paddingBottom = "13px";
    }
    
//-Headline Detection
    var disectSub = _subHead.split(" ");
     console.log(disectSub[0].toString());
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
        
      if(disectSub[0].toString() == "↵" || disectSub[0].toString() == "blank" || disectSub[0].toString() == ""){
        goHeadline = "HO";
          switch(disectSrc[2].toString()){
            case "Student.png" :
            case "FreeGlasses.png" :
            case "FreeRange.png" :
                    img1.style.top = "-90px";
                break;

            }
        curve1Details = {borderColor:'transparent', color:'#016c42', width:'747px', height:'503px', left:'-395px', top:_c1Top, opacity:'1'};
        curve2Details = {borderColor:'transparent', color:'#c1d100', width:'592px', height:'399px', left:'158px', top:_c2Top, opacity:'0.8'};
      }else{
        goHeadline = "SUB";
       
          switch(disectSrc[2].toString()){
            case "Value.png" :
            case "Kids.png" :
            case "GFE.png" :
            case "DesignerGlassesAll.png" :
            case "2For1Designer.png" :
            case "2For1.png" :
                    img1.style.top = "+100px";
                break;

        }
        curve1Details = {borderColor:'transparent', color:'#016c42', width:'592px', height:'399px', left:'-276px', top:'-198px', opacity:'1'};
        curve2Details = {borderColor:'transparent', color:'#c1d100', width:'592px', height:'399px', left:'158px', top:'411px', opacity:'0.8'};
      }
     break;
     case "Product" :
      //presetColor
      headline1_HO.style.color = "#222222";
      headline1_SUB.style.color = "#016c42";
      subHeadline1_SUB.style.color = "#222222";
      cta.style.color = "#FFFFFF";
      cta.style.backgroundColor = "#016c42"
      //
     if(disectSub[0].toString() == "↵" || disectSub[0].toString() == "blank" || disectSub[0].toString() == ""){
        goHeadline = "HO";
        curve1Details = {borderColor:'#016c42', color:'transparent', width:'747px', height:'503px', left:'-395px', top:_c1Top, opacity:'1'};
        curve2Details = {borderColor:'#c1d100', color:'transparent', width:'592px', height:'399px', left:'158px', top:_c2Top, opacity:'1'};
      }else{
        goHeadline = "SUB";
        curve1Details = {borderColor:'#016c42', color:'transparent', width:'592px', height:'399px', left:'-279px', top:'-198px', opacity:'1'};
        curve2Details = {borderColor:'#c1d100', color:'transparent', width:'592px', height:'399px', left:'158px', top:'411px', opacity:'0.8'};
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
//need to have curve1_1 because it would appear behind img character  
    curve1_1.style.borderColor = curve1Details.borderColor;
    curve1_1.style.backgroundColor = curve1Details.color;
    curve1_1.style.width = curve1Details.width;
    curve1_1.style.height = curve1Details.height;
    curve1_1.style.left = curve1Details.left;
    curve1_1.style.top = curve1Details.top;
    curve1_1.style.opacity = curve1Details.opacity;
//
    curve2.style.borderColor = curve2Details.borderColor;
    curve2.style.backgroundColor = curve2Details.color;
    curve2.style.width = curve2Details.width;
    curve2.style.height = curve2Details.height;
    curve2.style.left = curve2Details.left;
    curve2.style.top = curve2Details.top;
    curve2.style.opacity = curve2Details.opacity;
    
}
//-----Function serve as delay to be called in .5 events in GWD
function copyVisibleQueue(){
    if(goHeadline == "SUB"){
        headline1_HO.style.visibility = "hidden";
        headline1_SUB.style.visibility = "visible";
        subHeadline1_SUB.style.visibility = "visible";
    }else{
        headline1_HO.style.visibility = "visible";
        headline1_SUB.style.visibility = "hidden";
        subHeadline1_SUB.style.visibility = "hidden";
    }
}
