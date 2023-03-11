const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Заповніть, будь ласка, всі поля!");
  } else {
    let obj = {};
    obj.email = event.currentTarget.elements.email.value;
    obj.password = event.currentTarget.elements.password.value;
    console.log(obj);
  }
  form.reset();
}
