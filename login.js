let btn = document.getElementById("btn").addEventListener("click", check);

function check() {
   const email = document.getElementById("email").value;
   const pswd = document.getElementById("pswd").value;
   
   let id1 = localStorage.getItem("id");
   let pass1 = localStorage.getItem("pass");
   console.log("sad");
   
   if (id1 === email && pass1 === pswd) {
      console.log("sad");
      window.location.href = "index.html";
   } 
   else 
      alert("Invalid mail id or password");
   
}