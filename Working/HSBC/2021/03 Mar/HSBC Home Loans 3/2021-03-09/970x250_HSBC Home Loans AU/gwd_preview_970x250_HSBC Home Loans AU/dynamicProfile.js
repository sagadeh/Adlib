var reportingLabel; 
var variationHash;
"use strict";




var defaultValues = { 
  frame1Image:"MainImage.png", 
  frame2Image:"MainImage.png",
  frame1Headline:"Starts low and stays low",
  frame2Headline:"Starts low and stays low",
  frame1Subheadline:"dolor sit amet consectetur",
  frame1Subheadline2:"Together we thrive",
  frame2Subheadline:"Together we thrive",
  frame2Subheadline2:"Together we thrive",
  frame3Headline:"Lorem ipsum",
  frame3Headline2:"0",
  frame3Headline3:"0",
  frame3Subheadline:"dolor sit amet consectetur et",
  frame3Subheadline2:"dolor sit amet consectetur et",
  frame3Subheadline3:"Together we thrive",
  ctaText:"Learn more",
  landingPage:"https://www.hsbc.com.au/home-loans/products/home-value/?cid=AUH:VI:D0:MG:05:2008:046:HLS:03M:ADL:SDA:INM:HOM:CAM:GIT:CSD:NULL",
  legal:"^Comparison rate warning, T&C’s, and lending criteria applies. Issued by HSBC Bank Australia Limited. Australian Credit Licence/AFSL 232595.",
  readableLabel:" ",  
  animationType:"Rates", //Aspirational,Rates,Cashback
  customVariable:"287574889"
  
}; 

var possibleValues = {
  animationType:"Aspirational,Rates,Cashback"
}
var frame3Headline2 = document.getElementById("frame3Headline2");
var frame3Headline3 = document.getElementById("frame3Headline3");
var frame3 = document.getElementById("frame3");
var animationRenderCurrent;


typeofAnimation()
function typeofAnimation(){
    animationRenderCurrent = defaultValues.animationType === "Original" ? false : true;
    console.log("animationRenderCurrent?",animationRenderCurrent);
}
twoDecimal();


function twoDecimal() {
  var toNum3= String((Number(defaultValues.frame3Headline3)).toFixed(2));
  var toNum2=  String((Number(defaultValues.frame3Headline2)).toFixed(2));

  defaultValues.frame3Headline2 = toNum2;
  defaultValues.frame3Headline3 =  toNum3;
  
  frame3Headline2.innerHTML = defaultValues.frame3Headline2;
  frame3Headline3.innerHTML = defaultValues.frame3Headline3;
 
  console.log( frame3Headline2.innerHTML);
  console.log( frame3Headline3.innerHTML);
}
gsap.globalTimeline.pause();

function startAnimation(){
  console.log("startAnimation Initialized");
  adlibStart();
  console.log("start screenshot!")
};

function callAdlibScreenshot(){
  takeScreenshot();
  console.log("screenshot!")
}

function stopAdlibScreenshot(){
  console.log("end screenshot!")
  adlibStop();

}

function populate(){
  console.log("populateDynamic");
  frame1Image.setAttribute("source", defaultValues.frame1Image);
  frame2Image.setAttribute("source", defaultValues.frame1Image);
  frame1Headline.innerHTML = defaultValues.frame1Headline;
  frame2Headline.innerHTML = defaultValues.frame2Headline;
  frame1Subheadline.innerHTML = defaultValues.frame1Subheadline;
  frame1Subheadline2.innerHTML = defaultValues.frame1Subheadline2;
  frame2Subheadline.innerHTML = defaultValues.frame2Subheadline;
  frame2Subheadline2.innerHTML = defaultValues.frame2Subheadline2;
  frame3Headline.innerHTML = defaultValues.frame3Headline;
  frame3Headline2.innerHTML = defaultValues.frame3Headline2;
  frame3Headline3.innerHTML = defaultValues.frame3Headline3;
  frame3Subheadline.innerHTML = defaultValues.frame3Subheadline;
  frame3Subheadline2.innerHTML = defaultValues.frame3Subheadline2;
  frame3Subheadline3.innerHTML = defaultValues.frame3Subheadline3;
  ctaText.innerHTML = defaultValues.ctaText;
  legal.innerHTML = defaultValues.legal;
  
  //CASH BACK POPULATE ELEMENTS
  document.querySelector("#frame3headline-cashback").innerHTML = defaultValues.frame3Headline;
  document.querySelector("#frame3subheadline-cashback").innerHTML = defaultValues.frame3Subheadline;
  document.querySelector("#legal-cashback").innerHTML = defaultValues.legal;
  document.querySelector("#cta-cashback").innerHTML = defaultValues.ctaText;
}


