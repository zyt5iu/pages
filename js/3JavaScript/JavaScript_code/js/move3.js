function getStyle(obj, name)
{
    if(obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}
//目标同值
function startMove(obj, json,func)
{
    var otherJson=json;
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        for( var attr in json){//遍历json
            var cur=0;//定义当前值
            if(attr=='opacity') {
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);//有些特殊情况要四舍五入
            }
            else{
                cur=parseInt(getStyle(obj, attr)); //cur+=speed;
            }
            var speed=(json[attr]-cur)/6; //定义移动的速度
            speed=speed>0?Math.ceil(speed):Math.floor(speed); //大于0向上取整，小于0向下取整
            //如果当前值等于目标值
            if(cur==json[attr]) {
                //clearInterval(obj.timer);
                delete otherJson[attr];
                if(func)func();//回调函数
            }
            else {
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
            //判断otherJson是否为空，为空全部执行完毕关定时器，两种方法
            //var otherJsonLength=0;
            //for(var attr3 in otherJson){
            //    otherJsonLength++;
            //}
            //if(otherJsonLength==0){
            //    clearInterval(obj.timer);
            //    if(func)func();//回调函数
            //}

            if(JSON.stringify(otherJson)=={}){
                clearInterval(obj.timer);
                if(func)func();//回调函数
            }
        }
    }, 30);
}