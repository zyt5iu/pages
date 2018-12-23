function cookies(key,value,iday){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iday);
    document.cookie=key+"="+value+";expires="+oDate;
}