"use strict";

var splitHeadline;
var lines;

// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element

gsap.set("#bg-wrapper", {scale: 1.2});
gsap.set("#ctaTxt", {opacity: 0, x: -10});
gsap.set("#arrow-fav", {opacity: 0, x: -50});
gsap.set("#dimm-endframe", {opacity: 0});

//gsap.set("#headline1", {x: 500});
gsap.set(["#headline1", "#headline2", "#headline3",  "#headline4"], {perspective: 400, visibility: "hidden"});
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
  setTimeout(frame1Anim, 500); 
}

function frame1Anim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
 
  gsap.to("#bg-wrapper", {duration: 12, ease: "none", scale: 1});
  
  splitText(1);
  var tl = new TimelineMax();
  tl.to("#headline1", {duration: 0.5, visibility: "visible"})
    .from(lines, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2, delay: 0.5})
    .to(lines, {duration: 0.7, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete: function(){
      takeScreenshot();
      frame2Anim();
    }},'+=1.5');
}

function frame2Anim() {
  splitText(2);
  var tl = new TimelineMax();
  tl.to("#headline2", {duration: 0, visibility: "visible"})
    .from(lines, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .to(lines, {duration: 0.7, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete: function(){
      takeScreenshot();
      frame3Anim();
    }},'+=1.5');
}

function frame3Anim() {
  splitText(3);
  var tl = new TimelineMax();
  tl.to("#headline3", {duration: 0, visibility: "visible"})
    .from(lines, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .to(lines, {duration: 0.7, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete: function(){
      takeScreenshot();
      frame4Anim();
    }},'+=1.5');
}

function frame4Anim() {
  splitText(4);
  var tl = new TimelineMax({onComplete: adlibEnd});
  tl.to("#headline4", {duration: 0, visibility: "visible"})
    .to("#dimm-endframe", {duration: 1, ease: "power2.inOut", opacity: 0.6})
    .from(lines, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2})
    .to("#ctaTxt", {duration: 0.5, ease: "power2.out", x: 0, opacity: 1})
    .to("#arrow-fav", {duration: 0.5, ease: "power2.out", x: 0, opacity: 1},'-=0.25');
}

function splitText(i) {
  splitHeadline = new SplitText("#headline"+i, {type:"words,chars,lines"});
  lines = splitHeadline.lines; //an array of all the divs that wrap each character
}

