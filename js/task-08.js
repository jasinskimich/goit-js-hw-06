const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  } else {
    const user = new Object();
    user.email = email.value;
    user.password = password.value;
    console.log(user);
  }
  event.currentTarget.reset();
}
