/* 
Pre-Biuld Scripts for Ad-Lib Ads

version: 2.0
last modified: Khackie 12/14/2020
author: Ad-Lib Innovation
*/

/*************************************************
SCREENSHOTTER FUNCTIONS - start
*************************************************/

var field = 'adlibCreativeId';
var url = window.location.href;
var id = getParameterByName(field, url) || 0;

/**
****PLATFORM UTILS****
**/

//function to get URL parameters(will work on tool only)
function getParameterByName(e,n){
    n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp(`(#?|&)${e}(=([^&#]*)|&|#|$)`).exec(n);return r?r[3]?decodeURIComponent(r[3].replace(/\+/g," ")):"":null
}

//this functions will take screenshot per frame
function takeScreenshot() {
    var iframeWidth=window.innerWidth,iframeHeight=window.innerHeight;try{var iframeX=window.parent.document.getElementById("adlib-screenshot-preview").offsetLeft,iframeY=window.parent.document.getElementById("adlib-screenshot-preview").offsetTop;parent.postMessage({type:"SCREENSHOT",data:{iframeX:iframeX,iframeY:iframeY,iframeHeight:iframeHeight,iframeWidth:iframeWidth}},"*")}catch(e){}
}

//first function call initializaation for screenshot
function adlibStart() {
    parent.postMessage({type:"SCREENSHOT_START",id:id},"*");
}

//last function call for screenhot 
function adlibEnd() {
    parent.postMessage({type:"SCREENSHOT_STOP",id:id},"*");
}

/*************************************************
SCREENSHOTTER FUNCTIONS - end
*************************************************/

/*************************************************
ADLIB OBJECT - start
*************************************************/

let Adlib = {
    assignInvocationCode: function() {
        let campaign="dynamicContent."+Object.keys(devDynamicContent)[0]+"[0].";DV.forEach(v=>{let url,val;try{url=Object.values(eval(campaign+v))}catch(a){}val=eval(campaign+v),String(url).includes("http")?defaultValues[v]=String(url):defaultValues[v]=val});       
    },
    createAd: function(s) {
        document.getElementById("adSize").setAttribute("content","width="+s.split("x")[0]+", height="+s.split("x")[1]),document.querySelector("#mainContent").setAttribute("style","width:"+s.split("x")[0]+"px;height:"+s.split("x")[1]+"px"),null!=isMobile?document.querySelector("#exitButton").addEventListener("touchend",exitCall):document.querySelector("#exitButton").addEventListener("click",exitCall),_obj.dvLoader(),_obj.verifyDVLoaded(_obj.imgLoader);
        document.querySelector("#exitButton-legal").addEventListener("touchend",exitCall);
        document.querySelector("#exitButton-legal").addEventListener("click",exitCall);
    },
    populateElements: function() {
        document.querySelectorAll("body *").forEach(e=>{null!=e.getAttribute("adlib-text")&&(Adlib.isEmpty(defaultValues[e.getAttribute("adlib-text")])||(document.querySelector("#"+e.id).innerHTML=defaultValues[e.getAttribute("adlib-text")])),null!=e.getAttribute("adlib-image")&&(document.querySelector("#"+e.id).src=defaultValues[e.getAttribute("adlib-image")]),null!=e.getAttribute("adlib-video")&&(Adlib.isEmpty(defaultValues[e.getAttribute("adlib-video")])||(document.querySelector("#"+e.id).src="tools"===checkEnvironment()?defaultValues[e.getAttribute("adlib-video")]:defaultValues[e.getAttribute("studio-video")],myVideo=document.querySelector("#"+e.id),Enabler.loadModule(studio.module.ModuleId.VIDEO,function(){studio.video.Reporter.attach("adVideo",myVideo)}),_obj.tabActiveCheck()))});
    },
    imgLoader: function() {
        var imgs=document.images,len=imgs.length,counter=0;function incrementCounter(){++counter===len&&(populate(),_obj.loadAd())}[].forEach.call(imgs,function(e){e.complete?incrementCounter():e.addEventListener("load",incrementCounter,!1)}),0===len&&(populate(),_obj.loadAd());
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
        document.querySelectorAll("body *").forEach(e=>{if(e.getAttribute("textResize")){let t=defaultValues[e.firstElementChild.getAttribute("adlib-text")].indexOf("font-size"),i=document.querySelector("#"+e.id+" p");for(i.style.fontSize=e.getAttribute("maxFontSize")+"px";i.offsetHeight>document.querySelector("#"+e.id).offsetHeight&&t<0;)i.style.fontSize=parseInt(window.getComputedStyle(i).fontSize)-1+"px"}});
    },
    isEmpty: function(v) {
        let retVal=!1;const cond=["n/a","N/A","none","null","&nbsp;"," n/a"];for(let n=0;n<cond.length;n++){if(v.indexOf(cond[n])>=0){retVal=!0;break}retVal=!1}
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
const _obj=Adlib,_win=this,DV=Object.keys(defaultValues),val=Object.values(defaultValues);
/*************************************************
ADLIB OBJECT - end
*************************************************/