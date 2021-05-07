// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
var time = (defaultValues.trigger=="withPanel") ? '+=0.5' : '+=0';

gsap.set("#headlineWrapper, #subheadlineWrapper, #subheadline2Wrapper, #footerContainer, #ctaContainer", {rotationZ:0.01, force3D:false});

function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     splitTextHeadline("headline");
     startAnimation();
}

function startAnimation() {  
    var tl = gsap.timeline({onStart: function(){
        
        if(defaultValues.frame1Subheadline == "") document.getElementById("subheadlineWrapper").style.display = "none";
        if(defaultValues.frame1Subheadline2 == "") document.getElementById("subheadline2Wrapper").style.display = "none";
        if(defaultValues.disclaimer == "") document.getElementById("disclaimer").style.display = "none";
        panelAnimation();
    
    },onComplete: animationEnd}); //Screenshot FRAME5 / adlibEnd
    tl.to("#mainContent", {duration: 0.5, visibility: "visible"})
      .from("#logo", {duration: 0.5, opacity: 0},time)
      .from("#headlineWrapper, #subheadlineWrapper, #subheadline2Wrapper", {duration: 0.5, y: "20%", opacity: 0, force3D: false, stagger: 0.2},"-=0.25")
      .from("#footerContainer", {duration: 0.5, opacity: 0, y:"100%"})
      .from("#ctaContainer", {duration: 0.5, opacity: 0, onComplete: takeScreenshot},'-=0.5')
      .to("#headline1", {duration: 0.5, opacity: 0, y:"-20%"},'+=2')
      .from("#headline2", {duration: 0.5, opacity: 0, y:"20%", onComplete: takeScreenshot})
      .to("#headline2", {duration: 0.5, opacity: 0, y:"-20%"},'+=2')
      .from("#headline3", {duration: 0.5, opacity: 0, y:"20%"})
      .to("#ctaWrapper", {duration: 0.25, scale: 1.1, yoyo: true, repeat: 1},'+=0.5');
}
function panelAnimation() {
    switch(defaultValues.trigger) {
        case "withPanel":
            gsap.fromTo("#headerContainer", {x:"-100%"}, {x:"0%", duration: 0.5, delay: 0.5, force3D: false})
            break;
        case "noPanel":
            gsap.to("#headerContainer", {duration: 0, backgroundColor: "transparent"})  
            break;
    }
}

function splitTextHeadline(elem) {
    var countLineText1, countLineText2, countLineText3;
    
    var splitText1 = new SplitText("#"+elem+"1", {type:"words,chars,lines"});
    var text1 = splitText1.lines; 
    
    var splitText2 = new SplitText("#"+elem+"2", {type:"words,chars,lines"});
    var text2 = splitText2.lines; 
    
    var splitText3 = new SplitText("#"+elem+"3", {type:"words,chars,lines"});
    var text3 = splitText3.lines; 
    
    for (var i = 0; i < text1.length; i++) {
        countLineText1 = i;
    }
    for (var i = 0; i < text2.length; i++) {
        countLineText2 = i;
    }
    for (var i = 0; i < text3.length; i++) {
        countLineText3 = i;
    }
    
    if(countLineText1 == countLineText2 && countLineText1 == countLineText3 && countLineText2 == countLineText3) {
        document.getElementById(elem+2).style.position = "absolute";
        document.getElementById(elem+3).style.position = "absolute";
        return
    }
    
    if(countLineText1 >= countLineText2 && countLineText1 >= countLineText3) {
        document.getElementById(elem+3).style.position = "absolute";
        document.getElementById(elem+2).style.position = "absolute";
    }else if(countLineText2 >= countLineText3 && countLineText2 >= countLineText1){
        document.getElementById(elem+1).style.position = "absolute";
        document.getElementById(elem+3).style.position = "absolute";   
    }else if(countLineText3 >= countLineText2 && countLineText3 >= countLineText1){
        document.getElementById(elem+1).style.position = "absolute";
        document.getElementById(elem+2).style.position = "absolute";
    }
    
    if(countLineText1 <= countLineText3 || countLineText1 <= countLineText2) {
        var frame = 1;
        vAlignText(elem, frame);
    }
    if(countLineText2 <= countLineText3 || countLineText2 <= countLineText1) {
        var frame = 2;
        vAlignText(elem, frame);
    }
    if(countLineText3 <= countLineText1 || countLineText3 <= countLineText2) {
        var frame = 3;
        vAlignText(elem, frame);
    }
}

function vAlignText(elem, frame) {
    document.getElementById(elem+frame).style.height = "100%";
    document.getElementById(elem+frame).style.width = "100%";
    document.getElementById(elem+frame).style.display = "flex";
    document.getElementById(elem+frame).style.flexDirection = "column";
    document.getElementById(elem+frame).style.justifyContent = "center";
}


function animationEnd() {
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}