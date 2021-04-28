"use strict";

var newArrowAttrib;

gsap.killTweensOf(frame1Anim);
gsap.killTweensOf(frame2Anim);
gsap.killTweensOf(frame3Anim);
gsap.killTweensOf(frame4Anim);

gsap.set("#main", {opacity: 0});
gsap.set("#bg-wrapper", {scale: 1.2});
gsap.set("#headline1-wrapper", {scale: 1});
gsap.set("#headline2-wrapper", {scale: 1, left: 7});
gsap.set("#headline3-wrapper", {scale: 1, left: 7});
gsap.set("#headline4-wrapper", {scale: 1, left: 8});
gsap.set("#dimm-endframe", {left: 0, opacity: 0});
gsap.set("#ctaTxt", {opacity: 0, x: -10});
gsap.set("#arrow-fav", {opacity: 0});
gsap.set(["#headline1", "#headline2", "#headline3",  "#headline4"], {perspective: 400, visibility: "hidden"});


gsap.globalTimeline.pause();


//call play pause
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


function initAnim(){
	adlibStart();
	callGWDPlayPause();
	setTimeout(frame1Anim, 1000);
}

function frame1Anim(){
	gsap.globalTimeline.resume();

	gsap.to("#main", {duration: 0.4, ease: "none", opacity: 1});	
	gsap.to("#bg-wrapper", {duration: 12, ease: "none", scale: 1});	

	var tl1 = gsap.timeline({delay: 0.4});
	var splitHeadline1 = new SplitText("#headline1", {type:"words,chars,lines"});
    var lines = splitHeadline1.lines; //an array of all the divs that wrap each character
    
    gsap.set(["#headline1"], {visibility: "visible"});
    tl1.from(lines, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2, onComplete:function(){
    	gsap.delayedCall(1.5, function(){
    		tl1.to(lines, {duration: 0.7, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete:function(){
    			takeScreenshot();
    			frame2Anim();
    		}});
    	})
    	
    	
    }});

}

function frame2Anim(){

	var tl2 = gsap.timeline();
	var splitHeadline2 = new SplitText("#headline2", {type:"words,chars,lines"});
    var lines2 = splitHeadline2.lines; //an array of all the divs that wrap each character
    

    gsap.set(["#headline2"], {visibility: "visible"});
    tl2.from(lines2, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2, onComplete:function(){
    	gsap.delayedCall(1.5, function(){
    		tl2.to(lines2, {duration: 0.7, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete:function(){
    			takeScreenshot();
    			frame3Anim();
    		}});
    	})
    	
    	
    }});
}


function frame3Anim(){

	var tl3 = gsap.timeline({delay: 0});
	var splitHeadline3 = new SplitText("#headline3", {type:"words,chars,lines"});
    var lines3 = splitHeadline3.lines; //an array of all the divs that wrap each character
    

    gsap.set(["#headline3"], {visibility: "visible"});
    tl3.from(lines3, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2, onComplete:function(){
    	gsap.delayedCall(1.5, function(){
    		tl3.to(lines3, {duration: 0.7, opacity: 0, scaleX:0.95, ease: "power2.in", stagger: 0.2, onComplete:function(){
    			takeScreenshot();
    			frame4Anim();
    		}});
    	})
    	
    	
    }});

}

function frame4Anim(){
	gsap.to("#static-dimm", {duration: 1, ease: "power2.inOut", opacity: 0});
	gsap.to("#dimm-endframe", {duration: 1, ease: "power2.inOut", opacity: 0.6});

	var tl4 = gsap.timeline({delay: 1});
	var splitHeadline4 = new SplitText("#headline4", {type:"words,chars,lines"});
    var lines4 = splitHeadline4.lines; //an array of all the divs that wrap each character

    gsap.set(["#headline4"], {visibility: "visible"});
    tl4.from(lines4, {duration: 1, opacity: 0, scaleX:1.1, ease: "power2.out", stagger: 0.2, onComplete:function(){
    	var ctaX = document.querySelector("#ctaTxt").offsetLeft;
    	var ctaWidth = document.querySelector("#ctaTxt").offsetWidth;
    	newArrowAttrib = ctaWidth + 26 + "px";
    	gsap.set("#arrow-fav", {left: ctaX  - 16});
    	gsap.to("#ctaTxt", {duration: 0.5, ease: "power2.out", x: 0, opacity: 1});
    	gsap.to("#arrow-fav", {duration: 0.8, ease: "power2.out", x: newArrowAttrib, opacity: 1, delay: 0.3, onComplete:adlibEnd});
    	gsap.delayedCall(0.3, function(){
    		document.querySelector("#gwd-taparea_1").addEventListener("mouseover", animateCTA);
    		document.querySelector("#gwd-taparea_1").addEventListener("mouseout", animateBG);
    	})

    }});

}


function animateCTA() {
	gsap.to("#bg-wrapper", {duration: 0.8, ease: "power1.inOut", scale: 1.06});	
	gsap.to("#dimm-endframe", {duration: 0.8, ease: "power1.inOut", opacity: 0.3});
	gsap.fromTo("#ctaTxt", {duration: 0.5, x: -10, opacity: 0},{ease: "power2.out", x: 0, opacity: 1});
	gsap.fromTo("#arrow-fav", {duration: 0.8, x: 0, opacity: 0},{ease: "power2.out", x: newArrowAttrib, opacity: 1, delay: 0.3});
}

function animateBG() {
	gsap.to("#bg-wrapper", {duration: 0.8, ease: "power1.inOut", scale: 1});	
	gsap.to("#dimm-endframe", {duration: 0.8, ease: "power1.inOut", opacity: 0.6});


}
