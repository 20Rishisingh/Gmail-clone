const btn = document.getElementById("btn");

btn.addEventListener("click", signUp);

function signUp() {

   const email = document.getElementById("email").value;
   const pswd = document.getElementById("pswd").value;
   
   localStorage.setItem("id", email);
   localStorage.setItem("pass", pswd);
   
   window.location.href = "login.html";
}
