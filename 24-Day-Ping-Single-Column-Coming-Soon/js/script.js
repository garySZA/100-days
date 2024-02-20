
const email = document.getElementById("email");
const error__message = document.getElementsByClassName("error__message");
const success__message = document.getElementById("success");

document.addEventListener('DOMContentLoaded', function() {
    const form = this.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        validateEmail();
    });

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if( !emailRegex.test( email.value ) ){
            console.log('aqui')
            error__message[0].style.display = "block";
            error__message[0].style.opacity = "1";
            error__message[0].innerHTML = "Please provide a valid email address";
            email.classList.add('field__error');
            email.style.marginBottom = '0px';
        } else {
            email.classList.remove('field__error');
            email.style.marginBottom = '10px';
            error__message[0].style.opacity = "0";
            error__message[0].style.display = "none";
            success.style.opacity = 1;

            form.reset();
            hiddeMessageSuccess();

        }
    }

    const hiddeMessageSuccess = () => {
        setTimeout(() => {
            success.style.opacity = 0;
        }, 3000);
    }

})