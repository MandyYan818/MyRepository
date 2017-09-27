
function check() {
    var phone =document.getElementById("phone").value;
    var pwd =document.getElementById("pwd").value;
    var reg = /^[0-9a-zA-Z]+$/;

    if (phone.length!=11) {
        document.getElementById('phoneInfo').innerHTML =
            '<span class="checkInfo">手机号必须为11号!</span>';
        console.log("手机号必须为11位")
        return false;
    }else if(pwd.length<6){
        document.getElementById('pwdInfo').innerHTML=
            "<span class='checkInfo'>密码(不少于6位)</span>";
        console.log("密码(不少于6位)")
        return false;
    }else if(pwd!=reg.test(pwd)){
        document.getElementById('pwdInfo').innerHTML=
            "<span class='checkInfo'>密码只能由数字和字母组成</span>";
        console.log("密码只能由数字和字母组成")
        return false;
    }else{
        return true;
    }

}

$(function(){
    $("#phone").blur(function(){

    })
})

function $(){
    var elements=new Array();

    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == 'string')
            element = document.getElementById(element);
        if (arguments.length == 1)
            return element;
        elements.push(element);
    }
    return elements;
}

function formToJSON(f){
    var form=$(f);
    var form=document.getElementById("signup-form");

    json = '{';
    isarray = false;
    for (i = 0, max = form.elements.length; i < max; i++) {
        e = form.elements[i];
        name = e.name;
        if (name.substring(name.length - 2) == '[]') {
            name = name.substring(0, name.length - 2);
            lastarr = name;
            if (isarray == false) {
                json += '"' + name + '":[';
            }
            isarray = true;
        } else {
            if (isarray) {
                json = json.substring(0, json.length - 1) + '],';
            }
            isarray = false;
        }//end else

        switch (e.type) {
            case 'checkbox':
            case 'radio':
                if (!e.checked) { break; }
            case 'hidden':
            case 'password':
            case 'file':
            case 'text':
                if (!isarray) {
                    json += '"' + name + '":';
                }
                json += '"' + e.value.replace(new RegExp('(["\\\\])', 'g'), '\\$1') + '",';
                break;

            case 'button':
            case 'image':
            case 'reset':
            case 'submit':
            default:
        }//end switch
    };//end for

    alert( json.substring(0, json.length - 1) + '}');
}
