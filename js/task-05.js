const refs = {
    inputRef: document.querySelector('input#name-input'),
    outputRef: document.querySelector('span#name-output'),
};
const inputValueHandle = function () {
    refs.outputRef.textContent = refs.inputRef.value
        ? refs.inputRef.value
        : 'незнакомец';
};
refs.inputRef.addEventListener('input', inputValueHandle);
