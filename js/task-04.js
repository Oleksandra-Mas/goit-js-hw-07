const refs = {
    decrementRef: document.querySelector('[data-action="decrement"]'),
    incrementRef: document.querySelector('[data-action="increment"]'),
    valueRef: document.querySelector('#value'),
};
let counterValue = 0;
const changeValue = function () {
    refs.valueRef.textContent = counterValue;
};
const increment = function () {
    counterValue += 1;
    changeValue();
};
const decrement = function () {
    counterValue -= 1;
    changeValue();
};
refs.decrementRef.addEventListener('click', decrement);
refs.incrementRef.addEventListener('click', increment);
