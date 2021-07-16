



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
    Enabler.setProfileId(10558163);
    var devDynamicContent = {};

    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_ = [{}];
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0]._id = 0;
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].id = 1;
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].Reporting_Label = "5f1022af5a8d4e0006edcdb9-d25662e359f09164f030c4aea04e5b90";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].Active = true;
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].Weights = 1;
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Image = {};
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Image.Url = "https://cdn.ad-lib.io/v2/partners/5c5329a69c0269e89882f10c/campaigns/5f1022af5a8d4e0006edcdb9/assets/300x50-J&J_DCL_ACG/Image_AandB.png";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline = "\u65B0\u767B\u5834";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline2 = "\u53F2\u4E0A\u6700\u9AD8<sup style=\"font-size: 5px;letter-spacing: -3px;top: -5px;position: relative;\">\u203B<\/sup>\u306E\u9AD8\u5BC6\u5EA6\u30CF\u30EA\u808C\u3078<br>\u30A2\u30AF\u30A2\u30B3\u30E9\u30FC\u30B2\u30F3\u30B2\u30EB&nbsp&nbsp\u30A8\u30F3\u30EA\u30C3\u30C1\u30EA\u30D5\u30C8EX";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline3 = "\u203B\u30B7\u30FC\u30E9\u30DC \u3000ACG\u30A8\u30F3\u30EA\u30C3\u30C1\u30EA\u30D5\u30C8\u53F2\u4E0A";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].ctaText = ">";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].landingPage = {};
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].landingPage.Url = "https://www.ci-labo.com/enrich.html";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].trigger = "nonTrial";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].trigger2 = "custom|21px|30px";
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].DV360_Line_Item_ID = [];
    devDynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline4 = "";
    Enabler.setDevDynamicContent(devDynamicContent);




    defaultValues.frame1Image = dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Image.Url;
    defaultValues.frame1Headline= dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline; 
    defaultValues.frame1Headline2= dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline2; 
    defaultValues.frame1Headline3 = dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline3;
    defaultValues.frame1Headline4= dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].frame1Headline4; 
    defaultValues.ctaText= dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].ctaText;
    defaultValues.landingPage = dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].landingPage.Url; 
    defaultValues.trigger = dynamicContent.JJ_DCL_JP__Q3_2020_ACG__JJ_DCL_JP__Q3_2020_ACG_[0].trigger; 
  } 
}



"use strict";




var defaultValues = { 
  frame1Image:"frame1Image_.png", 
  frame2Image:"frame1Image_.png",
  frame1Headline:"Lorem ipsum",
  frame2Headline:"Lorem ipsum",
  frame1Subheadline:"dolor sit amet consectetur",
  frame1Subheadline2:"Together we thrive",
  frame2Subheadline:"dolor sit amet consectetur",
  frame2Subheadline2:"Together we thrive",
  frame3Headline:"Lorem ipsum",
  frame3Headline2:' <span style="font-size: 82px; letter-spacing: -4px; position: relative; left: 4px;">0.00</span><span style="font-size: 36px;position: relative;top: -32px;font-family: UniversNextforHSBC_Regular;left: 5px;">%</span><span style="font-size: 20px;position: relative;top: -18px;font-family: UniversNextforHSBC_Medium;left: -26px;">p.a.<sup style="font-size: 20px; position: relative; top: -2px; left: -3px;">*</sup></span>',
  frame3Headline3:'<span style="font-size: 82px; letter-spacing: -4px; position: relative; left: 4px;">0.00</span><span style="font-size: 36px;position: relative;top: -32px;font-family: UniversNextforHSBC_Regular;left: 5px;">%</span><span style="font-size: 20px;position: relative;top: -18px;font-family: UniversNextforHSBC_Medium;left: -26px;">p.a.</span>',
  frame3Subheadline:"dolor sit amet consectetur et",
  frame3Subheadline2:"dolor sit amet consectetur et",
  frame3Subheadline3:"Together we thrive",
  ctaText:"Learn more",
  landingPage:"https://www.hsbc.com.au/home-loans/products/home-value/?cid=AUH:VI:D0:MG:05:2008:046:HLS:03M:ADL:SDA:INM:HOM:CAM:GIT:CSD:NULL",
  legal:"^Comparison rate warning, T&amp;C’s, and lending criteria applies.&nbsp;<div>Issued by HSBC Bank Australia Limited.&nbsp;</div><div>Australian Credit Licence/AFSL 232595.",
}; 










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
  callGWDPlayPause();
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
  gsap.set(Logo_frame3, {opacity: 0});
  gsap.set(gradient, {opacity: 0});










  animationCall();

}


function animationCall () {
  console.log("animation Call");



  /*   gsap.fromTo(frame1Image, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeIn,delay:0, onComplete:function(){
    callAdlibScreenshot();

  }});
  gsap.fromTo(Logo, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeIn,delay:1});
  gsap.fromTo(gradient, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeIn,delay:1.5});
  gsap.fromTo(Hex, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeIn,delay:1.5});
  gsap.fromTo(frame1Headline, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeIn,delay:2});
  gsap.fromTo(frame1Subheadline, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeIn,delay:2.25});
  gsap.fromTo(frame1Subheadline2, 0.5, {opacity: 0}, {opacity: 1, ease: Power2.easeIn,delay:2.75}); */
 gsap.to(frame1Image, { scale:1, ease: "imageEaseIn", duration: 3, delay:0});
/*   gsap.to(frame1Image, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0, onComplete:function(){
    callAdlibScreenshot();

  }}); */
  
  
  gsap.to(Logo, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
  gsap.to(gradient, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
  gsap.to(Hex, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
  
  gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});
  gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 0});
  gsap.to(frame1Subheadline2, {duration: 0.5, ease: "imageEaseIn",opacity: 1, delay: 0});


  //gsap.to(frame1Image, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 6});
  gsap.to(frame1Headline, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 3});
  gsap.to(frame1Subheadline, {duration: 0.5, ease: "imageEaseOut", opacity: 0, delay: 3});
/*   gsap.to(frame1Subheadline2, {duration: 0.5, ease: "imageEaseOut",opacity: 0, delay: 5.5});
 */

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
  gsap.to(Hex, {duration: 0.5, ease: "v", opacity: 0, delay: 6});


  gsap.to(Logo_frame3, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(frame3Headline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(frame3Headline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(frame3Subheadline, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(frame3Headline3, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(frame3Subheadline2, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(frame3Subheadline3, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(legal, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});
  gsap.to(ctaText, {duration: 0.5, ease: "imageEaseIn", opacity: 1, delay: 6.5});








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




function callGWDPlayPause() {
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





function populate () {

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
  landingPage:"https://www.hsbc.com.au/home-loans/products/home-value/?cid=AUH:VI:D0:MG:05:2008:046:HLS:03M:ADL:SDA:INM:HOM:CAM:GIT:CSD:NULL",
    legal.innerHTML = defaultValues.legal;


}

//////////////////////////////////////////////////
//////////////////////////////////////////////////





