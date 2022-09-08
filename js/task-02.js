const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const firstListEl = document.querySelector("#ingredients");
console.log(firstListEl);

const liGenerate = [];

ingredients.forEach((element) => {
  const createLiEl = document.createElement("li");

  createLiEl.textContent = element;
  createLiEl.classList.add("item");

  liGenerate.push(createLiEl.outerHTML);
});

firstListEl.innerHTML = liGenerate.join("");
