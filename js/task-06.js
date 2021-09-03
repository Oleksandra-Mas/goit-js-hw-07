const refs = {
    inputRef: document.querySelector('input'),
};
const inputChangeHandler = function (event) {
//  event.target.classList
    if (event.target.dataset.length == event.target.value.length)
    {
        event.target.classList.toggle('valid', true);
        event.target.classList.toggle('invalid', false);//.toggle('valid');
    }
    else {
        event.target.classList.toggle('invalid', true);
    event.target.classList.toggle('valid', false);}

}
refs.inputRef.addEventListener('blur', inputChangeHandler);

// if (map1.mapF.classList.contains('hide'))
//     {      map1.mapF.classList.remove('hide');    }
//     if(!map1.mapF.classList.contains('show'))
//     {       map1.mapF.classList.add('show');     }