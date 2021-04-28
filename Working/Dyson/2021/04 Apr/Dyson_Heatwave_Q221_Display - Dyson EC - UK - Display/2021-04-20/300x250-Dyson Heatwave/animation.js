// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {  
     tween = gsap.timeline();
     //
     tween.set("#frame2BgCover",{width:0})
     //tween.set("#frame2GirlImage",{left:300})
     //
     tween.to("#frame1BgImage", {delay:1,opacity:0.99,duration: 1,ease: "power2.out"});
     tween.to("#logoImage", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
     tween.to("#introImage", {opacity:0,duration: 0.5,ease: "power2.out"},"-=1");
     tween.to("#frame1Text1", {opacity:1,duration: 0.5,ease: "power2.out"},"-=1");
     tween.to("#frame1Text2", {opacity:1,duration: 0.5,ease: "power2.out"},"-=1");
     //solar flare
     tween.to("#flare1, #flare2", {opacity:0.2,duration: 0.5,ease: "power2.out"});
     tween.from("#flare1, #flare2", {x:"-400%",y:"-100%",scale: 0,duration: 2,ease: "power2.out"},'-=1');
     //solar flare
     tween.to("#frame1BgCover", {delay:1,width:0,left:300,opacity:0,duration: 0.5,ease: "power2.out"});
     tween.to("#frame1Text1", {opacity:0,duration: 0.5,ease: "power2.out"},"-=0.5");
     tween.to("#frame1Text2", {opacity:0,duration: 0.5,ease: "power2.out"},"-=0.5");

     tween.to("#frame2BgCover", {width:300,duration: 0.5,ease: "power2.out"},"-=0.5");
     tween.to("#frame2BgImage", {opacity:1,duration: 0.5,ease: "power2.out"},"-=0.5");
     tween.to("#modelContainer", {opacity:1,left: '0%',duration: 1,ease: "power2.out"},"-=0.5");
     tween.to("#frame2GirlImage", {opacity:1,duration: 1,ease: "power2.out", onStart: function(){
        gsap.to("#hairSeq", {duration: 0.75, left: "-360px", ease:SteppedEase.config(12), repeat:20});
     }},"-=0.5");
     tween.to("#frame2Text1", {opacity:1,duration: 0.5,ease: "power2.out"},"-=0.5");
     tween.to("#frame2Text1", {delay:1,opacity:0,duration: 0.5,ease: "power2.out"});
     
     tween.to("#frame3Text1", {opacity:1,duration: 0.5,ease: "power2.out"},"-=1");
     tween.to("#frame3", {delay:1,opacity:0,duration: 0.5,ease: "power2.out"});
     tween.to("#frame2GirlImage, #hairContainer", {opacity:0,duration: 0.5,ease: "power2.out"},"-=0.5");
     tween.to("#frame2BgImage", {opacity:0,duration: 0.5,ease: "power2.out"},"-=0.5");
     tween.to("#frame4BgImage", {opacity:0.99,duration: 1,ease: "power2.out", onStart: function(){
         gsap.to("#hair2Container", {duration: 0.5, opacity: 1});
         gsap.to("#hair2Seq", {duration: 0.75, left: "-240px", ease:SteppedEase.config(12), repeat:20});
     }});
     tween.to("#frame4Text1", {opacity:1,duration: 1,ease: "power2.out"},"-=1");
     tween.to("#frame4", {delay:1,opacity:0,duration: 0.5,ease: "power2.out"});
     tween.to("#frame5BgImage", {opacity:0.99,duration: 1,ease: "power2.out"});
     tween.to("#prodImage", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
     tween.to("#footerImage", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
     tween.to("#frame5Text3", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
     tween.to("#frame5Text1", {opacity:0.99,duration: 1,ease: "power2.out"});
     tween.to("#frame5Text2", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
     tween.to("#ctaButton", {opacity:0.99,duration: 1,ease: "power2.out"});
     tween.to("#legalText", {opacity:0.99,duration: 1,ease: "power2.out"});
     tween.to("#footerImage2", {opacity:0.99,duration: 1,ease: "power2.out"});
     tween.to("#frame6Text1", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     // clearInterval(vidCnt) // if you are using the video cue point feature of the template, uncomment the below code:
     // document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // uncomment this for creative using video.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}