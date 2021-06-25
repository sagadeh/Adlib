var defaultValues = {
  trigger:"3H1SH",
  trigger2:"Model2",
  trigger3:"Model-Low",
  frame1Image:"IRIS_HANDS-BEHIND-BACK_96DPI_RGB_DIGITAL-USE-ONLY.png",
  frame2Image:"2SKU.png",
  frame1Headline:"For you the<br> thrifty one",
  frame1Subheadline:"Complete glasses<br> from $39",
  frame2Headline:"frame2 headline",
  frame2Subheadline:"frame2 subheadline",
  ctaText:"Learn more",
  landingPage:"https:\\www.google.com",
  customVariable:"#ececec",
  customVariable2:"ModelImage",
  customVariable3:"T&Cs apply",
  customVariable4:" ",
  startDate:" ",
  endDate:" "
}


//
//frame2Image : "",
//frame2Image2 : ""

var headline = document.getElementById("headline");
var subheadline = document.getElementById("subheadline");
var headline_1 = document.getElementById("headline_1");
var subheadline_1 = document.getElementById("subheadline_1");
var product_green = document.getElementById("p-g-1");
var product_apple = document.getElementById("p-a-1");
var product_green_2 = document.getElementById("p-g-2");
//var product_apple_2 = document.getElementById("p-a-2");
var model_green = document.getElementById("m-g-1");
var model_apple = document.getElementById("m-a-1");
var model_apple_2 = document.getElementById("m-a-2");
//var model_apple_2 = document.getElementById("M-a-2");
var model_green_2 = document.getElementById("m-g-2");
var model_green_3 = document.getElementById("m-g-3");
var Image1 = document.getElementById("Image1");
var Image2 = document.getElementById("Image2");
var colorH, leftH, topH, colorSH, topSH, leftSH, colorCTA, bgcolorCTA, ctadesign;


var cta_p_wo_arrow = document.getElementById("cta_p_wo_arrow");
var cta_p_w_arrow = document.getElementById("cta_p_w_arrow");
var cta_m_w_arrow = document.getElementById("cta_m_w_arrow");
var cta_m_wo_arrow = document.getElementById("cta_m_wo_arrow");
var cta = document.getElementById("cta");

var cta = document.getElementById("cta_arrow");
var ctaarrows = document.getElementById("ctaarrows");

var cta_arrow_m = document.getElementById("cta_arrow_m");
var cta_arrow_p = document.getElementById("cta_arrow_p");

var arrow_m = document.getElementById("arrow_m");
var arrow_p = document.getElementById("arrow_p");
var legal_1 =document.getElementById("legal_1");
var ctaContainer =document.getElementById("ctaContainer");

var linecount;

var color = {
  black       : "#222222",
  green       : "#016c42",
  yellowgreen : "#c1d100",
  white       : "#ffffff",
  transparent : "rgba(0, 0, 0, 0)"
}

