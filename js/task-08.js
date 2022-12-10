const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget; 

  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}