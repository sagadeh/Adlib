var defaultValues = {
  trigger:"2H1SH",
  trigger2:"Product1",
  trigger3:"Model-Right",
  frame1Image:"IRIS_HANDS-BEHIND-BACK_96DPI_RGB_DIGITAL-USE-ONLY.png",
  frame2Image:"2SKU.png",
  frame1Headline:"For you the <br>thrifty one",
  frame1Subheadline:"Complete glasses from $39",
  frame2Headline:"frame2 headline",
  frame2Subheadline:"frame2 subheadline",
  ctaText:"Learn more",
  landingPage:" ",
  customVariable:"#ececec",
  customVariable2:"ModelImage",
  customVariable3:"T&Cs apply"
  customVariable4:" "
} 
//frame2Image : "",
//frame2Image2 : ""

var headline = document.getElementById("headline");
var subheadline = document.getElementById("subheadline");
var cta = document.getElementById("cta");


var product_green_center_dome = document.getElementById("product_green_center_dome");
var product_apple_center_dome = document.getElementById("product_apple_center_dome");
var model_green_center_dome = document.getElementById("model_green_center_dome");
var model_apple_center_dome = document.getElementById("model_apple_center_dome");
var product_green_center = document.getElementById("product_green_center");
var product_apple_center = document.getElementById("product_apple_center");
var model_green_center = document.getElementById("model_green_center");
var model_apple_center = document.getElementById("model_apple_center");
var product_green_right = document.getElementById("product_green_right");
var product_apple_right = document.getElementById("product_apple_right");
var model_green_right = document.getElementById("model_green_right");
var model_apple_right = document.getElementById("model_apple_right");
var legal_1 = document.getElementById("legal_1");
var arrow = document.getElementById("arrow");


var colorH, leftH, topH, colorSH, topSH, leftSH, colorCTA, bgcolorCTA, ctadesign;
var ctaarrows = document.getElementById("ctaarrows");
var cta_1 = document.getElementById("cta_1");
var cta_arrow = document.getElementById("cta_arrow");
var linecount;



var color = {
  black       : "#222222",
  green       : "#016c42",
  yellowgreen : "#c1d100",
  white       : "#ffffff",
  transparent : "rgba(0, 0, 0, 0)"
}

