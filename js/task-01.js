const allCategories = document.querySelector("#categories");

const navEl = document.querySelectorAll(".item");
console.log('Number of categories:', navEl.length);

const firstEl = allCategories.firstElementChild;

const firstElTitle = firstEl.firstElementChild;
console.log('Category:', firstElTitle.textContent);

const firstElLi = firstEl.lastElementChild.children;
console.log('Elements:', firstElLi.length);


const secondEl = allCategories.firstElementChild.nextElementSibling;

const secondElTitle = secondEl.firstElementChild;
console.log('Category:', secondElTitle.textContent);

const secondElLi = secondEl.lastElementChild.children;
console.log('Elements:', secondElLi.length);


const lastEl = allCategories.lastElementChild;

const lastElTitle = lastEl.firstElementChild;
console.log('Category:', lastElTitle.textContent);

const lastElLi = lastEl.lastElementChild.children;
console.log('Elements:', lastElLi.length);


