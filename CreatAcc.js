const btn = document.getElementById("btn");

btn.addEventListener("click", signUp);

function signUp() {

   const email = document.getElementById("email").value;
   const pswd = document.getElementById("pswd").value;
   
   localStorage.setItem("id", email);
   localStorage.setItem("pass", pswd);
   
   window.location.href = "logIn.html";
}





// const btn = document.getElementById("btn");

// btn.addEventListener("click", signUp);


// function signUp() {

//    const email = document.getElementById("email").value;
//    console.log(email);
//    const pswd = document.getElementById("pswd").value;
//    console.log(pswd);
//    localStorage.setItem("id", email);
//    localStorage.setItem("pass", pswd);
   
//    check();

// }



// function check(){
//    const email = document.getElementById("email").value;
//    console.log(email);
//    const pswd = document.getElementById("pswd").value;
//    console.log(pswd);
//    var id1 = localStorage.getItem("id");
//    var pass1 = localStorage.getItem("pass");
   
//    if(id1 == email || pass1 == pswd){
//       window.location.href="index.html";
//    }
//    else{
//       alert("Invalid mail id or password");
//    }
// }
