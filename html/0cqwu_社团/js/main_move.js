window.onload= function () {
    var oNav=document.getElementById('nav1');
    var oNav_bar=document.getElementById('nav_bar1');
    var oContent=document.getElementById('content1');
    var oContainer=document.getElementById('container1');
    var oBox=document.getElementById('box');


    var disX=0;
    function move(){
        var d=oNav_bar.offsetLeft+1;
        if(d>oNav.offsetWidth-oNav_bar.style.width){
            oNav_bar.offsetLeft=0;
            d=0;
        }
        oNav_bar.style.left=d+'px';
        var scale2=d/(oNav.offsetWidth-oNav_bar.offsetWidth);
        oContent.style.top=-scale2*(oContent.offsetHeight-oContainer.offsetHeight)+'px';
    }
    var timer=setInterval(move ,30);
    oNav_bar.onmousedown= function (ev) {
        clearInterval(timer);
        var oEvent=ev||event;
        disX=oEvent.clientX-oNav_bar.offsetLeft;
        document.onmousemove= function (ev) {
            var oEvent=ev||event;
            var l=oEvent.clientX-disX;
            if(l<0){
                l=0;
            }
            else if(l>oNav.offsetWidth-oNav_bar.offsetWidth){
                l=oNav.offsetWidth-oNav_bar.offsetWidth;
            }
            oNav_bar.style.left=l+'px';
            var scale=l/(oNav.offsetWidth-oNav_bar.offsetWidth);
            oContent.style.top=-scale*(oContent.offsetHeight-oContainer.offsetHeight)+'px';
        };
        document.onmouseup= function () {
            document.onmousemove=null;
            document.onmouseup=null;
            timer=setInterval(move ,30);
        };
        return false;
    };
    oContent.onmouseover= function () {
        clearInterval(timer);
    };
    oContent.onmouseout= function () {
        timer=setInterval(move ,30);
    };
    oBox.onmouseover= function () {
        clearInterval(timer);
    };
    oBox.onmouseout= function () {
        timer=setInterval(move ,30);
    }
};