//var isStudio = true;


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
    //Invocation code here


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

  if(defaultValues.trigger3 =="Model-Low"){  // bot green, bot apple
    model_apple.style.display = "block";
    model_green.style.display = "block";
    headline.style.visibility = "visible";
    subheadline.style.visibility = "visible";

  }
  if(defaultValues.trigger3 =="Model-High"){ // top green, bot apple
    model_apple.style.display = "block";
    model_green_2.style.display = "block";
    headline.style.visibility = "visible";
    subheadline.style.visibility = "visible";

  }
  if(defaultValues.trigger3 =="Product-Low"){ // bot green, bot apple

    product_apple.style.display = "block";
    product_green.style.display = "block";
    headline_1.style.visibility = "visible";
    subheadline_1.style.visibility = "visible";

  }
  if(defaultValues.trigger3 =="Product-High"){ // top green, bot apple
    product_apple.style.display = "block";
    product_green_2.style.display = "block";
    headline_1.style.visibility = "visible";
    subheadline_1.style.visibility = "visible";

  }
  if(defaultValues.trigger3 =="Model-White"){ // bot green, bot white
    model_apple_2.style.display = "block";
    model_green.style.display = "block";
    headline.style.visibility = "visible";
    subheadline.style.visibility = "visible";
  }

  if(defaultValues.trigger3 == "Model-Low2"){
    model_apple.style.display = "block";
    model_green_3.style.display = "block";
    headline.style.visibility = "visible";
    subheadline.style.visibility = "visible";
  }



  if(defaultValues.trigger == "1H4SH"){
    topH = "38px";
    leftH = "17px";
    topSH =  "89px";
    leftSH = "17px";
  }
  if(defaultValues.trigger == "2H2SH"){
    topH = "38px";
    leftH = "17px";
    topSH =  "116px";
    leftSH = "17px";
  }
  if(defaultValues.trigger == "2H1SH"){
    topH = "38px";
    leftH = "17px";
    topSH =  "116px";
    leftSH = "17px";
  }
  if(defaultValues.trigger == "3H1SH"){ //added
    //topH = "611px";
    leftH = "17px";
    topSH =  "60px";
    leftSH = "17px";
  }
  if(defaultValues.trigger == "4H1SH"){ //added
    topH = "38px";
    leftH = "17px";
    topSH =  "159px";
    leftSH = "17px";
  }
  if(defaultValues.trigger == "2H0SH"){
    topH = "38px"; //done
    leftH = "17px";//done

    if(defaultValues.trigger3 =="Model-High" || defaultValues.trigger3 =="Model-Low" || defaultValues.trigger3 =="Model-White" || defaultValues.trigger3 =="Model-Low2" ){
      subheadline.style.display = "none";

    }
    if(defaultValues.trigger3 =="Product-High" || defaultValues.trigger3 =="Product-Low"){
      subheadline_1.style.display = "none";

    }


  }

  if(defaultValues.trigger == "3H0SH"){
    topH = "38px";
    leftH = "17px";

    if(defaultValues.trigger3 =="Model-High" || defaultValues.trigger3 =="Model-Low" || defaultValues.trigger3 =="Model-White" || defaultValues.trigger3 =="Model-Low2" ){
      subheadline.style.display = "none";

    }
    if(defaultValues.trigger3 =="Product-High" || defaultValues.trigger3 =="Product-Low"){
      subheadline_1.style.display = "none";

    }
  }

  if(defaultValues.trigger == "2H3SH"){
    topH = "38px";
    leftH = "17px";
    topSH =  "116px";
    leftSH = "17px";
  }
  if(defaultValues.trigger == "1H3SH"){
    topH = "38px";
    leftH = "17px";
    topSH =  "89px";
    leftSH = "17px";
  }


  console.log(defaultValues.trigger);
  console.log(defaultValues.trigger2);
  console.log(defaultValues.trigger3);

  if(defaultValues.trigger2 == "Model1"){
    //Model cta 1
    bgcolorCTA = color.transparent;
    colorCTA = color.white;
    cta_m_w_arrow.style.textAlign = "left";
    cta_m_w_arrow.style.maxWidth = "300px";
    cta_m_w_arrow.style.width = "300px";
    cta_m_w_arrow.style.visibility = "visible";
    cta_arrow_m.style.display = "block"
    ctadesign = defaultValues.ctaText;
    //cta_arrow.style.color = color.white;
    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "29px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "-4px";
    }
    arrow_m.style.color = color.white;
  }
  if(defaultValues.trigger2 == "Model2"){
    bgcolorCTA = color.white;
    colorCTA =  color.green;
    ctadesign = defaultValues.ctaText;
    cta_m_wo_arrow.style.visibility = "visible";
    //subheadline.style.color ="#222222";
    // subheadline_1.style.color = "#222222";

  }
  if(defaultValues.trigger2 == "Product1"){
    bgcolorCTA = color.green;
    colorCTA = color.white;
    ctadesign = defaultValues.ctaText;
    cta_p_wo_arrow.style.visibility = "visible";
  }
  if(defaultValues.trigger2 == "Product2"){
    bgcolorCTA = color.transparent;
    colorCTA = color.green;
    ctadesign = defaultValues.ctaText//+ "<span style='font-size:23px;  font-family: Arrrows-Regular;'>s</span>";
    cta_p_w_arrow.style.textAlign = "left";
    cta_p_w_arrow.style.maxWidth = "300px";
    cta_p_w_arrow.style.width = "300px";
    cta_p_w_arrow.style.visibility = "visible";
    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "29px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "-4px";
    }
    cta_arrow_p.style.display = "block";
    arrow_p.style.color = color.green;
  }
  if(defaultValues.trigger2 == "Model3"){
    bgcolorCTA = color.transparent;
    colorCTA = color.black;
    ctadesign = defaultValues.ctaText//+ "<span style='font-size:23px;  font-family: Arrrows-Regular;'>s</span>";
    cta_m_w_arrow.style.textAlign = "left";
    cta_m_w_arrow.style.maxWidth = "300px";
    cta_m_w_arrow.style.width = "300px";
    cta_m_w_arrow.style.visibility = "visible";

    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "29px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "-4px";
    }

    cta_arrow_m.style.display = "block";
    arrow_m.style.color = color.black;
  }



  setTimeout(function(){console.log("tae");
                       }, 1000);



  headline.style.left = leftH;
  //headline.style.color = colorH;
  headline.style.top = topH;
  //subheadline.style.color = colorSH;
  subheadline.style.left = leftSH;
  subheadline.style.top = topSH;

  headline_1.style.left = leftH;
  //headline_1.style.color = colorH;
  headline_1.style.top = topH;
  //subheadline_1.style.color = colorSH;
  subheadline_1.style.left = leftSH;
  subheadline_1.style.top = topSH;


  cta_p_wo_arrow.style.color = colorCTA;
  cta_p_wo_arrow.style.backgroundColor =  bgcolorCTA;
  cta_p_wo_arrow.innerHTML = ctadesign;

  cta_p_w_arrow.style.color = colorCTA;
  cta_p_w_arrow.style.backgroundColor =  bgcolorCTA;
  cta_p_w_arrow.innerHTML = ctadesign;

  cta_m_wo_arrow.style.color = colorCTA;
  cta_m_wo_arrow.style.backgroundColor =  bgcolorCTA;
  cta_m_wo_arrow.innerHTML = ctadesign;


  cta_m_w_arrow.style.color = colorCTA;
  cta_m_w_arrow.style.backgroundColor =  bgcolorCTA;
  cta_m_w_arrow.innerHTML = ctadesign;




  //console.log("C left  -", images.shapeleft)
  //console.log("C right -",images.shaperight)
  //console.log("H color - ", colorH);
  console.log("H left  - ",leftH);
  console.log("H top   - ",topH)

  //console.log("SH color - ", colorSH);
  console.log("SH left  - ",leftSH);
  console.log("SH top   - ",topSH)

  //console.log("CTA text -",  colorCTA)
  //console.log("CTA BG   - ", bgcolorCTA)



  console.log("july 31")


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


