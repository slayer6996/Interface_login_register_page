const sign_in_btn = document.querySelector("#login-btn");
const sign_up_btn = document.querySelector("#register-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("register-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("register-mode");
});
