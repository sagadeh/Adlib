"use strict";

gsap.set("#main", {opacity: 0});
gsap.set("#logo-bg-wrapper", {top: -374});
gsap.set("#logo-wrapper", {y: -90});
gsap.set("#headline1-wrapper", {left: 0, opacity: 0});
gsap.set("#headline2-wrapper", {left: 0, opacity: 0});
gsap.set("#endframe-wrapper", {left: 0});
gsap.set("#endframe-bg", {y: -600});
gsap.set("#packshot-wrapper", {x: 50, opacity: 0});
gsap.set(["#headline1", "#headline2"], {perspective: 400});
gsap.set("#headline3-wrapper", {y: 6, opacity: 0});
gsap.set("#legal-wrapper", {opacity: 0});
gsap.set("#cta-wrapper", {y: 52});
gsap.set("#ctatxt", {opacity: 0});


gsap.globalTimeline.pause();


//call play pause
function callGWDPlayPause() {
	console.log("callGWDPlayPause");
	gwd.auto_PauseBtnClick = function (event) {
		gsap.globalTimeline.pause(); 
		try{document.querySelector("#myVideo").pause();}catch(e){}
		console.log("Pause Timeline");
	};
	gwd.auto_PlayBtnClick = function (event) {
		gsap.globalTimeline.resume(); 
		try{document.querySelector("#myVideo").play();}catch(e){}
		console.log("Play Timeline");
	};

}


function initAnim(){
	console.log("initAnim");
	adlibStart();
	callGWDPlayPause();
	logoAnim();	
}

function logoAnim(){

	gsap.globalTimeline.resume();

	gsap.to("#main", {duration: 0.2, ease: "none", opacity: 1});	
	gsap.to("#logo-bg-wrapper", {duration: 0.27, ease: "none", top: -232});	
	gsap.to("#logo-wrapper", {duration: 0.27, ease: "none", y: -10, onComplete:takeScreenshot});	
	

}

function headline1Anim() {
	gsap.to("#logo-bg-wrapper", {duration: 0.3, ease: "none", top: -164});	
	gsap.to("#logo-wrapper", {duration: 0.3, ease: "none", y: -15, opacity: 0, delay: 0.3, onComplete:
		function(){
			gsap.to("#headline1-wrapper", {duration: 0.3, ease: "none", opacity: 1});

			var splitcopy1 = new SplitText("#headline1", {type:"words,chars,lines"});
			var copy1ByLines = splitcopy1.lines;
			
			for(var i = 0; i < copy1ByLines.length; i++){
				// console.log(copy1ByLines[1].innerText.length);
				if(copy1ByLines[1].innerText.length <= 12 && copy1ByLines.length <= 3){
					gsap.set("#headline1", {css: { lineHeight: "1.4em"}});
					gsap.set(copy1ByLines[i], {css: { fontSize: 32}});
					gsap.set(copy1ByLines[1], {css: { fontSize: 60}});
					

				}else if(copy1ByLines[1].innerText.length >= 13 && copy1ByLines.length >= 4){
					gsap.set("#headline1", {css: { lineHeight: "1em"}});
					gsap.set(copy1ByLines[i], {css: { fontSize: 30}});

				}else if(copy1ByLines[1].innerText.length <= 12 && copy1ByLines.length >= 4){
					gsap.set("#headline1", {css: { lineHeight: "1.4em"}});
					gsap.set(copy1ByLines[i], {css: { fontSize: 30}});
					gsap.set(copy1ByLines[1], {css: { fontSize: 58}});
					gsap.set(copy1ByLines[3], {css: { lineHeight: "0.7em"}});

				}
				
			}

			var even = [];
			var odd = [];

			copy1ByLines.forEach((num,index) => {
				(index%2 ==0)? even.push(num):odd.push(num)
			})

			// console.log(even);
			// console.log(odd);
			gsap.to(even, {duration: 3.3, ease: "none", x: 5, rotateX: 0.01});
			gsap.to(odd, {duration: 3.3, ease: "none", x: -5, rotateX: 0.01, onComplete:takeScreenshot});

		}
	});		
}

function headline2Anim() {
	gsap.to("#headline1-wrapper", {duration: 0.3, ease: "none", opacity: 0, onComplete:
		function(){
			gsap.to("#headline2-wrapper", {duration: 0.5, ease: "none", opacity: 1});

			var splitcopy2 = new SplitText("#headline2", {type:"words,chars,lines"});
			var copy2ByLines = splitcopy2.lines;
			
			for(var i = 0; i < copy2ByLines.length; i++){
				// console.log(copy1ByLines[1].innerText.length);
				if(copy2ByLines[1].innerText.length <= 12 && copy2ByLines.length <= 3){
					gsap.set("#headline2", {css: { lineHeight: "1.4em"}});
					gsap.set(copy2ByLines[i], {css: { fontSize: 32}});
					gsap.set(copy2ByLines[1], {css: { fontSize: 60}});
					

				}else if(copy2ByLines[1].innerText.length >= 13 && copy2ByLines.length >= 4){
					gsap.set("#headline2", {css: { lineHeight: "1em"}});
					gsap.set(copy2ByLines[i], {css: { fontSize: 30}});

				}else if(copy2ByLines[1].innerText.length <= 12 && copy2ByLines.length >= 4){
					gsap.set("#headline2", {css: { lineHeight: "1.4em"}});
					gsap.set(copy2ByLines[i], {css: { fontSize: 30}});
					gsap.set(copy2ByLines[1], {css: { fontSize: 58}});
					gsap.set(copy2ByLines[3], {css: { lineHeight: "0.7em"}});

				}
				
			}

			var even = [];
			var odd = [];

			copy2ByLines.forEach((num,index) => {
				(index%2 ==0)? even.push(num):odd.push(num)
			})

			// console.log(even);
			// console.log(odd);
			gsap.to(even, {duration: 3.3, ease: "none", x: 5, rotateX: 0.01});
			gsap.to(odd, {duration: 3.3, ease: "none", x: -5, rotateX: 0.01, onComplete:takeScreenshot});
		}
	});

}


function endFrameAnim() {
	gsap.to("#headline2-wrapper", {duration: 0.3, ease: "none", opacity: 0, delay: 0.2});
	gsap.to("#endframe-bg", {duration: 0.3, ease: "none", y: 0, delay: 0.4, onComplete:
		function(){
			gsap.set("#logo-wrapper", {y: 50});
			gsap.to("#logo-wrapper", {duration: 0.3, ease: "none", y: 0, opacity: 1});
			gsap.to("#packshot-wrapper", {duration: 0.5, ease: "none", x: 0, opacity: 1, delay: 0.5});
			gsap.to("#headline3-wrapper", {duration: 0.5, ease: "none", y: 0, opacity: 1, delay: 0.8});
			gsap.to("#legal-wrapper", {duration: 0.3, ease: "none", opacity: 1, delay: 1});
			gsap.to("#cta-wrapper", {duration: 0.4, ease: "none", y: 0, delay: 1.3});
			gsap.to("#ctatxt", {duration: 0.4, ease: "none", opacity: 1, delay: 1.8, onComplete:adlibEnd});
		}
	});
}



