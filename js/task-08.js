const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm() {
  event.preventDefault();

  const elements = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  const { email, password } = elements;

  if (email === "" || password === "") {
    alert("Всі поля мають бути заповнені");
  }

  const values = { ...elements };
  console.log(values);

  event.currentTarget.reset();
}
