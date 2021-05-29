// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
var splitVarTrigger;

function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {
     tween = gsap.timeline();

	   //Device Detect and browser detect
	 //Note: for MAC - the chrome should be first before safari, because if the safari comes first, when you check in chrome, it will show as safari
	 if(navigator.platform.indexOf('Win') > -1){ //windows
		console.log('Device: Windows')
		    if(false || !!document.documentMode){
		    console.log('Browser: IE')
		    }
		    else if(navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore){
		    console.log('Browser: Chrome')
		    document.getElementById('frame1Headline5').style.fontFamily = "DTAC2018-Regular"
		    document.getElementById('frame1Headline4').style.fontFamily = "DTAC2018-Regular"
		    document.getElementById('frame1Headline3').style.fontFamily = "DTAC2018-Regular"
		    document.getElementById('frame1Headline2').style.fontFamily = "DTAC2018-Light"
		    document.getElementById('frame1Headline').style.fontFamily = "DTAC2018-Regular"

		    }
		    else if(navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined'){
		    console.log('Browser: Firefox')
		    }
	  }

	  else if(navigator.platform.indexOf('Mac') > -1){ //mac
		console.log('Device: MAC')
		    if(navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined'){
		    console.log('Browser: Firefox')

		    }
		    else if(navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore){
		    console.log('Browser: Chrome')

		    }
		    else if(navigator.userAgent.indexOf('Safari') != -1){
		    console.log('Browser: Safari')
		    }
		 }



	splitVarTrigger = defaultValues.fontSize1.split(",");
	document.getElementById("frame1Headline").style.fontSize = splitVarTrigger[0].replace(/\D/g, '') + "px"
	document.getElementById("frame1Headline2").style.fontSize = splitVarTrigger[1].replace(/\D/g, '') + "px"
	document.getElementById("frame1Headline3").style.fontSize = splitVarTrigger[2].replace(/\D/g, '') + "px"
	document.getElementById("frame1Headline4").style.fontSize = splitVarTrigger[3].replace(/\D/g, '') + "px"
	document.getElementById("frame1Headline5").style.fontSize = splitVarTrigger[4].replace(/\D/g, '') + "px"

	tween.set("#mainContent",{opacity:1})
	tween.to("#frame1Background", {opacity:1,duration: 1, onComplete: animationEnd});
}
function animationEnd() {
     // call this function on the very end of the last animation.
     // clearInterval(vidCnt) // if you are using the video cue point feature of the template, uncomment the below code:
     // document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // uncomment this for creative using video.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}
