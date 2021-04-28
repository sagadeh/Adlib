
var defaultValues = {
  trigger:"1H1SH",
  trigger2:"Model4",
  trigger3:"Model-Right",
  frame1Image:"IRIS_HANDS-BEHIND-BACK_96DPI_RGB_DIGITAL-USE-ONLY.png",
  frame2Image:"2SKU.png",
  frame1Headline:"<span style='font-size:21px;letter-spacing:-1px;'>For you the thrifty one</span>",
  frame1Subheadline:"<span style='font-size:21px;display:block;line-height:-1px;'>Complete glasses <br>from $39</span>",
  frame2Headline:"For you the <br>thrifty one",
  frame2Subheadline:"SubHeadline2",  
  ctaText:"Learn More",
  landingPage:"https://www.Specsavers.com.au",
  customVariable:"#ececec",
  customVariable2:" ", 
  customVariable3:"T&Cs apply"
} 

var colorH, leftH, topH, colorSH, topSH, leftSH, colorCTA, bgcolorCTA, ctadesign;

var headline = document.getElementById("headline");
var subheadline = document.getElementById("subheadline");
var headline_1 = document.getElementById("headline_1");
var subheadline_1 = document.getElementById("subheadline_1");
var HandSH_Model = document.getElementById("HandSH_Model");
var HandSH_Product = document.getElementById("HandSH_Product");

var cta_p_w_arrow = document.getElementById("cta_p_w_arrow");
var cta_p_wo_arrow = document.getElementById("cta_p_wo_arrow");
var cta_m_w_arrow = document.getElementById("cta_m_w_arrow");
var cta_m_wo_arrow = document.getElementById("cta_m_wo_arrow");

var ctaarrows = document.getElementById("ctaarrows");
var arrow = document.getElementById("arrow");
var subheadline_3=document.getElementById("subheadline_3");

