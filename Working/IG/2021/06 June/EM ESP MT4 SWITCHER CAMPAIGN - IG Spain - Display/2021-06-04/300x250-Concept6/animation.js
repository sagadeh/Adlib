// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})

// default initial values before the animation kicks in
gsap.set("#main", { display: "none" });
gsap.set(["#container", "#sub-logo", "#lastframe-cta-wrapper"], {opacity: 0});
gsap.set("#bgimage-wrapper", {perspective: "1000px"});
gsap.set("#bgImage", {scale: 1});
gsap.set("#bgimage-wrapper2", {perspective: "1000px", opacity: 0});
gsap.set("#bgImage2", {scale: 1});
gsap.set(["#headline1-bg", "#headline2-bg", "#headline3-bg", "#extralegal-bg"], {scale: 0});
gsap.set(["#headline1-wrapper", "#headline2-wrapper", "#headline3-wrapper","#headline1f1-wrapper", "#headline2f2-wrapper", "#headline3f3-wrapper", "#headline3f4-wrapper", "#extralegal-wrapper"], {opacity: 0, y: 20});
gsap.set("#cta-wrapper", {x: -20, opacity: 0});


gsap.globalTimeline.pause();

let tween;
function initAnimation() {
	Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
	Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
	setTimeout(startAnimation, 1000);
}
function startAnimation() {  
    tween = gsap.timeline();
    console.log("animation initialized")
	
    var discHeight = document.getElementById('disc-wrapper').offsetHeight;
    var h3bgheight = (250 - (discHeight + 49)) + "px";
    var redHeight = discHeight + "px";
    var logoHeight = discHeight + 11 + "px";
    var hbgHeight = discHeight + 49 + "px";
    var ctaHeight = (discHeight + 62) + "px";
    var endframe = (discHeight/2) + "px";	
    var cloneFrame2text = null;	
	
    gsap.set("#red-BG", { bottom: redHeight});
    gsap.set("#cta-wrapper", { bottom: ctaHeight});
    gsap.set("#logoContainer", { bottom: logoHeight});
    gsap.set("#endframe", { bottom: endframe});	
    gsap.set("#sub-logo2", { opacity: 1});	

    if(defaultValues.animationType != "Option A"){
		gsap.set(["#headline1-bg", "#headline2-bg", "#headline3-bg", "#extralegal-bg"], {scale: 0, bottom: hbgHeight, height: h3bgheight});
	} else {
		gsap.set(["#headline3-bg", "#extralegal-bg"], {scale: 0, bottom: hbgHeight, height: h3bgheight});
		gsap.set(["#headline1-bg", "#headline2-bg"], {scale: 0, bottom: hbgHeight});
	}

	
	gsap.to(window, {onComplete: function(){
		initOptionBSettings();
		updateVal();
	}}, 0);
	gsap.to(window, {delay: .3, onComplete: function(){
		Adlib.textResize();
	}}, 0);
	

	gsap.globalTimeline.resume();

	// animation start here after global resume.

	function frame1Animation() {
		gsap.to("#container", {duration: 1, ease: "quad.inOut", opacity: 1});
		gsap.to("#bgImage", {duration: 12, ease: "power1.inOut", scale: 1.1, rotationZ: 0.01});
		gsap.to("#headline1-bg", {duration: 0.5, ease: "quad.inOut", scale: 1, delay: 0.8});
		//gsap.to("#sub-logo2white", {duration: 0.5, ease: "power1.Out", opacity: 0, delay: 1.3});
		// gsap.to("#sub-logo2", {duration: 0.5, ease: "power1.in", opacity: 1, delay: 1.3});
		if(defaultValues.frame2Headline.length <= 1 || defaultValues.frame2Headline.toUpperCase() == "N/A") {
    		gsap.to("#headline1f1-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 1.3, onComplete:
    			function(){
    				takeScreenshot();
    				gsap.delayedCall(0.2, initCTAandRW);
    			}
    		});
        } else {
        	gsap.to("#headline1-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 1.3, onComplete:
        		function(){
        			takeScreenshot();
        			gsap.delayedCall(2, frame2Animation);
        		}
        	});
        }
		if(defaultValues.animationType == "Option C") {	
			gsap.to("#sub-logo3navy", {duration: 0.3, ease: "power1.Out", opacity: 1, delay: 1.3});
			gsap.to("#sub-logo2", {duration: 0.3, ease: "power1.in", opacity: 0, delay: 1.3});
		}
	}

	function frame2Animation() {
		gsap.to("#headline2-bg", {duration: 0.5, ease: "quad.inOut", scale: 1});

		if(defaultValues.frame3Headline.length <= 1 || defaultValues.frame3Headline.toUpperCase() == "N/A") {
			gsap.to("#headline1-wrapper", {duration: 0.5, ease: "quad.inOut", y: 100});
			gsap.to("#headline1-bg", {duration: 0.5, ease: "quad.inOut", scale: 0});
    		gsap.to("#headline2f2-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.5, onComplete:
    			function(){
    				takeScreenshot();
    				gsap.delayedCall(0.2, initCTAandRW);
    			}
    		});
			gsap.to("#bgimage-wrapper2", {duration: 0, ease: "power1.Out", opacity: 1});
			gsap.to("#bgImage2", {duration: 12, ease: "power1.inOut", scale: 1.1, rotationZ: 0.01});
        } else {
			gsap.to("#headline2-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.5, onComplete:
        		function(){
        			takeScreenshot();
        			gsap.delayedCall(2, frame3Animation);
        		}
        	});
        }

		if(defaultValues.animationType == "Option C") {
			var hh2 = Number(document.getElementById("headline2-bg").offsetHeight);
			gsap.to("#headline1-wrapper", {duration: 0.5, ease: "quad.inOut", y: -hh2, onStart: function(){
				gsap.set("#headline1-wrapper", { height: hh2});	
				gsap.to("#headline1", {duration: 0.5, ease: "quad.inOut", fontSize: Adlib.getStyle("headline1f1", "font-size") });	
			}});
		}		

	}

	function frame3Animation() {	

		if(defaultValues.animationType == "Option A") {
			gsap.to("#headline1-wrapper", {duration: 0.5, ease: "quad.inOut", y: 100});
			gsap.to("#headline2-wrapper", {duration: 0.5, ease: "quad.inOut", y: 100});
			gsap.to("#headline1-bg", {duration: 0.5, ease: "quad.inOut", scale: 0});
			gsap.to("#headline2-bg", {duration: 0.5, ease: "quad.inOut", scale: 0});
		} else if(defaultValues.animationType == "Option C") {
			gsap.to("#headline1-wrapper", {duration: 0.5, ease: "quad.inOut", y: 0});	
			gsap.to("#sub-logo2", {duration: 0.5, ease: "power1.in", opacity: 0, delay: 0.5});
			gsap.to("#sub-logo2white", {duration: 0.5, ease: "power1.Out", opacity: 1, delay: 0.5});
			gsap.to("#sub-logo3navy", {duration: 0.3, ease: "power1.Out", opacity: 0, delay: 0.3});
		}

		gsap.to("#headline3-bg", {duration: 0.5, ease: "quad.inOut", scale: 1});
		gsap.to("#bgimage-wrapper2", {duration: 0, ease: "power1.Out", opacity: 1});
		gsap.to("#bgImage2", {duration: 12, ease: "power1.inOut", scale: 1.1, rotationZ: 0.01});

		gsap.to("#headline3-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.5, onComplete:
			function(){
				takeScreenshot();
				gsap.delayedCall(0.2, initCTAandRW);
			}
		});
        // }
		
	}

	function initCTAandRW() {
		gsap.to("#cta-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, x: 0});
		gsap.to("#disc-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 0.3, onComplete:
			function(){
				takeScreenshot();
				if(defaultValues.legal.length <= 1 || defaultValues.legal.toUpperCase() == "N/A"){
					gsap.delayedCall(2, endFrameAnim);
				}else{
					gsap.delayedCall(2, extraLegalAnim);
				}
				
				
			}
		});
	}

	function extraLegalAnim() {
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
		takeScreenshot();
		setTimeout(adlibEnd, 2000);
		if(defaultValues.trigger != "enable endframe"){
			gsap.to("#extralegal-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 0, y: 20});
			// gsap.to("#headline3-wrapper", {duration: 0.5, ease: "quad.inOut", opacity: 0, y: 20});
			// gsap.to("#headline3f3-wrapper", {duration: 0.5, ease: "quad.inOut", opacity: 0, y: 20});
			// gsap.to("#headline3f4-wrapper", {duration: 0.5, ease: "quad.inOut", opacity: 0, y: 20});
			// gsap.to("#headline2-wrapper", {duration: 0.5, ease: "quad.inOut", opacity: 0, y: 20});
			// gsap.to("#headline2f2-wrapper", {duration: 0.5, ease: "quad.inOut", opacity: 0, y: 20});
			gsap.to("#extralegal-bg", {duration: 0.3, ease: "quad.inOut", scale: 0, delay: 0.5});
			gsap.to("#cta-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, delay: 0.5});
			// gsap.to("#headline3-bg", {duration: 0.5, ease: "quad.inOut", scale: 0, delay: 0.5});
			// gsap.to("#headline3-bgf4", {duration: 0.5, ease: "quad.inOut", scale: 0, delay: 0.5});
			// gsap.to("#headline2-bg", {duration: 0.5, ease: "quad.inOut", scale: 0, delay: 0.5});
			// gsap.to("#headline1-bg", {duration: 0.5, ease: "quad.inOut", scale: 1, delay: 0.8});
			// gsap.to("#headline1-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, y: 0, delay: 1.3});
		} else {
			gsap.to("#brand-logo", {duration: 0.3, ease: "quad.inOut", opacity: 0});
			gsap.to("#red-BG", {duration: .8, ease: "quad.inOut", height: "100%", delay: 0.3});
			gsap.to("#sub-logo", {duration: 0.3, ease: "quad.inOut", opacity: 1, delay: 0.8});
			gsap.to("#lastframe-cta-wrapper", {duration: 0.3, ease: "quad.inOut", opacity: 1, delay: 0.8, onComplete: function(){
				takeScreenshot();
				setTimeout(adlibEnd, 2000);
			}});
		}
		
		

	}
	
	frame1Animation();
}

// Pass the value of headline2 to headline3
function updateVal() {
	if (defaultValues.frame2Headline.length <= 1 || defaultValues.frame2Headline.toUpperCase() == "N/A"){

		var element = document.querySelector('#headline1-wrapper'); 
		element.style.removeProperty('bottom');
		if(defaultValues.animationType != "Option C") {
			gsap.set("#headline1-bg", {width: "150px", bottom: "0px", height: "100%"});
		} else {
			gsap.set("#headline1-bg", {width: "100%", bottom: "0px", height: "100%"});
		}
		

	}else if(defaultValues.frame3Headline.length <= 1 || defaultValues.frame3Headline.toUpperCase() == "N/A"){

		var element = document.querySelector('#headline2-wrapper'); 
		element.style.removeProperty('bottom');
		if(defaultValues.animationType != "Option C") {
			gsap.set("#headline2-bg", {width: "150px", bottom: "0px", height: "100%"});
		} else {
			gsap.set("#headline2-bg", {width: "100%", bottom: "0px", height: "100%"});
		}

	}
}

function initOptionBSettings() {
	var h3height = document.getElementById("cta-wrapper").offsetTop;
	var sublogo = Number(document.getElementById('sublogo2Container').offsetTop) + Number(document.getElementById('sublogo2Container').offsetHeight);
	var rgheight = (Number(document.getElementById("red-BG").offsetTop)-sublogo);

	if(defaultValues.animationType == "Option A"){
		var hheight = document.getElementById("headline1-bg").offsetTop;
		var slogoheight = document.getElementById("sublogo2Container").offsetTop + document.getElementById("sublogo2Container").offsetHeight + 10;

		if(slogoheight > hheight){
			var heightadjust =  document.getElementById("headline1-bg").offsetHeight - (slogoheight - hheight);
			gsap.set("#headline1-bg", {height: heightadjust});
			gsap.set("#headline1-wrapper", {height: (heightadjust)});
			gsap.set("#headline2-bg", {height: heightadjust});
			gsap.set("#headline2-wrapper", {height: (heightadjust)});
		}

		gsap.set("#extralegal-wrapper", {height: (rgheight-10)});
		gsap.set("#legalText", {top: 0, paddingBottom: 10});

		gsap.set(["#headline3-wrapper","#headline2f2-wrapper","#headline1f1-wrapper"], {height: h3height, top: 0});
		gsap.set("#headline3", {top: "initial",bottom: 0, paddingTop:10, paddingBottom:10, position:"absolute"});
	}else if(defaultValues.animationType == "Option B"){
		gsap.set("#headline1-bg", {background: "#EF5957"})
		gsap.set("#headline1", {color: "#fff", paddingTop: "15px", paddingBottom: "15px"})
		gsap.set("#headline1f1", {color: "#fff"})
		gsap.set("#headline2-bg", {background: "#E2ECED"})
		gsap.set("#headline2", {color: "#002954",paddingTop: "15px", paddingBottom: "15px"})
		gsap.set(["#headline1-bg", "#headline2-bg"], {width:"150px"});
		gsap.set(["#headline3-wrapper","#headline2f2-wrapper","#headline1f1-wrapper"], {height: h3height, top: 0});
		gsap.set("#headline3", {top: "initial",bottom: 0, paddingTop:10, paddingBottom:10, position:"absolute"});
		gsap.set(["#headline1-wrapper", "#headline2-wrapper"], {height:"100%", width:"124px", top: "0", left: "12px"});

		gsap.set("#extralegal-wrapper", {height: (rgheight-10)});
		gsap.set("#legalText", {top: 0, paddingBottom: 10});

		if (defaultValues.frame3Headline.length <= 1 || defaultValues.frame3Headline.toUpperCase() == "N/A"){
			gsap.set("#headline2-bg", {background: "#002954"})
		} else {
			gsap.set("#headline2-bg", {background: "#E2ECED"})
		}
	} else if(defaultValues.animationType == "Option C"){
	  
		var ctaPosition = Number(document.getElementById("cta-wrapper").offsetTop);
	    var discHeight = document.getElementById('disc-wrapper').offsetHeight;
	    var h3bgheight = (250 - (discHeight + 49)) + "px";
	    var h2bgheight = ((250 - (discHeight + 49)) / 2) + "px";

		gsap.set("#headline1-bg", {height:"250px"});
		gsap.set("#headline2-bg", {height: (rgheight/2)});
		gsap.set("#headline2-wrapper", {height: (rgheight/2)});
		gsap.set("#headline1f1-wrapper", {height: (rgheight/2), width: 270});
		// gsap.set("#headline1f1", {position: "absolute", top:0, paddingTop: 10, paddingBottom:10});
		gsap.set("#headline3", {position: "absolute", bottom:0, paddingTop: 10, paddingBottom:10});
		gsap.set(["#headline3-wrapper","#headline2f2-wrapper"], {top: 0, height: ctaPosition, width: 200});
		if (defaultValues.frame2Headline.length <= 1 || defaultValues.frame2Headline.toUpperCase() == "N/A"){
			gsap.set("#headline1f1-wrapper", {top: 0, height: ctaPosition, width: 200});
		}
		gsap.set("#extralegal-wrapper", {height: (rgheight-10)});
		gsap.set("#legalText", {top: 0, paddingBottom: 10});
		var element = document.querySelector('#headline2'); 
		element.style.removeProperty('bottom');
		//gsap.set("#headline2", {bottom: "14px"});
		gsap.set("#headline2-wrapper", {bottom: "0px"})
		gsap.set("#sub-logo2white", {opacity: "1"});
		gsap.set("#sub-logo2", {opacity: "0"});
		gsap.set("#headline3-bg", {width: "100%"});
	}
}

function animationEnd() {
     // call this function on the very end of the last animation.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}

