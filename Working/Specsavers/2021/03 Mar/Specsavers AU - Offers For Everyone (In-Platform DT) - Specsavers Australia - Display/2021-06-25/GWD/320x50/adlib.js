"use strict"

var defaultValues = {
  trigger:"3Frames",
  trigger2:"Green",
  trigger3:"Product",
  frame1Image:"Marc Jacobs.png",
  frame2Image:"2SKU.png",
  frame1Headline:"For you the <br>thrifty one",
  frame2Subheadline:"subheadline2",
  frame2Headline:"headline2",
  frame1Subheadline:"Complete glasses <br>from $39",
  ctaText:"<span style='position:absolute; top:15px;'>Shop now</span>",
  landingPage: "https://www.specsavers.co.uk/",
  customVariable:"#ececec",
  customVariable2:"ModelImage",
  customVariable3:" ",
  customVariable4:" ",
  startDate:" ",
  endDate:" "
}



function initDynamic(){

  if(!Enabler.isServingInLiveEnvironment()){
    //Adlib code here
    defaultValues.trigger;
    defaultValues.trigger2;
    defaultValues.trigger3;
	defaultValues.frame1Image;
    defaultValues.frame2Image;
    defaultValues.frame1Headline;
    defaultValues.frame1Subheadline;
    defaultValues.frame2Headline;
    defaultValues.frame2Subheadline;
    defaultValues.ctaText;
    defaultValues.landingPage;
	defaultValues.customVariable;
	defaultValues.customVariable2;
    defaultValues.customVariable3;
    defaultValues.customVariable4;
  }else{
    Enabler.setProfileId(10547853);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed = [{}];
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0]._id = 0;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].id = 1;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Reporting_Label = "6011171c30a8c000066421d5-6011275930a8c00006642aaf_19";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Variant_name = "A";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Active = true;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Weights = 1;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Scoring_status = "Unscored";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger = "1H1SH";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger2 = "Product1";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger3 = "Model-Top";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Image = {};
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/6011293930a8c00006642c73/original/WESLEY_WAVE_96DPI_RGB_DIGITAL-USE-ONLY.png";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Image = {};
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/60cb318296e5400006d22618/original/crop.png";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Headline = "For you the <br \/>thrifty one";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Subheadline = "Complete glasses<br \/>from $39";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Headline = "For you the <br \/>thrifty one";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Subheadline = "Complete glasses<br \/>from $39";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].ctaText = "Learn more";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].landingPage = {};
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].landingPage.Url = "https://www.specsavers.com.au/special-offers/complete-glasses-from-39";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable = "#ececec";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable2 = "ProductImage";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable3 = "T&Cs apply";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].startDate = "&nbsp;";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].endDate = "&nbsp;";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable4 = 100;
    Enabler.setDevDynamicContent(devDynamicContent);

    defaultValues.trigger =  dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger;
    defaultValues.trigger2 = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger2;
    defaultValues.trigger3 = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger3;
	defaultValues.frame1Image = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Image.Url;
    defaultValues.frame2Image = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Image.Url;
    defaultValues.frame1Headline = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Headline;
    defaultValues.frame1Subheadline = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Subheadline;
    defaultValues.frame2Headline = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Headline;
    defaultValues.frame2Subheadline = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Subheadline;
    defaultValues.ctaText = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].ctaText;
    defaultValues.landingPage = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].landingPage.Url;
	defaultValues.customVariable = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable;
	defaultValues.customVariable2 = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable2;
    defaultValues.customVariable3 = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable3;
    defaultValues.customVariable4 = dynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].customVariable4;
  }






  //Device Detect and browser detect 
  //Note: for MAC - the chrome should be first before safari, because if the safari comes first, when you check in chrome, it will show as safari 
  if(navigator.platform.indexOf('Win') > -1){ //windows 
    console.log('Device: Windows') 
    if(false || !!document.documentMode){ 
      console.log('Browser: IE') 
      headline1_2.style.top = "2px";
      headline1_1.style.top = "2px";
      headline_1.style.top = "2px";
      cta1arrow.style.top = "-20px";
      cta2arrow.style.top = "-20px";
      cta1.style.marginTop = "2px";
    } 
    else if(navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstor){ 
      console.log('Browser: Chrome') 
      headline1_2.style.top = "2px";
      headline1_1.style.top = "2px";
      headline_1.style.top = "2px";
      cta1arrow.style.top = "-18px"; // for 2frames
      cta1.style.marginTop = "2px";
      cta2arrow.style.top = "10px"; // for 3frames     

      ctatext_2.style.lineHeight = "23px";  

      headline1_2.style.lineHeight = "20px";
      headline1_1.style.lineHeight = "20px";
      headline_1.style.lineHeight = "20px";

      headline_2.style.lineHeight ="20px";
      headline2_1.style.lineHeight ="20px";
      headline_2_con_2frames.style.lineHeight ="20px";
      headline_2_con_2frames_1.style.lineHeight ="20px";
 
      console.log("changes");

    } 
    else if(navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined'){ 
      console.log('Browser: Firefox') 
      copyContainer.style.top="1px";

    } 
    else{ 


    } 
  } 

  else if(navigator.platform.indexOf('Mac') > -1){ //mac 
    console.log('Device: MAC') 
    if(navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined'){ 
      console.log('Browser: Firefox') 
      headline1_2.style.top = "2px";
      headline1_1.style.top = "2px";
      headline_1.style.top = "2px";
      cta1arrow.style.top = "-20px";
      cta2arrow.style.top = "9px";
      //cta1.style.marginTop = "2px";
      
      ctatext_1.style.top ="0px";
      ctatext_2.style.top ="0px";
    } 
    else if(navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore){ 
      console.log('Browser: Chrome') 
      
      ctatext_1.style.top ="-1px";
      ctatext_2.style.top ="-1px";
    } 
    else if(navigator.userAgent.indexOf('Safari') != -1){ 
      console.log('Browser: Safari') 
  
      ctatext_1.style.top ="-2px";
      ctatext_2.style.top ="-2px";
     
    } 
    else{ 


    } 
  } 
  else{ 


  } 


 

}


function populate(){
  
  //headline1_1.innerHTML = defaultValues.frame1Headline;
  headline_1.innerHTML = defaultValues.frame1Headline;
  headline_2.innerHTML = defaultValues.frame1Subheadline;
  ctatext_1.innerHTML = defaultValues.ctaText;
  ctatext_2.innerHTML = defaultValues.ctaText;
  //for special case like subhead=uv filter variant
  headline1_2.innerHTML = defaultValues.frame2Headline;
  headline2_1.innerHTML = defaultValues.frame2Subheadline;

  console.log("populate")
}  
  

