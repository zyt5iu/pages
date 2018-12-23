var hqin = {};
// 图片放大
// 创建一个元素div里面放一个img
hqin.image_box = document.createElement("div");
hqin.image_box.className = "bk-image";
hqin.image_single = document.createElement("img");
hqin.image_box.appendChild(hqin.image_single);

function bk_image(selector) {
    // 获取需要放大的所有img
    var get_images = document.querySelectorAll(selector);

    // 所有img拿来遍历
    for(var i = 0; i < get_images.length; i++){
        item(get_images[i]);
    }
    // 所有img添加一个属性，加个监听点击事件，如果点击就给img加上一个路径，让样式显示
    function item(obj) {
        obj.setAttribute("bk-image", "active");
        obj.addEventListener("click", function () {
            hqin.image_single.src = obj.src;
            if(!document.querySelector("body > .bk-image")){
                document.body.appendChild(hqin.image_box);
            }
        });
    }
    // 给div添加一个点击监听事件，点击就消失，再删除这个div
    hqin.image_box.addEventListener("click", function () {
        hqin.image_box.classList.add("remove");
        setTimeout(function () {
            try{
                document.body.removeChild(hqin.image_box);
                hqin.image_box.classList.remove("remove");
            }
            catch (err){}
        }, 300);
    });
}
// 小屏时候的img
bk_image("main #works .smallShow");