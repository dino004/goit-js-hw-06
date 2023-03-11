function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  btnGeneretionColor: document.querySelector(".change-color"),
  outNameColor: document.querySelector(".color"),
};

refs.btnGeneretionColor.addEventListener("click", getColor);

function getColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.outNameColor.textContent = getRandomHexColor();
}
