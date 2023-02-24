const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

const elementsCategoriesEl = document.querySelectorAll("#categories > li");

elementsCategoriesEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`);
});
