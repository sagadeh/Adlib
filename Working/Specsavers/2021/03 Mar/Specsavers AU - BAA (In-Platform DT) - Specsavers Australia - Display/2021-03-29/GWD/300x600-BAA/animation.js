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
    firstFrame = 0,
    secondFrame = 0,
    tween;
//inital Animation
var initAnim = () => {
    tl.to(curveImg, 0, { y: 300, rotatiotin: 0.01, force3D: true, delay: -1 });
    tl.to(logoImg, 0, { opacity: 0, delay: -1 });
    tl.to([ctatext,headline1, subheadline1], { opacity: 0, x: -100, delay: -1 });
    tl.to([backgroundImg, imagetag, greenline], 0, {  opacity: 0, rotation: 0.01, force3D: true, delay: -1 });
    tl.to(legaltext, 0, {  opacity: 0, rotation: 0.01, force3D: true, delay: -1 });
}
//animate
var animation = () => {
    initAnim();
    TweenLite.delayedCall(1, preAnim);
}
//inital animation
var preAnim = () => {
    adlibStart();     
    isSubheadlineEmpty();   
  
    //adjust curve
    curveWrapper.style.height = (frame1Wrapper.offsetHeight + parseInt(window.getComputedStyle(frame1Wrapper).getPropertyValue("margin-bottom").match(/\d+/)) + parseInt(window.getComputedStyle(frame1Wrapper).getPropertyValue("padding-bottom").match(/\d+/))) + 100 + "px";
    console.log(frame1Wrapper.offsetHeight);

    tween = tl.to(logoImg, 1, {
            opacity: 1,
            force3D: true,
            delay: 1
        })
      .to([backgroundImg  ,imagetag, greenline], 1, { ease: "imageEaseIn", opacity: 1, force3D: true, delay: -1 })
      .to(curveImg, 1, { ease: "inAnimation", y: 0, force3D: true, delay: -1 })
      .to(headline1, 1, { ease: "inAnimation", x: 0, opacity: 1, force3D: true, delay: -0.7 })
      .to(subheadline1, 1, { ease: "inAnimation", x: 0, rotation: 0.01, opacity: 1, force3D: true, delay: -0.8 })
      .to(ctatext, 1, { ease: "inAnimation",  opacity: 1, x: 0, force3D: true, delay: -0.8,
      onComplete: () => { takeScreenshot(); TweenLite.delayedCall(1.8, ctaAnimation);
      }
      })
      .to(legaltext, 1, { ease: "inAnimation", opacity: 1, rotation: 0.01, force3D: true, delay: -0.5});
}

//startAnimation
var secondFrame = () => {
  

  
    //adjust curve
    curveWrapper.style.height = (frame2Wrapper.offsetHeight + parseInt(window.getComputedStyle(frame2Wrapper).getPropertyValue("margin-bottom").match(/\d+/)) + parseInt(window.getComputedStyle(frame2Wrapper).getPropertyValue("padding-bottom").match(/\d+/))) + 100 + "px";
    console.log(frame2Wrapper.offsetHeight);
  
  
  
    firstFrame = 0;
  tween = tl.to([backgroundImg2, imagetag, greenline], 1, { ease: "imageEaseIn", opacity: 1, force3D: true })
    .to(curveImg, 1, { ease: "inAnimation", y: 0, force3D: true, delay: -1 })
    .to(headline2, 1, { ease: "inAnimation", x: 0, opacity: 1, force3D: true, delay: -0.7 })
    .to(subheadline2, 1, { ease: "inAnimation", x: 0, rotation: 0.01, opacity: 1, force3D: true, delay: -0.8 })
    .to(ctatext, 1, { ease: "inAnimation", x: 0,  opacity: 1,force3D: true, delay: -0.8, onComplete: () => {
      takeScreenshot();
      TweenLite.delayedCall(1.8, ctaAnimation); }
      })
    .to(legaltext, 1, { ease: "inAnimation", opacity: 1, rotation: 0.01, force3D: true, delay: -0.5});
}

var ctaAnimation = () => {
    loop++;
      tween = tl.to(ctatext, .1, { ease: "inAnimation", y: -4, force3D: true })
        .to(ctatext, .1, { ease: "outAnimation", y: 0, force3D: true })
        .to(ctatext, .1, { ease: "inAnimation", y: -2, force3D: true })
        .to(ctatext, .1, { ease: "outAnimation", y: 0, force3D: true,
                onComplete: () => {
                    takeScreenshot();
                        if (loop < 2) {
                            TweenLite.delayedCall(1.8, endAnimation);
                        } else {
                            adlibEnd();
                        }

                }
            });
}

//setAnimation
var setAnim = () => {
tween = tl.to(curveImg, 0, { y: 300, rotatiotin: 0.01, force3D: true })
           .to([ctatext,  headline2, subheadline2], 0, { opacity: 0, x: -100, rotation: 0.01, force3D: true })
           .to([backgroundImg2,  imagetag, greenline], 0, { opacity: 0, rotation: 0.01, force3D: true, onComplete: secondFrame })
           
}
//end animation
var endAnimation = () => {

    tween = tl.to([headline1], 1, { ease: "outAnimation", x: -100, opacity: 0, force3D: true })
      .to([subheadline1], 1, { ease: "outAnimation", x: -100, opacity: 0, delay: -0.8, force3D: true })
      .to([ctatext], 1, { ease: "outAnimation", x: -100, force3D: true, opacity: 0, delay: - 0.8 })
      .to(curveImg, 1, { ease: "outAnimation", y: 300, force3D: true, delay: - 0.8 })
      .to([backgroundImg, imagetag, greenline, legaltext], 1, { ease: "imageEaseOut", opacity: 0, force3D: true, delay: - 0.8, onComplete: setAnim })

}
