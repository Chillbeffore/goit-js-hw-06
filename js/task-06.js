const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == input.dataset.length) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  }
  return input.classList.add("invalid");
});
