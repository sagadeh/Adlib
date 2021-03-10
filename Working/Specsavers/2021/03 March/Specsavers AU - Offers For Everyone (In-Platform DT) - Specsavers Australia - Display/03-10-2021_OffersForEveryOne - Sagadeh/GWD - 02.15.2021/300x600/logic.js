var defaultValues = {
  trigger:"1H1SH",
  trigger2:"Product1",
  trigger3:"Model-Top",
  frame1Image:"IRIS_HANDS-BEHIND-BACK_96DPI_RGB_DIGITAL-USE-ONLY.png",
  frame2Image:"2SKU.png",
  frame1Headline:"<span style='font-size: 26px;display:block;position:absolute;top:17px;'>For you the <br>thrifty one</span>",
  frame1Subheadline:"<span style='font-size: 18px;'>Complete glasses <br>from $39</span>",
  frame2Headline:"Headline2",
  frame2Subheadline:"SubHeadline2",
  ctaText:"Learn more",
  landingPage:"https://www.specsavers.co.uk/",
  customVariable:"#ececec",
  customVariable2:"ProductImage",
  customVariable3:"T&Cs apply",
  startDate:"&nbsp;",
  endDate:"&nbsp;"

}
//frame2Image : "",
//frame2Image2 : ""

//Product1	Model-Top
//IRIS_HANDS-BEHIND-BACK_96DPI_RGB_DIGITAL-USE-ONLY.png


var headline = document.getElementById("headline");
var subheadline = document.getElementById("subheadline");

var headline_1 = document.getElementById("headline_1");
var subheadline_1 = document.getElementById("subheadline_1");

var product_green_lower = document.getElementById("product_green_lower");
var product_apple_lower = document.getElementById("product_apple_lower");

var model_green_lower = document.getElementById("model_green_lower");
var model_apple_lower = document.getElementById("model_apple_lower");

var product_green_higher = document.getElementById("product_green_higher");
var product_apple_higher  = document.getElementById("product_apple_higher");

var model_green_higher  = document.getElementById("model_green_higher");
var model_apple_higher  = document.getElementById("model_apple_higher");


var product_green_top = document.getElementById("product_green_top");
var product_apple_top  = document.getElementById("product_apple_top");

var model_green_top  = document.getElementById("model_green_top");
var model_apple_top  = document.getElementById("model_apple_top");



var ImageModel = document.getElementById("ImageModel");
var ImageProduct = document.getElementById("ImageProduct");
var ImageProduct2 =document.getElementById("ImageProduct2");


var ctaarrows  = document.getElementById("ctaarrows");
var cta_arrow_m  = document.getElementById("cta_arrow_m");
var cta_arrow_p  = document.getElementById("cta_arrow_p");
var arrow_m  = document.getElementById("arrow_m");
var arrow_p  = document.getElementById("arrow_p");


var cta_m_w_arrow = document.getElementById("cta_m_w_arrow");
var cta_m_wo_arrow = document.getElementById("cta_m_wo_arrow");
var cta_p_w_arrow = document.getElementById("cta_p_w_arrow");
var cta_p_wo_arrow = document.getElementById("cta_p_wo_arrow");

var cta_p_wo_arrow_from_right = document.getElementById("cta_p_wo_arrow_from_right");

var legal_1 = document.getElementById("legal_1");

var colorH, leftH, topH, colorSH, topSH, leftSH, colorCTA, bgcolorCTA, ctadesign;

//var isStudio = true;
var linecount;

