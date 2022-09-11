const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSub);

function onFormSub(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);

  if (mail === "" || password === "") {
    return alert(`Поля объязательны для заполенения!!!`);
  }

  event.currentTarget.reset();
}
