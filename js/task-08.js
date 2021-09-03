const refs = {
    boxesRef: document.querySelector('div#boxes'),
    createRef: document.querySelector('[data-action="render"'),
    destroyRef: document.querySelector('[data-action="destroy"'),
    inputRef: document.querySelector('input'),
};
const getRandomRGB = function () {
    return Math.floor(Math.random() * 255);
};
const getRandomColor = function () {
    return `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
};
const createBox = function (index) {
    const boxElement = document.createElement('div');
    boxElement.style.width = `${30 + 10 * index}px`;
    boxElement.style.height = `${30 + 10 * index}px`;
    boxElement.style.backgroundColor = getRandomColor();
    return boxElement;
};
const createBoxes = function (amount) {
    const boxElements = [];
    for (let i = 0; i < amount; i += 1) boxElements.push(createBox(i));
    refs.boxesRef.append(...boxElements);
};

const createButtonClickHandler = function () {
    if (refs.inputRef.value) createBoxes(refs.inputRef.value);
};
const destroyBoxes = function () {
    refs.boxesRef.innerHTML = '';
};

const destroyButtonClickHandler = function () {
    destroyBoxes();
};
refs.createRef.addEventListener('click', createButtonClickHandler);
refs.destroyRef.addEventListener('click', destroyButtonClickHandler);
