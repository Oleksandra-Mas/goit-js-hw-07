const refs = {
    fontSizeRef:document.querySelector('input#font-size-control'),
    textRef:document.querySelector('span#text'),
};
const fontSizeInputHandler = function () {
    refs.textRef.style.fontSize = `${refs.fontSizeRef.valueAsNumber / 50}rem`;
}
refs.fontSizeRef.addEventListener('input', fontSizeInputHandler);