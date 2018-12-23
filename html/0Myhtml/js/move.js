/**
 * Created by Administrator on 2018/4/9 0009.
 */
function getStyle(obj, name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, attr, iTarget)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        //定义当前值
        var cur=0;

        if(attr=='opacity')
        {
            //有些特殊情况要四舍五入
            cur=Math.round(parseFloat(getStyle(obj, attr))*100);
        }
        else
        {
            cur=parseInt(getStyle(obj, attr));
            //cur+=speed;
        }
        //定义移动的速度
        var speed=(iTarget-cur)/6;
        //大于0向上取整，小于0向下取整
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //如果当前值等于目标值
        if(cur==iTarget)
        {
            clearInterval(obj.timer);
        }
        else
        {
            //透明度
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
                //测试显示透明度的值
                document.getElementById('txt1').value=obj.style.opacity;
            }
            //宽度、高度、等其他情况
            else
            {
                obj.style[attr]=cur+speed+'px';
            }
        }


    }, 30);
}