function initDynamic() {

  if(!Enabler.isServingInLiveEnvironment()){ 
    defaultValues.frame1Image; 
    defaultValues.frame1Headline; 
    defaultValues.frame2Headline; 
    defaultValues.frame3Headline; 
    defaultValues.frame3Headline2; 
    defaultValues.frame4Headline; 
    defaultValues.ctaText; 
    defaultValues.landingPage; 

  }else{ 
    //   Invocation code here..
   Enabler.setProfileId(10564137);
    var devDynamicContent = {};

    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display = [{}];
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0]._id = 0;
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].id = 1;
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].Reporting_Label = "5f4449f70464ed0006b91ccb-a314e98bfa1c7efe4d0716df967ffc2a";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].Active = true;
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].Weights = 1;
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Image = {};
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Image.Url = "https://cdn.ad-lib.io/v2/partners/5c5329a69c0269e89882f10b/campaigns/5f4449f70464ed0006b91ccb/assets/728x90-HSBC Home Loans AU/Table.png";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Image = {};
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Image.Url = "https://cdn.ad-lib.io/v2/partners/5c5329a69c0269e89882f10b/campaigns/5f4449f70464ed0006b91ccb/assets/728x90-HSBC Home Loans AU/Table.png";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Headline = "<span style=\"display:block;line-height:0.9em\">A rate to <br>talk about<\/span>";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Headline = "<span style=\"display:block;line-height:0.9em;position: relative;top: -10px;\">Starts low <br>and stays low<\/span>";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Subheadline = "&nbsp;";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Subheadline2 = "Together we thrive";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Subheadline = "&nbsp";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Subheadline2 = "Together we thrive";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Headline = "Home Value Loan";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Headline2 = 2.59;
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Headline3 = 2.6;
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Subheadline = "Owner occupied, principal & interest";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Subheadline2 = "^Comparison rate";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Subheadline3 = "&nbsp;";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].ctaText = "Learn more";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].landingPage = {};
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].landingPage.Url = "https://www.hsbc.com.au/home-loans/products/home-value/";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].legal = "^Comparison rate warning, T&C\'s, and lending criteria applies. Issued by \nHSBC Bank Australia Limited. Australian Credit Licence\/AFSL 232595.";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].readableLabel = "Default-728x90";
    devDynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].animationType = "Version1";
    Enabler.setDevDynamicContent(devDynamicContent);

    defaultValues.frame1Image = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Image.Url;
    defaultValues.frame2Image = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Image.Url;
    defaultValues.frame1Headline = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Headline;
    defaultValues.frame2Headline = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Headline;
    defaultValues.frame1Subheadline = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Subheadline;
    defaultValues.frame1Subheadline2 = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame1Subheadline2;
    defaultValues.frame2Subheadline = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Subheadline;
    defaultValues.frame2Subheadline2 = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame2Subheadline2;
    defaultValues.frame3Headline = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Headline;
    defaultValues.frame3Headline2 = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Headline2;
    defaultValues.frame3Headline3 = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Headline3;
    defaultValues.frame3Subheadline = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Subheadline;
    defaultValues.frame3Subheadline2 = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Subheadline2;
    defaultValues.frame3Subheadline3 = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].frame3Subheadline3;
    defaultValues.ctaText = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].ctaText;
    defaultValues.landingPage = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].landingPage.Url ;
    defaultValues.legal = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].legal;
    reportingLabel = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].Reporting_Label;
    defaultValues.readableLabel = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].readableLabel;
    defaultValues.animationType = dynamicContent.HSBC_Home_Loans_3__Display_HSBC_Home_Loans_3__Display[0].animationType;
    
    var x = reportingLabel.indexOf("-") + 1;
    variationHash = reportingLabel.slice(x)
    twoDecimal();

  } 
}

