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
          (splitElems[i].innerHTML.match(format)) ? splitElems[i].style.top = (getStyle(splitElems[i-1],'top')+1)+"px" : splitElems[i].style.top = getStyle(splitElems[i-1],'top')+"px";
     }
}
function getStyle(o,prop) {
     return parseInt(window.getComputedStyle(eval(o)).getPropertyValue(prop).match(/\d+/))
 }
function overEffect() {

}

function outEffect() {

}
function positionElements() {
     //document.querySelector('#ctaContainer').className = defaultValues.trigger;
}
function introAnimation() {  
     tween = gsap.timeline();
     tween.set(["#bg",'#psLogo','#headerFooter'],{opacity:1})
     //Headline Animation
     tween.to("#taglineParent", {opacity:0.99,duration: 0.5,delay:0.5});
     // Arrow Animation
     tween.to("#arrowImg", {opacity:0.99,duration: 0.5});
     tween.to("#arrowImg", {left:5,duration: 0.5,ease:"sine.inOut"});
     tween.to("#arrowImg", {left:0,duration: 0.5,ease:"sine.inOut"});
     tween.to("#arrowImg", {left:5,duration: 0.5,delay:0.5,ease:"sine.inOut"});
     tween.to("#arrowImg", {left:0,duration: 0.5,ease:"sine.inOut"});
     tween.to("#arrowImg", {left:5,duration: 0.5,delay:0.5,ease:"sine.inOut"});
     tween.to("#arrowImg", {left:0,duration: 0.5,ease:"sine.inOut"});
}
function animationEnd() {
     // call this function on the very end of the last animation.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}