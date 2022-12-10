const inputSlide = document.querySelector('#font-size-control');
const activeText = document.querySelector('#text');

inputSlide.addEventListener('input', (event) => {
let slideAmount = event.currentTarget.value;
activeText.style.fontSize = slideAmount + "px";
})