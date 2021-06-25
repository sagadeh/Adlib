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
var imgKeywordArr = ["Image", "image", "Background", "logo", "Logo", "packshot", "Img", "roundel"];
var vidKeywordArr = ["video", "Video"];
var audioKeywordArr = ["Audio"];
var landingPageArr = ["landing"];

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
    console.log("Function call: takeScreenshot");
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
    // console.log("screenshot");
}

//last function call for screenhot 
function adlibEnd() {
    
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id
    }, '*');
    // console.log("screenshot end");
}

//for play/pause functionality
window.gwd = window.gwd || {};

    gwd.auto_PauseBtnClick = function(event) {
        gsap.globalTimeline.pause();
    };
    gwd.auto_PlayBtnClick = function(event) {
        gsap.globalTimeline.play();
    };

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
    console.log("textResize");
   document.querySelectorAll("."+element).forEach(function(obj, i) {
       var copyParagraph = document.querySelector("#" + obj.id + " p");
       copyParagraph.style.fontSize = '18px';

       while (copyParagraph.offsetHeight > document.querySelector("#" + obj.id).offsetHeight) {
           copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - 1) + "px";
       }

       while (copyParagraph.offsetWidth > document.querySelector("#" + obj.id).offsetWidth) {
           copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - 1) + "px";
       }
   })
}

//--end


//image preloader without appends
var paths = [];

function preloadImages(paths, callback) {
    var images = [];
    var loaded = 0;

    paths.forEach(function (path) {
        var img = new Image();
        img.src = path;
        img.onload = onImagePreloaded;
        images.push(img);
    });


    function onImagePreloaded() {
        loaded++;
        if (loaded === paths.length && callback) {
             callback(images);

        }
    }
}

// FUNCTION TO AUTO RESIZE THE FONT FOR TEXT CONTENT.
// EXAMPLE SCENARIO 1, PARENT WIDTH & HEIGHT CONDITION FOR FONTSIZE
// PARAMATER: autoFontSize(PARENT_ELEMENT(string), CHILD_ELEMENT(string), MAX_FONTSIZE(int), MIN_FONTSIZE(int));
// HOW TO USE: autoFontSize("headlineContainer", "headline", 32, 12);

// EXAMPLE SCENARIO 2, MANUAL WIDTH & HEIGHT CONDITION FOR FONTSIZE
// PARAMATER: autoFontSize(PARENT_ELEMENT(string), CHILD_ELEMENT(string), MAX_FONTSIZE(int), MIN_FONTSIZE(int), MAX_WIDTH(INT), MIN_HEIGHT(INT));
// HOW TO USE: autoFontSize("headlineContainer", "headline", 32, 12, 300, 100);

// NOTE: Make sure the CHILD_ELEMENT contain the styling of width:auto;height:auto;
function autoFontSize(parent, element, maxfont, minfont, elementMaxWidth, elementMaxHeight){
    var size = maxfont;
    var fontSize = maxfont;
    var maxHeight = (elementMaxHeight != null)? elementMaxHeight : document.getElementById(parent).offsetHeight ;
    var maxWidth = (elementMaxWidth != null)? elementMaxWidth : document.getElementById(parent).offsetWidth ;
    var textHeight;
    var textWidth;
    var loopLimit = parseInt(maxfont);
    var loopCount = 0;
    do {
        document.getElementById(element).style.fontSize = fontSize+"px";
        textHeight = document.getElementById(element).offsetHeight;
        textWidth = document.getElementById(element).offsetWidth;
        size = fontSize;
        fontSize = fontSize - 1;
        loopCount++;
    } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize >= minfont && loopCount < loopLimit);

    return size;
}

// FUNCTION TO CHECK IF DYNAMIC ELEMENT IS NOT EMPTY THEN RETURN TRUE.
// EXAMPLE USE: 
// if(isNotEmpty(defaultValues.frame1Headline)){ 
//     STATEMENT HERE 
// }
function isNotEmpty(value){
    var val = value.trim();
    val = val.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'');
    if(val!== "" && val !== "&nbsp;" && val !== " " && val.toUpperCase() !== "N/A"){
        return true;
    }else{ 
        return false;
    }
}

// FUNCTION TO ADD CSS FOR STYLING THE DYNAMIC ELEMENTS.
// EXAMPLE USE: templateCSS(defaultValues.cssAttrib);
function templateCSS(css){
    var getElems = (document.getElementById("pagedeck") != null)? document.getElementById("pagedeck") : document.getElementsByTagName("BODY")[0] ; 
    var device = "";
    if(getElems != null && getElems != undefined){
        getElems = getElems.getElementsByTagName("*");
        if (navigator.platform.indexOf('Win') > -1) { 
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

        css = css.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'');

        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if(style.styleSheet){
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        }else{
            style.appendChild(document.createTextNode(css));
        }
    }
}