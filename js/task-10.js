function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  numberPicked: document.querySelector("input[type='number']"),
  boxes: document.querySelector("#boxes"),
};

const { buttonCreate, buttonDestroy, numberPicked, boxes } = refs;

buttonCreate.addEventListener("click", onButtonCreate);

buttonDestroy.addEventListener("click", onButtonDestroy);

function onButtonCreate() {
  onButtonDestroy();
  createBoxes(numberPicked.value);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * [i]}px`;
    divEl.style.height = `${30 + 10 * [i]}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxes.append(divEl);
  }
}

function onButtonDestroy() {
  boxes.innerHTML = "";
}
