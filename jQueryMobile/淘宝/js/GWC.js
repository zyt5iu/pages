/**
 * Created by Administrator on 2018/1/9 0009.
 */
function showdiv() {
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("success").style.display = "block";
    document.getElementById("edit").style.display = "none";
    document.getElementById("edit1").style.display = "none";
}
function hidediv() {
    document.getElementById("cartTable").style.display = "none";
    document.getElementById("edit1").style.display = "block";
    document.getElementById("success").style.display = "none";
}
function deletediv(){
    document.getElementById("headgoods").style.display = "none";
}
window.onload = function(){
    //低版本的IE浏览器不支持getElementByClassName方法，考虑兼容性,重写方法。
    if (!document.getElementByClassName) {
        document.getElementByClassName =function(cls){
            var ret = [];
            var clsElments = document.getElementsByTagName('*');
            for (var i = 0, len = clsElments.length; i < len; i++) {
                //考虑一个标签有多个class的情况,这里用正则表达式会好一点
                if (clsElments[i].className == cls
                    || (clsElments[i].className.indexOf(cls + " ") >= 0)
                    || (clsElments[i].className.indexOf(" " + cls + " ") >= 0)
                    || (clsElments[i].className.indexOf(" " + cls) >= 0))
                {
                    ret.push(clsElments[i]);
                }
            }
            return ret;
        }

    }
    var checkInput = document.getElementByClassName('check');//获得所有的单选框
    var checkAllInput = document.getElementByClassName('check_all');//获得所有的单选框
    //复选框绑定单击事件
    for (var i = 0, len = checkInput.length; i < len; i++){
        checkInput[i].onclick =function (){
            //判断全选按钮，变更
            if (this.className == "check_all check") {
                for (var j = 0; j < len; j++){
                    checkInput[j].checked = this.checked;
                }
            }
            if (this.checked == false) {
                for (var k = 0,len2 = checkAllInput.length; k < len2; k++){
                    checkAllInput[k].checked = false;
                }
            }
            getTotle();
        }
    }
};

$(function(){
    //数量减
    $('.reduce').click(function() {
        var t = $(this).parent().find('.count_input');
        t.text(parseInt(t.text()) - 1);
        if (t.text() <= 1) {
            t.text(1);
        }
        TotalPrice();
    });
    // 数量加
    $('.add').click(function() {
        var t = $(this).parent().find('.count_input');
        t.text(parseInt(t.text()) + 1);
        if (t.text() <= 1) {
            t.text(1);
        }
        TotalPrice();
    });
});

