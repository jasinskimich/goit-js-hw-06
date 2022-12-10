function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const box = document.getElementById("boxes");
const amount = document.querySelector("input");
const create = document.querySelector("[data-create");
const destroy = document.querySelector("[data-destroy]");

function createBoxes() {
  for (let i = 1; i <= amount.value; i++) {
    const lastSize = box.lastChild ? box.lastChild.offsetWidth : 20;
    const newBox = document.createElement("div");

    newBox.style.width = `${lastSize + 10}px`;
    newBox.style.height = `${lastSize + 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    box.append(newBox);
  }
}

function destroyAllBoxes() {
  box.innerHTML = "";
}

create.addEventListener("click", () => createBoxes());
destroy.addEventListener("click", () => destroyAllBoxes());
