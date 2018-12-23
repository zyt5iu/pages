$(function () {
    // 进度条
   $('.circle').each(function (index,el) {
       let num=$(this).find('span').text() * 3.6;
       if(num<=180){
           $(this).find('.c_right').css('transform', "rotate(" + num + "deg)");
       }
       else{
           $(this).find('.c_right').css('transform', "rotate(180deg)");
           $(this).find('.c_left').css('transform', "rotate(" + (num - 180) + "deg)");
       }
   });
});
