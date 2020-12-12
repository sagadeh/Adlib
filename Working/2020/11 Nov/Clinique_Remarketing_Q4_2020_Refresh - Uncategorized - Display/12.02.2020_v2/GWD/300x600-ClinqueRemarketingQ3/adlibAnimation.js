"use strict";
var tl = gsap.timeline({paused:true});
gsap.registerPlugin(CSSPlugin)
// S C R E E N S H O T  A N D  P L A Y P A U S E
function startAnimation(){
  adlibStart();
  console.log("start screenshot!")
};

function callAdlibScreenshot(){
 takeScreenshot();
 console.log("screenshot!")
}

function stopAdlibScreenshot(){
 adlibEnd();
 console.log("end screenshot!")
}


//call play pause
function callGWDPlayPause() {
  console.log("updated");
  gwd.auto_PauseBtnClick = function (event) {
    gsap.globalTimeline.pause();
    console.log("Pause Timeline");
  };
  gwd.auto_PlayBtnClick = function (event) {
    gsap.globalTimeline.resume();
    console.log("Play Timeline");
  };
}


// A N I M A T I O N
function initAnim() {
	console.log("animation initialize...");
    exitBtn.style.visibility = "visible";
    tl.resume();
    frame1Anim();
	startAnimation();
    callGWDPlayPause();
}



//Text Animation
function textAnimation(_h, _cta){
    var splitCopy = new SplitText(_h, { type:"lines" }); 
    var copy = splitCopy.lines;
    gsap.to([_h], 0, {opacity:1});
    gsap.fromTo([_cta], 0.3, {y:-10}, {y:0, opacity:1, ease:"power1.out", delay:0.2*copy.length});
    for (var i = 0; i < copy.length; i++){
         gsap.set(copy[i], {force3D:true, transformStyle:"flat"});
         gsap.fromTo(copy[i], 0.3, {opacity:0, y:-20},{opacity:1, y:0, ease: "power1.out", delay:(0.2 * i)})
       
    }
    
}
//frames
function frame1Anim() {
    gsap.to(['#bg', '#logo'], 0.5, {opacity:1, ease:"power1.in"});
    gsap.fromTo(['#prod1'], 0.5, {scale:1.1, opacity:0}, {scale:1, opacity:1, x:0, ease: "power1.in", delay:0.5});
    gsap.delayedCall(1, function(){textAnimation(h1, ctaDiv1)});
    gsap.delayedCall(2.5, callAdlibScreenshot);
    gsap.delayedCall(4, frame2Anim);
}

function frame2Anim() {
    gsap.to(['#prod1', '#h1', '#ctaDiv1'], 0.5, {opacity:0, ease:"power1.in"});
    gsap.fromTo(['#prod2'], 0.5, {scale:1.1, opacity:0}, {scale:1, opacity:1, x:0, ease: "power1.in", delay:0.5});
    gsap.delayedCall(1, function(){textAnimation(h2, ctaDiv2)});
    gsap.delayedCall(2.5, callAdlibScreenshot);
    gsap.delayedCall(4, stopAdlibScreenshot);
}






