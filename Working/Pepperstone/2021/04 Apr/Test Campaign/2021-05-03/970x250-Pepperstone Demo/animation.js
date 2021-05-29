// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
var tl;

gsap.set("#headline-wrapper, #subheadline-wrapper, #subheadline2-wrapper, #footer-container, #cta-container", {rotationZ:0.01, force3D:false});

function initAnimation() {
    // place all fluid elements before text resize and css attrib.
    Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
    Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
    splitTextHeadline("headline");
    startAnimation();
    eventListener();
}

function startAnimation() {  
    tl = gsap.timeline({
        onStart: function(){
            if(Adlib.isEmpty(defaultValues.frame1Subheadline)) document.getElementById("subheadline-wrapper").style.display = "none";
            if(Adlib.isEmpty(defaultValues.frame1Subheadline2)) document.getElementById("subheadline2-wrapper").style.display = "none";
            if(Adlib.isEmpty(defaultValues.disclaimer) && Adlib.isEmpty(defaultValues.frame1Subheadline) && Adlib.isEmpty(defaultValues.frame1Subheadline2)) {
                //frame1Subheadline, frame1Subheadline2, disclaimer are Empty/Null
                document.getElementById("disclaimer").style.opacity = 0;
            }else if(Adlib.isEmpty(defaultValues.disclaimer)){
                //disclaimer are Empty/Null
                document.getElementById("footer-container").style.display = "none";
                document.getElementById("header-container").style.paddingBottom = "15px";
            }
            if(defaultValues.trigger == "noPanel") {
                gsap.set("#panel-white", {backgroundColor: "transparent"}); 
                document.getElementById("footer-container").style.width = "100%";
            } 
        },onComplete: animationEnd
    }); //Screenshot FRAME5 / adlibEnd
    tl.to("#mainContent", {duration: 0.5, visibility: "visible"})
      //.from("#panel-white", {x:"-50%", opacity: 0}, {duration: 0.5, x:"0%", opacity: 1, force3D: false})
      .from("#logo", {duration: 0.5, opacity: 0})
      .from("#headline-wrapper, #subheadline-wrapper, #cta-container", {duration: 0.5, opacity: 0, force3D: false})
      .from("#subheadline2-wrapper", {duration: 0.5, opacity: 0, y: "10%", force3D: false})
      .from("#footer-container", {duration: 0.5, opacity: 0, y:"100%", onComplete: function(){
          //NO HEADLINE 2 AND HEADLINE 3
          var action = (Adlib.isEmpty(defaultValues.frame2Headline) && Adlib.isEmpty(defaultValues.frame3Headline)) ? "cta" : "screenshot";
          skipTextAnimation(action);
      }})
      .to("#headline1", {duration: 0.5, opacity: 0, y:"-10%"},'+=2.5')
      .from("#headline2", {duration: 0.5, opacity: 0, y:"10%", onComplete: function(){
          //NO HEADLINE 3
          var action = (Adlib.isEmpty(defaultValues.frame3Headline)) ? "cta" : "screenshot";
          skipTextAnimation(action);
      }})
      .to("#headline2", {duration: 0.5, opacity: 0, y:"-10%"},'+=2.5')
      .from("#headline3", {duration: 0.5, opacity: 0, y:"10%"})
      .to("#cta-wrapper", {duration: 0.25, scale: 1.1, yoyo: true, repeat: 1},'+=0.5');
}

function skipTextAnimation(action) {
    switch(action) {
        case "cta":
            tl.paused(true);
            gsap.to("#cta-wrapper", {duration: 0.25, scale: 1.1, yoyo: true, repeat: 1, onComplete: animationEnd});
            break;
        case "screenshot":
            takeScreenshot();
            break;
    }
}

function splitTextHeadline(elem) {
    var countLineText1, countLineText2, countLineText3 = 0;
    
    var splitText1 = new SplitText("#"+elem+"1", {type:"words,chars,lines"});
    var text1 = splitText1.lines; 
    
    var splitText2 = new SplitText("#"+elem+"2", {type:"words,chars,lines"});
    var text2 = splitText2.lines; 
    
    var splitText3 = new SplitText("#"+elem+"3", {type:"words,chars,lines"});
    var text3 = splitText3.lines; 
    
    for (var i = 0; i < text1.length; i++) countLineText1 = i;
    for (var i = 0; i < text2.length; i++) countLineText2 = i;
    for (var i = 0; i < text3.length; i++) countLineText3 = i;
    
    if(countLineText1 == countLineText2 && countLineText1 == countLineText3 && countLineText2 == countLineText3) {
        document.getElementById(elem+2).style.position = "absolute";
        document.getElementById(elem+3).style.position = "absolute";
        return
    }
    
    if(countLineText1 >= countLineText2 && countLineText1 >= countLineText3) {
        vAlignText(elem, 3);
        vAlignText(elem, 2);
    }else if(countLineText2 >= countLineText3 && countLineText2 >= countLineText1) {
        vAlignText(elem, 1);
        vAlignText(elem, 3);
    }else if(countLineText3 >= countLineText2 && countLineText3 >= countLineText1) {
        vAlignText(elem, 1);
        vAlignText(elem, 2);
    }
}

function vAlignText(elem, frame) {
    document.getElementById(elem+frame).style.cssText = `
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
    `;
}

function eventListener() {
    document.getElementById('exitButton').addEventListener("mouseover", stageEventListener);
    document.getElementById('exitButton').addEventListener("mouseout", stageEventListener);
}

function stageEventListener(e) {
    switch(e.type) {
        case "mouseover":
            gsap.to("#cta-wrapper", {duration: 0.5, backgroundColor: defaultValues.ctaColor2});
            break;
        case "mouseout":
            gsap.to("#cta-wrapper", {duration: 0.5, backgroundColor: defaultValues.ctaColor1});
            break;
    }
}

function animationEnd() {
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}