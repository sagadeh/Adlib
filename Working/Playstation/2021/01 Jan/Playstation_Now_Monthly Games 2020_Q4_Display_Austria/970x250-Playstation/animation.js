// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
let format = '[^\x00-\x7F]';
function initAnimation() {
     positionElements();
     introAnimation();
     document.querySelector("#exitButton").addEventListener('mouseover',overEffect);
     document.querySelector("#exitButton").addEventListener('mouseout',outEffect);
     mySplitText = new SplitText("#tagLine", {type:"lines"});
     let splitElems = document.getElementById('tagLine').children;
     for (let i = 1;i<splitElems.length;i++) {
          (splitElems[i].innerHTML.match(format)) ? splitElems[i].style.top = (getStyle(splitElems[i-1],'top')+3)+"px" : splitElems[i].style.top = getStyle(splitElems[i-1],'top')+"px";
     }
}
function getStyle(o,prop) {
     return parseInt(window.getComputedStyle(eval(o)).getPropertyValue(prop).match(/\d+/))
 }
function overEffect() {
     gsap.set("#ctaEffect",{left:-258});
     gsap.to("#ctaContainer", {scale:1.05,duration: 0.2});
     gsap.to("#ctaEffect", {left:265,opacity:0.1,duration: 0.5});
}

function outEffect() {
     gsap.set("#ctaEffect",{left:-258});
     gsap.to("#ctaContainer", {scale:1,duration: 0.2});
     gsap.to("#ctaEffect", {left:265,opacity:0.2,duration: 0.3});
}
function positionElements() {
     document.querySelector('#offerParent').className = defaultValues.trigger;
}
function introAnimation() {  
     tween = gsap.timeline();
     tween.set(["#bg",'#psLogo','#headerFooter','#taglineFooter'],{opacity:1})
     //Headline Animation
     tween.to("#taglineParent", {opacity:0.99,duration: 0.5,delay:0.5});
     tween.to("#offerParent", {opacity:0.99,duration: 0.5},"-=0.5");
     tween.to("#rating", {opacity:0.99,duration: 0.5},"-=0.5");
     //Game images Animation
     tween.to("#game1Image", {top:-47,rotate:10,duration: 0.5});
     tween.to("#game1Image", {rotate:0,duration: 8});
     tween.to("#game1Image", {top:-34,left:195,duration: 0.5},"-=7");
     tween.to("#game2Image", {top:-29,left:418,rotate:-20,opacity:0.99,duration: 0.5},"-=6.5");
     tween.to("#game2Image", {rotate:0,duration: 8},"-=6");
     tween.to("#game3Image", {top:-12,left:631,rotate:-20,opacity:0.99,duration: 0.5},"-=8");
     tween.to("#game3Image", {rotate:0,duration: 8},"-=7.5");
     //Game images scaling animation
     tween.to("#game1Image", {scale:1.1,duration: 0.2},"-=7.5");
     tween.to("#game1Image", {scale:1,duration: 0.2},"-=7.3");
     tween.to("#game2Image", {scale:1.1,duration: 0.2},"-=7.3");
     tween.to("#game2Image", {scale:1,duration: 0.2},"-=7.1");
     tween.to("#game3Image", {scale:1.1,duration: 0.2},"-=7.1");
     tween.to("#game3Image", {scale:1,duration: 0.2},"-=6.9");
     tween.to("#game1Image", {scale:1.1,duration: 0.2},"-=5.5");
     tween.to("#game1Image", {scale:1,duration: 0.2},"-=5.3");
     tween.to("#game2Image", {scale:1.1,duration: 0.2},"-=5.3");
     tween.to("#game2Image", {scale:1,duration: 0.2},"-=5.1");
     tween.to("#game3Image", {scale:1.1,duration: 0.2},"-=5.1");
     tween.to("#game3Image", {scale:1,duration: 0.2,onComplete:animationEnd},"-=4.9");
     // RATING, OFFER, and CTA
     tween.to("#ctaContainer", {opacity:0.99,duration: 1,onComplete:takeScreenshot},"-=8");
}
function animationEnd() {
     // call this function on the very end of the last animation.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}