var defaultValues = {
  trigger:"3Frames",
  trigger2:"Green",
  trigger3:"Product",
  frame1Image:"Marc Jacobs.png",
  frame2Image:"2SKU.png",
  frame1Headline:"For you the <br>thrifty one",
  frame2Subheadline:"subheadline2",
  frame2Headline:"headline2",
  frame1Subheadline:"Complete glasses <br>from $39",
  ctaText:"<span style='position:absolute; top:15px;'>Shop now</span>",
  landingPage: "https://www.specsavers.co.uk/",
  customVariable:"#ececec",
  customVariable2:"ModelImage",
  customVariable3:" ",
  startDate:" ",
  endDate:" "
}


var ctaColor;
var color = {
  black       : "#222222",
  green       : "#016c42",
  yellowgreen : "#c1d100",
  white       : "#ffffff",
  transparent : "rgba(0, 0, 0, 0)"
}

var cta1 = document.getElementById("cta1");
var cta2 = document.getElementById("cta2");

var ctatext_1 = document.getElementById("ctatext_1");
var ctatext_2 = document.getElementById("ctatext_2");


var ctatext = document.getElementById("ctatext");
var cta_arrow_1 = document.getElementById("cta_arrow_1");
var cta_arrow_2 = document.getElementById("cta_arrow_2");


var arrow1 = document.getElementById("arrow1");
var arrow2 = document.getElementById("arrow2");


var headline1_1 = document.getElementById("headline1_1");
var headline_1 = document.getElementById("headline1");
var headline_2 = document.getElementById("headline2");

var headline1_2 = document.getElementById("headline1_2"); //for special cases
var headline2_1 = document.getElementById("headline2_1");//for special cases

headline1_1.style.color = "#016c42";
headline_1.style.color = "#016c42";
headline_2.style.color = "#016c42";
headline1_2.style.color = "#016c42";
headline2_1.style.color = "#016c42";


var headline_1_con_2frames = document.getElementById("headline_1_con_2frames");
var headline_2_con_2frames = document.getElementById("headline_2_con_2frames");


var headline_1_con_2frames_1 = document.getElementById("headline_1_con_2frames_1");
var headline_2_con_2frames_1 = document.getElementById("headline_2_con_2frames_1");


var headline_1_container = document.getElementById("headline_1_container");


var cta1arrow = document.getElementById("cta1arrow");
var cta2arrow = document.getElementById("cta2arrow");


var modelshape = document.getElementById("modelshape");
var productshape = document.getElementById("productshape");
var copyContainer = document.getElementById("copyContainer");


var ctaarrowColor;

//var isStudio = false;


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

    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone = [{}];
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0]._id = 0;
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].id = 1;
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].Reporting_Label = "5efbca17b8ca82000652121b-55b8fcf728961683b1d51a4f6b0f52a9";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].Active = true;
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].Weights = 1;
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].trigger = "1H1SH";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].trigger2 = "Product1";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].trigger3 = "Model-Top";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame1Image = {};
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame1Image.Url = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame2Image = {};
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame2Image.Url = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame1Headline = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame1Subheadline = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame2Headline = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame2Subheadline = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].ctaText = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].landingPage = {};
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].landingPage.Url = "";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].customVariable = "#ececec";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].customVariable2 = "ProductImage";
    devDynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].customVariable3 = "";
    Enabler.setDevDynamicContent(devDynamicContent);

    defaultValues.trigger =  dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].trigger;
    defaultValues.trigger2 = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].trigger2;
    defaultValues.trigger3 = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].trigger3;
	defaultValues.frame1Image = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame1Image.Url;
    defaultValues.frame2Image = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame2Image.Url;
    defaultValues.frame1Headline = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame1Headline;
    defaultValues.frame1Subheadline = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame1Subheadline;
    defaultValues.frame2Headline = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame2Headline;
    defaultValues.frame2Subheadline = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].frame2Subheadline;
    defaultValues.ctaText = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].ctaText;
    defaultValues.landingPage = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].landingPage.Url;
	defaultValues.customVariable = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].customVariable;
	defaultValues.customVariable2 = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].customVariable2;
    defaultValues.customVariable3 = dynamicContent.Specsavers_ANZ__Offers_for_Everyone_Specsavers_ANZ__Offers_for_Everyone[0].customVariable3;

  }


