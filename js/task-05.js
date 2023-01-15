let nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
    if (nameInput.value !==  "") {
        nameOutput.textContent = event.currentTarget.value;
    } else {
        nameOutput.textContent = "Anonymous";
    }   
})