"use strict";

var tl;
var textHeadlines1, textHeadlines2, textHeadlines3;
gsap.set(["#main", "#replay-btn-wrapper"], {visibility: "hidden"});

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element


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
function initAnim(){
	loadDefaultValues();
	adlibStart();
	callGWDPlayPause();
	//setTimeout(frame1Anim, 500); 
  startAnimation();
}

function startAnimation() {
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  
  splitText();
  console.log("start anim");
  tl = gsap.timeline({onComplete: function(){
    document.getElementById("replay-btn").addEventListener("click", replayBtn);
    adlibEnd();
  }});
  
  tl.to("#main", {duration: 0.5, visibility: "visible"})
    .from("#frame1Background", {duration: 0.5, opacity: 0})
    .from(textHeadlines1, {duration: 0.5, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .to("#frame1Background", {duration: 0.5, opacity: 0, ease: "power2.out"},'+=2')
    .to(textHeadlines1, {duration: 0.5, opacity: 0, ease: "power2.out", onComplete: takeScreenshot},'-=0.5')
    //END FRAME 1
    .from(textHeadlines2, {duration: 0.5, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .from("#ccard", {duration: 0.5, opacity: 0, x: "-20%", ease: "power2.out"})
    .from("#subHeadline1", {duration: 0.5, opacity: 0, y: "-20%", ease: "power2.out"})
    .from("#legal", {duration: 0.5, opacity: 0, y: "-20%", ease: "power2.out"},'-=0.25')
    .to("#ccard, #subHeadline1", {duration: 0.5, opacity: 0, ease: "power2.out"},'+=2')
    .to(textHeadlines2, {duration: 0.5, opacity: 0, ease: "power2.out", onComplete: takeScreenshot}, '-=0.5')
    //END FRAME 2
    .from(textHeadlines3, {duration: 0.5, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .from("#productImage1", {duration: 0.5, opacity: 0, x: "-20%", ease: "power2.out"})
    .from("#subHeadline2", {duration: 0.5, opacity: 0, y: "-20%", ease: "power2.out"},'-=0.25')
    .from("#or-text", {duration: 0.5, opacity: 0, ease: "power2.out"})
    .from("#price", {duration: 0.5, opacity: 0, x: "-20%", ease: "power2.out"})
    .from("#cashback", {duration: 0.5, opacity: 0, x: "20%", ease: "power2.out"},'-=0.5')
    .from("#cta-wrapper", {duration: 0.5, opacity: 0, x: "20%", ease: "power2.out"})
    .to("#replay-btn-wrapper", {duration: 0.5, visibility: "visible"})
    .from("#replay-btn-wrapper", {duration: 0.5, opacity: 0, x: "-20%", ease: "power2.out"});
}

function replayBtn() {
  console.log("replay btn");
  tl.restart();
}

function splitText() {
  var splitHeadline1, splitHeadline2, splitHeadline3;
  
  splitHeadline1 = new SplitText("#headline1", {type:"words,chars,lines"});
  textHeadlines1 = splitHeadline1.lines; //an array of all the divs that wrap each character
  //textHeadlines1[0].style.color = "red";
  
  splitHeadline2 = new SplitText("#headline2", {type:"words,chars,lines"});
  textHeadlines2 = splitHeadline2.lines; //an array of all the divs that wrap each character
  
  splitHeadline3 = new SplitText("#headline3", {type:"words,chars,lines"});
  textHeadlines3 = splitHeadline3.lines; //an array of all the divs that wrap each character
}
