const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const refs = {
    ingredientsRefs : document.querySelector("ul#ingredients"),
};
const insertIngredientElements = function({ingredientsRefs}){
    const ingredientElements = ingredients.map(ingredient => {
        const ingredientElement = document.createElement("li");
        ingredientElement.textContent = ingredient;
        return ingredientElement;
    });
    ingredientsRefs.append(...ingredientElements);
}
insertIngredientElements(refs);