var color = {
  black       : "#222222",
  green       : "#016c42",
  yellowgreen : "#c1d100",
  white       : "#ffffff",
  transparent : "rgba(0, 0, 0, 0)"
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
    
  }else{
    //Invocation code here

    Enabler.setProfileId(10547853);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed = [{}];
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0]._id = 0;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].id = 1;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Reporting_Label = "6011171c30a8c000066421d5-6011275930a8c00006642aaf_16";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Active = true;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Weights = 1;
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].Scoring_status = "Unscored";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger = "1H1SH";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger2 = "Product1";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].trigger3 = "Model-Top";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Image = {};
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame1Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/6011293930a8c00006642c73/original/WESLEY_WAVE_96DPI_RGB_DIGITAL-USE-ONLY.png";
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Image = {};
    devDynamicContent.Specsavers_AU__Offers_for_Everyone_Inplatform_DT_AdLib_Feed[0].frame2Image.Url = "https://cdn.ad-lib.io/v3/partners/5c5578a2e50cb95de10c079e/assets/singleFiles/6011297730a8c00006642ca5/original/30690110_Specsavers_0311_%20RGB_03.png";
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

  }






  if(defaultValues.customVariable2 == "ModelImage"){

    ImageModel.style.visibility = "visible";
  }
  if(defaultValues.customVariable2 == "ProductImage"){

    ImageProduct.style.visibility = "visible";
  }



  if(defaultValues.trigger3 =="Model-Top"){  // top green, bot apple
    model_apple_top.style.display = "block";
    model_green_top.style.display = "block";
    headline.style.visibility = "visible";
    subheadline.style.visibility = "visible";
    legal_1.style.color ="#222222";
  }
  if(defaultValues.trigger3 =="Product-Top"){ // top green, bot apple
    product_apple_top.style.display = "block";
    product_green_top.style.display = "block";
    headline_1.style.visibility = "visible";
    subheadline_1.style.visibility = "visible";
  }
  if(defaultValues.trigger3 =="Model-Low"){ // bot green, bot apple - lower
    model_apple_lower.style.display = "block";
    model_green_lower.style.display = "block";
    headline.style.visibility = "visible";
    subheadline.style.visibility = "visible";
  }
  if(defaultValues.trigger3 =="Product-Low"){ // bot green, bot apple - lower
    product_apple_lower.style.display = "block";
    product_green_lower.style.display = "block";
    headline_1.style.visibility = "visible";
    subheadline_1.style.visibility = "visible";

  }
  if(defaultValues.trigger3 =="Product-High"){ // bot green, bot apple - higher
    product_apple_higher.style.display = "block";
    product_green_higher.style.display = "block";
    headline_1.style.visibility = "visible";
    subheadline_1.style.visibility = "visible";

  }
  if(defaultValues.trigger3 =="Model-High"){ // bot green, bot apple - higher
    model_apple_higher.style.display = "block";
    model_green_higher.style.display = "block";
    headline.style.visibility = "visible";
    subheadline.style.visibility = "visible";


  }



  if(defaultValues.trigger == "4H0SH" ){
    topH = "375px";
    leftH = "19px";
    headline.style.fontSize = "30px"
    headline.style.lineHeight = "34px";
    if(defaultValues.trigger3 == "Model-High"){
      // colorH = color.white;
      subheadline.style.display  = "none"
      headline.style.fontSize = "30px"
      headline.style.lineHeight = "34px";
    }
    if(defaultValues.trigger3 == "Product-High"){
      //  colorH = color.black;
      subheadline_1.style.display  = "none"
      headline_1.style.fontSize = "30px"
      headline_1.style.lineHeight = "34px";
    }

  }
  if(defaultValues.trigger == "3H0SH"){
    topH = "385px";
    leftH = "19px";


    if(defaultValues.trigger3 == "Model-High"){
      // colorH = color.white;
      subheadline.style.display  = "none"
      headline.style.fontSize = "30px"
      headline.style.lineHeight = "34px";
      console.log("sds");
    }
    if(defaultValues.trigger3 == "Product-High"){
      //  colorH = color.black;
      subheadline_1.style.display  = "none"
      headline_1.style.fontSize = "30px"
      headline_1.style.lineHeight = "34px";
    }

  }

  if(defaultValues.trigger == "2H0SH" || defaultValues.trigger == "1H0SH"){
    topH = "442px";
    leftH = "19px";


    if(defaultValues.trigger3 == "Model-Low"){
      //  colorH = color.white;
      subheadline.style.display  = "none"
      headline.style.fontSize = "30px"
      headline.style.lineHeight = "34px";
      //Image1.style.top = "-74px";
    }
    if(defaultValues.trigger3 == "Product-Low"){
      //  colorH = color.black;
      subheadline_1.style.display  = "none"
      headline_1.style.fontSize = "30px"
      headline_1.style.lineHeight = "34px";
    }

  }
  if(defaultValues.trigger == "1H1SH" || defaultValues.trigger == "1H2SH"  || defaultValues.trigger == "2H2SH"  || defaultValues.trigger == "2H1SH"){
    topH = "26px"; //done
    leftH = "19px";
    topSH = "481px";  //done
    leftSH = "19px";
    if(defaultValues.trigger3 == "Model-Top"){
      colorH = color.white;
      colorSH = color.black;
      ImageProduct2.style.top =  "137px"
      console.log("ColorSU.black")

    }
    if(defaultValues.trigger3 == "Product-Top"){
      //   colorH = color.green;
      //   colorSH = color.black
    }
  }
  if(defaultValues.trigger == "2H3SH" ){
    topH = "26px";//done
    leftH = "19px";
    topSH = "450px";
    leftSH = "19px";
    if(defaultValues.trigger3 == "Model-Top"){
      //  colorH = color.white;
      //   colorSH = color.white;
      //  Image1.style.top =  "98px"
      console.log("hayst")

    }
    if(defaultValues.trigger3 == "Product-Top"){
      //   colorH = color.green;
      //   colorSH = color.black
    }
  }
  if(defaultValues.trigger == "2H4SH" || defaultValues.trigger == "1H4SH" ){
    topH = "26px";//done
    leftH = "19px";
    topSH = "436px";
    leftSH = "19px";
    if(defaultValues.trigger3 == "Model-Top"){
      //  colorH = color.white;
      //   colorSH = color.white;
      // Image1.style.top =  "98px"
      console.log("hayst")

    }
    if(defaultValues.trigger3 == "Product-Top"){
      //   colorH = color.green;
      //   colorSH = color.black
    }
  }

  if(defaultValues.trigger == "3H1SH" ){
    topH = "26px";//done
    leftH = "19px";
    topSH = "481px";
    leftSH = "19px";
    if(defaultValues.trigger3 == "Model-Top"){
      //  colorH = color.white;
      //   colorSH = color.white;
      //  Image1.style.top =  "98px"
      console.log("hayst")

    }
    if(defaultValues.trigger3 == "Product-Top"){
      //   colorH = color.green;
      //   colorSH = color.black
    }
  }
  if(defaultValues.trigger == "1H3SH" ){
    topH = "26px";//done
    leftH = "19px";
    topSH = "459px";
    leftSH = "19px";
    if(defaultValues.trigger3 == "Model-Top"){
      //  colorH = color.white;
      //   colorSH = color.white;
      //  Image1.style.top =  "98px"
      console.log("hayst")

    }
    if(defaultValues.trigger3 == "Product-Top"){
      //   colorH = color.green;
      //   colorSH = color.black
    }
  }


  if(defaultValues.trigger == "3H3SH" ){
    topH = "26px";//done
    leftH = "19px";
    topSH = "459px";
    leftSH = "19px";
    if(defaultValues.trigger3 == "Model-Top"){
      //  colorH = color.white;
      //   colorSH = color.white;
      //  Image1.style.top =  "98px"
      console.log("hayst")

    }
    if(defaultValues.trigger3 == "Product-Top"){
      //   colorH = color.green;
      //   colorSH = color.black
    }
  }

  if(defaultValues.trigger == "3H4SH" ){
    topH = "26px";//done
    leftH = "19px";
    topSH = "436px";
    leftSH = "19px";
    if(defaultValues.trigger3 == "Model-Top"){
      //  colorH = color.white;
      //   colorSH = color.white;
      //  Image1.style.top =  "98px"
      console.log("hayst")

    }
    if(defaultValues.trigger3 == "Product-Top"){
      //   colorH = color.green;
      //   colorSH = color.black
    }
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
      ctaarrows.style.left = "37px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "5px";
      ctaarrows.style.top = "1px";
    }
    arrow_m.style.color = color.white;
  }
  if(defaultValues.trigger2 == "Model2"){
    bgcolorCTA = color.white;
    colorCTA =  color.green;
    ctadesign = defaultValues.ctaText;
    cta_m_wo_arrow.style.visibility = "visible";
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
    ctadesign = defaultValues.ctaText;//+ "<span style='font-size:23px;  font-family: Arrrows-Regular;'>s</span>";
    cta_p_w_arrow.style.textAlign = "left";
    cta_p_w_arrow.style.maxWidth = "300px";
    cta_p_w_arrow.style.width = "300px";
    cta_p_w_arrow.style.visibility = "visible";

    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "37px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "5px";
      ctaarrows.style.top = "1px";
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
      ctaarrows.style.left = "37px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "5px";
      ctaarrows.style.top = "1px";
    }
    cta_arrow_m.style.display = "block";
    arrow_m.style.color = color.black;
  }
  if(defaultValues.trigger2 == "Product3"){
    bgcolorCTA = color.green;
    colorCTA =  color.white;
    ctadesign = defaultValues.ctaText;
    cta_p_wo_arrow_from_right.style.visibility = "visible";
  }






  headline.style.left = leftH;
  headline.style.color = colorH;
  headline.style.top = topH;
  subheadline.style.color = colorSH;
  subheadline.style.left = leftSH;
  subheadline.style.top = topSH;

  headline_1.style.left = leftH;
  headline_1.style.color = colorH;
  headline_1.style.top = topH;
  subheadline_1.style.color = colorSH;
  subheadline_1.style.left = leftSH;
  subheadline_1.style.top = topSH;


  cta_m_w_arrow.style.color = colorCTA;
  cta_m_w_arrow.style.backgroundColor =  bgcolorCTA;
  cta_m_w_arrow.innerHTML = ctadesign;

  cta_m_wo_arrow.style.color = colorCTA;
  cta_m_wo_arrow.style.backgroundColor =  bgcolorCTA;
  cta_m_wo_arrow.innerHTML = ctadesign;


  cta_p_w_arrow.style.color = colorCTA;
  cta_p_w_arrow.style.backgroundColor =  bgcolorCTA;
  cta_p_w_arrow.innerHTML = ctadesign;
  cta_p_wo_arrow.style.color = colorCTA;
  cta_p_wo_arrow.style.backgroundColor =  bgcolorCTA;
  cta_p_wo_arrow.innerHTML = ctadesign;


  cta_p_wo_arrow_from_right.style.color = colorCTA;
  cta_p_wo_arrow_from_right.style.backgroundColor =  bgcolorCTA;
  cta_p_wo_arrow_from_right.innerHTML = ctadesign;



  //console.log("C left  -", images.shapeleft)
  //console.log("C right -",images.shaperight)
  /*
console.log("H color - ", colorH);
console.log("H left  - ",leftH);
console.log("H top   - ",topH)

console.log("SH color - ", colorSH);
console.log("SH left  - ",leftSH);
console.log("SH top   - ",topSH)

console.log("CTA text -",  colorCTA)
console.log("CTA BG   - ", bgcolorCTA)

*/



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
  background.style.backgroundColor = defaultValues.customVariable;


  ImageProduct.setAttribute("source", defaultValues.frame1Image);
  ImageProduct2.setAttribute("source", defaultValues.frame2Image);


  ImageModel.setAttribute("source", defaultValues.frame1Image);


}

