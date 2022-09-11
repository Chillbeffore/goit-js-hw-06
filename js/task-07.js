const fontSizeInput = document.querySelector("#font-size-control");
console.log(fontSizeInput);

const textEl = document.querySelector("#text");
console.log(textEl);

textEl.style.fontSize = `${fontSizeInput.value}px`;

fontSizeInput.addEventListener("input", () => {
  textEl.style.fontSize = `${fontSizeInput.value}px`;
});
