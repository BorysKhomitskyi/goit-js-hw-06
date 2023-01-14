function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.getElementById("boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputElement = document.querySelector("#controls input");

btnCreate.addEventListener("click", getAmount);
btnDestroy.addEventListener("click", destroyBoxes);

console.dir(inputElement);

function getAmount() {
  const amount = inputElement.value;
  createBoxes(amount);
};

function createBoxes(amount) {
  let basicSize = 30;
  let el = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px;
    background-color: ${getRandomHexColor()};`;
    el.appendChild(div);
  }
  divBoxes.appendChild(el);
};

function destroyBoxes() {
  divBoxes.textContent = ""; 
  inputElement.value = "";
};