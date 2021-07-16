//dynamic variables
var defaultValues = {
    trigger:"withSubMediumHeadMediumSub",
    trigger2:"0px",
    frame1Image:"ContactLenses_LoveGlasses_00749.png",
    frame2Image:"ContactLenses_LoveGlasses_00835.png",
    frame1Headline:"The most revealing eye test yet",
    frame1Subheadline:"Advanced 3D eye scan",
    frame2Headline:"Every test, no extra charge",
    frame2Subheadline:"So why trust anyone else?",
    ctaText:"Learn more",
    legal:"T&Cs apply",
    landingPage:"https://www.specsavers.com.au/contact-lenses",
    baseImage:"Greenline.png",
    customVariable:"Now faster<br>Delivery",
    customVariable2:"100"
}




var backgroundImg = document.getElementById("backgroundImg");
var backgroundImg1 = document.getElementById("backgroundImg1");

var headline1 = document.getElementById("headline1");
var subheadline1 = document.getElementById("subheadline1");

var headline2 = document.getElementById("headline2");
var subheadline2 = document.getElementById("subheadline2");

var imagetag = document.getElementById("imagetag");
var ctatext = document.getElementById("ctatext");
var legaltext = document.getElementById("legaltext");

//init Dynamic
function initDynamic() {
    (Enabler.isServingInLiveEnvironment()) ? adlibPlatform(): studioPlatform();
}
//tool
var adlibPlatform = () => {
	defaultValues.trigger;
	defaultValues.trigger2;
	defaultValues.frame1Image;
	defaultValues.frame2Image;
	defaultValues.frame1Headline;
	defaultValues.frame1Subheadline;
	defaultValues.frame2Headline;
	defaultValues.frame2Subheadline;
	defaultValues.ctaText;
	defaultValues.legal;
	defaultValues.landingPage;
    defaultValues.baseImage;
    defaultValues.customVariable;
    defaultValues.customVariable2;
}
//studio invocation code
var studioPlatform = () => {
  Enabler.setProfileId(10614624);
  var devDynamicContent = {};

  devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo = [{}];
  devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0]._id = 0;
  devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].Audience = "";
  devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].unique_ID = 1;
  devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].locationName = "non-locationtargeted";
  devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].locationTarget = "";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed = [{}];
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0]._id = 0;
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].id = 1;
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].Reporting_Label = "605963a31b716d0006aa9c88-d5f6b424e3d7d4e2fe106ca1b936df33";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].Active = true;
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].Weights = 1;
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].trigger2 = "2000,New South Wales,Australia";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Image = {};
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Image.Url = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Image = {};
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Image.Url = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Headline = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Subheadline = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Headline = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Subheadline = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].ctaText = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].legal = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].landingPage = {};
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].landingPage.Url = "https://www.specsavers.com.au/search?term=sydney%20stores";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].baseImage = {};
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].baseImage.Url = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].customVariable = " ";
  devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].customVariable2 = " ";
  Enabler.setDevDynamicContent(devDynamicContent);


  //defaultValues.trigger = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].trigger;
  //defaultValues.trigger2  = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].trigger2;
  defaultValues.frame1Image = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Image.Url;
  defaultValues.frame2Image = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Image.Url;
  defaultValues.frame1Headline = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Headline;
  defaultValues.frame1Subheadline = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Subheadline;
  defaultValues.frame2Headline = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Headline;
  defaultValues.frame2Subheadline = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Subheadline;
  defaultValues.ctaText = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].ctaText;
  defaultValues.legal = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].legal;
  defaultValues.landingPage = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].landingPage.Url;
  defaultValues.baseImage = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].baseImage.Url;
  defaultValues.customVariable = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].customVariable;
  defaultValues.customVariable2 = dynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].customVariable2;
}
//populate and customize
var populate = () => {

    backgroundImg.setAttribute('source', defaultValues.frame1Image);
    backgroundImg2.setAttribute('source', defaultValues.frame2Image);

    headline1.innerHTML = defaultValues.frame1Headline
    subheadline1.innerHTML = defaultValues.frame1Subheadline

    headline2.innerHTML = defaultValues.frame2Headline
    subheadline2.innerHTML = defaultValues.frame2Subheadline

    ctatext.innerHTML = defaultValues.ctaText
    legaltext.innerHTML = defaultValues.legal

    greenline.setAttribute('source', defaultValues.baseImage);
    imagetag.innerHTML = defaultValues.customVariable;




  if(defaultValues.ctaText == "Learn more"){
    arrowWrapper.style.left = "379px"
  }
  else if(defaultValues.ctaText == "Shop now"){
    arrowWrapper.style.left = "370px"
  }
  else if(defaultValues.ctaText == "Book now"){
    arrowWrapper.style.left = "370px"
  }


}

//adjust curve
var adjustCurve = () => {
     //no subheadlines
    /* if(defaultValues.frame1Subheadline == "&nbsp;" || defaultValues.frame1Subheadline == "" ){
      subheadline1.style.display ="none"
      frame1Wrapper.style.marginBottom ="75px"
    }*/
    //all
    //curveWrapper.style.height = "171px";

}



