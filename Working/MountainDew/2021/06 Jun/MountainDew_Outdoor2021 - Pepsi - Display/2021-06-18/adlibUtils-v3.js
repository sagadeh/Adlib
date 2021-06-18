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
    console.log('take screenshot');
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
    Adlib.localTimeline("PLAY");
}
//parent listener when ad ends
function adlibEnd() {
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id: id
    }, '*');
    Adlib.localTimeline("END");
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
    timelineEvent: null,
    localTimeline: function(status = null){
        if(window.location.protocol == "file:" || window.location.origin == "http://localhost" || window.location.hostname == "127.0.0.1"){
            switch(status){
                case "PLAY":
                    if(_obj.timelineEvent == null){
                        _obj.timelineEvent = setInterval(function(){
                            //document.getElementById("_adlibTimeline").innerHTML = gsap.globalTimeline.time().toFixed(1);
                            document.getElementById("_adlibTimeline").innerHTML = myVideo.currentTime.toFixed(1);
                        }, 100);
                    }
                break;
                case "PAUSE":
                    clearInterval(_obj.timelineEvent);
                    _obj.timelineEvent=null;
                break;
                case "END":
                    clearInterval(_obj.timelineEvent);
                    _obj.timelineEvent=null;
                    document.getElementById("_adlibBtnPlay").style.display = "none";
                    document.getElementById("_adlibBtnPause").style.display = "none";
                    document.getElementById("_adlibBtnReplay").style.display = "block";
                break;
            }
        }
    },
    localTesting: function(s){
        if(window.location.protocol=="file:"||window.location.origin=="http://localhost"||window.location.hostname=="127.0.0.1"){
            s = "640x360";
            let size = s.split("x");
            let sizes = ["640x360", "640x480", "1280x720", "1920x1080", "400x300", "480x360", "480x270", "720x540", "300x169", "300x225"];
            let optionSize = null;
            let currentSize = null;
            let width = Number(size[0]);
            let height = Number(size[1]);
            let frameHeight = height + 20;
            let buttonY = height+5;
            let countPreview = 1;
            let screen = window.screen.width;
            let adlibLogo = "data:image/png;base64,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";
            let creativeSize = "<svg enable-background=\"new 0 0 24 24\" height=\"13px\" width=\"13px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"m4.5 3c-.128 0-.256-.049-.354-.146l-1.646-1.647-1.646 1.647c-.195.195-.512.195-.707 0s-.195-.512 0-.707l2-2c.195-.195.512-.195.707 0l2 2c.195.195.195.512 0 .707-.098.097-.226.146-.354.146z\"/><path fill=\"currentColor\" d=\"m21.5 24c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l1.646-1.646-1.646-1.646c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2 2c.195.195.195.512 0 .707l-2 2c-.097.096-.225.145-.353.145z\"/><path fill=\"currentColor\" d=\"m2.5 24c-.276 0-.5-.224-.5-.5v-22.75c0-.276.224-.5.5-.5s.5.224.5.5v22.75c0 .276-.224.5-.5.5z\"/><path fill=\"currentColor\" d=\"m23.25 22h-22.75c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h22.75c.276 0 .5.224.5.5s-.224.5-.5.5z\"/><path fill=\"currentColor\" d=\"m13 10c-.061 0-.122-.011-.18-.033l-6.5-2.5c-.193-.074-.32-.26-.32-.467s.127-.393.32-.467l6.5-2.5c.115-.044.244-.044.359 0l6.5 2.5c.194.074.321.26.321.467s-.127.393-.32.467l-6.5 2.5c-.058.022-.119.033-.18.033zm-5.107-3 5.107 1.964 5.107-1.964-5.107-1.964z\"/><path fill=\"currentColor\" d=\"m13 18c-.061 0-.122-.011-.18-.033l-6.5-2.5c-.193-.074-.32-.26-.32-.467v-8c0-.276.224-.5.5-.5s.5.224.5.5v7.657l6 2.308 6-2.308v-7.657c0-.276.224-.5.5-.5s.5.224.5.5v8c0 .207-.127.393-.32.467l-6.5 2.5c-.058.022-.119.033-.18.033z\"/><path fill=\"currentColor\" d=\"m13 18c-.276 0-.5-.224-.5-.5v-8c0-.276.224-.5.5-.5s.5.224.5.5v8c0 .276-.224.5-.5.5z\"/></svg>";
            let duration = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"13px\" width=\"13px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\"><path fill=\"currentColor\" d=\"M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952C357.766,320.208,355.981,307.775,347.216,301.211z\"/><path fill=\"currentColor\" d=\"M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341S375.275,472.341,256,472.341z\"/></svg>";
            let play = "<svg enable-background=\"new 0 0 320.001 320.001\" height=\"15px\" width=\"15px\" viewBox=\"0 0 320.001 320.001\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"m295.84 146.049-256-144c-4.96-2.784-11.008-2.72-15.904.128-4.928 2.88-7.936 8.128-7.936 13.824v288c0 5.696 3.008 10.944 7.936 13.824 2.496 1.44 5.28 2.176 8.064 2.176 2.688 0 5.408-.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z\"/></svg>";
            let pause = "<svg viewBox=\"-45 0 327 327\" height=\"15px\" width=\"15px\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"m158 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0\"/><path fill=\"currentColor\" d=\"m8 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0\"/></svg>";
            let replay = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"15px\" width=\"15px\" viewBox=\"0 0 491.236 491.236\" style=\"enable-background:new 0 0 491.236 491.236;\"><path fill=\"currentColor\" d=\"M55.89,262.818c-3-26-0.5-51.1,6.3-74.3c22.6-77.1,93.5-133.8,177.6-134.8v-50.4c0-2.8,3.5-4.3,5.8-2.6l103.7,76.2c1.7,1.3,1.7,3.9,0,5.1l-103.6,76.2c-2.4,1.7-5.8,0.2-5.8-2.6v-50.3c-55.3,0.9-102.5,35-122.8,83.2c-7.7,18.2-11.6,38.3-10.5,59.4c1.5,29,12.4,55.7,29.6,77.3c9.2,11.5,7,28.3-4.9,37c-11.3,8.3-27.1,6-35.8-5C74.19,330.618,59.99,298.218,55.89,262.818zM355.29,166.018c17.3,21.5,28.2,48.3,29.6,77.3c1.1,21.2-2.9,41.3-10.5,59.4c-20.3,48.2-67.5,82.4-122.8,83.2v-50.3c0-2.8-3.5-4.3-5.8-2.6l-103.7,76.2c-1.7,1.3-1.7,3.9,0,5.1l103.6,76.2c2.4,1.7,5.8,0.2,5.8-2.6v-50.4c84.1-0.9,155.1-57.6,177.6-134.8c6.8-23.2,9.2-48.3,6.3-74.3c-4-35.4-18.2-67.8-39.5-94.4c-8.8-11-24.5-13.3-35.8-5C348.29,137.718,346.09,154.518,355.29,166.018z\"/></svg>";
            let body = document.getElementsByTagName("BODY")[0];
            let mediaContainer = function(newsize, container){
                var size = newsize.split("x");
                optionSize = null;
                width = Number(size[0]);
                height = Number(size[1]);
                frameHeight = height + 20;
                buttonY = height+5;
                var n = "_localPreview_"+newsize;
                var ns = "localpreview_"+newsize;
                var scale = 1;
                var translate = "translateX(-50%)";
            
                if(width == 1920){
                    if(screen <= 1920){
                        scale = (screen - 80) / 1920;
                        if(screen >= 1920){ translate  = "-35px";}
                        else if(screen >= 1600 && screen < 1920){ translate  = "-100px";}
                        else if(screen >= 1366 && screen < 1600){ translate  = "-170px";}
                        else if(screen >= 1280 && screen < 1366){ translate  = "-228px";}
                        translate = "translate(-50%, "+translate+")";
                    }
                }else if(width == 1280){
                    if(screen <= 1280){
                        scale = (screen - 80) / 1280;
                        if(screen >= 1280 && screen < 1366){ translate  = "-35px";}
                        translate = "translate(-50%, "+translate+")";
                    }
                }
                container.innerHTML = "<div id=\""+n+"\" style=\"position:absolute;top:70px;left:50%;transform:"+translate+" scale("+scale+");\"><div id=\"_localdiv_640x360\" style=\"display:block;margin:20px auto;width:"+(width+22)+"px;height:"+(frameHeight+22)+"px;overflow:hidden;border:1px solid #bdbaba;border-radius:5.5px;padding:10px;background:white;box-shadow: 0 1px 15px 1px rgb(90 90 90 / 8%);\"><iframe id=\""+ns+"\" name=\""+ns+"\" frameborder='0' scrolling='no' width=\""+width+"px\" height=\""+frameHeight+"px\" src=\""+window.location+"\"></iframe></div></div>";
            }
            
            if(window.self===window.top){
                optionSize = ""
                + "<option value=\"640x360\">640x360</option>"
                + "<option value=\"640x480\">640x480</option>"
                + "<option value=\"1280x720\">1280x720</option>"
                + "<option value=\"1920x1080\">1920x1080</option>"
                + "<option value=\"400x300\">400x300</option>"
                + "<option value=\"480x360\">480x360</option>"
                + "<option value=\"720x540\">720x540</option>"
                + "<option value=\"300x169\">300x169</option>"
                + "<option value=\"300x225\">300x225</option>"
                body.style.background = "#e3e8ee";
                body.innerHTML="<div style=\"display:none;\">"+body.innerHTML +"</div>";
                body.innerHTML+="<div style=\"background:white;height:60px;text-align:center;\"><div style=\"padding-top:5px;\"><img style=\"width:110px;height:auto;\" src=\""+adlibLogo+"\"/></div><div style=\"position:absolute;top:8px;right:10px;\"><select id=\"_adlibMediaSizes\" style=\"padding:10px;\">"+optionSize+"</select></div></div>";
                body.innerHTML+="<div id=\"mediaPreview\"></div>";

                setTimeout(function(){
                    var mediaPreview = document.getElementById("mediaPreview");
                    currentSize = "640x360";
                    mediaContainer(currentSize, mediaPreview);
                    document.getElementById("_adlibMediaSizes").addEventListener("change", function(){
                        mediaContainer(this.value, mediaPreview);
                    });
                }, 1);
                return true;
            }else{   
                var ssize = window.name.split("_");
                size = ssize[1].split("x");
                width = Number(size[0]);
                height = Number(size[1]);
                frameHeight = height + 20;
                buttonY = height+5;
                
                var _fx = (width < 150)? "10px" : "12px" ;
                var _ft = (width < 150)? "-2px" : "-1.5px" ;
                body.innerHTML+="<div id=\"playPause\" style=\"height:30px;width:"+width+"px;position:absolute;top:"+buttonY+"px;\"><span style=\"position:absolute;left:0;color:#444343;font-size:"+_fx+";font-family:Arial;color:#eb1e73;\"><span>"+creativeSize+"</span> <b style=\"position:relative;top:"+_ft+";\">"+ssize[1]+"</b>&nbsp;&nbsp;<span style=\"color:#eb1e73;\">"+duration+"</span> <b id=\"_adlibTimeline\" style=\"position:relative;top:"+_ft+";\">0.0</b></span><div style=\"position:absolute;right:0;\"><span style=\"display:none;color:#eb1e73;\" id=\"_adlibBtnPlay\">"+play+"</span> <span style=\"display:none;color:#eb1e73;\" id=\"_adlibBtnPause\">"+pause+"</span> <span style=\"display:inline;color:#eb1e73;\" id=\"_adlibBtnReplay\">"+replay+"</span></div></div>"; 

                setTimeout(function(){
                    var playStatus = true;
                    document.getElementById("mainContent").style.width = width+"px";
                        document.getElementById("mainContent").style.height = height+"px";
                        document.getElementById("playPause").style.width = width+"px";
                        document.getElementById("playPause").style.top = buttonY+"px";

                    document.getElementById("_adlibBtnPause").style.display = "inline";
                    document.getElementById("_adlibBtnPlay").addEventListener("click", function(){
                        playStatus = true;
                        this.style.display = "none";
                        document.getElementById("_adlibBtnPause").style.display = "inline";
                        gwd.auto_PlayBtnClick();
                    });
                    document.getElementById("_adlibBtnPause").addEventListener("click", function(){
                        playStatus = false;
                        this.style.display = "none";
                        document.getElementById("_adlibBtnPlay").style.display = "inline";
                        gwd.auto_PauseBtnClick();
                    });
                    document.getElementById("_adlibBtnReplay").addEventListener("click", function(){
                        window.location.reload(true);
                    });
                    myVideo.addEventListener("playing", function(){
                        if(!playStatus){
                            playStatus = true;
                            document.getElementById("_adlibBtnPlay").style.display = "none";
                            document.getElementById("_adlibBtnPause").style.display = "inline";
                            _obj.localTimeline("PLAY");
                        }
                    });
                    
                }, 1);
                return false;
            }
        }else{
            return false;
        }
    },
    assignInvocationCode: function() {
        let campaign = "dynamicContent." + Object.keys(devDynamicContent)[0] + "[0]."
        for (let i = 0; i < DV.length; i++) {
            let url = detectObj(Object(eval(campaign + DV[i])));
            let val = eval(campaign + DV[i]);
            (String(url).indexOf('http') > -1) ? defaultValues[DV[i]] = String(url) : defaultValues[DV[i]] = val;
            
        }    
    },
    createAd: function(s) {
        if(_obj.localTesting(s) == false){
            document.getElementById('adSize').setAttribute('content','width='+window.innerWidth+', height='+window.innerHeight);
            (isMobile != null) ? document.querySelector('#exitButton').addEventListener('touchend',exitCall) : document.querySelector('#exitButton').addEventListener('click',exitCall);
            populate();
            _obj.dvLoader();
            _obj.verifyDVLoaded(_obj.imgLoader);
        }
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
                document.querySelector('#'+elems[i].id).src = (checkEnvironment() == 'tools') ? defaultValues[elems[i].getAttribute('adlib-video')] : defaultValues[elems[i].getAttribute('studio-video')].Progressive_Url;
                myVideo = document.querySelector('#'+elems[i].id);
                _obj.setVideoCuePoint();             
                Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
                    studio.video.Reporter.attach('adVideo', myVideo);
                });
                _obj.tabActiveCheck();
            }                    
        }
    },
    setVideoCuePoint: function() {
        let cuePointHandler=[],functionHandler=[];
        for (var i=0;i<videoCuePoint.length;i++){
            cuePointHandler.push(Number(videoCuePoint[i].split(':')[0]));
            functionHandler.push(videoCuePoint[i].split(':')[1]);
        }
        clearInterval(vidCnt)
        vidCnt = setInterval(function() {
            for (var i =0;i<cuePointHandler.length;i++) {
                if (myVideo.currentTime >= cuePointHandler[i] && !isNaN(myVideo.duration)) {
                    eval(functionHandler[i])();
                    cuePointHandler[i] = undefined;
                }
            }
        },0.1)
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
            _obj.loadAd();         
        }
        function incrementCounter() {
            counter++;
            if (counter === len) {
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
    fpsSettings: function(n) {
        fpsValue = n;
    },
    loadAd: function() {
        gsap.ticker.fps(fpsValue),adlibStart(),setTimeout(function(){initAnimation()},2000);
    },
    textResize: function() {        
        let resizeElems = document.querySelectorAll('body *');
        for (var i=0;i<resizeElems.length;i++) {
            if(resizeElems[i].getAttribute('textResize')) {   
                let maxfont = 500;        
                let fwLoop = maxfont, fhLoop = maxfont;
                let dvContent = defaultValues[resizeElems[i].firstElementChild.getAttribute('adlib-text')].indexOf('font-size');
                let copyParagraph = document.querySelector("#" + resizeElems[i].id + " p");
                copyParagraph.style.fontSize = '500px';
                while (copyParagraph.offsetHeight > document.querySelector("#" + resizeElems[i].id).offsetHeight && dvContent < 0) {
                    copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - .5) + "px";
                    fhLoop = fhLoop - 0.5;
                    if(fhLoop < 5){
                        console.warn("Infinite Loop [ID: "+resizeElems[i].id+"] height.");
                        break;
                    }
                }
                while (copyParagraph.offsetWidth > document.querySelector("#" + resizeElems[i].id).offsetWidth && dvContent < 0) {
                    copyParagraph.style.fontSize = (parseInt(window.getComputedStyle(copyParagraph).fontSize) - .5) + "px";
                    fwLoop = fwLoop - 0.5;
                    if(fwLoop < 5){
                        console.warn("Infinite Loop [ID: "+resizeElems[i].id+"] width.");
                        break;
                    }
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
        if (videoStatus == "play") {
            document[hidden]?(gsap.globalTimeline.pause(),null!=myVideo&&myVideo.pause()):(gsap.globalTimeline.play(),null!=myVideo&&myVideo.play());
        }
    },
    getStyle: function(o,prop) {
        return parseInt(_win.getComputedStyle(eval(o)).getPropertyValue(prop).match(/\d+/))
    }
}
const _obj=Adlib,_win=this,DV=Object.keys(defaultValues);
let vidCnt,fpsValue = 30;
/*************************************************
ADLIB OBJECT - end
*************************************************/