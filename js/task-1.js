`use strict`

const categories = document.querySelector("#categories");
const categoryItem = document.querySelectorAll(".categories-item");
console.log("Number of categories:", categoryItem.length);

categoryItem.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent;
    const amountOfItem = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${amountOfItem}`);
})

