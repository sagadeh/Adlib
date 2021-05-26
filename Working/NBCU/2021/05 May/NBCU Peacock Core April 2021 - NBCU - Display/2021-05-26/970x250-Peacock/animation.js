// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
gsap.set("#show1Container, #show2Container, #show3Container", {rotationZ: 0.01, force3D: false});

let tween;
let concept;
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {  
     tween = gsap.timeline();
     (Adlib.isEmpty(defaultValues.frame1Subheadline)) ? concept = "A" : concept = "B";
     document.querySelector('#frame1HeadlineContent').classList.add("frame1HeadlineContent_"+concept);
     document.querySelector('#frame1HeadlineContainer').classList.add("frame1HeadlineContainer_"+concept);
     document.querySelector('#frame1SubheadlineContainer').classList.add("frame1SubheadlineContainer_"+concept);
     if (defaultValues.numberOfFrames == "Single") {
          document.querySelector('#topMultipleContent').style.display = "none";
          document.querySelector('#spineContent').style.bottom = (Adlib.getStyle("showTitleContent","height") + Adlib.getStyle("showTitleContent","bottom") + 4)+"px";
          document.querySelector('#backGradientContent').style.height = (Adlib.getStyle("showTitleContent","height") + Adlib.getStyle("showTitleContent","bottom") + 10)+"px";
          document.querySelector("#mainContent").style.opacity = 1;
          animationEnd();
     } else {
          document.querySelector('#topSingleContent').style.display = "none";

          console.log(spineLoc());
          document.querySelector('#spine1Content').style.bottom = spineLoc()+"px"
          document.querySelector('#spine2Content').style.bottom = spineLoc()+"px"
          document.querySelector('#spine3Content').style.bottom = spineLoc()+"px"

          document.querySelector('#showTitle1Content').style.bottom = (Adlib.getStyle("spine1Content","bottom") - Adlib.getStyle("showTitle1Content","height")-4)+"px";
          document.querySelector('#showTitle2Content').style.bottom = (Adlib.getStyle("spine2Content","bottom") - Adlib.getStyle("showTitle2Content","height")-4)+"px";
          document.querySelector('#showTitle3Content').style.bottom = (Adlib.getStyle("spine3Content","bottom") - Adlib.getStyle("showTitle3Content","height")-4)+"px";
          
          document.querySelector('#backGradientContent1').style.height = (Adlib.getStyle("showTitle1Content","height") + Adlib.getStyle("showTitle1Content","bottom") + 10)+"px";
          document.querySelector('#backGradientContent2').style.height = (Adlib.getStyle("showTitle2Content","height") + Adlib.getStyle("showTitle2Content","bottom") + 10)+"px";
          document.querySelector('#backGradientContent3').style.height = (Adlib.getStyle("showTitle3Content","height") + Adlib.getStyle("showTitle3Content","bottom") + 10)+"px";
          animationMultiple();
     }
}
function spineLoc() {
     let spineArr = [];
     for (var i = 1;i < 4;i++) {
          let spineLoc = (Adlib.getStyle("showTitle"+i+"Content","height") + Adlib.getStyle("showTitle"+i+"Content","bottom") + 6)
          spineArr.push(spineLoc);
     }
     spineArr.sort();
     return spineArr[spineArr.length-1]
}
function animationMultiple() {
     tween.set("#show1Container",{scale:0.9,y:-creativeSize.split("x")[1]});
     tween.set("#show2Container",{scale:0.9,y:creativeSize.split("x")[1]});
     tween.set("#show3Container",{scale:0.9,y:-creativeSize.split("x")[1]});
     tween.to("#show1Container", {y:0,duration: 1,ease: "power2.out"})
     tween.to("#show2Container", {y:0,duration: 1,ease: "power2.out"},"-=1")
     tween.to("#show3Container", {y:0,duration: 1,ease: "power2.out"},"-=1")
     tween.to("#show1Container", {scale:1,duration: 1,ease: "power2.out"})
     tween.to("#show2Container", {scale:1,duration: 1,ease: "power2.out"},"-=1")
     tween.to("#show3Container", {scale:1,duration: 1,ease: "power2.out"},"-=1")
     tween.from("#spine1Content, #showTitle1Content, #spine2Content, #showTitle2Content, #spine3Content, #showTitle3Content", {duration: 0.5, opacity: 0, onComplete:animationEnd});
     document.querySelector("#mainContent").style.opacity = 1;
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     // clearInterval(vidCnt) // if you are using the video cue point feature of the template, uncomment the below code:
     // document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // uncomment this for creative using video.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}