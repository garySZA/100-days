const error_icons = document.getElementsByClassName("error__icon");
const error_message = document.getElementsByClassName("error__message");
const inputs = document.getElementsByTagName("input");
const containers = document.getElementsByClassName("container__input");

const success = document.getElementById('success');

const showHiddeErrors = ( index, bool ) => {
    const showError = bool ? 1 : 0;
    
    error_message[index].style.opacity = showError;
    error_icons[index].style.opacity = showError;
    
    bool ? inputs[index].classList.add("input__error") : inputs[index].classList.remove("input__error");

    bool ? containers[index].classList.add("container__input__error") : containers[index].classList.remove("container__input__error");
}

const hiddeMessageSuccess = () => {
    setTimeout(() => {
        success.innerHTML = "";
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = this.getElementById("form");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if( validateEmptyFields() && validateEmail() ){
            success.classList.toggle('success');
            success.innerHTML = "Created."

            form.reset();
            hiddeMessageSuccess();
        }

    });

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;

        if( !emailRegex.test(inputs[2].value ) ){
            showHiddeErrors( 2, true );

            isValid = !isValid;
        } else {
            showHiddeErrors( 2, !true );
        }

        return isValid;
    }

    const validateEmptyFields = () => {
        let isValid = true;

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];

            if (input.value.length === 0) {
                showHiddeErrors( i, true );
                isValid = false;
            } else {
                showHiddeErrors( i, !true );
            }
        }

        return isValid;
    }
});