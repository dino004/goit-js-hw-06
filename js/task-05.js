const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
  refs.name.textContent = event.currentTarget.value;
  if (refs.name.textContent === "") {
    refs.name.textContent = "Anonymous";
  }
};

refs.input.addEventListener("input", onInputChange);
