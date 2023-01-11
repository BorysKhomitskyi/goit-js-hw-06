const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const spanValue = document.getElementById("value");
let counterValue = 0;

const handleClickDec = () => {
    counterValue += -1;
    spanValue.textContent = counterValue;  
};

const handleClickInc = () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
};

buttonDecrement.addEventListener("click", handleClickDec);
buttonIncrement.addEventListener("click", handleClickInc);