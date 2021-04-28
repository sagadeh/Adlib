"use strict";

var textHeadlines1, textHeadlines2, textHeadlines3, textHeadlines4;

gsap.set(["#main"], {visibility: "hidden"});
gsap.set("#bg-wrapper", {scale: 1.2});

gsap.globalTimeline.pause(); //<-- dont delete, this is strictly implemented

//call play pause //<-- dont delete, this is strictly implemented
function callGWDPlayPause() {
  console.log("callGWDPlayPause");
  gwd.auto_PauseBtnClick = function (event) {
    gsap.globalTimeline.pause(); 
    try{_video.pause();}catch(e){}
    console.log("Pause Timeline");
  };
  gwd.auto_PlayBtnClick = function (event) {
    gsap.globalTimeline.resume(); 
    try{_video.play();}catch(e){}
    console.log("Play Timeline");
  };
}

//<-- dont delete, this is strictly implemented
function initAnim() {
  loadDefaultValues();
  adlibStart();
  callGWDPlayPause();
  startAnimation();
}

function startAnimation(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
 
  splitText();
  gsap.to("#bg-wrapper", {duration: 14, ease: "none", scale: 1, onStart: function(){
    tl.play();
  }}); 
  
  var tl = gsap.timeline({onStart: function(){
    //console.log("start animation");
  }, onComplete: function(){
    //console.log("complete animation");
    adlibEnd();
  }, paused: true});
  
  tl.to("#main", {duration: 0.5, visibility: "visible"})
    .from(textHeadlines1, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    /*.to(textHeadlines1, {duration: 1, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete: takeScreenshot},'+=1.5')
    .from(textHeadlines2, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .to(textHeadlines2, {duration: 1, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete: takeScreenshot},'+=1.5')
    .from(textHeadlines3, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .to(textHeadlines3, {duration: 1, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete: takeScreenshot},'+=1.5')
    .from("#dimm-endframe", {duration: 1, ease: "power2.inOut", opacity: 0})
    .from(textHeadlines4, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .from("#ctaTxt", {duration: 0.5, ease: "power2.out", x: "-10%", opacity: 0})
    .from("#arrow-fav", {duration: 0.5, ease: "power2.out", x: "-200%", opacity: 0})*/;
}

function splitText() {
  var splitHeadline1, splitHeadline2, splitHeadline3, splitHeadline4;
  
  splitHeadline1 = new SplitText("#headline1", {type:"words,chars,lines"});
  textHeadlines1 = splitHeadline1.lines; //an array of all the divs that wrap each character
  
  console.log(textHeadlines1[0],"_xxxxxx");
  
  splitHeadline2 = new SplitText("#headline2", {type:"words,chars,lines"});
  textHeadlines2 = splitHeadline2.lines; //an array of all the divs that wrap each character
  
  splitHeadline3 = new SplitText("#headline3", {type:"words,chars,lines"});
  textHeadlines3 = splitHeadline3.lines; //an array of all the divs that wrap each character
  
  splitHeadline4 = new SplitText("#headline4", {type:"words,chars,lines"});
  textHeadlines4 = splitHeadline4.lines; //an array of all the divs that wrap each character
}

