const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

let refs = {
  increment: document.querySelector('button[data-action="increment"]'),
  decrement: document.querySelector('button[data-action="decrement"]'),
};

refs.increment.addEventListener("click", onIncrementButtonClick);

refs.decrement.addEventListener("click", onDecrementButtonClick);

function onIncrementButtonClick() {
  counterValue.increment();
  document.querySelector("#value").textContent = counterValue.value;
}

function onDecrementButtonClick() {
  counterValue.decrement();
  document.querySelector("#value").textContent = counterValue.value;
}
