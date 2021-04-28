// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
var textHeadlines1, textHeadlines2, textHeadlines3, textHeadlines5;
var parent1, parent2, parent3, parent5;

gsap.set("#headline1", {scale: 0.9});
gsap.set("#headline2", {scale: 0.9});
gsap.set("#headline3", {scale: 0.9});

function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     splitText();
     //startAnimation();
}
function startAnimation() { 
    var tl = gsap.timeline({onComplete: animationEnd}); //Screenshot FRAME5 / adlibEnd
    
    tl.to("#mainContent", {duration: 0.5, visibility: "visible"})
      .to("#headline1", {duration: 2, scale: 1})
      .to("#logo3", {duration: 0.5, opacity: 0},'-=0.5')
      .to("#headline2", {duration: 2, scale: 1})
      .from("#check1-only-holder", {duration: 0.25, height: "0%"},'-=1.5')
      .from("#check2-only-holder", {duration: 0.25, width: "0%"},'-=1.3')
      .to("#headline3", {duration: 2, scale: 1})
      .from("#frame4background", {duration: 0.5, scale: 0, ease: "power2.out"},"+=0.5")
      .from("#iphonelogo", {duration: 0.5, opacity: 0, onComplete: takeScreenshot}) //Screenshot FRAME4
      .to("#frame4background", {duration: 0.5, scale: 1.05, ease: "power2.out"},"+=1")
      .to("#frame4background", {duration: 0.5, scale: 0, ease: "power2.out"})
      .to("#iphonelogo", {duration: 0.5, opacity: 0},"-=1")
      .to("#check-only-wrapper", {duration: 0.5, opacity: 0},'-=1')
      .from("#subheadline5", {duration: 0.25, y: "100%", force3D: false},"+=0.5")
      .from("#cta", {duration: 0.25, y: "110%", force3D: false})
      .from("#arrow", {duration: 0.25, y: "110%", force3D: false},"-=0.25")
      .from("#disclaimer", {duration: 0.25, y: "100%", force3D: false})
      .from("#frame5logo", {duration: 0.25, y: "120%", force3D: false})
      .from("#check1-holder", {duration: 0.25, height: "0%", force3D: false})
      .from("#check2-holder", {duration: 0.25, width: "0%", force3D: false});
}

function setParentLineText() {
    for (var i = 0; i < textHeadlines1.length; i++) {
      parent1 = textHeadlines1[i];
      setHeadlineText1();
    }
    for (var i = 0; i < textHeadlines2.length; i++) {
      parent2 = textHeadlines2[i];
      setHeadlineText2();
    }
    for (var i = 0; i < textHeadlines3.length; i++) {
      parent3 = textHeadlines3[i];
      setHeadlineText3();
    }
    for (var i = 0; i < textHeadlines5.length; i++) {
      parent5 = textHeadlines5[i];
      setHeadlineText5();
    }
    startAnimation();
    
    setTimeout(function(){takeScreenshot()},1750);//Screenshot FRAME1
    setTimeout(function(){takeScreenshot()},3750);//Screenshot FRAME2
    setTimeout(function(){takeScreenshot()},5750);//Screenshot FRAME3
}

/* SET TEXT AND ANIMATION */
function setHeadlineText1() {
  for(var i = 0; i < parent1.children.length; i++) {
    gsap.set(parent1.children[i], {y: "100%"});
    gsap.to(parent1.children[i], {duration: 0.5, y: "0%", force3D: false});
    gsap.to(parent1.children[i], {duration: 0.5, y: "-100%", delay:2, force3D: false});
  }
}
function setHeadlineText2(){
  for(var i = 0; i < parent2.children.length; i++) {
    gsap.set(parent2.children[i], {y: "100%"});
    gsap.to(parent2.children[i], {duration: 0.5, y: "0%", delay: 2, force3D: false});
    gsap.to(parent2.children[i], {duration: 0.5, y: "-100%", delay:4, force3D: false});
  }
}
function setHeadlineText3() {
  for(var i = 0; i < parent3.children.length; i++) {
    gsap.set(parent3.children[i], {y: "100%"});
    gsap.to(parent3.children[i], {duration: 0.5, y: "0%", delay: 4, force3D: false});
    gsap.to("#headline3", {duration: 0.3, scale: "1.3", delay:6.5, ease: "power4.out", force3D: false});
    gsap.to("#headline3", {duration: 0.3, scale: "0", delay:6.65, ease: "power4.in", force3D: false});
  }
}
function setHeadlineText5() {
  for(var i = 0; i < parent5.children.length; i++) {
    gsap.set(parent5.children[i], {y: "100%"});
    gsap.to(parent5.children[i], {duration: 0.5, y: "0%", delay: 10, force3D: false});
  }
}
/* SET TEXT AND ANIMATION */

    
function animationEnd() {
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}

function splitText() {
  var splitHeadline1, splitHeadline2, splitHeadline3, splitHeadline5;

  splitHeadline1 = new SplitText("#headline1", {type:"words,chars,lines"});
  textHeadlines1 = splitHeadline1.lines; //an array of all the divs that wrap each character
    
  splitHeadline2 = new SplitText("#headline2", {type:"words,chars,lines"});
  textHeadlines2 = splitHeadline2.lines; //an array of all the divs that wrap each character
    
  splitHeadline3 = new SplitText("#headline3", {type:"words,chars,lines"});
  textHeadlines3 = splitHeadline3.lines; //an array of all the divs that wrap each character

  splitHeadline5 = new SplitText("#headline5", {type:"words,chars,lines"});
  textHeadlines5 = splitHeadline5.lines; //an array of all the divs that wrap each character
    
  setParentLineText();
}