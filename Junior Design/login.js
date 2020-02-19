
function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
 
    if (username.value == "") {
 
        alert("Enter username");
 
    } else if (pass.value  == "") {
 
        alert("Enter passward");
 
    } else if(username.value == "admin" && pass.value == "123456"){
 
        window.location.href="welcome.html";
 
    } else {
 
        alert("Username or passward wrong！")
 
    }
}
