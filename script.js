const emailField = document.getElementById("email-field");
const submitBtn = document.querySelector(".submit-btn");
const emailError = document.querySelector(".email-error");
const errorIcon = document.querySelector(".error-icon");
const body = document.querySelector("body");


emailField.addEventListener("click", () => {
  validateEmail();
  console.log("clicked");
});
submitBtn.addEventListener("click", () => {
  console.log("clicked");
});

function validateEmail() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailField.style.outline = "1px solid red";

    emailError.style.display = "block";
    errorIcon.style.display = "block";
    // emailError.innerHTML = "please enter valid email";
    return false;
  }
  emailError.style.display = "none";
  errorIcon.style.display = "none";
  return true;

}
body.addEventListener('click', ()=> {
  emailError.style.display = "none";
  errorIcon.style.display = "none";
  emailField.value = "";
  emailField.style.outline = "1px solid hsla(0, 36%, 70%, 0.5)";

})

