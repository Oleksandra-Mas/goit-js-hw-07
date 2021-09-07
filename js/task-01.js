const refs = {
    categoriesRefs: document.querySelectorAll('ul#categories>li.item'),
};
const countCategoriesNumber = function ({ categoriesRefs }) {
    return categoriesRefs.length;
};
const findCategoryName = function (reference) {
    return reference.querySelector('h2').textContent;
};
const countCategoryItemsNumber = function (reference) {
    return reference.querySelectorAll('li').length;
};
const task01 = function (references) {
    console.log(`В списке ${countCategoriesNumber(references)} категории`);
    references.categoriesRefs.forEach(reference => {
        console.log(`Категория (текст заголовка элемента (тега h2)): ${findCategoryName(reference)}`);
        console.log(
            `Количество элементов (в категории): ${countCategoryItemsNumber(reference)}`,
        );
    });
};
task01(refs);
