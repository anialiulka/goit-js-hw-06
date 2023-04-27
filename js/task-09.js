function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorProperty = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorProperty.textContent = bodyEl.style.backgroundColor;
}