function initializeAnimation () {

  //custom easeing
  CustomEase.create("inAnimation", "0, 0, 0, 0.995");
  CustomEase.create("linear", "0.250, 0.250, 0.750, 0.750");
  CustomEase.create("outAnimation", "1, 0.005, 1, 1");
  //image easing
  CustomEase.create("imageEaseIn", "0.0, 0.0, 0.580, 1.0");
  CustomEase.create("imageEaseOut", "0.420, 0.0, 1.0, 1.0");


  console.log("intializedAnimation called");

  startAnimation();
  //callGWDPlayPause();
  gsap.globalTimeline.resume();

  gsap.set(frame1Image, {scale: 1.25});

  // gsap.set(frame1Image, {opacity: 0});
  gsap.set(frame2Image, {opacity: 0});
  gsap.set(frame1Headline, {opacity: 0});
  gsap.set(frame2Headline, {opacity: 0});
  gsap.set(frame1Subheadline, {opacity: 0});
  gsap.set(frame1Subheadline2, {opacity: 0});
  gsap.set(frame2Subheadline, {opacity: 0});
  gsap.set(frame2Subheadline2, {opacity: 0}); 
  gsap.set(frame3Headline, {opacity: 0});
  gsap.set(frame3Headline2, {opacity: 0});
  gsap.set(frame3Headline3, {opacity: 0});
  gsap.set(frame3Subheadline, {opacity: 0});
  gsap.set(frame3Subheadline2, {opacity: 0});
  gsap.set(frame3Subheadline3, {opacity: 0});
  gsap.set(ctaText, {opacity: 0});
  gsap.set(legal, {opacity: 0});
  gsap.set(Logo, {opacity: 0});
  gsap.set(Hex, {opacity: 0});
  gsap.set(HexOriginal, {opacity: 0});  
  gsap.set(Logo_frame3, {opacity: 0});
  gsap.set(gradient, {opacity: 0});
  gsap.set(Line_1, {opacity: 0});
  gsap.set(LineRed, {opacity: 0});
  gsap.set(percenConstantB, {opacity: 0});
  gsap.set(percenConstantA, {opacity: 0});
  animationCall();
  
  //CASHBACK CONTAINER
  gsap.set('#cashback-container', {display: 'none'});
}


