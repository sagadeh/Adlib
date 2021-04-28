"use strict";



  var $id = function( id ) { return document.getElementById( id ); };

  var background        = $id("background");
  var frame1image       = $id("frame1image");
  var frame1image2      = $id("frame1image2");

  var frame1headline    = $id("frame1headline");
  var frame1subheadline = $id("frame1subheadline");
  var frame1subheadline2 = $id("frame1subheadline2");

  var frame2headline    = $id("frame2headline");
  var frame2subheadline = $id("frame2subheadline");

  var frame3headline    = $id("frame3headline");
  var frame3subheadline = $id("frame3subheadline");

  var frame4headline    = $id("frame4headline");
  var frame4subheadline = $id("frame4subheadline");
  var logoimage         = $id("logoimage");
  var logoimage2         = $id("logoimage2");
  var badgeimage        = $id("badgeimage");
  var cardimage         = $id("cardimage");
  var ctaimage          = $id("ctaimage");
  var ctaText           = $id("ctaText");



document.getElementById("page1").style.opacity = 0;
//gsap.set(['#frame1-Headline','#frame1-Headline2','#frame1-Headline3','#frame1-Headline4'], {opacity:0});

gsap.globalTimeline.pause();

function startAnimation(){
  adlibStart();
  console.log("start screenshot!")
};

function callAdlibScreenshot(){
 takeScreenshot();
 console.log("screenshot!")
}

function stopAdlibScreenshot(){
 adlibEnd();
 console.log("end screenshot!")
}

function callGWDPlayPause() {
  console.log("updated");
  gwd.auto_PauseBtnClick = function (event) {
    gsap.globalTimeline.pause();
    console.log("Pause Timeline");
  };
  gwd.auto_PlayBtnClick = function (event) {
    gsap.globalTimeline.resume();
    console.log("Play Timeline");
  };
}



function initAnimation() {
  startAnimation();
  callGWDPlayPause();
  gsap.globalTimeline.resume();
  gsap.delayedCall(1, animateNow(defaultValues.animationType));

}


/*
function imageLoader(_imgs){
  console.log(_imgs);
  // Keep the count of the verified images
  var allLoaded = 0;
  // Executed everytime an img is successfully or wrong loaded
  var verifier = function(){
      allLoaded++;
      // triggers the end callback when all images has been tested
      if(allLoaded == _imgs.length){
          populate();
      }
  };
  // Loop through all the images URLs
  for (var index = 0; index < _imgs.length; index++) {
      // Prevent that index has the same value by wrapping it inside an anonymous fn
      (function(i){
          // Image path providen in the array e.g image.png
          var imgSource = _imgs[i];
          var img = new Image();
          img.onload = function(){
             setTimeout(function(){verifier();},500);//timeout for IE
          };
          img.src = imgSource;
          img.setAttribute("source", imgSource);
      })(index);
  }
}*/


function populate(){
  background.style.backgroundColor = defaultValues.bgColor;
  frame1image.setAttribute("source", defaultValues.frame1Image);
  frame1image2.setAttribute("source", defaultValues.frame1Image2);

  frame1headline.innerHTML = defaultValues.frame1Headline;
  frame1subheadline.innerHTML = defaultValues.frame1Subheadline;
  frame1subheadline2.innerHTML = defaultValues.frame1Subheadline2;

  frame2headline.innerHTML = defaultValues.frame2Headline;
  frame2subheadline.innerHTML = defaultValues.frame2Subheadline;

  frame3headline.innerHTML = defaultValues.frame3Headline;
  frame3subheadline.innerHTML = defaultValues.frame3Subheadline;

  frame4headline.innerHTML = defaultValues.frame4Headline;
  frame4subheadline.innerHTML = defaultValues.frame4Subheadline;

  logoimage.setAttribute("source", defaultValues.logo);
  logoimage2.setAttribute("source", defaultValues.logo2);
  cardimage.setAttribute("source", defaultValues.frame4Image);
  badgeimage.setAttribute("source", defaultValues.frame4Image2);
  //ctaimage.setAttribute("source", defaultValues.ctaImage);
  ctaText.innerHTML = defaultValues.ctaText;
}






