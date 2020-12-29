const butt = document.querySelectorAll('.button');
const textview = document.querySelector('.textview');
const btnEqual = document.querySelector('.btn-equal');
const btnClr = document.querySelector('.btn-clr');
const btnDel = document.querySelector('.btn-del');



for (let i = 0; i < butt.length; i++) {
    butt[i].addEventListener('click', function(){
        let num = butt[i].getAttribute('data-num');
        textview.value += num;
    }) 
}

btnEqual.addEventListener('click', function(){
    if (textview.value === "") {
       
    } else {
        let value = eval(textview.value);
        textview.value = value; 
    }    
})

btnClr.addEventListener('click', function(){
    textview.value = "";
})

btnDel.addEventListener('click', function(){
    let del = textview.value;
    textview.value = del.substring(0, del.length-1);
})