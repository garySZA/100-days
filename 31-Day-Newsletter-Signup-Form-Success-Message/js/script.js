const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const messageError = document.getElementById('message__error');

const container  = document.getElementsByClassName('container')[0];
const cardSuccess  = document.getElementsByClassName('card__success')[0];

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if( validateEmail() ){
            form.reset();
            // hiddeSuccessMessage();
            container.style.display = 'none';
            cardSuccess.classList.add('visible');
        }
    })
});


const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if( !emailRegex.test( emailInput.value ) ){
        messageError.classList.add('show');
        emailInput.classList.add('input__error');
        return false;
        
    } else {
        messageError.classList.remove('show');
        emailInput.classList.remove('input__error');
        return true;

    }
}