function animateNow(animationtype){

  document.getElementById("page1").style.opacity = 1;
  gsap.set(['#frame1image'],{ scale:1.1});
  
  
  
  
  
  if(animationtype == "1"){
      console.log("1")
      gsap.to(['#frame1image'],    { scale:1, opacity:1, duration: 5.75, delay:0});
      gsap.to(['#frame1headline'],     { opacity:1, duration:.1, delay:0 });
      gsap.to(['#frame1subheadline'],  { opacity:1, duration:.1, delay:0 });
     
      gsap.to(['#frame1headline'],     { opacity:0, duration:.1, delay:1.75 });
      gsap.to(['#frame1subheadline'],  { opacity:0, duration:.1, delay:1.75 })
      gsap.to(['#frame2headline'],     { opacity:1, duration:.1, delay:1.75 });
      gsap.to(['#frame2subheadline'],  { opacity:1, duration:.1, delay:1.75,
       onComplete: function(){
        callAdlibScreenshot();
        gsap.to(['#frame2headline','#frame2subheadline'],   {opacity:0, duration:.1, delay: 2, onComplete: anim2});
      }
      });
    function anim2(){
      gsap.to(['#frame3headline','#frame3subheadline'],   { opacity:1, duration:.1, delay:0,
       onComplete: function(){
        callAdlibScreenshot();
        gsap.to(['#frame3headline','#frame3subheadline','#frame1image','#frame1image2','#logoimage','#frame1subheadline2'],  {opacity:0, duration:.1, delay: 2.75, onComplete: anim3});
      }
      });
    }
     function anim3(){
      gsap.to(['#cardimage'],   { opacity:1, duration:.8, delay:0.5});

      gsap.fromTo(['#cardimage'], {x:"110px"}, {x:"0px", opacity:1, duration:.8, delay:1.3});

      gsap.to(['#frame4headline'],{ opacity:1, duration:.8, delay:2});
      gsap.to(['#ctaWrapper'],           { opacity:1, duration:.4, delay:2});
      gsap.to(['#frame4subheadline'],  { opacity:1, duration:.4, delay:2});
      gsap.to(['#logoimage2'],         { opacity:1, duration:.4, delay:2});
      gsap.to(['#frame1subheadline2'],  {css:{color:"#000000", opacity:1}, duration:.4, delay:2,});

      gsap.to(['#badgeimage'],   { opacity:1, duration:.4, delay:3.5,  onComplete: function(){
				callAdlibScreenshot();
				gsap.delayedCall(2, stopAdlibScreenshot);
      }});
     }
   }
  
  
  
  else if(animationtype == "2"){
      console.log("2")
      gsap.to(['#frame1image'],    { scale:1, opacity:1, duration: 5.75, delay:0});
      gsap.to(['#frame1headline'],     { opacity:1, duration:.1, delay:0 });
      //gsap.to(['#frame1subheadline'],  { opacity:1, duration:.1, delay:0 });
     
      //gsap.to(['#frame1headline'],     { opacity:0, duration:.1, delay:1.75 });
      //gsap.to(['#frame1subheadline'],  { opacity:0, duration:.1, delay:1.75 })
      //gsap.to(['#frame2headline'],     { opacity:1, duration:.1, delay:1.75 });
      gsap.to(['#frame2subheadline'],  { opacity:1, duration:.1, delay:1.75,
       onComplete: function(){
        callAdlibScreenshot();
        gsap.to(['#frame1headline','#frame2subheadline'],   {opacity:0, duration:.1, delay: 2, onComplete: anim2});
      }
      });
    function anim2(){
      gsap.to(['#frame3headline','#frame3subheadline'],   { opacity:1, duration:.1, delay:0,
       onComplete: function(){
        callAdlibScreenshot();
        gsap.to(['#frame3headline','#frame3subheadline','#frame1image','#frame1image2','#logoimage','#frame1subheadline2'],  {opacity:0, duration:.1, delay: 2.75, onComplete: anim3});
      }
      });
    }
     function anim3(){
      gsap.to(['#cardimage'],   { opacity:1, duration:.8, delay:0.5});

      gsap.fromTo(['#cardimage'], {x:"110px"}, {x:"0px", opacity:1, duration:.8, delay:1.3});

      gsap.to(['#frame4headline'],{ opacity:1, duration:.8, delay:2});
      gsap.to(['#ctaWrapper'],           { opacity:1, duration:.4, delay:2});
      gsap.to(['#frame4subheadline'],  { opacity:1, duration:.4, delay:2});
      gsap.to(['#logoimage2'],         { opacity:1, duration:.4, delay:2});
      gsap.to(['#frame1subheadline2'],  {css:{color:"#000000", opacity:1}, duration:.4, delay:2,});

      gsap.to(['#badgeimage'],   { opacity:1, duration:.4, delay:3.5,  onComplete: function(){
				callAdlibScreenshot();
				gsap.delayedCall(2, stopAdlibScreenshot);
      }});
     }
   }
  
  else if(animationtype == "3"){
      console.log("3")
     gsap.to(['#frame1image'],    { scale:1, opacity:1, duration: 5.75, delay:0});
      gsap.to(['#frame1headline'],     { opacity:1, duration:.1, delay:0 });
      gsap.to(['#frame1subheadline'],  { opacity:1, duration:.1, delay:0 });
     
      //gsap.to(['#frame1headline'],     { opacity:0, duration:.1, delay:1.75 });
      gsap.to(['#frame1subheadline'],  { opacity:0, duration:.1, delay:1.75 })
      //gsap.to(['#frame2headline'],     { opacity:1, duration:.1, delay:1.75 });
      gsap.to(['#frame2subheadline'],  { opacity:1, duration:.1, delay:1.75,
       onComplete: function(){
        callAdlibScreenshot();
        gsap.to(['#frame1headline','#frame2subheadline'],   {opacity:0, duration:.1, delay: 2, onComplete: anim2});
      }
      });
    function anim2(){
      gsap.to(['#frame3headline','#frame3subheadline'],   { opacity:1, duration:.1, delay:0,
       onComplete: function(){
        callAdlibScreenshot();
        gsap.to(['#frame3headline','#frame3subheadline','#frame1image','#frame1image2','#logoimage','#frame1subheadline2'],  {opacity:0, duration:.1, delay: 2.75, onComplete: anim3});
      }
      });
    }
     function anim3(){
      gsap.to(['#cardimage'],   { opacity:1, duration:.8, delay:0.5});

      gsap.fromTo(['#cardimage'], {x:"110px"}, {x:"0px", opacity:1, duration:.8, delay:1.3});

      gsap.to(['#frame4headline'],{ opacity:1, duration:.8, delay:2});
      gsap.to(['#ctaWrapper'],           { opacity:1, duration:.4, delay:2});
      gsap.to(['#frame4subheadline'],  { opacity:1, duration:.4, delay:2});
      gsap.to(['#logoimage2'],         { opacity:1, duration:.4, delay:2});
      gsap.to(['#frame1subheadline2'],  {css:{color:"#000000", opacity:1}, duration:.4, delay:2,});

      gsap.to(['#badgeimage'],   { opacity:1, duration:.4, delay:3.5,  onComplete: function(){
				callAdlibScreenshot();
				gsap.delayedCall(2, stopAdlibScreenshot);
      }});
     }
   }
 
}



