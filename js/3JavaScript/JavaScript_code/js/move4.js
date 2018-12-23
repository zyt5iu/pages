function getStyle(obj, name)
{
    if(obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}
//目标同时
function startMove(obj, json,func)
{
    var cur,speed,bStop;
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        for( var attr in json){//遍历json
            bStop=true;
            cur=0;//定义当前值
            if(attr=='opacity') {
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);//有些特殊情况要四舍五入
            }
            else{
                cur=parseInt(getStyle(obj, attr)); //cur+=speed;
            }
            speed=(json[attr]-cur)/6; //定义移动的速度
            speed=speed>0?Math.ceil(speed):Math.floor(speed); //大于0向上取整，小于0向下取整
            if(cur!=json[attr]) {
                bStop=false;
            }
            //透明度
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
                //document.getElementById('txt1').value=obj.style.opacity;//测试显示透明度的值
                if(func)func();//回调函数
            }
            //宽度、高度、等其他情况
            else{
                obj.style[attr]=cur+speed+'px';
            }
        }
        if (bStop){
            clearInterval(obj.timer);
            if(func)
                func();//回调函数
            {
                //func.call(obj);
            }
        }
    }, 30);
}