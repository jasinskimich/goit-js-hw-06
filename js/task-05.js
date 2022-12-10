const inputWindow = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputWindow.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    outputText.textContent = event.currentTarget.value;
  } else {
    outputText.textContent = "Anonymous";
  }
});
