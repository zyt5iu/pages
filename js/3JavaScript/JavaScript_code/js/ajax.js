function getAjaxData(method,url,func,data){
    var oAjax=new XMLHttpRequest();//创建ajax对象

    oAjax.open(method,url+"?t="+new Date().getTime(),true);// 打开,解决缓存

    if(method=="post")oAjax.send(data);//发送数据
    else oAjax.send();//发送数据

    oAjax.onreadystatechange= function () {//数据完成
        if(oAjax.readyState==4){//成功
            if(oAjax.status==200){
//                    console.log(eval(oAjax.responseText));
                //拿数据插入到页面(不管是json还是string)
                var str=oAjax.responseText;
                var result=str[0]=='['?eval(str):str;
                if(func)func(result);
            }
            else{
                alert("error!"+oAjax.status);
            }
        }
    }
}
