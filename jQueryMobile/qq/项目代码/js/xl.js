window.onload=function(){
    var w = document.documentElement.clientWidth;
    document.getElementById('xl').style.marginLeft = (w-150) + "px";

    var h = document.documentElement.clientHeight;
    if(h > 550){
        document.getElementById('panel_header').style.marginTop = "40%";
        document.getElementById('qq_panel_ul').style.marginTop = "60%";
        document.getElementById('qq_panel_setting').style.marginTop = "180%";
        document.getElementById('qq_panel_yj').style.marginTop = "180%";
        document.getElementById('qq_panel_tq').style.marginTop = "163%";
    }
    h = h-137;
    document.getElementById('main').style.width = w + "px";
    document.getElementById('main').style.height = h + "px";
    w = (w-99)/2;
    document.getElementById('search').style.marginLeft = w + "px";
    var span_num = document.getElementsByClassName('count');
    for(var i = 0;i < span_num.length;i++){
        var num = parseInt(document.getElementsByClassName('count')[i].innerHTML);
        if(num > 9){
            document.getElementsByClassName('count')[i].style.width = 24 + "px";
        }
    }
};
$(document).ready(function(){
    $("#xl_menu").click(function(event){
        event.stopPropagation();
        var ss = $("#xl").css("display");
        if(ss == "none"){
            $("#xl").show();
        }
        else{
            $("#xl").fadeOut(200);
        }
    });
    $(document).click(function(event){
        var _con = $('#xl');
        if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $('#xl').fadeOut(200);
        }
    });
});

$(document).ready(function(){
    $("div").bind("swiperight",function(event){
        $("#qq_panel").panel("open");
    });
});

