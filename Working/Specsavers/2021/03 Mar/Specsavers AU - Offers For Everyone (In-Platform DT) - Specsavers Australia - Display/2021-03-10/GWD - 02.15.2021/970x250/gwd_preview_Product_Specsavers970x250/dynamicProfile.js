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
var goHeadline = "none"; //variable to on queue the headline
//
var curve1Details; //variable handle property of curve1
var curve2Details; //variable handle property of curve2

//----Product set variable
var defaultValues = {
    frame1Image: "https://s3.eu-west-2.amazonaws.com/adlib-templates-test/5c6541dbe9e8469222271ff0/assets/970x250/_Model_2For1.png",
    frame1Headline: "Free range",
    frame1Subheadline: "Our €59 glasses cost nothing<br>with PRSI or medical card",
    ctaText: "Find out more",
    landingPage: "https://www.specsavers.co.uk/",
}

//----Declarition init
function initDynamic(){
/*    Enabler.setProfileId(10403331);
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
              break
          case 2 :
          case 3 : 
              HO.style.top = '62px';
              break;
      }
    }else{
    //With Sub
      switch(_break2.length){
          case 1 : 
               subHeadline1_SUB.style.top = '42px';
              break;
          case 2 :
          case 3 :
              cta.style.top = "165px";
              break;
      }
    }
    //next function
    manifest(defaultValues.frame1Image,defaultValues.frame1Subheadline, defaultValues.ctaText);
}

//------Manipulate IMG, Headlines, CTA Text
function manifest(_imgSrc, _subHead, _ctaTxt) {
//-CTA
    //detect if CTA have ">"
    var disectCta = _ctaTxt.split(" ");
    var v2Act = false;
    if(disectCta[disectCta.length-1] == ">" || disectCta[disectCta.length-1] == "&gt;"){
        disectCta.pop();
        cta.innerHTML = disectCta.join(" ") + "<span class='arrows' style='font-size:14px;'>s</span>";
        cta.style.backgroundColor = "transparent";
        cta.style.textAlign = "left";
        cta.style.maxWidth = "300px";
        cta.style.width = "300px";
        v2Act = true;
      
    }else{
        cta.innerHTML = disectCta.join(" ");
        v2Act = false;
    }
    //CTA adjustment through length
    if(defaultValues.ctaText.length > 13){
        cta.style.paddingBottom = "14px";
    }
//-Headline
    //what headline to show
    if(_subHead == "↵" || _subHead == "blank" || _subHead == ""){
         goHeadline = "HO";
        }else{
         goHeadline = "SUB";
    }
    
//-IMG
    //detect img with Prodcut/Model 
    var disectSrc = _imgSrc.split("_");
    var detectSrc;
    for (var i = 0; i < disectSrc.length; i++){
        if(disectSrc[i] == "Model" || disectSrc[i] == "Product"){
            detectSrc = disectSrc[i].toString();
            break;
        }
    }
    //Specify curves property and headline color through IMG detection
    switch(detectSrc){
     case "Model" :
        if(!v2Act){
          console.log('V1')
          cta.style.color = "#016c42";
          curve1Details = {borderColor:'transparent', color:'#016c42', width:'1369px', height:'922px', left:'-581px', top:'-38px', opacity:'1'};
          curve2Details = {borderColor:'transparent', color:'#c1d100', width:'1369px', height:'922px', left:'521px', top:'-71px', opacity:'0.8'};
        }else{
          console.log('V2')
          cta.style.color = "#FFFFFF";
          curve1Details = {borderColor:'transparent', color:'#016c42', width:'2211px', height:'1497px', left:'-1211px', top:'-46px', opacity:'1'};
          curve2Details = {borderColor:'transparent', color:'#c1d100', width:'2211px', height:'1497px', left:'513px', top:'-230px',opacity:'0.8'};
        }
     break;
     case "Product" :
      //presetColor
      headline1_HO.style.color = "#222222";
      headline1_SUB.style.color = "#016c42";
      subHeadline1_SUB.style.color = "#222222";
      cta.style.color = "#FFFFFF";
      cta.style.backgroundColor = "#016c42";
     curve1Details = {borderColor:'#016c42', color:'transparent', width:'2211px', height:'1497px', left:'-1211px', top:'-46px', opacity:'1'};
     curve2Details = {borderColor:'#c1d100', color:'transparent', width:'2211px', height:'1497px', left:'513px', top:'-230px', opacity:'1'};
     break;
    }
   
    curve1.style.borderColor = curve1Details.borderColor;
    curve1.style.backgroundColor = curve1Details.color;
    curve1.style.width = curve1Details.width;
    curve1.style.height = curve1Details.height;
    curve1.style.left = curve1Details.left;
    curve1.style.top = curve1Details.top;
    curve1.style.opacity = curve1Details.opacity;
    curve1.style.boxShadow = "5 5 5 #016c42";

//
    curve2.style.borderColor = curve2Details.borderColor;
    curve2.style.backgroundColor = curve2Details.color;
    curve2.style.width = curve2Details.width;
    curve2.style.height = curve2Details.height;
    curve2.style.left = curve2Details.left;
    curve2.style.top = curve2Details.top;
    curve2.style.opacity = curve2Details.opacity;
    curve2.style.boxShadow = "5 5 5 #c1d100";  
}
//-----Function serve as delay to be called in .5 events in GWD
function copyVisibleQueue(){
    if(goHeadline == "SUB"){
        SUB.style.visibility = "visible";
    }else{
        HO.style.visibility = "visible";
    }
}

