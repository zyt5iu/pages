    // 获取元素
function getClass(oParent,class_name){
    var childes=oParent.getElementsByTagName('*');
    var aEls=[];
    for(var i=0;i<childes.length;i++){
        if(childes[i].className==class_name){
            aEls.push(childes[i]);
        }
    }
    return aEls;
}
window.onload=function(){
        var oDiv=document.getElementById('sliderbox');

        var oFig=oDiv.getElementsByTagName('figure')[0];
        var oImgs=oFig.getElementsByTagName('img');
// 向前，向后按钮
        var oPrev=getClass(oDiv, 'prev')[0];
        var oNext=getClass(oDiv, 'next')[0];
//遮罩
        var oMarkLeft=getClass(oDiv, 'markLeft')[0];
        var oMarkRight=getClass(oDiv, 'markRight')[0];
//小图
        var oUl=oDiv.getElementsByTagName('ul')[0];
        var oLi=oUl.getElementsByTagName('li');

        var nowzIndex=1;
        var now=0;
// 按钮显示与隐藏
        oPrev.onmouseover=oMarkLeft.onmouseover=function(){
            startMove(oPrev,'opacity',100)
        };
        oPrev.onmouseout=oMarkLeft.onmouseout=function(){
            startMove(oPrev,'opacity',0)
        };
        oNext.onmouseover=oMarkRight.onmouseover=function(){
            startMove(oNext,'opacity',100)
        };
        oNext.onmouseout=oMarkRight.onmouseout=function(){
            startMove(oNext,'opacity',0)
        };
//小图的高亮,大小图切换
        for(var i=0;i<oLi.length;i++){
            oLi[i].index=i;
            oLi[i].onmouseover=function(){
                //指向当前图片不动
                if(now==this.index){
                    return;
                }
                now=this.index;
                toggle();
            }
        }
        function toggle(){
            //小图的高亮
            for(var j=0;j<oLi.length;j++){
                startMove(oLi[j],'opacity',50);
            }
            startMove(oLi[now],'opacity',100);
            // 下滑出现
            oImgs[now].style.cssText="z-index:"+(++nowzIndex)+";height:0";
            startMove(oImgs[now],'height',352);
        }
        oPrev.onclick=function(){
            now--;
            if(now==-1)now=oLi.length-1;
            toggle();
            if(now==0){
                startMove(oUl,'right',0);
            }
            else if(now==oLi.length-1){
                startMove(oUl,'right',-(now-2)*oLi[0].offsetWidth);
            }
            else{
                startMove(oUl,'right',-(now-1)*oLi[0].offsetWidth);
            }
        };
        oNext.onclick=function(){
            now++;
            if(now==oLi.length)now=0;
            toggle();
            if(now==0){
                startMove(oUl,'right',0);
            }
            else if(now==oLi.length-1){
                startMove(oUl,'right',-(now-2)*oLi[0].offsetWidth);
            }
            else{
                startMove(oUl,'right',-(now-1)*oLi[0].offsetWidth);
            }
        };
//            自动切换
        var timer=setInterval(oNext.onclick,2000);
        oDiv.onmouseover=function(){
            clearInterval(timer);
        };
        oDiv.onmouseout=function(){
            timer=setInterval(oNext.onclick,2000);
        };



        var oNav=document.getElementById('nav1');
        var oNav_bar=document.getElementById('nav_bar1');
        var oContent=document.getElementById('content1');
        var oContainer=document.getElementById('container1');
        var oBox=document.getElementById('box');


        var disX=0;
        function move2(){
            var d=oNav_bar.offsetLeft+1;
            if(d>oNav.offsetWidth-oNav_bar.style.width){
                oNav_bar.offsetLeft=0;
                d=0;
            }
            oNav_bar.style.left=d+'px';
            var scale2=d/(oNav.offsetWidth-oNav_bar.offsetWidth);
            oContent.style.top=-scale2*(oContent.offsetHeight-oContainer.offsetHeight)+'px';
        }
        var timer2=setInterval(move2 ,30);
        oNav_bar.onmousedown= function (ev) {
            clearInterval(timer2);
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
                timer2=setInterval(move2 ,30);
            };
            return false;
        };
        oContent.onmouseover= function () {
            clearInterval(timer2);
        };
        oContent.onmouseout= function () {
            timer2=setInterval(move2 ,30);
        };
        oBox.onmouseover= function () {
            clearInterval(timer2);
        };
        oBox.onmouseout= function () {
            timer2=setInterval(move2 ,30);
        }
    }



