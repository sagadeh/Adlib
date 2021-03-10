"use strict";


//Trigger
//377VC
//VC100
//AQUAINDERM
var defaultValues = {
	cssAttrib:"<! –– css styling if necessary ––>",
	frame1Headline:"ケラツア4.5",
	frame1Headline2:"碁亀欄ろござだ",
	frame1Background:"frame1Background.png",
	disclaimer:"誌由トソ暮浩ニメ鬼見極ほびス平",
	logo:"logo.png",
	frame1Image:"600x400-AQUAINDERM-RATINGS.png",
	trigger:"AQUAINDERM"
};

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
    	// defaultValues.frame1Headline; <-- example dynamic naming convension
    	// defaultValues.baseImage; <-- example dynamic naming convension



    } else {
      //invocation code from studio here...
    }
}


function populate() {
  document.querySelector("#frame1Headline").innerHTML = defaultValues.frame1Headline;
  document.querySelector("#frame1Headline2").innerHTML = defaultValues.frame1Headline2;
  document.querySelector("#frame1Background").setAttribute("source", defaultValues.frame1Background);
  document.querySelector("#disclaimer").innerHTML = defaultValues.disclaimer;
  document.querySelector("#logo").setAttribute("source", defaultValues.logo);
  document.querySelector("#frame1Image").setAttribute("source", defaultValues.frame1Image);
}
