const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('#ingredients');

const createList = ingredients.forEach((ingredient)=> {
  let ingredientList = document.createElement('li');
  ingredientList.textContent = ingredient;
  ingredientList.classList.add('item');
  mainList.append(ingredientList)
})