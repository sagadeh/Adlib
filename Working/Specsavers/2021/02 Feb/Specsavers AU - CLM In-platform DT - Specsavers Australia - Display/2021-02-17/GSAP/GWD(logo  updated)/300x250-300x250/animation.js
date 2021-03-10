//custom easeing
CustomEase.create("inAnimation", "0, 0, 0, 0.995");
CustomEase.create("linear", "0.250, 0.250, 0.750, 0.750");
CustomEase.create("outAnimation", "1, 0.005, 1, 1");
//image easing
CustomEase.create("imageEaseIn", "0.0, 0.0, 0.580, 1.0");
CustomEase.create("imageEaseOut", "0.420, 0.0, 1.0, 1.0");
//variables
var tl = new TimelineMax,
    loop = 0,

    tween;
//set Position
var initAnim = () => {
    tl.to(curveImg, 0, { y: 80, rotatiotin: 0.01, force3D: true, delay: -1 });
    tl.to(logoImg, 0, { opacity: 0, delay: -1 });
    tl.to([ctatext,headline1, subheadline1], { opacity: 0, x: -100, delay: -1 });
    tl.to([backgroundImg, claim, greenline], 0, {  opacity: 0, rotation: 0.01, force3D: true, delay: -1 });
    tl.to(legaltext, 0, {  opacity: 0, rotation: 0.01, force3D: true, delay: -1 });
}

var animation = () => {
    initAnim();
    TweenLite.delayedCall(1, animatenow);
}

var animatenow = () => {
    adlibStart();
    callGWDPlayPause();
    adjustCurve();
  

  
if(defaultValues.animationType = "A"){
tween = tl.to(logoImg, 1, {opacity: 1, force3D: true, delay: 0 })
      .to([backgroundImg, claim, greenline], 1, { ease: "imageEaseIn", opacity: 1, force3D: true, delay: -1 })
      .to(curveImg,  1, { ease: "inAnimation",  y: 0, force3D: true, delay: -1 })
      .to(headline1, 1, { ease: "inAnimation",  x: 0, opacity: 1, force3D: true, delay: -0.7 })
      .to(ctatext,   1, { ease: "inAnimation",  x: 0, opacity: 1,  force3D: true, delay: -0.8 })
      .to(legaltext, 1, { ease: "inAnimation", opacity: 1, rotation: 0.01, force3D: true, delay: -0.5, onComplete: callAdlibScreenshot })
      //fadeout headline 
      .to(headline1, 1, { ease: "outAnimation", x: -100, opacity: 0, force3D: true, delay:1.2 }) 
      //fadein subheadline
      .to(subheadline1, 1, { ease: "inAnimation", x: 0, opacity: 1, force3D: true, delay: 0.2 })
      //ctaBounce
      .to(ctatext,  .1, { ease: "inAnimation",  y: -4, force3D: true, delay: 0.5 })  
      .to(ctatext,  .1, { ease: "outAnimation", y: 0, force3D: true }) 
      .to(ctatext,  .1, { ease: "inAnimation",  y: -2, force3D: true }) 
      .to(ctatext,  .1, { ease: "outAnimation", y: 0, force3D: true })
       //transitionOut
      .to(subheadline1, 1, { ease: "outAnimation", x: -100, opacity: 0, force3D: true, delay:1.2 }) 
      .to(ctatext,   1, { ease: "outAnimation", x: -100, force3D: true, opacity: 0, delay: - 0.8 }) 
      .to(curveImg,  1, { ease: "outAnimation", y: 80, force3D: true, delay: - 0.8 }) 
      .to([backgroundImg,  claim, greenline, legaltext], 1, { ease: "imageEaseOut", opacity: 0, force3D: true, delay: -0.8})
      //setBeforeTransitionIn
      .to(curveImg, 0, { y: 80, rotatiotin: 0.01, force3D: true }) 
      .to([ctatext,  headline1, /*subheadline1*/], 0, { opacity: 0, x: -100, rotation: 0.01, force3D: true })
      .to([backgroundImg,  claim, greenline], 0, { opacity: 0, rotation: 0.01, force3D: true})
      //transitionInFrame2
      .to([backgroundImg,  claim, greenline], 1, { ease: "imageEaseIn", opacity: 1, force3D: true }) 
      .to(curveImg, 1, { ease: "inAnimation", y: 0, force3D: true, delay: -1 }) 
      .to(headline1, 1, { ease: "inAnimation", x: 0, opacity: 1, force3D: true, delay: -0.7 }) 
      .to(ctatext, 1, { ease: "inAnimation", x: 0,  opacity: 1,force3D: true, delay: -0.8 })
      .to(legaltext, 1, { ease: "inAnimation", opacity: 1, rotation: 0.01, force3D: true, delay: -0.5, onComplete: callAdlibScreenshot})
      //ctaBounce
      .to(ctatext, .1, { ease: "inAnimation", y: -4, force3D: true, delay:0.5 }) 
      .to(ctatext, .1, { ease: "outAnimation", y: 0, force3D: true }) 
      .to(ctatext, .1, { ease: "inAnimation", y: -2, force3D: true }) 
      .to(ctatext, .1, { ease: "outAnimation", y: 0, force3D: true,onComplete: stopAdlibScreenshot });
}







}  
  
 
 
 
 
 
 
