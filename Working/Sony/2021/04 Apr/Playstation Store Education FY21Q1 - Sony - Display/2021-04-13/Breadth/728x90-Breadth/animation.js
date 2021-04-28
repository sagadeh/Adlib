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
var tl;
// back up image go to en frame immediatly variable
var back_up_image = "no" /* @otomo string back_up_image_yes_no */
function initAnimation() {
     startTime = new Date(); 
     // Set Global Timeline
     tl = new TimelineMax({onComplete:endTime}); 
     //animate(); 
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
     
    tl.set(["#branding_top"], { x:-80, rotation:.001 , force3D:true});


    tl.set(["#bg_img"], { scale:3, left:'78%', top:'0%', xPercent:'-50', yPercent:'-50', transformOrigin:"22% 100%", rotation:.001 , force3D:true});

    tl.set(["#figure"], { scale:1.4, x:664, y:85, xPercent:'-50', yPercent:'-50', transformOrigin:"50% 50%",  force3D:true, rotation:.001 }, "+=0");




    tl.set(["#cta", "#t1", "#t2", "#t3"], { y: 10, autoAlpha:0,force3D:true, rotation: .001 }, "+=0")

    tl.set(["#grad", "#blue_bg"], { x: 400, force3D:true, rotation: .001 }, "+=0")

    tl.set(["#mainContent"], { autoAlpha:1, force3D:true, rotation: .001 }, "+=0");

    tl.to(["#branding_top"], .5, { x:0, ease: Power1.easeOut}, 0);

    

    tl.to(["#bg_img"], 4, { scale:.5, ease: Power3.easeOut}, 0);

    tl.to(["#figure"], 4, { scale:.5, x:364, y:45,  ease: Power3.easeOut}, 0);

    tl.to(["#grad"], 1.5, { x:0, ease: Power1.easeOut}, 1.0);

    tl.to(["#t1"], .5, { autoAlpha: 1, y:0, ease: Power1.easeOut ,onComplete:takeScreenshot}, 2.4);

    tl.to(["#blue_bg"], .75, { x:0, ease: Power1.easeOut}, 4.4);

    tl.to(["#t2"], .5, { autoAlpha: 1, y:0, ease: Power1.easeOut }, 5.4);

    tl.to(["#cta"], .5, { autoAlpha: 1, y:0, ease: Power1.easeOut ,onComplete:animationEnd}, 6);
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     // clearInterval(vidCnt) // if you are using the video cue point feature of the template, uncomment the below code:
     // document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // uncomment this for creative using video.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}

function endTime(){

     // show total banner animation time in browser console.
     var endTime = new Date()
 
     console.log("Animation duration: " + ((endTime - startTime) / 1000) + " seconds");
 
 }
 