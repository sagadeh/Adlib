var obj = {};
var activeButton = 5
var num = 5;
var carouselTimer;

function startAd(){
    addListeners();
    animate();
    //preloadImages(["bg.jpg"], requestFullScreen); 
}

//**************************************************************
function addListeners(){    
    for(var i=1; i<=9; i++){
        document.getElementById("circle"+i+"-btn").addEventListener("click", clickCircle);
    }
    document.getElementById("bgExit-frame1").addEventListener("click", clicktag);
    document.getElementById("bgExit").addEventListener("click", clicktag);
    document.getElementById("logoExit").addEventListener("click", clicktag);
    document.getElementById("ctaExit").addEventListener("click", clicktag);
    document.getElementById("ctaExit").addEventListener("mouseover", clicktag);
    document.getElementById("ctaExit").addEventListener("mouseout", clicktag);
    document.getElementById("arrow-left-container").addEventListener("click", arrowBtn);
    document.getElementById("arrow-right-container").addEventListener("click", arrowBtn);
}

function clicktag(){
    switch(event.type) {
        case "click":
                clearInterval(carouselTimer);
                window.open("https://www.beatsbydre.com/uk/");
            break;
        case "mouseover":
                clearInterval(carouselTimer);
                if(num==4 || num==6) {
                    document.getElementById('hover-anim').style.backgroundColor = "white";
                    document.getElementById('cta-text').style.color = "#e01e3c";
                }else if(num==1 || num==2 || num==3 || num==5 || num==7 || num==8 || num==9) {
                    document.getElementById('hover-anim').style.backgroundColor = "white";
                    document.getElementById('cta-text').style.color = "black";
                }
                TweenLite.to("#hover-anim", 0.25, {y: "-100%", ease:Power4.easeOuteaseOut});
            break;
        case "mouseout":
                document.getElementById('cta-text').style.color = "white";
                TweenLite.to("#hover-anim", 0.25, {y: "0%", ease:Power4.easeOuteaseOut});
            break;
    }
}

function arrowBtn() {
    clearInterval(carouselTimer);
    switch(event.target.id) {
        case "arrow-left-btn":
            num--
            if(num==0) num=9;
            break;
        case "arrow-right-btn":
            num++
            if(num==10) num=1;
            break;
    }
    updatedProduct(num);
}

function clickCircle() {
    var e = event.target.id;
    num = Number(e.charAt(6));
    updatedProduct(num);
    clearInterval(carouselTimer);
}

function updatedProduct(num) {
    for(var i=1; i<=9; i++){
        TweenLite.to('#check'+i, 0, {autoAlpha: 1, display:'none'});
        TweenLite.to('#headphone'+i, 0, {autoAlpha: 1, display:'none'});
        TweenLite.to('#details'+i, 0.5, {opacity: 0});
    }
    
    TweenLite.to('#check'+num, 0.3, {autoAlpha: 1, display:'block'});
    TweenLite.to('#headphone'+num, 0.3, {autoAlpha: 1, display:'block'});
    TweenLite.to('#details'+num, 0.5, {opacity: 1});

    switch(num) {
        case 1:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(65, 62, 43)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-red.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "#e01e3c";
            break;
        case 2:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(226, 216, 203)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-red.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "#e01e3c";
            break;
        case 3:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(58 60 62)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-red.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "#e01e3c";
            break;
        case 4:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(226, 71, 77)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-white.png)";
            //document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta').style.backgroundColor = "rgb(175, 20, 38)";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "white";
            break;
        case 5:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(255, 255, 255)"});
            TweenLite.to('.logo-white', 0, {autoAlpha: 1, display:'block'});
            document.getElementById('logo').style.backgroundImage="url(img/logo-red.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "#e01e3c";
            break;
        case 6:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(175, 20, 38)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-white.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "white";
            break;
        case 7:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(36, 54, 82)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-red.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "#e01e3c";
            break;
        case 8:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(43 45 47)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-red.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "#e01e3c";
            break;
        case 9:
            TweenLite.to('#frame2', 0.5, {backgroundColor: "rgb(88, 90, 91)"});
            document.getElementById('logo').style.backgroundImage="url(img/logo-red.png)";
            document.getElementById('cta').style.backgroundColor = "#e01e3c";
            document.getElementById('cta-text').style.color = "white";
            //document.getElementById('cta-border').style.borderColor = "#e01e3c";
            break;
    }
}

function animate() {
    document.getElementById("main").style.display = "block";
    var tl = new TimelineMax();
    tl.staggerFrom("#text1, #text2", 0.5, {y: "-50%", opacity:0}, 0.4)
      .from("#headphone-intro", 1, {y: "10%", opacity: 0, ease: Back.easeOut.config(3)})
      .staggerTo("#text1, #text2", 0.5, {y: "-25%", opacity:0}, 0.2, '+=1')
      .staggerFrom("#text3, #text4", 0.5, {y: "-25%", opacity:0}, 0.4)
      .staggerTo("#text3, #text4", 0.5, {y: "-25%", opacity:0}, 0.2, '+=1')
      .to("#headphone-intro", 1, {y: "-10%", opacity: 0})
      .to("#frame1", 0.5, {opacity: 0, onStart: function(){
          document.getElementById('ctaExit').style.display = "block";
      }, onComplete: function(){
          document.getElementById('frame1').style.display = "none";
          startCarousel();
      }})
      //.staggerFrom("#text3, #text4", 1, {y: "10%", opacity:0}, 0.2)
      //.from("#text1", 0.5, {y: "20%", opacity: 0})
      /*.from("#headphone-intro", 1, {y: "10%", opacity: 0, ease: Back.easeOut.config(2)})
      .to("#text1", 0.5, {y: "-20%", opacity: 0},'+=1.5')
      .from("#text2", 0.5, {y: "20%", opacity: 0})
      .to("#text2", 0.5, {y: "-20%", opacity: 0},'+=2')
      .to("#headphone-intro", 1, {y: "-10%", opacity: 0})
      .to("#frame1", 0.5, {opacity: 0, onStart: function(){
          document.getElementById('ctaExit').style.display = "block";
      }, onComplete: function(){
          document.getElementById('frame1').style.display = "none";
          startCarousel();
      }})*/;    
}

function startCarousel() {
    carouselTimer = setInterval(function(){ 
        num++
        if(num== 10) num=1;
        updatedProduct(num);      
        if(num==9) clearInterval(carouselTimer);
        
    }, 2000);
}

function enablerInitHandler(){
    startAd();           
}
window.onload = function () {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
}