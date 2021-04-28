// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
// Global transition speed
var transitionSpeed = .5;
// Global ease setting
var easing = Power4.easeOut;
// Banner duration timer start time
var startTime;
// Timeline reference
var tf_origin = "150px 300px"
// Timeline reference
var tl;

// back up image go to en frame immediatly variable
var back_up_image = "no" /* @otomo string back_up_image_yes_no */
function initAnimation() {
     startTime = new Date(); 
     // Set Global Timeline
     tl = new TimelineMax({onComplete:endTime}); 
     if (back_up_image == "no"){
         tl.play();
     } else {
         tl.progress(1).pause();
     }
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {  

    tl.set(["#branding_top"], { x:-100, rotation:.001 , force3D:true});

    // Initial Set of all layer

    tl.set(["#char_holder"], {  scale:.4, x:-28, y:-236, transformOrigin:tf_origin, rotation:.001 , force3D:true});

    tl.set(["#bg_img"], { scale:1, x:0, y:0, transformOrigin:tf_origin, rotation:.001 , force3D:true});

    tl.set(["#char1"], {  scale:.25, x:-120, y:-85, transformOrigin:tf_origin, force3D:true, rotation:.001, autoAlpha: 1 }, "+=0");

    tl.set(["#char1b"], { scale:.2, x:175, y:-75, transformOrigin:tf_origin, force3D:true, rotation:.001, autoAlpha: 0 }, "+=0");

    tl.set(["#char2"], { scale:.38, x:-75, y:-115, transformOrigin:tf_origin, force3D:true, rotation:.001 }, "+=0");

    tl.set(["#char3"], { scale:.25, x:15, y:-85, transformOrigin:tf_origin, force3D:true, rotation:.001 }, "+=0");

    tl.set(["#char4"], { scale:.2, x:85, y:-70, transformOrigin:tf_origin, force3D:true, rotation:.001 }, "+=0");

    tl.set(["#char5"], { scale:.2, x:165, y:-75, transformOrigin:tf_origin, force3D:true, rotation:.001, autoAlpha: 0 }, "+=0");

    tl.set(["#char5b"], { scale:.2, x:-175, y:-70, transformOrigin:tf_origin, force3D:true, rotation:.001, autoAlpha: 1 }, "+=0");

    tl.set(["#ui" ], { scaleY:.2, scaleX:.4, x:-68, y:-115, transformOrigin:tf_origin, force3D:true, rotation:.001 }, "+=0");

    tl.set(["#uia" ], { scaleY:.4, scaleX:.8, x:-8, y:6, transformOrigin:tf_origin, force3D:true, rotation:.001 }, "+=0");


    tl.set(["#cta", "#t1", "#t2",], { y: 10, autoAlpha:0, force3D:true, rotation: .001 }, "+=0")

    tl.set(["#blue_bg"], { x: 400, force3D:true, rotation: .001 }, "+=0")


    tl.call(setzindex0);
    tl.call(setzindex1);
    tl.call(setzindex2);

    tl.set(["#mainContent"], { autoAlpha:1, force3D:true, rotation: .001 }, "+=0");
    

    tl.to(["#branding_top"], .5, { x:0, ease: Power1.easeOut}, 0);

   // First Move of characters

    tl.to(["#char1"], .75, { scale:.2, x:"-=50", y:"+=10", ease: Power1.easeOut}, .5);

    tl.to(["#char2"], .75, { scale:.25, x:"-=45", y:"+=30", ease: Power1.easeOut}, .5);

    tl.to(["#char3"], .75, { scale:.38, x:"-=95", y:"-=30", ease: Power1.easeOut}, .5);

    tl.to(["#char4"], .75, { scale:.25, x:"-=60", y:"-=15", ease: Power1.easeOut}, .5);

    tl.to(["#char5"], .75, { x:"-=80",y:"+=5", autoAlpha: 1, ease: Power1.easeOut}, .5);

    tl.to(["#char5b"], .75, { x:"-=50", y:"-=10", autoAlpha: 0, ease: Power1.easeOut}, .5);

    tl.to(["#uia"], .2, { scaleY:.8, scaleX:.8, autoAlpha:1, ease: Power1.easeOut}, 1);

    tl.to(["#uia"], .2, { scaleY:.8, scaleX:.8, autoAlpha:0, ease: Power1.easeOut}, 2);

    // Second Move of characters

    tl.to(["#char1"], .75, { x:"-=50", y:"-=10",autoAlpha: 0, ease: Power1.easeOut}, 2.25);

    tl.to(["#char1b"], 1, { x:"-=90",y:"+=5",autoAlpha: 1, ease: Power1.easeOut}, 2.25);

    tl.to(["#char2"], 1, { scale:.2, x:"-=50", y:"+=15", ease: Power1.easeOut}, 2.25);

    tl.to(["#char3"], 1, { scale:.25, x:"-=45", y:"+=30", ease: Power1.easeOut}, 2.25);

    tl.to(["#char4"], 1, { scale:.38, x:"-=100", y:"-=30", ease: Power1.easeOut}, 2.25);

    tl.to(["#char5"], 1, { scale:.25, x:"-=60", y:"-=15", ease: Power1.easeOut}, 2.25);

    tl.to(["#ui"], .2, { scaleY:.4, scaleX:.4, autoAlpha:1, ease: Power1.easeOut}, 2.5);

    // End Resolve

    tl.to(["#t1"], .5, { autoAlpha: 1, y:0, ease: Power1.easeOut ,onComplete:takeScreenshot}, "-="-.25);

    tl.to(["#t1"], .5, { autoAlpha: 0, y:10, ease: Power1.easeOut }, "+="+1);

    //tl.to(["#char_holder"], .5, { scale: 1.1, x: 185, y:-105, ease: Power1.easeOut }, "+="+0);


    tl.to(["#blue_bg"], .75, { x:0, ease: Power1.easeOut}, "-="+.25);

    tl.to(["#t2"], .5, { autoAlpha: 1, y:0, ease: Power1.easeOut ,onComplete:takeScreenshot}, "+="+.25);

    tl.to(["#cta"], .5, { autoAlpha: 1, y:0, ease: Power1.easeOut ,onComplete:animationEnd}, "+="+.5);
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     // clearInterval(vidCnt) // if you are using the video cue point feature of the template, uncomment the below code:
     // document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // uncomment this for creative using video.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}


function setzindex0(){

     document.getElementById("char5").style.zIndex = 0;
 
     document.getElementById("char4").style.zIndex = 0;
 
     document.getElementById("char1").style.zIndex = 1;
 
     document.getElementById("char3").style.zIndex = 1;
 
     document.getElementById("char2").style.zIndex = 2;
     
 }
 
 function setzindex1(){
 
     setTimeout(function(){ document.getElementById("char1").style.zIndex = 1; }, 500);
 
     setTimeout(function(){ document.getElementById("char5").style.zIndex = 0; }, 100);
 
     setTimeout(function(){ document.getElementById("char4").style.zIndex = 2; }, 500);
 
     setTimeout(function(){ document.getElementById("char2").style.zIndex = 2; }, 500);
 
     setTimeout(function(){ document.getElementById("char3").style.zIndex = 3; }, 500);
     
 }
 
 function setzindex2(){
 
     setTimeout(function(){ document.getElementById("char2").style.zIndex = 0; }, 2200);
 
     setTimeout(function(){ document.getElementById("char1").style.zIndex = 0; }, 2200);
 
     setTimeout(function(){ document.getElementById("char3").style.zIndex = 1; }, 2200);
 
     setTimeout(function(){ document.getElementById("char5").style.zIndex = 1; }, 2200);
 
     setTimeout(function(){ document.getElementById("char4").style.zIndex = 2; }, 2200);
     
 }

 function endTime(){

     // show total banner animation time in browser console.
     var endTime = new Date()
 
     console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");
 
 }
  