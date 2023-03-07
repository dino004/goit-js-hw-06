const refs = {
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", () => {
  counterValue--;

  refs.value.textContent = counterValue;
});

refs.incrementBtn.addEventListener("click", () => {
  counterValue++;

  refs.value.textContent = counterValue;
});
