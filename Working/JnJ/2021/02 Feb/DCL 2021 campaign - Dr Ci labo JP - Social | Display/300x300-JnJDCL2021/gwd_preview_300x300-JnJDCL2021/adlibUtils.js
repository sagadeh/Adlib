"use strict";
/* 
Pre-Biuld Scripts for Ad-Lib Ads

version: 1.0
last modified: Ciano 07/13/2020
author: Ad-Lib Innovation
*/

var field = 'adlibCreativeId';
var url = window.location.href;
var id = getParameterByName(field, url) || 0;

/**
****PLATFORM UTILS****
**/

//function to get URL parameters(will work on tool only)
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp(`(#?|&)${name}(=([^&#]*)|&|#|$)`);
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[3]) return '';
    return decodeURIComponent(results[3].replace(/\+/g, ' '));
}

//this functions will take screenshot per frame
function takeScreenshot() {
    var iframeWidth = window.innerWidth;
    var iframeHeight = window.innerHeight;
    try {
        var iframeX = window.parent.document.getElementById('adlib-screenshot-preview').offsetLeft;
        var iframeY = window.parent.document.getElementById('adlib-screenshot-preview').offsetTop;
        parent.postMessage({
            type: 'SCREENSHOT',
            data: {
                iframeX,
                iframeY,
                iframeHeight,
                iframeWidth
            }
        }, '*');
    } catch (e) {}
}

//first function call initializaation for screenshot
function adlibStart() {
    parent.postMessage({
        type: 'SCREENSHOT_START',
        id
    }, '*');
}

//last function call for screenhot 
function adlibEnd() {
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id
    }, '*');
}

//for play/pause functionality
function callGWDPlayPause() {
    gwd.auto_PauseBtnClick = function(event) {
        gsap.globalTimeline.pause();
    };
    gwd.auto_PlayBtnClick = function(event) {
        gsap.globalTimeline.play();
    };
}
//--end

/**
*** CREATIVE UTILS ***
**/

//IMAGE PRELOADER 
//set in defaultValues using an array format:  Implementation imageLoader([defaultValues.frame1Image,defaultValues.frame2Image], populateDynamic())
function imageLoader(_imgs, callback) {
    // Keep the count of the verified images
    var allLoaded = 0;
    // Executed everytime an img is successfully or wrong loaded
    var verifier = function() {
        allLoaded++;
        // triggers the end callback when all images has been tested
        if (allLoaded == _imgs.length) {
           callback;
        }
    };
    // Loop through all the images URLs
    for (var index = 0; index < _imgs.length; index++) {
        // Prevent that index has the same value by wrapping it inside an anonymous fn
        (function(i) {
            // Image path providen in the array 
            var imgSource = _imgs[i];
            var img = new Image();
            img.onload = function() {
                setTimeout(function() { verifier(); }, 500); //timeout for IE
            };
            img.src = imgSource;
            img.setAttribute("source", imgSource);
        })(index);
    }
}

//TEXT RESIZER
//will resize text base on text container width by passing a class name: Implementation textResize("frame1Container");
function textResize(element) {
   document.querySelectorAll("."+element).forEach(function(obj, i) {
       var copyParagraph = document.querySelector("#" + obj.id + " p");
       copyParagraph.style.fontSize = '1em';

       while (copyParagraph.offsetHeight > document.querySelector("#" + obj.id).offsetHeight) {
           copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - 1) + "px";
       }
   })
}    

//TEMPLATE CSS
// Enhance the styling for dynamic element also allow you to target specific browser. It will also minimize the styling using only one dynamic element(defaultValues.cssAttrib or defaultValues.customVariable) instead of styling all the dynamic element. 
// Documents here: https://docs.google.com/document/d/14CWHG6DXDmGfCXulG2t0kmkM0oTdFu9y608JsbZPo9g/edit
function templateCSS(content, param){
    var getElems = (document.getElementById("pagedeck") != null)? document.getElementById("pagedeck") : document.getElementsByTagName("BODY")[0] ; 
    var device = "";
    if(getElems != null && getElems != undefined){
        getElems = getElems.getElementsByTagName("*");
        if (navigator.platform.indexOf('Win') > -1) { //windows 
            if (false || !!document.documentMode) {
                device = "winIE";
            } else if (navigator.userAgent.indexOf('Chrome') != -1 || !!window.chrome && !!window.chrome.webstore) {
                device = "winChrome";
            } else if (navigator.userAgent.indexOf('Firefox') != -1 || typeof InstallTrigger !== 'undefined') {
                device = "winFirefox";
            }
        } else {
            if (navigator.userAgent.indexOf('Chrome') != -1) {
                device = "macChrome";
            } else if (navigator.userAgent.indexOf('Safari') != -1) {
                device = "macSafari";
            } else if (navigator.userAgent.indexOf('Firefox') != -1) {
                device = "macFirefox";
            }
        }
        
        if(device.length > 0){
            Array.prototype.slice.call(getElems).forEach(function(item, index, arr) {
                if(item.tagName !== "BR"){
                    item.classList.add(device);
                } 
            }, this);
        }

        param = param.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'');
        content.innerHTML = "<style>" + param + "</style>";
    }
}
//--end