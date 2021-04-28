// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     gsap.set("#Overlay_fade",{opacity:1})
     if (defaultValues.trigger == "Horizontal") {
          document.querySelector('#CTA').style.left = "160px";
          document.querySelector('#legal-text').style.left = "184px";
     }
     startAnimation();
}
function startAnimation() {  
     tl = new TimelineMax( {
          paused: true,
     } );
     tl.set("#Overlay_drop",{opacity:1})
     tl.set("#Overlay_bounce",{opacity:1})
     tl.set("#BLUE_SET",{opacity:1})
     tl.set("#rating",{opacity:1})
     tl.set("#bg",{opacity:1})
     tl.set("#Promo",{opacity:1})
     tl.set("#game1",{opacity:1})
     tl.set("#game2",{opacity:1})
     tl.set("#game3",{opacity:1})
     tl.set("#CTA",{opacity:1})
     //intro
     tl.to( intro, 0.1, {
          autoAlpha: 0
     }, 1 );
     //drop code
     tl.from( Overlay_drop, 0.8, {
          ease: Back.easeOut,
          y: -300
     }, 1 );
     //bounce code
     tl.from( Overlay_bounce, 0.8, {
          scale: 0.1,
          ease: Back.easeInOut
     }, 1 );
     //fade code
     tl.from( Overlay_fade, 0.8, {
          opacity: 0
     }, 1 );
     //promo intro
     tl.from( Promo, 1, {
          ease: Back.easeInOut,
          y: -450,
          onComplete: takeScreenshot
     }, 1.2 );
     //promo outro
     tl.to( Promo, 0.8, {
          ease: Power3.easeOut,
          scale: 0.8,
          y: -160,
     }, 3 );

     tl.from( CTA, 0.7, {
          ease: Power3.easeOut,
          y: 600
     }, 3 );
     tl.from( cta_text, 0.7, {
          opacity: 0
     }, 3.5 );


     //game art 1x1 animations
     tl.from( game1, 0.8, {
          ease: Back.easeOut,
          x: 300,
          onComplete: takeScreenshot
     }, 3 );
     tl.to( game1, 0.8, {
          ease: Back.easeOut,
          scale: 0.5,
          x: 220,
          y: -40
     }, 4.5 );
     tl.from( game2, 0.8, {
          ease: Back.easeOut,
          x: 300,
          onComplete: takeScreenshot
     }, 4.5 );
     tl.to( game2, 0.8, {
          ease: Back.easeOut,
          scale: 0.5,
          x: 220,
          y: -40
     }, 6 );

     tl.from( game3, 0.8, {
          ease: Back.easeOut,
          x: 300,
          onComplete: takeScreenshot
     }, 6 );
     tl.to( game3, 0.8, {
          ease: Back.easeOut,
          scale: 0.5,
          x: 220,
          y: 60
     }, 7.5 );

     //bounce code
     tl.to( Promo, 0.3, {
          scale: 0.9
     }, 4 );
     tl.to( Promo, 0.3, {
          scale: 0.8
     }, 4.2 );

     tl.to( Promo, 0.3, {
          scale: 0.9
     }, 5.4 );
     tl.to( Promo, 0.3, {
          scale: 0.8
     }, 5.6 );

     tl.to( Promo, 0.3, {
          scale: 0.9
     }, 6.8 );
     tl.to( Promo, 0.3, {
          scale: 0.8
     }, 7 );

     //end promo
     // tl.to(Promo, 0.5, {
     //  ease: Power1.easeInOut,
     //   scale: 0.5,
     //   x: 0,
     //   y: -50
     //  }, 7.7);
     //end games
     tl.to( game1, 0.8, {
          ease: Back.easeOut,
          x: -53,
          y: -40
     }, 8 );
     tl.to( game2, 0.8, {
          ease: Back.easeOut,
          x: 53,
          y: -40
     }, 8.1 );

     tl.to( game3, 0.8, {
          ease: Back.easeOut,
          x: 0,
          y: 66,
          onComplete: animationEnd
     }, 8.2 );
     tl.play();
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     // clearInterval(vidCnt) // if you are using the video cue point feature of the template, uncomment the below code:
     // document.removeEventListener(visibilityChange,Adlib.pauseVideoOnTabChange); // uncomment this for creative using video.
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}