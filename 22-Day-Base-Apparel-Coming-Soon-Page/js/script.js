const emailInput = document.getElementById('email');
const emailError = document.getElementById('error__message');
const emailErrorIcon = document.getElementById('error__icon');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        validateEmail();
    });

    const validateEmail = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if( !emailRegex.test(emailInput.value) ){
            emailError.classList.remove("message__success");
            emailError.innerHTML = "Please provide a valid email";
            emailErrorIcon.style.display="block";
            
        } else {
            emailError.classList.toggle("message__success");
            emailError.innerHTML = "Saved email";
            emailErrorIcon.style.display="none";
            
            form.reset();
            hiddeMessageSuccess();
        }
    }

    const hiddeMessageSuccess = () => {
        setTimeout(() => {
            emailError.innerHTML = "";
        }, 3000);
    }
});