/*
var images = {
    shapeleft : "",
    shaperight: ""
}

*/

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


  if(defaultValues.trigger == "2H0SH"){
    topH = "62px";
    leftH = "50px";
    subheadline.style.display = "none";
    cta_1.style.top = "145px";
    cta.style.top = "145px";
    ctaarrows.style.top = "-2px";
  }
  if(defaultValues.trigger == "1H0SH"){
    topH = "97px";
    leftH = "50px";
    subheadline.style.display = "none";
    cta_1.style.top = "145px";
    cta.style.top = "145px";
    ctaarrows.style.top = "-2px";
  }
  if(defaultValues.trigger == "1H2SH"){
    topH = "62px";
    leftH = "50px";
    topSH = "103px";
    leftSH = "50px";
    cta_1.style.top = "169px";
    cta.style.top = "169px";
    ctaarrows.style.top = "23px";
    subheadline.style.lineHeight = "26px";
    subheadline.style.letterSpacing ="0.2px";
  }
  if(defaultValues.trigger == "1H1SH"){
    topH = "62px";
    leftH = "50px";
    topSH = 50 + 76 + "px";
    leftSH = "50px";
    cta_1.style.top = "145px";
    cta.style.top = "145px";
    ctaarrows.style.top = "-2px";
  }

  if(defaultValues.trigger == "2H1SH"){
    leftH =  "50px";
    topH = "47px";
    leftSH = "50px";
    topSH = "119px";
    cta_1.style.top = "146px";
    cta.style.top = "146px";
  }




  /*
var show = {
    elements : function() {
         TweenLite.to([headline, subheadline, cta], 0.7, {delay:0.6,alpha:1, force3D:true});
    }

}
*/
  //fontsizeH - 30px
  //width: 330px;
  //height: 85px;
  /*****************************************MODEL**************************** */
  /*
if(defaultValues.trigger =="1H0SH-M"){ //1 line Headline + no subheadline 
console.log("hey")
colorH = color.white;
leftH =  "50px"
topH = "95px"
subheadline.style.visibility  = "hidden"
}
if(defaultValues.trigger =="1H1SH-M"){ //1 line Headline + 1 line subheadline
colorH = color.white;
leftH =  "50px"
topH = "62px"
colorSH = color.white
leftSH = "50px"
topSH = 62 + 42 + "px";
}
if(defaultValues.trigger =="1H2SH-M"){ //1 line Headline  + 2 line subheadline
colorH = color.white;
leftH =  "50px"
topH = "62px"
colorSH = color.white
leftSH = "50px"
topSH = 62 + 42 + "px";
cta.style.top = "165px";
}
if(defaultValues.trigger =="2H0SH-M"){ //2 line Headline + no subheadline
colorH = color.white;
leftH =  "50px"
topH = "62px"
subheadline.style.visibility  = "hidden"
}
if(defaultValues.trigger =="2H1SH-M"){ //2 line Headline + 1 subheadline
colorH = color.white;
leftH =  "50px"
topH = "50px"
colorSH = color.white
leftSH = "50px"
topSH = 50 + 76 + "px";
cta.style.top = "165px";
}
if(defaultValues.trigger =="2H2SH-M"){ //2 line Headline + 2 subheadline
colorH = color.white;
leftH =  "50px"
topH = "30px"
colorSH = color.black
leftSH = "50px"
topSH = 30 + 76 + "px";
cta.style.top = "165px";
}*/
  /*****************************************PRODUCT**************************** */
  /*
if(defaultValues.trigger =="1H0SH-P"){ //1 line Headline + no subheadline 
colorH = color.black;   
leftH =  "50px"
topH = "95px"
subheadline.style.visibility  = "hidden"
}

if(defaultValues.trigger =="1H1SH-P"){ //1 line Headline + 1 line subheadline
colorH = color.green;   
leftH =  "50px"
topH = "62px"
colorSH = color.black
leftSH = "50px"
topSH = 62 + 42 + "px";
}
if(defaultValues.trigger =="1H2SH-P"){ //1 line Headline  + 2 line subheadline
colorH = color.green;   
leftH =  "50px"
topH = "62px"
colorSH = color.black
leftSH = "50px"
topSH = 62 + 42 + "px";
cta.style.top = "159px";
}
if(defaultValues.trigger =="2H0SH-P"){ //2 line Headline + no subheadline
colorH = color.black;   
leftH =  "50px"
topH = "62px"
subheadline.style.visibility  = "hidden"
}
if(defaultValues.trigger =="2H1SH-P"){ //2 line Headline + 1 subheadline
colorH = color.green;   
leftH =  "50px"
topH = "50px"
colorSH = color.black
leftSH = "50px"
topSH = 50 + 76 + "px";
cta.style.top = "159px";
}
if(defaultValues.trigger =="2H2SH-P"){ //2 line Headline + 2 subheadline
colorH = color.green;   
leftH =  "50px"
topH = "30px"
colorSH = color.black
leftSH = "50px"
topSH = 30 + 76 + "px";
cta.style.top = "165px";
}
*/
  console.log(defaultValues.trigger);
  console.log(defaultValues.trigger2);
  console.log(defaultValues.trigger3);

  if(defaultValues.trigger2 == "Model1"){
    //Model cta 1
    bgcolorCTA = color.transparent;
    colorCTA = color.white;
    cta_1.style.textAlign = "left";
    ctadesign = defaultValues.ctaText// + "<span class='arrows' style='font-size:14px;'>s</span>"
    ctaarrows.style.display = "block";
    cta_1.style.visibility = "visible";
    cta_arrow.style.display = "block";
    arrow.style.color = color.white;
    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "66px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "39px";
      ctaarrows.style.top = "0px";
    }
  }
  if(defaultValues.trigger2 == "Model2"){
    bgcolorCTA = color.white;
    colorCTA =  color.green;
    ctadesign = defaultValues.ctaText;
    cta.style.visibility = "visible";
  }
  if(defaultValues.trigger2 == "Product1"){
    //cta product 1
    bgcolorCTA = color.green;
    colorCTA = color.white;
    ctadesign = defaultValues.ctaText;
    cta.style.visibility = "visible";
  }
  if(defaultValues.trigger2 == "Product2"){
    //cta product 1
    bgcolorCTA = color.transparent;
    colorCTA = color.green;
    cta_1.style.textAlign = "left";
    ctadesign = defaultValues.ctaText// + "<span class='arrows' style='font-size:14px;'>s</span>"
    ctaarrows.style.display = "block";
    cta_1.style.visibility = "visible";
    cta_arrow.style.display = "block";
    arrow.style.color = color.green;
    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "66px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "39px";
      ctaarrows.style.top = "0px";
    }
  }

  if(defaultValues.trigger3 =="Model-Right"){
    model_apple_right.style.display = "block";
    model_green_right.style.display = "block";
  }   
  if(defaultValues.trigger3 =="Model-Center"){
    model_apple_center.style.display = "block";
    model_green_center.style.display = "block";
  }
  if(defaultValues.trigger3 =="Model-Center-Dome"){
    model_apple_center_dome.style.display = "block";
    model_green_center_dome.style.display = "block";
  }
  if(defaultValues.trigger3 =="Product-Right"){
    product_apple_right.style.display = "block";
    product_green_right.style.display = "block";
  }
  if(defaultValues.trigger3 =="Product-Center"){
    product_apple_center.style.display = "block";
    product_green_center.style.display = "block";
  }
  if(defaultValues.trigger3 =="Product-Center-Dome"){
    product_apple_center_dome.style.display = "block";
    product_green_center_dome.style.display = "block";
  }



  headline.style.left = leftH;
  subheadline.style.left = leftSH;
  headline.style.top = topH;
  //subheadline.style.color = colorSH;
  //headline.style.color = colorH;
  subheadline.style.top = topSH;
  cta.style.color = colorCTA;
  cta.style.backgroundColor =  bgcolorCTA;
  cta.innerHTML = ctadesign;


  cta_1.style.color = colorCTA;
  cta_1.style.backgroundColor =  bgcolorCTA;
  cta_1.innerHTML = ctadesign;

  //console.log("C left  -", images.shapeleft)
  //console.log("C right -",images.shaperight)
  console.log("H color - ", colorH);
  console.log("H left  - ",leftH);
  console.log("H top   - ",topH)

  console.log("SH color - ", colorSH);
  console.log("SH left  - ",leftSH);
  console.log("SH top   - ",topSH)

  console.log("CTA text -",  colorCTA)
  console.log("CTA BG   - ", bgcolorCTA)





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
  image1.setAttribute("source", defaultValues.frame1Image);
  image2.setAttribute("source", defaultValues.frame2Image);
  headline.innerHTML = defaultValues.frame1Headline;
  subheadline.innerHTML = defaultValues.frame1Subheadline;
  background.style.backgroundColor = defaultValues.customVariable;
  legal_1.innerHTML = defaultValues.customVariable3;




}

//////////////////////////////////////////////////
//////////////////////////////////////////////////


///// special client request "Make the Color Headline Green " ////

//headline_1.style.color ="#016c42";
headline.style.color ="#016c42";
//subheadline.style.color ="#016c42";
//subheadline_1.style.color ="016c42";

///////////////////////////////


