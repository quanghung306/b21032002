var btnlogin =document.getElementById("btn_log");
btnlogin.onclick=function login(){
    var Logine = document.getElementById('email_login').value
var Loginp = document.getElementById('password_login').value
var user = JSON.parse(localStorage.getItem('user'))
if (( user.Email === Logine) && (user.Password === Loginp)) {
    alert('Đăng nhập thành công')
}
else {
    alert('Kiểm tra lại thông tin')
}
}