
       var email =document.getElementById("email").value;
       var pwd =document.getElementById("pwd").value;

       function check() {
           if (email.length!=11) {
              console.log("�ֻ��ű���Ϊ11λ")
              return false;
           }
           else{
              return true;
           }
           if (pwd.length<6) {
              console.log("����(������6λ)")
              return false;
           }

       }

	   
	   if (email.length=11) {
                  if (pwd.length>=6) {
                      if (!reg.test(pwd)) {
                          console.log("����ֻ�������ֺ���ĸ���");
                      }else {return true;}
                  }else {
                      console.log("����(������6λ)");
                  }
              }else {
                  console.log("�ֻ��ű���Ϊ11λ");
              }
			  
	   
	   if (email.length!=11) {
                  console.log("�ֻ��ű���Ϊ11λ")
                  return false;
              }
              if (pwd.length<6) {
                  console.log("����(������6λ)")
                  return false;
              }
              if (!reg.test(pwd)) {
                  console.log("����ֻ�������ֺ���ĸ���")
                  return false;
              }
			  
			  
			  if (email.length=11) {
                  if (pwd.length>=6) {
                      if (!reg.test(pwd)) {
                          console.log("����ֻ�������ֺ���ĸ���")
                          return false;
                      }else {return true;}
                  }else {
                      console.log("����(������6λ)")
                      return false;
                  }
              }else {
                  console.log("�ֻ��ű���Ϊ11λ")
                  return false;
              }
			  
			  function isEmail(email) {   
    var strEmail=document.getElementById(email).value;   
    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)   
    {   
            document.getElementById('spantest').innerText = "�����ʽ��ȷ";  
            b = true;  
            return true;   
    }else{   
            document.getElementById('spantest').innerText = "�����ʽ����";  
            document.getElementById(email).focus();   
            b = false;  
            return false;   
    }   
	
	
	 <div class="Wdate" >
     <input type="" onfocus="WdatePicker({lang:'zh-cn,dateFmt:'yyyyMMdd HH:mm:ss'})">
   </div>