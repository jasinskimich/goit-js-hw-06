const increaseButton = document.querySelector(
  'button[data-action="increment"]'
);
const decreaseButton = document.querySelector(
  'button[data-action="decrement"]'
);
let counterSpan = document.querySelector("#value");

let counterValue = parseInt(counterSpan.textContent);

const clickDec = () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
};
const clickInc = () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
};

increaseButton.addEventListener("click", clickInc);
decreaseButton.addEventListener("click", clickDec);
