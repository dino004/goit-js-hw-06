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

// перебираємо масив з назвами інгридієнтів і для кожного додажємо клас та контент
ingredients.forEach((ingredient) => {
  const ingredientEl = document.createElement("li");

  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");

  // добавляємо створену різмітку до DOM
  ingredientsEl.appendChild(ingredientEl);
});
