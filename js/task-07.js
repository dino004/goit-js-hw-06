const fontSizeControl = document.getElementById("font-size-control");
const viewSizeText = document.getElementById("text");

fontSizeControl.addEventListener("input", onChangeSize);

function onChangeSize() {
  text.style.fontSize = fontSizeControl.value + "px";
}
