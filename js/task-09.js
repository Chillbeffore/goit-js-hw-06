function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const textBg = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
console.log(btnEl);

btnEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;

  textBg.textContent = randomColor;
});
