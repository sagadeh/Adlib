"use strict";


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
	setTimeout(frame1Anim, 500); 
}


function frame1Anim(){
	gsap.globalTimeline.resume(); //<-- dont delete, this is strictly implemented
	//sample animation below
	//gsap.to("#your-element", {duration: 2, ease: "power1.out", width: 234, delay: .3, onComplete:takeScreenshot}); //<-- add onComplete:takeScreenshot on every end animation of a specific frame

}

function frame2Anim(){
	// code here if necessary
}


function frame3Anim(){
	// code here if necessary
	
	//sample animation below
	//gsap.to("#your-element", {scale: 1, duration: 0.4, ease: "power1.inOut", onComplete:adlibEnd}); //<-- add onComplete:adlibEnd if this is the end frame of the creative.
	
}
