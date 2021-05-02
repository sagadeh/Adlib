// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})


let tl;
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
    splitText();
     startAnimation();
}
function startAnimation() {  
    tl = gsap.timeline({
        onStart: function(){
            if(defaultValues.disclaimer == "N/A") document.getElementById("disclaimer").style.opacity = 0;
        },onComplete: animationEnd
    });
    
    tl.to("#mainContent", {duration: 0, display: "block"})
      .add(panel)
      .from("#logo", {duration: 0.5, opacity: 0},'+=0.5')
      .from("#headlineWrapper, #subHeadlineWrapper, #subHeadline2Wrapper", {duration: 0.5, y: "20%", opacity: 0, force3D: false, stagger: 0.2},"-=0.25")
      .from("#ctaContainer", {duration: 0.5, opacity: 0})
      .from("#footerContainer", {duration: 0.5, opacity: 0, y:"100%", onComplete: takeScreenshot})
      .to("#frame1headline", {duration: 0.5, opacity: 0, y:"-20%", onComplete: function(){
          gsap.set("#frame1headline",{display:"none"});
          gsap.set("#frame2headline",{display:"block"});
      }},'+=2')
      .from("#frame2headline", {duration: 0.5, opacity: 0, y:"20%", onComplete: takeScreenshot})
      .to("#frame2headline", {duration: 0.5, opacity: 0, y:"-20%", onComplete: function(){
          gsap.set("#frame2headline",{display:"none"});
          gsap.set("#frame3headline",{display:"block"});
      }},'+=2')
      .from("#frame3headline", {duration: 0.5, opacity: 0, y:"20%"})
      .to("#ctaContainer", {duration: 0.25, scale: 1.2, yoyo: true, repeat: 1},'+=1');
}
function panel() {
    switch(defaultValues.trigger) {
        case "withPanel":
            gsap.fromTo("#headerContainer", {x:"-100%"}, {x:"0%", duration: 0.5, force3D: false})
            break;
        case "noPanel":
            gsap.to("#headerContainer", {duration: 0, backgroundColor: "transparent"})  
            break;
    }
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}
function splitText() {
    var splitHeadline1, splitHeadline2, splitHeadline3, splitHeadline5;
    var textHeadlines1, textHeadlines2, textHeadlines3, textHeadlines5;
  splitHeadline1 = new SplitText("#frame3headline", {type:"words,chars,lines"});
  textHeadlines1 = splitHeadline1.lines; //an array of all the divs that wrap each character
    
    for (var i = 0; i < textHeadlines1.length; i++) {
        console.log(textHeadlines1[i])
    }
}