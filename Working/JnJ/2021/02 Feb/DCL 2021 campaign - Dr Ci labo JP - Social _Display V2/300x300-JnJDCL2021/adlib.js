"use strict";

var defaultValues = {
  trigger:"377VC", //VC100, 377VC, AQUAINDERM
  frame1Headline:"社でた歩真ウオヱツ部70策けぼうト会投け",
  frame1Headline2:"うト会投け稿両セチ実革マオエ",
  disclaimer:"のをば伴案ソム見選っよね計丘つめくご崩朝がおょど禁6気武利ヲ",
  frame1Background:"300x300_377VC-BG.jpg",
  frame1Image:"1x1.png", //star image
  logo:"300x300_377VC-LOGO.png",
  fontColor1:"#666600",
  fontColor2:" ",
  disclaimerFontColor:" ",
  fontSize1:"12",
  fontSize2:"18",
  disclaimerFontSize:"8",
  customVariable:"Regular",
  customVariable2:"Regular",
  customVariable3:"Regular",
  cssAttrib:"<! –– css styling if necessary ––>",
};

var possibleValues = {
  customVariable: "Regular, Medium",
  customVariable2: "Regular, Medium",
  customVariable3: "Regular, Medium",
  trigger: "VC100, 377VC, AQUAINDERM"
}

let dynamicText = document.querySelectorAll('.dynamic-text'),
    logoImg = document.getElementById("logo-img"),
    backgroundImg = document.getElementById("background-img"),
    ratingImg = document.getElementById("rating-img");

function initDynamic() {
    if (!Enabler.isServingInLiveEnvironment()) {
    	// defaultValues.frame1Headline; <-- example dynamic naming convension
    	// defaultValues.baseImage; <-- example dynamic naming convension
    } else {
      //invocation code from studio here...
    }
}


function populate() {
  //texts
  dynamicText[0].innerHTML = defaultValues.disclaimer;
  dynamicText[1].innerHTML = defaultValues.frame1Headline;
  dynamicText[2].innerHTML = defaultValues.frame1Headline2;
  //images
  logoImg.setAttribute("source", defaultValues.logo);
  backgroundImg.setAttribute("source", defaultValues.frame1Background);
  ratingImg.setAttribute("source", defaultValues.frame1Image);
  //customs

  dynamicText[0].style.cssText = `
    color: ${defaultValues.disclaimerFontColor};
    font-size: ${defaultValues.disclaimerFontSize}px;
    font-family: NotoSansCJKjp${(defaultValues.customVariable3)}, sans-serif;
  `;

  dynamicText[1].style.cssText = `
    color: ${defaultValues.fontColor1};
    font-size: ${defaultValues.fontSize1}px;
    font-family: NotoSansCJKjp${(defaultValues.customVariable1)}, sans-serif;
  `;

  dynamicText[2].style.cssText = `
    color: ${defaultValues.fontColor2};
    font-size: ${defaultValues.fontSize2}px;
    font-family: NotoSansCJKjp${(defaultValues.customVariable2)}, sans-serif;
  `;
  customTrigger();
}