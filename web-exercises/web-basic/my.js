/**
 * Created by lenovo on 2017/11/28.
 */
function $(id){return document.getElementById(id);}
function show(obj){obj.style.display="block";}
function hide(obj){obj.style.display="none";}
//检测滚动距离
function scroll(){
    if (window.pageYOffset!=null){
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if (document.compatMode=="CSS1Compat"){
        return{
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}
//检测屏幕宽度
function client(){
    if (window.innerWidth!=null){ //
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if(document.compatMode==="CSS1Compat"){ //标准浏览器
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
    return { //怪异浏览器
        width:document.body.clientWidth,
        height:document.body.clientHeight

    }
}