function populate(){
  
  //headline1_1.innerHTML = defaultValues.frame1Headline;
  headline_1.innerHTML = defaultValues.frame1Headline;
  headline_2.innerHTML = defaultValues.frame1Subheadline;
  ctatext_1.innerHTML = defaultValues.ctaText;
  ctatext_2.innerHTML = defaultValues.ctaText;
  //for special case like subhead=uv filter variant
  headline1_2.innerHTML = defaultValues.frame2Headline;
  headline2_1.innerHTML = defaultValues.frame2Subheadline;

  console.log("populate")
}  
  



  if(defaultValues.trigger =="2Frames"){
    headline_1_container.style.display = "block";
    cta1.style.display = "block";
    cta1arrow.style.display = "block";
    console.log("2Frames")
  }

  if(defaultValues.trigger =="3Frames"){
    headline_1_con_2frames.style.display = "block";
    headline_2_con_2frames.style.display = "block";
    cta2.style.display = "block";
    cta2arrow.style.display = "block";
    console.log("3Frames")
  }

  if(defaultValues.trigger =="3FramesSpecial"){
    headline_1_con_2frames_1.style.display = "block";
    headline_2_con_2frames_1.style.display = "block";
    cta2.style.display = "block";
    cta2arrow.style.display = "block";
    console.log("3FramesSpecial")
  }



  if(defaultValues.trigger3 == "Model"){
    modelshape.style.display ="block";
    console.log("enter");
  }
  if(defaultValues.trigger3 == "Product"){
    productshape.style.display ="block";
    console.log("enter2");
  }




  if(defaultValues.trigger2 == "White"){

    ctaarrowColor = color.white;
    ctaColor = color.white;

    if(defaultValues.ctaText =="Find out more"){
      cta1arrow.style.left = "338px";
      cta2arrow.style.left = "-10px";

    }
    if(defaultValues.ctaText =="Shop Now"){
      cta1arrow.style.left = "307px";
      cta2arrow.style.left = "-37px";

    }
    if(defaultValues.ctaText =="Learn more"){
      cta1arrow.style.left = "317px";
      cta2arrow.style.left = "-25px";

    }
  }
  if(defaultValues.trigger2 == "Green"){
    cta1arrow.style.left = "300px";
    cta2arrow.style.left = "-30px";
    ctaarrowColor = color.green;
    ctaColor = color.green;
    if(defaultValues.ctaText =="Find out more"){
      cta1arrow.style.left = "338px";
      cta2arrow.style.left = "-10px";

    }
    if(defaultValues.ctaText =="Shop now"){
      cta1arrow.style.left = "300px";
      cta2arrow.style.left = "-30px";
      // alert("pasok");

    }
    if(defaultValues.ctaText =="Learn more"){
      cta1arrow.style.left = "317px";
      cta2arrow.style.left = "-25px";

    }

  }
  if(defaultValues.trigger2 == "Black"){

    ctaarrowColor = color.black;
    ctaColor = color.black;
    if(defaultValues.ctaText =="Find out more"){
      cta1arrow.style.left = "338px";
      cta2arrow.style.left = "-10px";

    }
    if(defaultValues.ctaText =="Shop Now"){
      cta1arrow.style.left = "307px";
      cta2arrow.style.left = "-37px";

    }
    if(defaultValues.ctaText =="Learn more"){
      cta1arrow.style.left = "317px";
      cta2arrow.style.left = "-25px";

    }
  }





  arrow1.style.color = ctaarrowColor;
  arrow2.style.color = ctaarrowColor;


  ctatext_1.style.color = ctaColor;
  ctatext_2.style.color = ctaColor;





  //Device Detect and browser detect 
  //Note: for MAC - the chrome should be first before safari, because if the safari comes first, when you check in chrome, it will show as safari 
  if(navigator.platform.indexOf('Win') > -1){ //windows 
    console.log('Device: Windows') 
    if(false || !!document.documentMode){ 
      console.log('Browser: IE') 
      headline1_2.style.top = "2px";
      headline1_1.style.top = "2px";
      headline_1.style.top = "2px";
      cta1arrow.style.top = "-20px";
      cta2arrow.style.top = "-20px";
      cta1.style.marginTop = "2px";
    } 
    else if(navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstor){ 
      console.log('Browser: Chrome') 
      headline1_2.style.top = "2px";
      headline1_1.style.top = "2px";
      headline_1.style.top = "2px";
      cta1arrow.style.top = "-18px"; // for 2frames
      cta1.style.marginTop = "2px";
      cta2arrow.style.top = "10px"; // for 3frames     

      ctatext_2.style.lineHeight = "23px";  

      headline1_2.style.lineHeight = "20px";
      headline1_1.style.lineHeight = "20px";
      headline_1.style.lineHeight = "20px";

      headline_2.style.lineHeight ="20px";
      headline2_1.style.lineHeight ="20px";
      headline_2_con_2frames.style.lineHeight ="20px";
      headline_2_con_2frames_1.style.lineHeight ="20px";
 

      console.log("changes");

    } 
    else if(navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined'){ 
      console.log('Browser: Firefox') 
      copyContainer.style.top="1px";

    } 
    else{ 


    } 
  } 

  else if(navigator.platform.indexOf('Mac') > -1){ //mac 
    console.log('Device: MAC') 
    if(navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined'){ 
      console.log('Browser: Firefox') 
      headline1_2.style.top = "2px";
      headline1_1.style.top = "2px";
      headline_1.style.top = "2px";
      cta1arrow.style.top = "-20px";
      cta2arrow.style.top = "9px";
      //cta1.style.marginTop = "2px";
      
      ctatext_1.style.top ="0px";
      ctatext_2.style.top ="0px";
    } 
    else if(navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore){ 
      console.log('Browser: Chrome') 
      
      ctatext_1.style.top ="-1px";
      ctatext_2.style.top ="-1px";
    } 
    else if(navigator.userAgent.indexOf('Safari') != -1){ 
      console.log('Browser: Safari') 
  
      ctatext_1.style.top ="-2px";
      ctatext_2.style.top ="-2px";
      

    } 
    else{ 


    } 
  } 
  else{ 


  } 


 

}


