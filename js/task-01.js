const categoriesEl = document.querySelector("#categories");

const categoriesItemsEl = categoriesEl.children;
console.log("Number of categories:", categoriesItemsEl.length);

console.log(categoriesItemsEl);

[...categoriesItemsEl].forEach((category) => {
  const categoryHeading = category.querySelector("h2");
  console.log("Category: ", categoryHeading.textContent);

  const numberOfIndividualElements = category.querySelectorAll("li").length;
  console.log("Elements: ", numberOfIndividualElements);
});
