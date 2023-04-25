const inputFormEl = document.querySelector("#validation-input");

const dataLength = inputFormEl.dataset.length;

inputFormEl.addEventListener("blur", onInputFormBlur);

function onInputFormBlur() {
  if (event.currentTarget.value.length >= dataLength) {
    inputFormEl.classList.add("valid");
    inputFormEl.classList.remove("invalid");
  } else {
    inputFormEl.classList.add("invalid");
  }
}
