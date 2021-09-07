const refs = {
    inputRef: document.querySelector('input'),
};
const inputChangeHandler = function (event) {
    if (Number(event.target.dataset.length) === event.target.value.length) {
        event.target.classList.toggle('valid', true);
        event.target.classList.toggle('invalid', false);
    } else {
        event.target.classList.toggle('invalid', true);
        event.target.classList.toggle('valid', false);
    }
};
refs.inputRef.addEventListener('blur', inputChangeHandler);
