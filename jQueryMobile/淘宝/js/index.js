/**
 * Created by Administrator on 2017/12/31 0031.
 */
//固定时间倒计时
var time=1800000;
setInterval(function () {
    time = time-1000;
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    var h = parseInt($("#h").html());
    var m = parseInt($("#m").html());
    var s = parseInt($("#s").html());
    if(h <= 10){
        $("#h").html("0" + hour);
    }
    else{
        $('#h').html(hour);
    }
    if(m < 10 && m > 0){
        $("#m").html("0" + minute);
    }
    else{
        $('#m').html(minute);
    }
    if(s <= 10 && s > 0){
        $("#s").html("0" + seconds);
    }
    else{
        $('#s').html(seconds);
    }
    if(time==0){
        time=4000;
    }
}, 1000);

//关闭广告
$(document).ready(function(){
    $("#close").focus(function(){
        $("#adv").hide();
    });
});

<!--淘宝头条-->
setInterval(function(){
    var newList=$('.headline>ul :first').clone(true);
    $('.headline>ul').append(newList);
    $('.headline>ul :first').remove();
},2000);


<!--返回顶部-->
$(document).ready(function(){
    $("#go_top").hide();
    $(function () {
        //检测屏幕高度
//                var height=$(window).height();
        //scroll() 方法为滚动事件
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#go_top").fadeIn(500);
            }else{
                $("#go_top").fadeOut(500);
            }
        });
//                回顶部及时间
        $("#go_top").click(function(){
            $('body,html').animate({scrollTop:0},200);
            return false;
        });
    });


});
