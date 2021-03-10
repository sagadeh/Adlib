var defaultValues = {
  trigger:"1H1SH",
  trigger2:"Product1",
  trigger3:"Model-Right",
  frame1Image:"IRIS_HANDS-BEHIND-BACK_96DPI_RGB_DIGITAL-USE-ONLY.png",
  frame2Image:"2SKU.png",
  frame1Headline:"<span style='position:absolute;top:-40px;line-height:33px;'>For you the <br>thrifty one</span>",
  frame1Subheadline:"<span style='position:absolute;top:20px;line-height:23px;'>Complete glasses <br>from $39</span>",
  ctaText:"Shop now",
  landingPage:" ",
  customVariable:"#ececec",
  customVariable2:"ModelImage",
  customVariable3:"T&Cs apply",
  startDate:" ",
  endDate:" ",
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

    defaultValues.frame1Image;
    defaultValues.trigger;
    defaultValues.trigger2;
    defaultValues.trigger3;
    defaultValues.frame1Headline;
    defaultValues.frame1Subheadline;
    defaultValues.ctaText;
    defaultValues.landingPage;
    defaultValues.customVariable;

  }else{
    //Invocation code here
    Enabler.setProfileId(10522874);
    var devDynamicContent = {};

    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_ = [{}];
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0]._id = 0;
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].id = 1;
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].Reporting_Label = "5dfac92251c60e2fb1b66604-590645b97dcbe15f374a3d9840bed56e";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].Active = true;
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].Weights = 1;
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].isDefault = false;
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].FORMAT = [];
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].FORMAT[0] = {"Width": 300, "Height": 600};
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].trigger = "1H1SH";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].trigger2 = "Product1";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].trigger3 = "Model-Top";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].frame1Image = {};
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].frame1Image.Url = "https://cdn.ad-lib.io/5dfac92251c60e2fb1b66604/assets/300x600-Online Glasses Awareness/Marc Jacobs.png";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].frame1Headline = "<span style=\"font-size: 26px;display:block;position:absolute;top:17px;\">Claim on your health fund when you <br>buy online<span><\/span><\/span>";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].frame1Subheadline = "With your <br>optical extras";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].ctaText = "Shop now";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].landingPage = {};
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].landingPage.Url = "https://www.specsavers.com.au/glasses/all-glasses?utm_source=adlib&utm_medium=display&utm_campaign=adlib-OG-headline&utm_term=2&utm_content=300x600";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].customVariable = "#ececec";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].customVariable2 = "ProductImage";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].customVariable3 = "T&Cs apply";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].startDate = {};
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].startDate.RawValue = "2/26/2020 0:00:00";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].startDate.UtcValue = 1582704000000;
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].endDate = {};
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].endDate.RawValue = "12/31/2020 23:59:00";
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].endDate.UtcValue = 1609487940000;
    devDynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].CM_Placement_ID = [126301984, 126217709, 126217706, 126217712, 126303127];
    Enabler.setDevDynamicContent(devDynamicContent);





    defaultValues.trigger = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].trigger;
    defaultValues.trigger2 = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].trigger2;
    defaultValues.trigger3 = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].trigger3;
    defaultValues.frame1Image = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].frame1Image.Url;
    defaultValues.frame1Headline = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].frame1Headline;
    defaultValues.frame1Subheadline = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].frame1Subheadline;
    defaultValues.ctaText = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].ctaText;
    defaultValues.landingPage = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].landingPage.Url;
    defaultValues.customVariable = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].customVariable;
    defaultValues.customVariable2= dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].customVariable2;
    defaultValues.customVariable3= dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].customVariable3 ;
    defaultValues.startDate = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].endDate.RawValue;
    defaultValues.endDate = dynamicContent.Specsavers_ANZ__Online_Glasses_Awareness__Specsavers_ANZ__Online_Glasses_Awareness_[0].endDate.RawValue;
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
    topSH = "103px";
    leftSH = "50px";
    cta_1.style.top = "145px";
    cta.style.top = "145px";
    ctaarrows.style.top = "-2px";
  }

  if(defaultValues.trigger == "2H1SH"){
    leftH =  "50px";
    topH = "50px";
    leftSH = "50px";
    topSH = 50 + 76 + "px";
    cta_1.style.top = "165px";
    cta.style.top = "165px";
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
  subheadline.style.color = colorSH;
  headline.style.color = colorH;
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
  headline.innerHTML = defaultValues.frame1Headline;
  subheadline.innerHTML = defaultValues.frame1Subheadline;
  background.style.backgroundColor = defaultValues.customVariable;
  legal_1.innerHTML = defaultValues.customVariable3;
  image1.setAttribute("source", defaultValues.frame1Image);
  image2.setAttribute("source", defaultValues.frame2Image);



}

//////////////////////////////////////////////////
//////////////////////////////////////////////////





