function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");
colorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = `HEX: ${randomColor}`;
  console.log(randomColor);
});
