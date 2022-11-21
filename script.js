const loginForm =document.querySelector("form.login");
const sigupForm =document.querySelector("form.singup");
const loginBtn =document.querySelector("label.login");
const sigupBtn =document.querySelector("label.singup");
const loginText =document.querySelector(".title-text .login");
const singupText =document.querySelector(".title-text .singup");

sigupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
sigupLink.onclick = (()=>{
    sigupBtn.click();
    return false;
});