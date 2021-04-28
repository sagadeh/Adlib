//dynamic variables
var defaultValues = {
    trigger:"withSubMediumHeadMediumSub",
    trigger2:"0px",
    frame1Image:"ContactLenses_LoveGlasses_00749.png",
    frame2Image:"ContactLenses_LoveGlasses_00835.png",
    frame1Headline:"The most revealing<br>eye test yet",
    frame1Subheadline:"Advanced 3D eye scan",
    frame2Headline:"Every test,<br>no extra charge",
    frame2Subheadline:"So why trust<br>anyone else?",
    ctaText:"Book Now",
    legal:"T&Cs apply",
    landingPage:"https://www.specsavers.com.au/contact-lenses",
    baseImage:"Greenline.png",
    customVariable:"Now faster<br>Delivery"
}





var backgroundImg = document.getElementById("backgroundImg");
var backgroundImg2 = document.getElementById("backgroundImg2");

var headline1 = document.getElementById("headline1");
var subheadline1 = document.getElementById("subheadline1");

var headline2 = document.getElementById("headline2");
var subheadline2 = document.getElementById("subheadline2");

var imagetag = document.getElementById("imagetag");
var ctatext = document.getElementById("ctatext");
var legaltext = document.getElementById("legaltext");

//init Dynamic
function initDynamic() {
    (!Enabler.isServingInLiveEnvironment()) ? adlibPlatform(): studioPlatform();
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
}
//studio invocation code
var studioPlatform = () => {
    Enabler.setProfileId(10503048);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed = [{}];
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0]._id = 0;
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].id = 1;
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].Reporting_Label = "60051d7c30a8c000065a890b-600521e730a8c000065a899e_27";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].Active = true;
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].Weights = 1;
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].Scoring_status = "Unscored";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].trigger = "A";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].trigger2 = "Default";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame1Image = {};
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame1Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/6005264a30a8c000065a8a52/original/Kam%20slit%20lamp-72DPI.png";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame2Image = {};
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame2Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/6005264a30a8c000065a8a52/original/Kam%20slit%20lamp-72DPI.png";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame1Headline = "The most revealing eye test yet";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame1Subheadline = "Advanced 3D eye scan";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame2Headline = "Every test, no extra charge";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame2Subheadline = "So why trust anyone else?";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].ctaText = "Book now";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].legal = "&nbsp;";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].landingPage = {};
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].landingPage.Url = "https://www.specsavers.com.au/stores";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].baseImage = {};
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].baseImage.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/5ffd57747e75000006e4d627/original/blank.png";
    devDynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].customVariable = "&nbsp;";
    Enabler.setDevDynamicContent(devDynamicContent);


	defaultValues.trigger = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].trigger;
	defaultValues.trigger2  = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].trigger2;
	defaultValues.frame1Image = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame1Image.Url;
	defaultValues.frame2Image = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame2Image.Url;
	defaultValues.frame1Headline = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame1Headline;
	defaultValues.frame1Subheadline = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame1Subheadline;
	defaultValues.frame2Headline = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame2Headline;
	defaultValues.frame2Subheadline = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].frame2Subheadline;
	defaultValues.ctaText = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].ctaText;
	defaultValues.legal = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].legal;
	defaultValues.landingPage = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].landingPage.Url;
	defaultValues.baseImage = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].baseImage.Url;
	defaultValues.customVariable = dynamicContent.Specsavers_AU__BAA_InPlatform_DT_AdLib_Feed[0].customVariable;

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


}

//adjust curve
var adjustCurve = () => {
     //no subheadlines
     if(defaultValues.frame1Subheadline == "&nbsp;" || defaultValues.frame1Subheadline == "" ){
      subheadline1.style.display ="none"
      frame1Wrapper.style.marginBottom ="75px"
    }
    //all
    curveWrapper.style.height = "171px";

}




