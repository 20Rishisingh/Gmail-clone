let btn = document.getElementById("btn").addEventListener("click", check);

function check() {
   const email = document.getElementById("email").value;
   const pswd = document.getElementById("pswd").value;
   
   let id1 = localStorage.getItem("id");
   let pass1 = localStorage.getItem("pass");
   
   
   if (id1 === email && pass1 === pswd) {
      window.location.href = "inbox.html";
   } 
   else 
      alert("Invalid mail id or password");
   
}