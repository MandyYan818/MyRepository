
       var email =document.getElementById("email").value;
       var pwd =document.getElementById("pwd").value;

       function check() {
           if (email.length!=11) {
              console.log("手机号必须为11位")
              return false;
           }
           else{
              return true;
           }
           if (pwd.length<6) {
              console.log("密码(不少于6位)")
              return false;
           }

       }

	   
	   if (email.length=11) {
                  if (pwd.length>=6) {
                      if (!reg.test(pwd)) {
                          console.log("密码只能由数字和字母组成");
                      }else {return true;}
                  }else {
                      console.log("密码(不少于6位)");
                  }
              }else {
                  console.log("手机号必须为11位");
              }
			  
	   
	   if (email.length!=11) {
                  console.log("手机号必须为11位")
                  return false;
              }
              if (pwd.length<6) {
                  console.log("密码(不少于6位)")
                  return false;
              }
              if (!reg.test(pwd)) {
                  console.log("密码只能由数字和字母组成")
                  return false;
              }
			  
			  
			  if (email.length=11) {
                  if (pwd.length>=6) {
                      if (!reg.test(pwd)) {
                          console.log("密码只能由数字和字母组成")
                          return false;
                      }else {return true;}
                  }else {
                      console.log("密码(不少于6位)")
                      return false;
                  }
              }else {
                  console.log("手机号必须为11位")
                  return false;
              }
			  
			  function isEmail(email) {   
    var strEmail=document.getElementById(email).value;   
    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)   
    {   
            document.getElementById('spantest').innerText = "邮箱格式正确";  
            b = true;  
            return true;   
    }else{   
            document.getElementById('spantest').innerText = "邮箱格式错误！";  
            document.getElementById(email).focus();   
            b = false;  
            return false;   
    }   
	
	
	 <div class="Wdate" >
     <input type="" onfocus="WdatePicker({lang:'zh-cn,dateFmt:'yyyyMMdd HH:mm:ss'})">
   </div>