"use strict";


// gsap.set("#your-element", {width: 0}); <-- initial position/behavior of your element
gsap.set("#headline1, #headline2, #headline3", {opacity: 0, y: "100%"});


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
	setTimeout(frame1Anim, 500); 
}

function frame1Anim(){
  gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
  
  var tl = new TimelineMax({onComplete: function(){
    takeScreenshot();
    frame2Anim();
  }});
  tl.to("#headline1", 0.5, {opacity: 1, y: "0%"})
    .to("#headline1", 0.5, {opacity: 0, y: "-100%"},'+=2');
}

function frame2Anim(){
	// code here if necessary
  console.log("frame2");
  var tl = new TimelineMax({onComplete: function(){
    takeScreenshot();
    frame3Anim();
  }});
  tl.to("#headline2", 0.5, {opacity: 1, y: "0%"})
    .to("#headline2", 0.5, {opacity: 0, y: "-100%"},'+=2');
}


function frame3Anim(){
  console.log("frame3");
  var tl = new TimelineMax({onComplete: function(){
    adlibEnd();
  }});
  tl.to("#headline3", 0.5, {opacity: 1, y: "0%"});
}