var product_green_center = document.getElementById("product_green_center");
var product_apple_center = document.getElementById("product_apple_center");
var model_green_center = document.getElementById("model_green_center");
var model_apple_center = document.getElementById("model_apple_center");
var product_green_right = document.getElementById("product_green_right");
var product_apple_right = document.getElementById("product_apple_right");
var model_green_right = document.getElementById("model_green_right");
var model_apple_right = document.getElementById("model_apple_right");
var Image1=document.getElementById('Image1');
var legal_1 =document.getElementById("legal_1");
var ctaWrapper_temp =document.getElementById("ctaWrapper_temp");
//var isStudio = true;


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


  if(defaultValues.trigger =="1H0SH"){
    topH= 30;

    subheadline.style.display = "none";
    subheadline_1.style.display = "none";
    if(defaultValues.trigger3 == "Model-Right"){
      leftH = "235px";
      HandSH_Product.style.display = "block";
    }
    if(defaultValues.trigger3 == "Model-Center"){
      leftH = "413px";
      HandSH_Model.style.display = "block";
    }
    if(defaultValues.trigger3 == "Product-Right"){
      leftH = "235px";
      HandSH_Product.style.display = "block"; 
    }
    if(defaultValues.trigger3 == "Product-Center"){
      leftH = "413px";    
      HandSH_Product.style.display = "block"; 
    }
  }
  if(defaultValues.trigger =="2H0SH"){
    topH= 16;

    subheadline.style.display = "none";
    subheadline_1.style.display = "none";
    if(defaultValues.trigger3 == "Model-Right"){
      leftH = "235px";
      HandSH_Product.style.display = "block";
    }
    if(defaultValues.trigger3 == "Model-Center"){
      leftH = "413px";
      HandSH_Model.style.display = "block";
    }
    if(defaultValues.trigger3 == "Product-Right"){
      leftH = "235px";
      HandSH_Product.style.display = "block"; 
    }
    if(defaultValues.trigger3 == "Product-Center"){
      leftH = "413px";   
      HandSH_Product.style.display = "block"; 
    }
  }
  if(defaultValues.trigger =="1H2SH"){
    topH= 6;
    topSH= 45;
    if(defaultValues.trigger3 == "Model-Right"){
      leftH = "235px";
      leftSH = "235px";
      HandSH_Product.style.display = "block";
    }
    if(defaultValues.trigger3 == "Model-Center"){
      leftH = "413px";
      leftSH = "413px";
      HandSH_Model.style.display = "block";
    }
    if(defaultValues.trigger3 == "Product-Right"){
      leftH = "235px";
      leftSH = "235px";
      HandSH_Product.style.display = "block"; 
    }
    if(defaultValues.trigger3 == "Product-Center"){
      leftH = "413px";
      leftSH = "413px";   
      HandSH_Product.style.display = "block"; 
    }

  }
  if(defaultValues.trigger =="1H1SH"){
    topH= 16;
    topSH= 50;

    ///
    Image1.style.display ="block";
    subheadline_1.style.display ="none";
    HandSH_Product.style.top ="-2px";
    headline.style.color =color.green;
    subheadline.style.color = color.black;
    headline_1.style.color =color.green;
    subheadline_3.style.color = color.black;
    ////
    if(defaultValues.trigger3 == "Model-Right"){
      leftH = "228px";
      leftSH = "228px";
      HandSH_Product.style.display = "block";
    }
    if(defaultValues.trigger3 == "Model-Center"){
      leftH = "413px";
      leftSH = "413px";
      HandSH_Model.style.display = "block";
    }
    if(defaultValues.trigger3 == "Product-Right"){
      leftH = "235px";
      leftSH = "235px";
      HandSH_Product.style.display = "block"; 
    }
    if(defaultValues.trigger3 == "Product-Center"){
      leftH = "413px";
      leftSH = "413px";   
      HandSH_Product.style.display = "block"; 
    }
  }

  if(defaultValues.trigger =="2H1SH"){
    topH= 12;
    topSH= 49;


    if(defaultValues.trigger3 == "Model-Right"){
      leftH = "228px";
      leftSH = "228px";
      HandSH_Product.style.display = "block";
    }
    if(defaultValues.trigger3 == "Model-Center"){
      leftH = "413px";
      leftSH = "413px";
      HandSH_Model.style.display = "block";
    }
    if(defaultValues.trigger3 == "Product-Right"){
      leftH = "235px";
      leftSH = "235px";
      HandSH_Product.style.display = "block"; 
    }
    if(defaultValues.trigger3 == "Product-Center"){
      leftH = "413px";
      leftSH = "413px";   
      HandSH_Product.style.display = "block"; 
    }


  }






  /*****************************************MODEL**************************** */
  /*
if(defaultValues.trigger =="1H0SH-M"){ //1 line Headline + no subheadline 
topH = "33px";
leftH = "312px";
colorH = color.white;
subheadline.style.visibility  = "hidden"
}
if(defaultValues.trigger =="1H1SH-M"){ //1 line Headline + 1 line subheadline
topH = "17px";
leftH = "312px";
colorH = color.white;
topSH = "49px";
leftSH = "312px";
colorSH = color.white;

}
if(defaultValues.trigger =="1H2SH-M"){ //1 line Headline  + 2 line subheadline
topH = "8px";
leftH = "312px";
colorH = color.white;
topSH =  "38px";
leftSH = "312px";
colorSH = color.white;

}
if(defaultValues.trigger =="2H0SH-M"){ //2 line Headline + no subheadline
topH = "17px";
leftH = "312px";
colorH = color.white;
subheadline.style.visibility  = "hidden"
}
if(defaultValues.trigger =="2H1SH-M"){ //2 line Headline + 1 subheadline
topH = "12px";
leftH = "312px";
colorH = color.white;
topSH =  "49px";
leftSH = "312px";
colorSH = color.white;

}
*/

  /*****************************************PRODUCT**************************** */
  /*if(defaultValues.trigger =="1H0SH-P"){ //1 line Headline + no subheadline 
topH = "33px";
leftH = "130px";
colorH = color.black;
subheadline.style.visibility  = "hidden";
headline.style.fontSize = "20px";
}

if(defaultValues.trigger =="1H1SH-P"){ //1 line Headline + 1 line subheadline
topH = "17px";
leftH = "130px";
colorH = color.green;
topSH =  "49px";
leftSH = "130px";
colorSH = color.black;
headline.style.fontSize = "20px";

}
if(defaultValues.trigger =="1H2SH-P"){ //1 line Headline  + 2 line subheadline
topH = "12px";
leftH = "130px";
colorH = color.green;
topSH =  "35px";
leftSH = "130px";
colorSH = color.black;
headline.style.fontSize = "20px";
}
if(defaultValues.trigger =="2H0SH-P"){ //2 line Headline + no subheadline
topH = "23px";
leftH = "130px";
colorH = color.black;
subheadline.style.visibility  = "hidden";
headline.style.fontSize = "20px";
}
if(defaultValues.trigger =="2H1SH-P"){ //2 line Headline + 1 subheadline
topH = "12px";
leftH = "130px";
colorH = color.green;
topSH =  "49px";
leftSH = "130px";
colorSH = color.black;
headline.style.fontSize = "20px";
}

*/





  /*
if(defaultValues.trigger2 == "Model1"){
//Model cta 1
bgcolorCTA = color.transparent;
colorCTA = color.white;
cta.style.textAlign = "left";
ctadesign = defaultValues.ctaText// + "<span class='arrows' style='font-size:14px;'>s</span>"
}
if(defaultValues.trigger2 == "C2-M"){
bgcolorCTA = color.white;
colorCTA =  color.green;
ctadesign = defaultValues.ctaText;

}

if(defaultValues.trigger2 == "C1-P"){
//cta product 1
bgcolorCTA = color.green;
colorCTA = color.white;
ctadesign = defaultValues.ctaText;
}
if(defaultValues.trigger2 == "C2-P"){
//cta product 1
bgcolorCTA = color.transparent;
colorCTA = color.green;
cta.style.textAlign = "left";
ctadesign = defaultValues.ctaText// + "<span class='arrows' style='font-size:14px;'>s</span>"
}
*/




  if(defaultValues.trigger2 == "Model1"){
    //Model cta 1
    bgcolorCTA = color.transparent;
    colorCTA = color.white;
    // cta_w_arrow.style.maxWidth = "300px";
    // cta_w_arrow.style.width = "300px";
    cta_m_w_arrow.style.visibility = "visible";

    ctadesign = defaultValues.ctaText;
    //cta_arrow.style.color = color.white;
    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "29px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "29px";
    }
    arrow.style.color = color.white;
    cta_arrow_m.style.display = "block";
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
    ctadesign = defaultValues.ctaText//+ "<span style='font-size:23px;  font-family: Arrrows-Regular;'>s</span>";
    cta_w_arrow.style.textAlign = "left";
    // cta_w_arrow.style.maxWidth = "300px";
    // cta_w_arrow.style.width = "300px";
    cta_p_w_arrow.style.visibility = "visible";
    if(defaultValues.ctaText == "Find out more"){
      ctaarrows.style.left = "29px";
    }
    if(defaultValues.ctaText == "Book now"){
      ctaarrows.style.left = "29px";
    }
    cta_arrow_p.style.display = "block";
    arrow.style.color = color.green;
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
      ctaarrows.style.left = "29px";
    }
    cta_arrow_m.style.display = "block";
    arrow.style.color = color.black;
  }


  if(defaultValues.trigger2 == "Model4"){
    bgcolorCTA = color.white;
    colorCTA =  color.green;
    ctadesign = defaultValues.ctaText;
    cta_p_wo_arrow.style.visibility = "visible";
  }



  if(defaultValues.trigger3 =="Model-Center"){
    model_apple_center.style.display = "block";
    model_green_center.style.display = "block";

  }   
  if(defaultValues.trigger3 =="Model-Right"){
    model_apple_right.style.display = "block";
    model_green_right.style.display = "block";
  }
  if(defaultValues.trigger3 =="Product-Center"){
    product_apple_center.style.display = "block";
    product_green_center.style.display = "block";
  }
  if(defaultValues.trigger3 =="Product-Right"){
    product_apple_right.style.display = "block";
    product_green_right.style.display = "block";
  }



  HandSH_Model.style.left = leftH;
  HandSH_Product.style.left = leftH;
  //subheadline.style.left = leftSH;

  //subheadline.style.color = colorSH;
  //headline.style.color = colorH;



  if (navigator.platform.indexOf('Win') > -1) { //windows 
    console.log('Device: Windows')
    if (false || !!document.documentMode) {
      console.log('Browser: IE')
      headline.style.top = topH + 5 + "px";
      subheadline.style.top = topSH  + 5 + "px";
      headline_1.style.top = topH + 5 + "px";
      subheadline_1.style.top = topSH + 5 + "px";
    } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstor) {
      console.log('Browser: Chrome')
      headline.style.top = topH + 5 + "px";
      subheadline.style.top = topSH  + 5 + "px";
      headline_1.style.top = topH + 5 + "px";
      subheadline_1.style.top = topSH + 5 + "px";
    } else if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
      console.log('Browser: Firefox');
      headline.style.top = topH + "px";
      subheadline.style.top = topSH + "px";
      headline_1.style.top = topH + "px";
      subheadline_1.style.top = topSH + "px";
      ctaWrapper_temp.style.top = "22px";
      cta_p_wo_arrow.style.paddingTop ="14px";
      cta_p_wo_arrow.style.paddingBottom ="10px";
      //  console.log('PASSSSOOOKKKK');

    } else {


    }
  } else if (navigator.platform.indexOf('Mac') > -1) { //mac 
    console.log('Device: MAC')
    if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
      console.log('Browser: Firefox')
      headline.style.top = topH + 5 + "px";
      subheadline.style.top = topSH  + 5 + "px";
      headline_1.style.top = topH + 5 + "px";
      subheadline_1.style.top = topSH + 5 + "px";
      legal_1.style.top = "69px";


    } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore) {
      console.log('Browser: Chrome')
      headline.style.top = topH + "px";
      subheadline.style.top = topSH + "px";
      headline_1.style.top = topH + "px";
      subheadline_1.style.top = topSH + "px"; 
    } else if (navigator.userAgent.indexOf('Safari') != -1) {
      console.log('Browser: Safari')
      headline.style.top = topH + "px";
      subheadline.style.top = topSH + "px";
      headline_1.style.top = topH + "px";
      subheadline_1.style.top = topSH + "px";

    } else {


    }
  } else {


  }







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

  console.log(defaultValues.trigger);
  console.log(defaultValues.trigger2);
  console.log(defaultValues.trigger3);
  //console.log("C left  -", images.shapeleft)
  //console.log("C right -",images.shaperight)
  //console.log("H color - ", colorH);
  console.log("H left  - ",leftH);
  console.log("H top   - ",topH)

  //console.log("SH color - ", colorSH);
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
/*   headline.innerHTML = defaultValues.frame1Headline;
  subheadline.innerHTML = defaultValues.frame1Subheadline; */
  headline_1.innerHTML = defaultValues.frame1Headline;
  subheadline_3.innerHTML = defaultValues.frame1Subheadline;
  background.style.backgroundColor = defaultValues.customVariable;
  legal_1.innerHTML = defaultValues.customVariable3;
  Image1.setAttribute("source", defaultValues.frame1Image);
  Image2.setAttribute("source", defaultValues.frame2Image);


}

//////////////////////////////////////////////////
//////////////////////////////////////////////////