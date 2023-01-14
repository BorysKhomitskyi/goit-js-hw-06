const inputRange = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

const setFontSize = () => {
    spanText.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener("input", setFontSize);