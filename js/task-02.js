const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createLiItems = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;
    listItemEl.classList.add("item");
    return listItemEl;
  });
};

const itemLiEl = createLiItems(ingredients);

const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(...itemLiEl);
