const textInput = document.getElementById("validation-input");
const inputAttribute = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {     
  if (textInput.value.length === Number(inputAttribute)) {
      textInput.classList.add("valid");
      textInput.classList.remove("invalid");
 }  else {
      textInput.classList.add("invalid");
      textInput.classList.remove("valid");
 }
});