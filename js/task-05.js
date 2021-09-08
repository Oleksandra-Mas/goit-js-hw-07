const refs = {
    inputRef: document.querySelector('input#name-input'),
    outputRef: document.querySelector('span#name-output'),
};
const inputValueHandle = function () {
    refs.outputRef.textContent = refs.inputRef.value.trim()
        ? refs.inputRef.value.trim()
        : 'незнакомец';
};
refs.inputRef.addEventListener('input', inputValueHandle);
