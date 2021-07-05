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
    customVariable:" ",
}


var backgroundImg = document.getElementById("backgroundImg");
var headline1 = document.getElementById("headline1");
var claim = document.getElementById("claim");
var subheadline1 = document.getElementById("subheadline1");
var ctatext = document.getElementById("ctatext");
var legaltext = document.getElementById("legaltext");
//var frame1Wrapper = document.getElementById("frame1Wrapper");

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
    defaultValues.customVariable;
}
//studio invocation code
var studioPlatform = () => {
    Enabler.setProfileId(10631243);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform = [{}];
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0]._id = 0;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].id = 1;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].Reporting_Label = "6080e6d1cda0120006424f48-6080edabcda012000642512a_25";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].Variant_name = "A";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].Active = true;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].Weights = 1;
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].Scoring_status = "Unscored";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].animationType = "A";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Image = {};
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/608104fccda0120006425bcf/original/crop.png";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Headline = "Spend and save<br \/>on contact lenses";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Headline2 = "Tracked delivery<br \/>on all orders";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Subheadline = "&nbsp;";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].ctaText = "Shop now";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].legal = "T&Cs apply";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].landingPage = {};
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].landingPage.Url = "https://www.specsavers.com.au/contact-lenses";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].startDate = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].endDate = "";
    devDynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].customVariable = 100;
    Enabler.setDevDynamicContent(devDynamicContent);
        
    defaultValues.animationType = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].animationType;
    defaultValues.frame1Image =  dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Image.Url;
    defaultValues.frame1Headline = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Headline;
    defaultValues.frame1Headline2 = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Headline2;
    defaultValues.frame1Subheadline = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].frame1Subheadline;
    defaultValues.ctaText = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].ctaText;
    defaultValues.legal = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].legal;
    defaultValues.landingPage = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].landingPage.Url;
    defaultValues.customVariable = dynamicContent.Specsavers_AU__Contact_Lens_Medipass__Multi_vs_Single_packshot_InPlatform[0].customVariable;
}
//populate and customize
var populate = () => {

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




