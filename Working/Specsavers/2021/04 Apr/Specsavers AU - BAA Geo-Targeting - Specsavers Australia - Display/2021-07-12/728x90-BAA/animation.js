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
    loop = 0,
    firstFrame = 0,
    secondFrame = 0,
    tween;
//inital Animation
var initAnim = () => {
    tl.to(curveImg, 0, { x: 100, rotatiotin: 0.01, force3D: true, delay: -1 });
    tl.to(logoImg, 0, { opacity: 0, delay: -1 });
    tl.to([ctatext, arrow, legaltext, headline1, subheadline1], { opacity: 0, x: 100, delay: -1 });
    tl.to([backgroundImg, imagetag, greenline], 0, {  opacity: 0, rotation: 0.01, force3D: true, delay: -1 });
    tl.to(legaltext, 0, {  opacity: 0, x: 100, rotation: 0.01, force3D: true, delay: -1 });
}
//animate
var animation = () => {
    initAnim();
    TweenLite.delayedCall(1, firstFrameAnim);
}

var firstFrameAnim = () => {
    adlibStart();
 
    adjustCurve();
  tween = tl.to(logoImg, 1, {opacity: 1,force3D: true, delay: 1})
            .to([backgroundImg, imagetag, greenline], 1, { ease: "imageEaseIn", opacity: 1, force3D: true, delay: -1 })
            .to(curveImg,         1, { ease: "inAnimation", x: 0, force3D: true, delay: -1 })
            .to(headline1,        1, { ease: "inAnimation", x: 0,   opacity: 1, force3D: true, delay: -0.8 })
            .to([ctatext, arrow], 1, { ease: "inAnimation", x: 0,   opacity: 1, force3D: true, delay: -0.8})
            .to(legaltext,        1, { ease: "inAnimation", x: 0,   opacity: 1, force3D: true, delay: -0.8, rotation: 0.01})
            .to(headline1,        1, { ease: "outAnimation",x: 100, opacity: 0, force3D: true, delay: 1,
            onComplete: () => { 
            takeScreenshot(); 
            TweenLite.delayedCall(1.8, ctaAnimation);
            }}) 
            .to(subheadline1, 1, { ease: "inAnimation",  x: 0,   opacity: 1, force3D: true, delay: 0 }) 
}


var ctaAnimation = () => {
    loop++;
  tween = tl.to(arrow, 0.2, { ease: "arrowEaseIn",  x: 5, force3D: true }) 
            .to(arrow, 0.2, { ease: "arrowEaseIn", x: 0, force3D: true }) 
            .to(arrow, 0.2, { ease: "arrowEaseIn",  x: 5, force3D: true }) 
            .to(arrow, 0.2, { ease: "arrowEaseIn", x: 0, force3D: true,
            onComplete: () => {
             takeScreenshot();
              if (loop < 2) {
                TweenLite.delayedCall(0.8, firstFramefadeOut);
              } else {
                adlibEnd();
              }
            }
            });
}


var firstFramefadeOut = () => {

    tween = tl.to([subheadline1], 1, { ease: "outAnimation", x: 100, opacity: 0, force3D: true }) 
      //.to([subheadline1], 1, { ease: "outAnimation", x: -100, opacity: 0, delay: -0.8, force3D: true }) 
      .to([ctatext, arrow], 1, { ease: "outAnimation", x: 100, force3D: true, opacity: 0, delay: - 0.8 }) 
      .to(legaltext,        1, { ease: "outAnimation", x: 100, force3D: true, opacity: 0, delay: - 0.8 })
      .to(curveImg,         1, { ease: "outAnimation", x: 200, force3D: true, opacity: 0, delay: - 0.8 })
      .to([backgroundImg, headline2, greenline], 1, { ease: "imageEaseOut", opacity: 0, force3D: true, delay: - 0.8, onComplete: setAnim })
       
}


var setAnim = () => {
tween = tl.to(curveImg, 0, { x: 200, rotatiotin: 0.01, force3D: true })
          .to([ctatext, arrow,  headline2, subheadline2], 0, { opacity: 0, x: 100, rotation: 0.01, force3D: true })
          .to([backgroundImg2, imagetag, greenline], 0, { opacity: 0, rotation: 0.01, force3D: true, onComplete: secondFrame })
          
}



var secondFrame = () => {
    firstFrame = 0;
  tween = tl.to([backgroundImg2, imagetag, greenline], 1, { ease: "imageEaseIn", opacity: 1, force3D: true }) 
    .to(curveImg,         1, { ease: "inAnimation", x: 0, opacity: 1, force3D: true, delay: -1 }) 
    .to(headline2,        1, { ease: "inAnimation", x: 0, opacity: 1, force3D: true, delay: -0.8 }) 
    .to([ctatext, arrow], 1, { ease: "inAnimation", x: 0, opacity: 1, force3D: true, delay: -0.8 }) 
    .to(legaltext,        1, { ease: "inAnimation", x: 0,   opacity: 1, force3D: true, delay: -0.8, rotation: 0.01})
    .to(headline2,        1, { ease: "outAnimation",x: 100, opacity: 0, force3D: true, delay: 1,
     onComplete: () => {
       takeScreenshot(); 
       TweenLite.delayedCall(0.8, ctaAnimation); } 
     })
    .to(legaltext, 1, { ease: "inAnimation", opacity: 1,  x: 0, rotation: 0.01, force3D: true, delay: -0.8})
    .to(subheadline2, 1, { ease: "inAnimation",  x: 0,   opacity: 1, force3D: true, delay: 0 }) ;
}




