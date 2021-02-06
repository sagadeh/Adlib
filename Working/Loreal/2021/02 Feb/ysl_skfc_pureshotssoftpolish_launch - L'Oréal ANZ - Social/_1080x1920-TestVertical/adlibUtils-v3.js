/* 
Pre-Biuld Scripts for Ad-Lib Ads

version: 3.0
last modified: Khackie 01/28/2021
author: Ad-Lib Innovation
*/

/*************************************************
SCREENSHOTTER FUNCTIONS - start
*************************************************/

var id = window.location.hash.split("=")[1] || 0;

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
                iframeX: iframeX,
                iframeY: iframeY,
                iframeHeight: iframeHeight,
                iframeWidth: iframeWidth,
            }
        }, '*');
    } catch (e) {}
}
//parent listener when ad strats
function adlibStart() {
    parent.postMessage({
        type: 'SCREENSHOT_START',
        id: id
    }, '*');
}
//parent listener when ad ends
function adlibEnd() {
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id: id
    }, '*');
}

/*************************************************
SCREENSHOTTER FUNCTIONS - end
*************************************************/

/*************************************************
ADLIB OBJECT - start
*************************************************/
function detectObj(obj) {
    return obj[Object.keys(obj)];
}
let Adlib = {
    assignInvocationCode: function() {
        let campaign = "dynamicContent." + Object.keys(devDynamicContent)[0] + "[0]."
        for (let i = 0; i < DV.length; i++) {
            let url = detectObj(Object(eval(campaign + DV[i])));
            let val = eval(campaign + DV[i]);
            (String(url).indexOf('http') > -1) ? defaultValues[DV[i]] = String(url) : defaultValues[DV[i]] = val;
            
        }    
    },
    createAd: function(s) {
        document.getElementById('adSize').setAttribute('content','width='+s.split('x')[0]+', height='+s.split('x')[1]);
        document.querySelector('#mainContent').setAttribute('style','width:'+s.split('x')[0]+'px;height:'+s.split('x')[1]+'px');   
        (isMobile != null) ? document.querySelector('#exitButton').addEventListener('touchend',exitCall) : document.querySelector('#exitButton').addEventListener('click',exitCall);
        //populate();
        _obj.dvLoader();
        _obj.verifyDVLoaded(_obj.imgLoader);
        //_obj.imgLoader();    
    },
    populateElements: function() {
        let elems = document.querySelectorAll('body *');
        for (var i = 0;i<elems.length;i++) {   
            if(elems[i].getAttribute('adlib-text') != null) {
                if (!Adlib.isEmpty(defaultValues[elems[i].getAttribute('adlib-text')])) {
                    document.querySelector('#'+elems[i].id).innerHTML = defaultValues[elems[i].getAttribute('adlib-text')]
                }
            }
            if(elems[i].getAttribute('adlib-image') != null) {
                document.querySelector('#'+elems[i].id).src = defaultValues[elems[i].getAttribute('adlib-image')]
            }
            if(elems[i].getAttribute('adlib-video') != null) {
                document.querySelector('#'+elems[i].id).src = (checkEnvironment() == 'tools') ? defaultValues[elems[i].getAttribute('adlib-video')] : defaultValues[elems[i].getAttribute('studio-video')].substring(defaultValues[elems[i].getAttribute('studio-video')].indexOf(',')+1,defaultValues[elems[i].getAttribute('studio-video')].length); 
                myVideo = document.querySelector('#'+elems[i].id);
                Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
                    studio.video.Reporter.attach('adVideo', myVideo);
                });
                _obj.tabActiveCheck();
            }  
        }
    },
    imgLoader: function() {      
        var imgs = document.images,
        len = imgs.length,
        counter = 0;
        for(var i = 0; i < imgs.length; i++){
            if(imgs[i].complete) {
                incrementCounter();
            } else {
                imgs[i].addEventListener('load', incrementCounter, false);
            }
        }
        if (len === 0) {
            populate();
            _obj.loadAd();         
        }
        function incrementCounter() {
            counter++;
            if (counter === len) {
                populate();
                _obj.loadAd();
            }
        }
    },
    dvLoader: function() {
        if("undefined"!=typeof ADLBIsJsBanner)var callAdlib=setInterval(function(){window.ADLBIsJsBanner&&(clearInterval(callAdlib),_isPass=!0)},1);else _isPass=!0; 
    },
    verifyDVLoaded: function(callback) {
        var _passInterval=setInterval(function(){_isPass&&(clearInterval(_passInterval),callback())},1); 
    },
    loadAd: function() {
        gsap.ticker.fps(30),adlibStart(),takeScreenshot(),setTimeout(function(){_obj.textResize(),_obj.templateCSS(defaultValues.cssAttrib),initAnimation()},2000);
    },
    textResize: function() {
        let resizeElems = document.querySelectorAll('body *');
        for (var i=0;i<resizeElems.length;i++) {
            if(resizeElems[i].getAttribute('textResize')) {                
                let dvContent = defaultValues[resizeElems[i].firstElementChild.getAttribute('adlib-text')].indexOf('font-size');
                let copyParagraph = document.querySelector("#" + resizeElems[i].id + " p");
                copyParagraph.style.fontSize = resizeElems[i].getAttribute('maxFontSize')+'px';
                while (copyParagraph.offsetHeight > document.querySelector("#" + resizeElems[i].id).offsetHeight && dvContent < 0) {
                    copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - 1) + "px";
                }
                while (copyParagraph.offsetWidth > document.querySelector("#" + resizeElems[i].id).offsetWidth && dvContent < 0) {
                    copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - 1) + "px";
                }
            }
        }
    },
    isEmpty: function(v) {
        let retVal=!1;const cond=["n/a","N/A","none","null","&nbsp;"," n/a"];for(let n=0;n<cond.length;n++){if(v==cond[n]){retVal=!0;break}retVal=!1}
        return retVal;
    },
    templateCSS: function(css) {
        var getElems=null!=document.getElementById("pagedeck")?document.getElementById("pagedeck"):document.getElementsByTagName("BODY")[0],device="";if(null!=getElems&&null!=getElems){getElems=getElems.getElementsByTagName("*"),navigator.platform.indexOf("Win")>-1?document.documentMode?device="winIE":-1!=navigator.userAgent.indexOf("Chrome")||window.chrome&&window.chrome.webstore?device="winChrome":-1==navigator.userAgent.indexOf("Firefox")&&"undefined"==typeof InstallTrigger||(device="winFirefox"):-1!=navigator.userAgent.indexOf("Chrome")?device="macChrome":-1!=navigator.userAgent.indexOf("Safari")?device="macSafari":-1!=navigator.userAgent.indexOf("Firefox")&&(device="macFirefox"),device.length>0&&Array.prototype.slice.call(getElems).forEach(function(e,t,n){"BR"!==e.tagName&&e.classList.add(device)},this),css=css.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,"");var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");head.appendChild(style),style.type="text/css",style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}
    },
    utmParser: function(e) {
        var a=Enabler.getDartPageId(),r=Enabler.getDartSiteName(),t=Enabler.getDartSiteId(),d=Enabler.getDartAdId(),n=Enabler.getParameter("buy"),c=Enabler.getParameter("adv"),i=Enabler.getDartCreativeId();return e.replace("dynamicPlacementIdUTM",a).replace("dynamicSiteNameUTM",r).replace("dynamicSiteIdUTM",t).replace("dynamicAdIdUTM",d).replace("dynamicCampaignIdUTM",n).replace("dynamicAdvertiserIdUTM",c).replace("dynamicCreativeIdUTM",i)
    },
    tabActiveCheck: function() {
        void 0!==document.hidden?(hidden="hidden",visibilityChange="visibilitychange"):void 0!==document.msHidden?(hidden="msHidden",visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(hidden="webkitHidden",visibilityChange="webkitvisibilitychange"),void 0===document.addEventListener&&void 0===hidden||document.addEventListener(visibilityChange,_obj.pauseVideoOnTabChange,!1);
    },
    pauseVideoOnTabChange: function() {
        document[hidden]?(gsap.globalTimeline.pause(),null!=myVideo&&myVideo.pause()):(gsap.globalTimeline.play(),null!=myVideo&&myVideo.play());
    },
}
const _obj=Adlib,_win=this,DV=Object.keys(defaultValues);
/*************************************************
ADLIB OBJECT - end
*************************************************/