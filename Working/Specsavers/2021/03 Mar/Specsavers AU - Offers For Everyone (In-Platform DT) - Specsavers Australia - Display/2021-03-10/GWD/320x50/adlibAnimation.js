"use strict"

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

headline1_1.style.color = "#016c42";
headline_1.style.color = "#016c42";
headline_2.style.color = "#016c42";
headline1_2.style.color = "#016c42";
headline2_1.style.color = "#016c42";


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




