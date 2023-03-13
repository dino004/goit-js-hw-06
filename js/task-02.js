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
const products = ingredients.map(ingredient => {
  const product = document.createElement("li");

  product.textContent = ingredient;
  product.classList.add("item");

  return product;
});

// добавляємо створену різмітку до DOM
ingredientsEl.append(...products);
