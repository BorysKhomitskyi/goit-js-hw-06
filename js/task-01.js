const navEl = document.querySelectorAll(".item");
console.log('Number of categories:', navEl.length);

navEl.forEach((element) => {
    let elementTitle = element.querySelector("h2").textContent;

    let titleElements = element.querySelectorAll("li");
    let titleElementsLength = titleElements.length;

    console.log('Category:', `${elementTitle}`);
    console.log('Elements:', `${titleElementsLength}`);
});