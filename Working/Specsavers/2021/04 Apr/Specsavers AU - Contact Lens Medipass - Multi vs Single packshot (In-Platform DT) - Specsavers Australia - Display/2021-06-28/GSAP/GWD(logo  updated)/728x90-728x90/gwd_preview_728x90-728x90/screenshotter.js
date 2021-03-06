var tween;
var field = 'adlibCreativeId';
var url = window.location.href;
var id = getParameterByName(field, url) || 0;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp(`(#?|&)${name}(=([^&#]*)|&|#|$)`);
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[3]) return '';
    return decodeURIComponent(results[3].replace(/\+/g, ' '));
}

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

function adlibStart() {
    /*Called at the start of the animation*/
    parent.postMessage({
        type: 'SCREENSHOT_START',
        id
    }, '*');
}

function adlibEnd() {
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id
    }, '*');
}

function callAdlibScreenshot() {
    takeScreenshot();
    console.log("screenshot!")
}

function stopAdlibScreenshot() {
    adlibEnd();
    console.log("end screenshot!")
}

function callGWDPlayPause() {
    console.log("updated");
    gwd.auto_PauseBtnClick = function (event) {
        tween.pause();
        console.log("Pause Timeline");
    };
    gwd.auto_PlayBtnClick = function (event) {
        tween.play();
        console.log("Play Timeline");
    };
}