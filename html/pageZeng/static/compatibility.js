function getclass(classn) {//创建函数 传入形参
    if(!document.getElementsByClassName) {//判断document.getElementsByClassName方法是否支持
        let list = document.getElementsByTagName("*");//先取得所有的dom标签元素
        let temp = [];//创建临时数组
        for(let i = 0; i < list.length; i++) {//循环每一个dom元素
            if(list[i].className === classn) {//判断当前这个元素的class名称是否等于box
                temp.push(list[i])//如果等于，将该元素添加到数组中去
            }
        }
        return temp;//；返回给函数
    }
    else{
        return document.getElementsByClassName(classn);
    }
}

