const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (nameLabel.textContent = "Anonymous");
  }

  nameLabel.textContent = event.currentTarget.value;
});
