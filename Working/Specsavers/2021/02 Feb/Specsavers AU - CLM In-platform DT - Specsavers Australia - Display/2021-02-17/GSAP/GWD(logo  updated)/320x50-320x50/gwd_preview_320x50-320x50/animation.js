//custom easeing
CustomEase.create("inAnimation", "0, 0, 0, 0.995");
CustomEase.create("linear", "0.250, 0.250, 0.750, 0.750");
CustomEase.create("outAnimation", "1, 0.005, 1, 1");
//image easing
CustomEase.create("imageEaseIn", "0.0, 0.0, 0.580, 1.0");
CustomEase.create("imageEaseOut", "0.420, 0.0, 1.0, 1.0");
//arrow easing
CustomEase.create("arrowEaseIn", "0, 0, 0.255, 0.995");


//variables
var tl = new TimelineMax,

    tween;
//inital Animation
var initAnim = () => {
    tl.to(curveImg, 0, { x: 320, rotation: 0.01, opacity: 1, force3D: true, delay: -1 });
    tl.to(logoImg, 0, { opacity: 0, delay: -1 });
    tl.to([ctatext, arrow, legaltext, headline1, subheadline1], { opacity: 0, x: 100, delay: -1 });
    tl.to([backgroundImg, claim, greenline], 0, {  opacity: 0, rotation: 0.01, force3D: true, delay: -1 });
    tl.to(legaltext, 0, {  opacity: 0, x: 100, rotation: 0.01, force3D: true, delay: -1 });
}
//animate
var animation = () => {
    initAnim();
    TweenLite.delayedCall(1, animationnow);
}

var animationnow = () => {
    adlibStart();
    callGWDPlayPause();
    adjustCurve();
  
  if(defaultValues.animationType = "A"){
            tween = tl.to(logoImg, 1, {opacity: 1,force3D: true, delay: 0})
            .to(curveImg,         1, { ease: "inAnimation", x: 100, opacity: 1,force3D: true, delay: -1 })
            .to(headline1,        1, { ease: "inAnimation", x: 0,   opacity: 1, force3D: true, delay: -0.8, onComplete: callAdlibScreenshot })
            .to(headline1,        1, { ease: "outAnimation",x: 100, opacity: 0, force3D: true, delay: 1.8}) 
            .to(subheadline1, 1, { ease: "inAnimation",  x: 0,   opacity: 1, force3D: true, delay: 0, onComplete: callAdlibScreenshot }) 
            .to(subheadline1, 1, { ease: "outAnimation", x: 100, opacity: 0, force3D: true, delay: 1.8}) 
            .to([ctatext, arrow, legaltext], 1, { ease: "inAnimation", x: 0,   opacity: 1, force3D: true, delay: 0, onComplete: callAdlibScreenshot})
         
            .to(arrow, 0.2, { ease: "arrowEaseIn",  x: 5, force3D: true, delay: 0 }) 
            .to(arrow, 0.2, { ease: "arrowEaseIn", x: 0, force3D: true, delay: 0 }) 
            .to(arrow, 0.2, { ease: "arrowEaseIn",  x: 5, force3D: true, delay: 0 }) 
            .to(arrow, 0.2, { ease: "arrowEaseIn", x: 0, force3D: true, delay: 0})
            .to(curveImg,         1, { ease: "outAnimation", x: 200, opacity: 0, force3D: true, delay: 1 })
            .to([ctatext, arrow, legaltext], 1, { ease: "outAnimation", x: 100, opacity: 0, force3D: true, delay: -1 })
           
            .to(curveImg,         1, { ease: "inAnimation", x: 100, opacity: 1, force3D: true, delay: 0 })
            .to(headline1,        1, { ease: "inAnimation", x: 0,   opacity: 1, force3D: true, delay: -0.8, onComplete: stopAdlibScreenshot})
  }
  
  
  
}