function ChartShow() {
  gsap.to(frame3Headline, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 0.5});
  gsap.to(frame3Subheadline3, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 0.5});

  gsap.to(frame3Headline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(percenConstantB, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5})
  gsap.to(frame3Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(Line_1, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(frame3Headline3, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(percenConstantA, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5})

  gsap.to(frame3Subheadline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 3});
  gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 3});

  gsap.to(frame2Image, {duration: 0.2, ease: "imageEaseIn", opacity: 1, delay: 3.5});
  gsap.to(frame2Headline, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 3.5});
  gsap.to(frame2Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 3.5});
  gsap.to(frame2Subheadline2, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 3.5});

  gsap.to(frame2Image, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(frame1Image, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(frame2Headline, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
  gsap.to(frame2Subheadline, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(frame2Subheadline2, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
  gsap.to(Logo, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(gradient, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
  gsap.to(Hex, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  
  gsap.to(frame3, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6,onComplete: function(){
    callAdlibScreenshot();
    frame3.style.left= "-4px";
    frame3.style.color = "black";
    frame3Headline3.style.color = "rgb(79, 79, 80)";
    percenConstantB.style.color = "rgb(79, 79, 80)";
    Line_1.style.opacity=0;
    LineRed.style.opacity=1;
    
    if (defaultValues.animationType == "Rates"){
      frame3Show();
    } else {
      //CALL CASHBACK ANIMATION
      cashBackAnimation();
    }
  }});
}

function ChartShowCashBack() {
  //gsap.to(frame3Headline, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 0.5});
  gsap.to(frame3Subheadline3, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 0.5});

  gsap.to(frame3Headline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(percenConstantB, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5})
  gsap.to(frame3Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(Line_1, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(frame3Headline3, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(percenConstantA, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5})

  gsap.to(frame3Subheadline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 3});
  gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 3});

  gsap.to(frame2Image, {duration: 0.2, ease: "imageEaseIn", opacity: 1, delay: 3.5});
  gsap.to(frame2Headline, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 3.5});
  gsap.to(frame2Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 3.5});
  gsap.to(frame2Subheadline2, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 3.5});

  gsap.to(frame2Image, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(frame1Image, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(frame2Headline, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
  gsap.to(frame2Subheadline, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(frame2Subheadline2, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
  gsap.to(Logo, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(gradient, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
  gsap.to(Hex, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  
  gsap.to(frame3, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6,onComplete: function(){
    callAdlibScreenshot();
    frame3.style.left= "-4px";
    frame3.style.color = "black";
    frame3Headline3.style.color = "rgb(79, 79, 80)";
    percenConstantB.style.color = "rgb(79, 79, 80)";
    Line_1.style.opacity=0;
    LineRed.style.opacity=1;
    
    //CALL CASHBACK ANIMATION
    cashBackAnimation();
  }});
}

function cashBackAnimation() {
  var tl = gsap.timeline({onComplete: function(){
    callAdlibScreenshot();
    setTimeout(function() {adlibEnd();},1000);
  }});
  
  tl.to("#cashback-container", {duration: 0, display: "block"})
    .from("#cashback-container", {duration: 0.5, ease: "imageEaseIn", opacity: 0})
    .from("#legal-cashback", {duration: 0.5, ease: "imageEaseIn", opacity: 0})
    .from("#cta-cashback-wrapper", {duration: 0.5, ease: "imageEaseIn", opacity: 0},'+=0.8');
}
function frame3Show(){
  console.log("fffff")
  gsap.to(frame3, {duration: 1, ease: "imageEaseIn", opacity: 1, delay: 0.5});
  gsap.to(Logo_frame3, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 0.5});
  gsap.to(frame3Headline, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 0.5});
  gsap.to(frame3Subheadline3, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 0.5});
  gsap.to(frame3Headline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(percenConstantB, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5})
  gsap.to(frame3Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(Line_1, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(frame3Headline3, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(percenConstantA, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5})
  gsap.to(frame3Subheadline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(legal, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 1.5});
  gsap.to(ctaText, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 2.8});
}

function animationCall () {
  
 if (defaultValues.animationType == "Rates"){
  console.log("RATES");
  gsap.set(headlineWrap,{left:0});
  gsap.to(frame1Image, { scale:1, ease: "imageEaseIn", duration: 3, delay:0});
  gsap.to(Logo, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
  gsap.to(gradient, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
  gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
  gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
  gsap.to(frame1Subheadline2, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
  gsap.to(Hex, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0, onComplete: function() {
    callAdlibScreenshot();
    ChartShow();
  }});
 } else if (defaultValues.animationType == "Aspirational") {
   
   console.log("Aspirational");
   gsap.set(headlineWrap,{left:260});
   frame3.style.left= "-4px";
   frame3.style.color = "black";
   frame3Headline3.style.color = "rgb(79, 79, 80)";
   percenConstantB.style.color = "rgb(79, 79, 80)";
   Line_1.style.opacity=0;
   LineRed.style.opacity=0;

   gsap.to(frame1Image, { scale:1, ease: "imageEaseIn", duration: 3, delay:0});

   gsap.to(Logo, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
   gsap.to(gradient, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
   gsap.to(HexOriginal, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});

   gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
   gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
   gsap.to(frame1Subheadline2, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});

   gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 3});
   gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 3});
  
   gsap.to(frame2Image, {duration: 0.2, ease: "imageEaseIn", opacity: 1, delay: 3.5});
   gsap.to(frame2Headline, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 3.5});
   gsap.to(frame2Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 3.5});
   gsap.to(frame2Subheadline2, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 3.5});

   gsap.to(frame2Image, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
   gsap.to(frame1Image, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
   gsap.to(frame2Headline, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
   gsap.to(frame2Subheadline, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
   gsap.to(frame2Subheadline2, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
   gsap.to(Logo, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
   gsap.to(gradient, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 6});
   gsap.to(HexOriginal, {duration: 0.5, ease: "v", opacity: 0, delay: 6});

   // third frame
   gsap.to(Logo_frame3, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 6.5});
   gsap.to(frame3Headline, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 6.5});
   gsap.to(frame3Subheadline3, {duration: 0.1, ease: "imageEaseIn", opacity: 1, delay: 6.5});

   gsap.to(frame3Headline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5});
   gsap.to(percenConstantB, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5})
   gsap.to(frame3Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5});
   gsap.to(LineRed, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5});
   gsap.to(frame3Headline3, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5});
   gsap.to(percenConstantA, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5})

   gsap.to(frame3Subheadline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5});
   gsap.to(legal, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 7.5});

   gsap.to(ctaText, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 8.8});
 } else if (defaultValues.animationType == "Cashback") {
   
   console.log("Cashback");
   gsap.set(headlineWrap,{left:0});
   gsap.to(frame1Image, { scale:1, ease: "imageEaseIn", duration: 3, delay:0});
   gsap.to(Logo, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
   gsap.to(gradient, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
   gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
   gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
   gsap.to(frame1Subheadline2, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
   gsap.to(Hex, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0, onComplete: function() {
     callAdlibScreenshot();
     ChartShowCashBack();
   }});
 }
} 









//////////////////////////////////////////////////
////////////// Detect Browser /////// ////////////
//////////////////////////////////////////////////



//Device Detect and browser detect 
//Note: for MAC - the chrome should be first before safari, because if the safari comes first, when you check in chrome, it will show as safari 
if (navigator.platform.indexOf('Win') > -1) { //windows 
  console.log('Device: Windows')
  if (false || !!document.documentMode) {
    console.log('Browser: IE');
    ctaText.style.position="relative";
    ctaText.style.top="-1px";


  } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstor) {
    console.log('Browser: Chrome')


    console.log("newchanges");

  } else if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
    console.log('Browser: Firefox')

  } else {


  }
} else if (navigator.platform.indexOf('Mac') > -1) { //mac 

  if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
    console.log('Browser: Firefox')


  } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore) {
    console.log('Browser: Chrome')

  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    console.log('Browser: Safari')


  } else {


  }
} else {


}

