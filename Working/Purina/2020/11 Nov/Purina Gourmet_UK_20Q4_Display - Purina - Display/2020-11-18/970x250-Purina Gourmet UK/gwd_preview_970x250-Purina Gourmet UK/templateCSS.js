function templateCSS(content, param){
    var getElems = document.getElementById("pagedeck").getElementsByTagName("*");
    var device = "";
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
    Array.prototype.slice.call(getElems).forEach(function(item, index, arr) {
        item.classList.add(device);
    }, this);

    content.innerHTML += "<style>" + param + "</style>";
}