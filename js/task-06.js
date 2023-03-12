const input = document.querySelector("#validation-input");
const inputData = document.querySelector('[data-length="6"]');

input.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.selectionEnd === Number(inputData.dataset.length)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}
