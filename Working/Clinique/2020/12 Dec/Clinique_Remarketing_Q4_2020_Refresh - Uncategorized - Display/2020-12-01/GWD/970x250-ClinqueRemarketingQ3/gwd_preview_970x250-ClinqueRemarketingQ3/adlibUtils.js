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
          setTimeout(function() { callback(); }, 1500);
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

//UTM PARSER
function utmParser(utmValue){
    var utmValue;

    var macroPlacementID = Enabler.getDartPageId();
    var macroSiteName = Enabler.getDartSiteName();
    var macroSiteID = Enabler.getDartSiteId();
    var macroAdID = Enabler.getDartAdId();
    var macroCampaignID = Enabler.getParameter("buy");
    var macroAdvertiserID = Enabler.getParameter("adv");
    var macroCreativeID = Enabler.getDartCreativeId();


    var dynamicUTM = utmValue;

    //encodingPhase
    var placementIdPhase = dynamicUTM.replace("dynamicPlacementIdUTM",macroPlacementID); //This phase replaces dynamicPlacementIdUTM with the placement ID pulled from DCM 
    var siteNamePhase = placementIdPhase.replace("dynamicSiteNameUTM",macroSiteName); //This phase replaces dynamicSiteUTM with the Site Name pulled from DCM 
    var siteIdPhase = siteNamePhase.replace("dynamicSiteIdUTM",macroSiteID); //This phase replaces dynamicSiteIdUTM with the Site ID pulled from DCM 
    var adIdPhase = siteIdPhase.replace("dynamicAdIdUTM",macroAdID); //This phase replaces dynamicAdIdUTM with the Ad ID pulled from DCM 
    var campaignIdPhase = adIdPhase.replace("dynamicCampaignIdUTM",macroCampaignID); //This phase replaces dynamicCampaignIdUTM with the Campaign ID pulled from DCM 
    var advertiserIdPhase = campaignIdPhase.replace("dynamicAdvertiserIdUTM",macroAdvertiserID); //This phase replaces dynamicAdvertiserIdUTM with the Advertiser ID pulled from DCM 
    var creativeIdPhase = advertiserIdPhase.replace("dynamicCreativeIdUTM",macroCreativeID); //This phase replaces dynamicCreativeIdUTM with the Creative ID pulled from DCM 
    
    return(creativeIdPhase);
}




