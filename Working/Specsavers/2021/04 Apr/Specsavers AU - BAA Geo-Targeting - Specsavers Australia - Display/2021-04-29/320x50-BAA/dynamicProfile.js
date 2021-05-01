//dynamic variables
var defaultValues = {
    trigger:" ",
    trigger2:" ",
    frame1Image: "1x1.png",
    frame2Image: "1x1.png",
    frame1Headline: "<span style='color:#016c42;letter-spacing:-1px'>When was your last<br>eye test?</span>",
    frame1Subheadline: "<span style='color:#016c42; font-size:14px; '>Our qualified optometrists<br>are here to help</span>",
    frame2Headline: "When was your last<br>eye test?",
    frame2Subheadline: "<span style='color:#016c42; font-size:14px; '>Our qualified optometrists<br>are here to help</span>",
    ctaText: "Book now",
    legal:"T&C's apply",
    landingPage: "https://www.specsavers.co.uk/book/location",
    baseImage:"Greenline.png",
    customVariable:"Now faster<br>Delivery"

}

var frame1text = document.querySelector("#frame1text");
var frame2text = document.querySelector("#frame2text");
var frame3text = document.querySelector("#frame3text");
var frame4text = document.querySelector("#frame4text");

var ctatext = document.querySelector("#ctatext");

function initDynamic() {
    if(!Enabler.isServingInLiveEnvironment()){
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
    } else{
      
    Enabler.setProfileId(10614624);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed = [{}];
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0]._id = 0;
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].id = 1;
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].Reporting_Label = "605963a31b716d0006aa9c88-22e49986802a95641f89c43feabd415f";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].Active = true;
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].Weights = 1;
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Image = {};
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Image.Url = "https://cdn.ad-lib.io/v2/partners/5c5578a2e50cb95de10c079e/campaigns/605963a31b716d0006aa9c88/assets/300x600-BAA/Kam_Refractor_2.png";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Image = {};
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Image.Url = "https://cdn.ad-lib.io/v2/partners/5c5578a2e50cb95de10c079e/campaigns/605963a31b716d0006aa9c88/assets/300x600-BAA/Kam_Refractor_2.png";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Headline = "When was your<br>last eye test?";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame1Subheadline = "Our qualified optometrists<br>are here to help";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Headline = "When was your<br>last eye test?";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].frame2Subheadline = "Our qualified optometrists<br>are here to help";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].ctaText = "Book now";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].legal = "&nbsp;";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].landingPage = {};
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].landingPage.Url = "https://www.specsavers.com.au/search?term=sydney%20stores";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].baseImage = {};
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].baseImage.Url = "https://cdn.ad-lib.io/v2/partners/5c5578a2e50cb95de10c079e/campaigns/605963a31b716d0006aa9c88/assets/300x600-BAA/blank.png";
    devDynamicContent.Specsavers_AU__BAA_GeoTargeting_AdLib_Feed[0].customVariable = "&nbsp;";
    devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo = [{}];
    devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0]._id = 0;
    devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].Audience = "";
    devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].unique_ID = 1;
    devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].locationName = "non-locationtargeted";
    devDynamicContent.Specsavers__Geotargeting__BAA_2021__Assembly_Geo[0].locationTarget = "";
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



    }
}

//populate and customize
var populate = () => {
    frame1text.innerHTML = defaultValues.frame1Headline;
    frame2text.innerHTML = defaultValues.frame1Subheadline;
    frame3text.innerHTML = defaultValues.frame2Headline;
    frame4text.innerHTML = defaultValues.frame2Subheadline;

    legaltext.innerHTML = defaultValues.legal;
    ctatext.innerHTML = defaultValues.ctaText;
}
