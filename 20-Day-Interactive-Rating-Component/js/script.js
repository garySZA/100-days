const button = document.getElementById("submit");
const lastCard = document.getElementById("card__two");
const result = document.getElementById("result");
const options = document.getElementsByClassName('option');
const firstCard = document.getElementsByClassName('card');
const error__message = document.getElementsByClassName('error__message');

let optionSelected = null;

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        
        if( i !== optionSelected -1 ){
            optionSelected = i + 1;
            options[i].classList.toggle("selected");
            error__message[0].innerHTML=''
            localStorage.setItem('selected', optionSelected)
            removeSelected(i);            
        }
    })
    
}

const removeSelected = ( selected=0 ) => {
    for (let i = 0; i < options.length; i++) {
        if( selected !== i ){
            options[i].classList.remove("selected");
        }
        
    }
}

const handleOnSubmit = () => {
    const selected = localStorage.getItem('selected');
    
    if( !optionSelected ){
        error__message[0].innerHTML='Debes seleccionar una opción';
    } else {
        firstCard[0].style.display = 'none';

        result.innerHTML=`You selected ${ selected } out of 5`;

        lastCard.classList.add('card__two__active');
        lastCard.classList.remove('card-two');
    }
};

button.addEventListener('click', handleOnSubmit)