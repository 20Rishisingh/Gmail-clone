const signinBtn = document.getElementById("signin").addEventListener("click", () => {
   window.location.href = "CreatAcc.html";
});


const show = document.getElementsByClassName("popup")[0];

const composeBtn = document.getElementById("compose-btn").addEventListener("click", () => {
   show.style.display = 'block';
});

const del = document.querySelector("#del").addEventListener("click", () => {
   show.style.display = 'none';
});

const send = document.querySelector(".send-btn").addEventListener("click", () => {
   show.style.display = 'none';
   alert ("Mail sent Successfully");
});


