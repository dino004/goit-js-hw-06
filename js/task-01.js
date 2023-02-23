// отримуємо посилання на категорії
const categoriesEl = document.querySelector("#categories");

// отримуємо посилання на псевдомасив дітей (список) категорій
const categoriesChildrenEl = categoriesEl.children;

// перетворюємо псевдомасив дітей (список) категорій в масив
let categoriesChildrenArrayEl = [];
categoriesChildrenArrayEl.push(...categoriesChildrenEl);

// використовуючи forEach перебираємо масив з списком категорій, щоб знайти їхню кількість
let NumberOfCategories = 0;
categoriesChildrenArrayEl.forEach(() => {
  NumberOfCategories += 1;
});
// консолимо кількість категорій
console.log("Number of categories:", NumberOfCategories);

// отримуємо посилання на псевдомасив елементів з назвою категорії (h2)
const categoriesNameEl = document.querySelectorAll("h2");

// отримуємо посилання на батьківський елемент (ul) елементів категорій
const parentElementsNameListEl = document.querySelector(".item ul");

// отримуємо посилання на псевдомасив елементів категорій
const elementCategoriesEl = parentElementsNameListEl.children;

// перетворюємо псевдомасив елементів категорій в масив
const elementCategoriesArrayEl = [];
elementCategoriesArrayEl.push(...elementCategoriesEl);

// використовуючи forEach перебираємо масив з назвами категорій та консолимо їх імена

let elementCategories = 0;

categoriesNameEl.forEach((element) => {
    elementCategoriesArrayEl.forEach(() => {
        elementCategories += 1;
  });
  console.log("Category: ", element.textContent);

  console.log("Elements:", elementCategories);
});
