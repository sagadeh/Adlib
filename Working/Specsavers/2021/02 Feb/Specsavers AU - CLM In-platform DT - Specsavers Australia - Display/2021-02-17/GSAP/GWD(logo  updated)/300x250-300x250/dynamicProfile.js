//dynamic variables
var defaultValues = {
    animationType:"A",
    frame1Image:"image.png",
    frame1Headline:"Claim contact<br>lenses instantly",
    frame1Headline2:"Now faster<br>delivery on time",
    frame1Subheadline:"Online with your<br>health fund",
    ctaText:"Shop now",
    legal:"T&Cs apply",
    landingPage:"https://www.specsavers.com.au/contact-lenses",
    startDate: "&nbsp;",
    endDate: "&nbsp;",
}


var backgroundImg = document.getElementById("backgroundImg");
var headline1 = document.getElementById("headline1");
var claim = document.getElementById("claim");
var subheadline1 = document.getElementById("subheadline1");
var ctatext = document.getElementById("ctatext");
var legaltext = document.getElementById("legaltext");

//init Dynamic
function initDynamic() {
    (!Enabler.isServingInLiveEnvironment()) ? adlibPlatform(): studioPlatform();
}
//tool
var adlibPlatform = () => {
    defaultValues.animationType;
    defaultValues.frame1Image;
    defaultValues.frame1Headline;
    defaultValues.frame1Headline2;
    defaultValues.frame1Subheadline;
    defaultValues.ctaTex;
    defaultValues.legal;
    defaultValues.landingPage;
}
//studio invocation code
var studioPlatform = () => {
	Enabler.setProfileId(10507439);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed = [{}];
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0]._id = 0;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].id = 1;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].Reporting_Label = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].Active = true;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].Weights = 1;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].Scoring_status = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].animationType = "A";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Image = {};
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Image.Url = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Headline = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Headline2 = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Subheadline = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].ctaText = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].legal = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].landingPage = {};
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].landingPage.Url = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].startDate = {};
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].startDate.RawValue = "01/01/2021 00:00:00 +10:00";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].startDate.UtcValue = 1609423200000;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].endDate = {};
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].endDate.RawValue = "12/31/2021 00:00:00 +10:00";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].endDate.UtcValue = 1640872800000;
    Enabler.setDevDynamicContent(devDynamicContent);


    defaultValues.animationType = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].animationType;
    defaultValues.frame1Image = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Image.Url;
    defaultValues.frame1Headline = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Headline;
    defaultValues.frame1Headline2 = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Headline2;
    defaultValues.frame1Subheadline = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].frame1Subheadline;
    defaultValues.ctaText = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].ctaText;
    defaultValues.legal = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].legal;
    defaultValues.landingPage  = dynamicContent.Specsavers_AU__Contact_Lens_Medipass_InPlatform_DT_AdLib_Feed[0].landingPage.Url;
}
//populate and customize
var populateEl = () => {

    backgroundImg.setAttribute('source', defaultValues.frame1Image);
    headline1.innerHTML = defaultValues.frame1Headline
    subheadline1.innerHTML = defaultValues.frame1Subheadline
    claim.innerHTML = defaultValues.frame1Headline2 //change to customvariable
    ctatext.innerHTML = defaultValues.ctaText
    legaltext.innerHTML = defaultValues.legal
}

//adjust curve
var adjustCurve = () => {
     //no subheadlines
     if(defaultValues.frame1Subheadline == "&nbsp;" || defaultValues.frame1Subheadline == "" ){
      subheadline1.style.display ="none"
      //frame1Wrapper.style.marginBottom ="75px"
    }
    //all
    curveWrapper.style.height = "171px";

}