//////////////////////////////////////////////////
///////////////////////////// /////// ////////////
//////////////////////////////////////////////////




/* function callGWDPlayPause() {
  console.log("updated");
  gwd.auto_PauseBtnClick = function (event) {
    gsap.globalTimeline.pause();
    console.log("Pause Timeline");
  };
  gwd.auto_PlayBtnClick = function (event) {
    gsap.globalTimeline.resume();
    console.log("Play Timeline");
  };
}
 */










//////////////////////////////////////////////////
////////////// imageLoader workaround ////////////
//////////////////////////////////////////////////

function imageLoader(_imgs){
  console.log(_imgs);
  // Keep the count of the verified images
  var allLoaded = 0;
  // Executed everytime an img is successfully or wrong loaded
  var verifier = function(){
    allLoaded++;
    // triggers the end callback when all images has been tested
    if(allLoaded == _imgs.length){
      populate();
    }
  };
  // Loop through all the images URLs
  for (var index = 0; index < _imgs.length; index++) {
    // Prevent that index has the same value by wrapping it inside an anonymous fn
    (function(i){
      // Image path providen in the array e.g image.png
      //        alert(i);
      var imgSource = _imgs[i];
      var img = new Image();
      img.onload = function(){
        setTimeout(function(){verifier();},500);//timeout for IE
      };
      img.src = imgSource;
      img.setAttribute("source", imgSource);
    })(index);
  }
}







//////////////////////////////////////////////////
//////////////////////////////////////////////////





