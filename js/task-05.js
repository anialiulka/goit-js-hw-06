const refs = {
  inputField: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.inputField.addEventListener("input", onInputChange);

function onInputChange() {
  event.currentTarget.value.length > 0
    ? (refs.outputName.textContent = event.currentTarget.value)
    : (refs.outputName.textContent = "Anonymous");
}
