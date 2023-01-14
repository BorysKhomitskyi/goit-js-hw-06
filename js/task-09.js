function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const buttonChange = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

buttonChange.addEventListener("click", newBgColor);

function newBgColor() {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
};