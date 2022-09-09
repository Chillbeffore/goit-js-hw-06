const decrementBtnEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");

let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;

  value.textContent = counterValue;
};

const incrementValue = () => {
  counterValue += 1;

  value.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", decrementValue);
incrementBtnEl.addEventListener("click", incrementValue);

console.log(counterValue);
