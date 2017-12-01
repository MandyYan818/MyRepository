/**
 * Created by lenovo on 2017/11/28.
 */
function $(id){return document.getElementById(id);}
function show(obj){obj.style.display="block";}
function hide(obj){obj.style.display="none";}
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
