"use strict";

var headline1 = document.getElementById('headline1');
var subHeadline1 = document.getElementById('author');
var headline2 = document.getElementById('headline2');
var headline3 = document.getElementById('headline3');
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var ctaTxt = document.getElementById('cta');

var isProduct = false;

if(isProduct){
   console.log('is Product upload');
    var defaultValues = {
    frame1Headline: "Purina ONE has definitely contributed to my Bella's wellbeing.",
    frame1Subheadline: "- Paula",
    frame2Headline: "Only 1 week to notice Jasper's higher energy levels",
    frame3Headline: "Start the<br>Purina ONE<br>3 Week Challenge",
    ctaText: "BUY NOW",
    frame1Image: "",
    frame2Image: "",
    landingPage: "https://www.tesco.ie/groceries/product/search/default.aspx?searchBox=Purina%20ONE" 
    };
 }else{
    console.log('is studio upload');
    var defaultValues = {};
};

function initDynamic() {
    
	console.log("initDynamic");
 if(isProduct == false){
    // Dynamic Content variables and sample values
    Enabler.setProfileId(10355700);
    var devDynamicContent = {};

    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge = [{}];
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0]._id = 0;
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].id = 1;
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].Reporting_Label = "5c55728da2d99a858ebbbc73-5cadf6312f70537761196a1f";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].Active = true;
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].Weights = 1;
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].isDefault = false;
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].FORMAT = [];
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].FORMAT[0] = {"Width": 300, "Height": 250};
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame1Headline = "\"Purina ONE has definitely contributed to my Bella\'s wellbeing.\"";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame1Subheadline = "- Paula";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame2Headline = "Only 2 weeks to see Bella healthier inside and out";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame3Headline = "Join the<br>Purina ONE<br>3 Week Challenge";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].ctaText = "BUY NOW";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame1Image = {};
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame1Image.Url = "https://s3.eu-west-2.amazonaws.com/adlib-templates-test/5c55728da2d99a858ebbbc73/assets/300x250/Retargeting_Image1.jpg";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame2Image = {};
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame2Image.Url = "https://s3.eu-west-2.amazonaws.com/adlib-templates-test/5c55728da2d99a858ebbbc73/assets/300x250/Retargeting_Image2.jpg";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].landingPage = {};
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].landingPage.Url = "https://www.tesco.ie/groceries/product/search/default.aspx?searchBox=Purina%20ONE";
    devDynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].CM_Placement_ID = [237644351];
    Enabler.setDevDynamicContent(devDynamicContent);

    defaultValues.frame1Headline =  dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame1Headline;
    defaultValues.frame1Subheadline =  dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame1Subheadline;
    defaultValues.frame2Headline =  dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame2Headline;
    defaultValues.frame3Headline =  dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame3Headline;
    defaultValues.ctaText =  dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].ctaText;
    defaultValues.frame1Image =      dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame1Image.Url;
    defaultValues.frame2Image =    dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].frame2Image.Url;
    defaultValues.landingPage =  dynamicContent.PurinaONE_Display_19Q1_3_Week_Challenge_PurinaONE_Display_19Q1_3_Week_Challenge[0].landingPage.Url; 
 }

    if(defaultValues.frame1Headline.length > 47){
        headline1.style.fontSize = "10px";
    }
    
var ctaContainer = document.getElementById('cta-ctn');
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isFireFox = !(window.mozInnerScreenX == null);
    
    if(navigator.platform.indexOf('Mac')>=0)
    {
        //mac
        if(isFireFox){
            if(defaultValues.frame1Headline.length > 47){
                headline1.style.fontSize = "10px";
                headline1.style.lineHeight = "11px";
            }
            if(defaultValues.frame2Headline.length > 48){
                headline2.style.fontSize = "10px";
            }
         
        }else if(isChrome){
            
        }else if(isSafari){
           
        }
    }else{
        //not mac
        if(isFireFox){
           
        }else if(isChrome){
            
        }else{
            if(defaultValues.frame1Headline.length > 47){
                headline1.style.fontSize = "10px";
                headline1.style.lineHeight = "11px";
            }
            if(defaultValues.frame2Headline.length > 48){
                headline2.style.fontSize = "10px";
            }
        }
    }

}