function populate(){
  headline.innerHTML = defaultValues.frame1Headline;
  subheadline.innerHTML = defaultValues.frame1Subheadline;
  headline_1.innerHTML = defaultValues.frame1Headline;
  subheadline_1.innerHTML = defaultValues.frame1Subheadline;
  legal_1.innerHTML = defaultValues.customVariable3;
  Image1.setAttribute("source", defaultValues.frame1Image);
  Image2.setAttribute("source", defaultValues.frame2Image);

}

//////////////////////////////////////////////////
//////////////////////////////////////////////////


//Device Detect and browser detect
//Note: for MAC - the chrome should be first before safari, because if the safari comes first, when you check in chrome, it will show as safari
if (navigator.platform.indexOf('Win') > -1) { //windows
  console.log('Device: Windows')
  if (false || !!document.documentMode) {
    console.log('Browser: IE')
    cta_p_wo_arrow.style.lineHeight = "19px";
    cta_p_w_arrow.style.lineHeight = "19px";
    cta_m_w_arrow.style.lineHeight = "19px";
    cta_m_wo_arrow.style.lineHeight = "19px";
  } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstor) {
    console.log('Browser: Chrome')
    cta_p_wo_arrow.style.lineHeight = "19px";
    cta_p_w_arrow.style.lineHeight = "19px";
    cta_m_w_arrow.style.lineHeight = "19px";
    cta_m_wo_arrow.style.lineHeight = "19px";
  } else if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
    console.log('Browser: Firefox')
    cta_m_wo_arrow.style.lineHeight = "20px";
    ctaContainer.style.top = "190px";


  } else {


  }
} else if (navigator.platform.indexOf('Mac') > -1) { //mac
  console.log('Device: MAC')
  if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
    console.log('Browser: Firefox')
    cta_p_wo_arrow.style.lineHeight = "19px";
    cta_p_w_arrow.style.lineHeight = "19px";
    cta_m_w_arrow.style.lineHeight = "19px";
    cta_m_wo_arrow.style.lineHeight = "19px";
  } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore) {
    console.log('Browser: Chrome')

  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    console.log('Browser: Safari')


  } else {


  }
} else {


}

///// special client request "Make the Color Headline Green " ////

headline_1.style.color ="#016c42";
headline.style.color ="#016c42";
/* subheadline.style.color ="#016c42";
subheadline_1.style.color ="#016c42"; */

///////////////////////////////



