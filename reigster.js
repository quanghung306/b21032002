document.addEventListener(
    "DOMContentLoaded",
    function () {
        var btnreg =document.getElementById("btnreg");
        btnreg.onclick=function reigster() {
           var Name = document.getElementById('Full_Name').value 
           var Email = document.getElementById('Email').value
           var Password = document.getElementById('Password').value 
            var Re_Password =document.getElementById('Re_Password').value 
            var Birthday=  document.getElementById('Birthday').value 
            if(Password != Re_Password){
                alert("sai mk")
            }else{
                var user = {
                    Name:Name,
                    Email:Email,
                    Password:Password,
                    Birthday:Birthday
                }
            alert("dang ki thanh cong")
            window.open('login.html', '_self')
            localStorage.setItem('user',JSON.stringify(user));
            }
        }
    
    },
    false
 );