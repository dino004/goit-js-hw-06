const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// отримуємо доступ до нашого 'ul' в розмітці
const ingredientsEl = document.querySelector("#ingredients");
const product = [];

// перебираємо масив з назвами інгридієнтів і для кожного додажємо клас та контент

ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");

  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  product.push(ingredientEl);
});

// добавляємо створену різмітку до DOM
ingredientsEl.append(...product);



// ingredients.forEach((ingredient) => {
//   const ingredientEl = document.createElement("li");

//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add("item");
//   product.push(ingredientEl);
// });

//   // добавляємо створену різмітку до DOM
// ingredientsEl.append(...product);
