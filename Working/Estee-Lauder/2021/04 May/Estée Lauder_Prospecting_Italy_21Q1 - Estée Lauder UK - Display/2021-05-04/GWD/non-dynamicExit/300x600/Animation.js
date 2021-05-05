"use strict";
gsap.globalTimeline.pause();
//Set initial animation
TweenMax.set(['#header'], {opacity: 0});
TweenMax.set(['#prod1'], {opacity: 0});
TweenMax.set(['#prod2'], {opacity: 0});
TweenMax.set(['#ctabox1'], {y:10,opacity: 0});
TweenLite.set(['#stamp1'], {opacity: 0});
TweenLite.set(['#stamp2'], {opacity: 0});
TweenMax.set(['#starsdiv'], {width: 0});
TweenMax.set(['#text4'], {y:10,opacity: 0});
TweenMax.set(['#text3'], {y:10,opacity: 0});
TweenMax.set(['#text2'], {y:10,opacity: 0});
TweenMax.set(['#text1div'], {y:10,opacity: 0});
TweenMax.set(['#redframe'], {opacity: 0});
TweenMax.set(['#ribbon'], {y:-20,opacity: 0});
//TweenMax.set(['#text1'], {visibility: "hidden"});
TweenMax.set(['#ET_logo'], {opacity: 0});
TweenMax.set(['#frame2box'], {opacity: 0});
//
var tl = new TimelineLite;
var _copytxt1  = document.getElementById('text1');

   var isMac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
   var isFireFox = !(window.mozInnerScreenX == null);
   var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
   var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

   if(navigator.platform.indexOf('Mac')>=0)
   {
                   //mac
       if(isFireFox){
        TweenMax.set(['#ctatext1'], {y:-1});
        TweenMax.set(['#ctatext2'], {y:-1});
       }else if(isChrome){

       }else if(isSafari){
       }
   }else{
       if(isFireFox){
       }else if(isChrome){
           }else{
         
       }
   }

function initAnimation() {
    console.log('initAnimation');
    gsap.globalTimeline.resume();
    ctaPos();
     switch (defaultValues.animationType) {
        case "TRUE": 
        setTimeout(twoframe,1000);
        break;
        case "FALSE": 
        setTimeout(oneframe,1000);
        break;
    }
}

function step1() {

    var mySplitText = new SplitText(_copytxt1, {type:"lines"});
    TweenMax.set(_copytxt1, {perspective:400});
    TweenMax.set(_copytxt1, {visibility: "visible"});
    
    tl.staggerFrom(mySplitText.lines, 0.75, {y:10,opacity:0, ease: Power2.easeOut},0.5);
}

function oneframe(){
    console.log('oneframe');
    TweenMax.to(['#prod1'], 1,{opacity:1, ease: Power2.easeInOut, force3D:true});
    TweenMax.to(['#ET_logo'], 1,{opacity:1, ease: Power2.easeInOut, force3D:true});
    TweenMax.fromTo(['#stamp1'], 0.3, {scaleX:1.5, scaleY:1.5} , {opacity:1, scaleX:1, scaleY:1, ease: "back.out(1.7)", delay:1});
    TweenMax.to(['#text1div'], .75,{opacity:1,y:0,rotation: 0.01, ease: Power2.easeOut, force3D:true});
    TweenMax.to(['#ctabox1'], .75,{opacity:1,y:0,rotation: 0.01, ease: Power2.easeOut,delay:1.5, force3D:true});
    if(defaultValues.trigger=="TRUE"){ 
    //TweenMax.to(['#header'], .75,{opacity:1, ease: Power2.easeOut,delay:2, force3D:true});  
    }
}
function twoframe(){
    console.log('oneframe');
    //TweenMax.set(['#text1div'], {opacity: 1});
    //step1();
    TweenMax.to(['#prod1'], 1,{opacity:1, ease: Power2.easeInOut, force3D:true});
    TweenMax.to(['#ET_logo'], 1,{opacity:1, ease: Power2.easeInOut, force3D:true});
    TweenMax.fromTo(['#stamp1'], 0.3, {scaleX:1.5, scaleY:1.5} , {opacity:1, scaleX:1, scaleY:1, ease: "back.out(1.7)", delay:1});
    TweenMax.to(['#text1div'], .75,{opacity:1,y:0,rotation: 0.01, ease: Power2.easeOut, force3D:true});
    TweenMax.to(['#ctabox1'], .75,{opacity:1,y:0,rotation: 0.01, ease: Power2.easeOut,delay:1.5, force3D:true});
    TweenMax.to(['#text1div','#prod1', '#stamp1'], 1,{opacity:0, ease: Power2.easeOut,delay:2.9, force3D:true});
    TweenMax.to(['#frame2box','#prod2'], 1,{opacity:1, ease: Power2.easeOut,delay:3, force3D:true});
    TweenMax.fromTo(['#stamp2'], 0.3, {scaleX:1.5, scaleY:1.5} , {opacity:1, scaleX:1, scaleY:1, ease: "back.out(1.7)", delay:3.8});
    TweenMax.to(['#text2'], .5,{opacity:1,y:0, ease: Power2.easeOut,delay:3.8, force3D:true});
    TweenMax.to(['#text3'], .5,{opacity:1,y:0, ease: Power2.easeOut,delay:4.1, force3D:true});
    TweenMax.to(['#text4'], .5,{opacity:1,y:0, ease: Power2.easeOut,delay:4.6, force3D:true});
}