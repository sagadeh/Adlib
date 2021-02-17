"use strict";


//Trigger
//377VC
//VC100
//AQUAINDERM
var defaultValues = {
    cssAttrib:"<! –– css styling if necessary ––>",
    
    frame1Headline:"社でた歩真ウオヱツ部70策けぼうト会投け",
    //frame1Headline:"ケラツア4.5",
    //frame1Headline:"月ヨワ見吉ノス気感へあば<br>ゆ円迅窓状おがご著火違願",
  
    frame1Headline2:"うト会投け稿両セチ実革マオエ",
    //frame1Headline2:"礎クスロ妙<br>聞ドにこ制違",
    //frame1Headline2:"碁亀欄ろござだ",
  
    frame1Background:"frame1Background.png",
  
    disclaimer:"のをば伴案ソム見選っよね計丘つめくご崩朝がおょど禁6気武利ヲ",
    //disclaimer:"誌由トソ暮浩ニメ鬼見極ほびス平",
    //disclaimer:"産ソスヘニ獣属競<br>テケワ略79阪しなー",
  
    logo:"logo.png",
    frame1Image:"frame1Image.png",
    trigger:"377VC"
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