//////////////////////////////////////////////////
//////////////////////////////////////////////////




 //Device Detect and browser detect 
    //Note: for MAC - the chrome should be first before safari, because if the safari comes first, when you check in chrome, it will show as safari 
    if (navigator.platform.indexOf('Win') > -1) { //windows 
      console.log('Device: Windows')
      if (false || !!document.documentMode) {
        console.log('Browser: IE')
        
        cta_p_wo_arrow.style.lineHeight = "18px";
        cta_p_w_arrow.style.lineHeight = "18px";
        cta_m_w_arrow.style.lineHeight = "18px";
        cta_m_wo_arrow.style.lineHeight = "18px";
        
        
      } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstor) {
        console.log('Browser: Chrome')
        cta_p_wo_arrow.style.lineHeight = "18px";
        cta_p_w_arrow.style.lineHeight = "18px";
        cta_m_w_arrow.style.lineHeight = "18px";
        cta_m_wo_arrow.style.lineHeight = "18px";
        legal_1.style.top = "584px";
        
       // subheadline.style.top = "481px";
       // subheadline_1.style.top = "481px";

      } else if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
        console.log('Browser: Firefox')
        legal_1.style.top = "582.5px";
        console.log('changes here');

       // subheadline.style.top = "481px";
       // subheadline_1.style.top = "481px";
        
      } else {


      }
    } else if (navigator.platform.indexOf('Mac') > -1) { //mac 
      console.log('Device: MAC')
      if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
        console.log('Browser: Firefox')
        cta_p_wo_arrow.style.lineHeight = "18px";
        cta_p_w_arrow.style.lineHeight = "18px";
        cta_m_w_arrow.style.lineHeight = "18px";
        cta_m_wo_arrow.style.lineHeight = "18px";
        legal_1.style.top = "584px";
        
        
        //subheadline.style.top = "481px";
        //subheadline_1.style.top = "481px";
       

      } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore) {
        console.log('Browser: Chrome')

      } else if (navigator.userAgent.indexOf('Safari') != -1) {
        console.log('Browser: Safari')


      } else {


      }
    } else {


    }
    
    console.log("updated july 15 take 4")
    

