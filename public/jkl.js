const input=document.querySelector('input.field__input');
const counter=document.querySelector('span.field__counter');

const maxLength=input.getAttribute('maxlength');

counter.innerHTML=maxLength;

input.addEventListener('input',event=>{
    const valueLength=event.target.value.length;

    const leftCharLength=maxLength-valueLength;

    if(leftCharLength<0) return;

    counter.innerHTML=leftCharLength;
});

