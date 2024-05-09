let buttonLogin = document.querySelector(".login");
let buttonSignUp = document.querySelector(".sign-up");

let closeSignUp = document.querySelector(".X-sign-up");
let closeLogin = document.querySelector(".X-login");

let loginPage = document.querySelector(".login-page");
let signUpPage = document.querySelector(".sign-up-page");

buttonLogin.addEventListener("click", () => {
  loginPage.classList.remove("hidden-1");
});

buttonSignUp.addEventListener("click", () => {
  signUpPage.classList.remove("hidden-1");
});

closeLogin.addEventListener("click", () => {
  loginPage.classList.add("hidden-1");
});

closeSignUp.addEventListener("click", () => {
  signUpPage.classList.add("hidden-1");
});

let buttonAngular = document.querySelector(".a-3-btn");
let buttonReact = document.querySelector(".a-2-btn");
let buttonJs = document.querySelector(".a-1-btn");

let pageAngular = document.querySelector(".angular");
let pageReact = document.querySelector(".react");
let pageJs = document.querySelector(".js");

let closeAngular = document.querySelector(".X-angular");
let closeReact = document.querySelector(".X-react");
let closeJs = document.querySelector(".X-js");

buttonAngular.addEventListener("click", () => {
  pageAngular.classList.remove("hidden-2");
});

buttonReact.addEventListener("click", () => {
  pageReact.classList.remove("hidden-2");
});

buttonJs.addEventListener("click", () => {
  pageJs.classList.remove("hidden-2");
});

closeAngular.addEventListener("click", () => {
  pageAngular.classList.add("hidden-2");
});

closeReact.addEventListener("click", () => {
  pageReact.classList.add("hidden-2");
});

closeJs.addEventListener("click", () => {
  pageJs.classList.add("hidden-2");
});
