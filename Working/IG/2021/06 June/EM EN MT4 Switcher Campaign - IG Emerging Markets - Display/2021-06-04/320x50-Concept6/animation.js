gsap.set(["#container", "#sub-logo", "#lastframe-cta-wrapper"], {opacity: 0});
gsap.set("#bgimage-wrapper", {perspective: "1000px"});
gsap.set("#bgImage", {scale: 1});
gsap.set("#bgimage-wrapper2", {perspective: "1000px", opacity: 0});
gsap.set("#bgImage2", {scale: 1});
gsap.set(["#headline2-bg", "#headline3-bg", "#extralegal-bg"], {scale: 0});
gsap.set(["#headline1-wrapper", "#headline2-wrapper", "#headline3-wrapper", "#extralegal-wrapper"], {opacity: 0, y: 20});
gsap.set(["#cta-wrapper","#boilerplate"], {x: -20, opacity: 0});

gsap.globalTimeline.pause();

let tween;
function initAnimation() {
	Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
	setTimeout(startAnimation, 1000);
}

function startAnimation() {  
	console.log("animation initialized");
	// variables
    let discHeight = document.getElementById('disc-wrapper').offsetHeight,
		ctatxtHeight = document.getElementById('cta-wrapper').offsetHeight,
		redbarHeight = document.getElementById('red-BG').offsetHeight,
		ctaBottom = discHeight + redbarHeight + 25,
		ctaBottom2 = discHeight + redbarHeight + 23,
		extrabg = 600 - (discHeight + redbarHeight),
		bgHeight = 90 - (discHeight + redbarHeight);

	
	//option setting returns true
	frame1Animation();
}

//start of frame 1
function frame1Animation(){
	//resume gsap
	gsap.globalTimeline.resume();
	//start animation
	gsap.to("#container", {duration: 1, ease: "quad.inOut", opacity: 1});
	gsap.to("#bgImage", {duration: 12, ease: "power1.inOut", scale: 1.1, rotationZ: 0.01});
	gsap.to("#sub-logo2white", {duration: 0.5, ease: "power1.Out", opacity: 0, delay: 1.3});
	gsap.to("#sub-logo2", {duration: 0.5, ease: "power1.in", opacity: 1, delay: 1.3});
	//copy frame 1
	// gsap.to("#headline1-bg", {duration: 0.5, ease: "quad.inOut", scale: 1, delay: 0.8});
	gsap.to("#headline1-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 1, onComplete:
		function(){
			takeScreenshot();
			gsap.to("#cta-wrapper", {duration: 0.5, ease: "quad.inOut", opacity: 1, x: 0});
			//condition frame 2 or frame 3 or initCTAandRW
			(defaultValues.frame2Headline.length <= 1 || defaultValues.frame2Headline.toLowerCase() === "n/a")?
			(defaultValues.frame3Headline.length <= 1 || defaultValues.frame3Headline.toLowerCase() === "n/a")?
			gsap.delayedCall(0.2, initCTAandRW): gsap.delayedCall(2, frame3Animation): gsap.delayedCall(2, frame2Animation);
		}
	});
}

//start of frame 2
function frame2Animation() {
	//if aniamtion is option C
	gsap.to("#headline2-bg", {duration: 0.5, ease: "quad.inOut", scale: 1});
	gsap.to("#headline2-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.5, onComplete:
		function(){
			takeScreenshot();
			//condition frame 3 or CTA and RW
			(defaultValues.frame3Headline.length <= 1 || defaultValues.frame3Headline.toLowerCase() === "n/a")?
			gsap.delayedCall(0.2, initCTAandRW):gsap.delayedCall(2, frame3Animation);
		}
	});
}

function frame3Animation(){



	gsap.to("#headline3-bg", {duration: 0.5, ease: "quad.inOut", scale: 1});
	gsap.to("#headline3-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.5, onComplete:
		function(){
			takeScreenshot();
			gsap.delayedCall(0.2, initCTAandRW);
		}
	});
}

function initCTAandRW(){
	gsap.to("#boilerplate", {duration: 0.3, ease: "quad.inOut", opacity: 1, x: 0});
	gsap.to("#cta-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, x: 0, delay: 0.3});
	gsap.to("#disc-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.3, onComplete:
		function(){
			takeScreenshot();
			(defaultValues.legal.length <= 1 || defaultValues.legal.toUpperCase() == "N/A")?
				gsap.delayedCall(2, endFrameAnim): gsap.delayedCall(2, extraLegalAnim);
		}
	});
}

function extraLegalAnim() {
	gsap.to("#boilerplate", {duration: 0.3, ease: "quad.inOut", opacity: 0});
	gsap.to("#cta-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 0});
	gsap.to("#extralegal-bg", {duration: 0.3, ease: "quad.inOut", scale: 1});
	gsap.to("#extralegal-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.5, onComplete:
		function(){
			takeScreenshot();
			gsap.delayedCall(2, endFrameAnim);
		}
	});
}

function endFrameAnim() {
	if(defaultValues.trigger.toLowerCase() === "enable endframe"){
		gsap.to("#brand-logo", {duration: 0.3, ease: "quad.inOut", opacity: 0});
		gsap.to("#sub-logo2", {duration: 0.3, ease: "quad.inOut", opacity: 0});
		gsap.to("#extralegal-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 0});
		gsap.to("#red-BG", {duration: .8, ease: "quad.inOut", width: "100%", delay: 0.3});
		gsap.to("#sub-logo", {duration: 0.3, ease: "quad.inOut", opacity: 1, delay: 0.8});
		gsap.to("#lastframe-cta-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, delay: 0.8, onComplete: animationEnd });
	}else{
		gsap.to("#extralegal-bg", {duration: 0.3, ease: "quad.inOut", opacity: 0, delay: 1});
		gsap.to("#extralegal-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 0, delay: 1});
		gsap.to("#boilerplate", {duration: 0.3, ease: "quad.inOut", opacity: 1, delay: 1.3});
		gsap.to("#cta-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, delay: 1.3});
		animationEnd();
	}
}

// function initOptionBSettings() {
// 	if(defaultValues.animationType.toLowerCase() === "option b"){
// 		gsap.set("#headline1-bg", {background: "#EF5957"})
// 		gsap.set("#headline1", {color: "#fff"})
// 		gsap.set("#headline2-bg", {background: "#E2ECED"})
// 		gsap.set("#headline2", {color: "#002954"})
// 		adjustBg();
// 	} else{
// 		adjustBg();
// 	}

// 	return true;
// }

// function adjustBg(){
// 	//adjust width of frame 2 if no headeline 3
// 	if(defaultValues.frame3Headline.length <= 1 || defaultValues.frame3Headline.toLowerCase() === "n/a"){
// 		gsap.set("#headline2-bg", {width: "496px"});
// 	}
// 	//adjust width frame 1 if no headline 2 and headline 3
// 	if(defaultValues.frame2Headline.length <= 1 || defaultValues.frame2Headline.toLowerCase() === "n/a"){
// 		if(defaultValues.frame3Headline.length <= 1 || defaultValues.frame3Headline.toLowerCase() === "n/a"){
// 			gsap.set("#headline1-bg", {width: "496px"});
// 		}
// 	}
// }

function animationEnd() {
     // call this function on the very end of the last animation.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}

