const forms = document.getElementsByTagName('form');
const inputsEmail = document.getElementsByTagName('input');
const messages = document.getElementsByClassName('message');

document.addEventListener('DOMContentLoaded', function() {
    Array.from(forms).forEach((form, index) => {
        form.addEventListener( 'submit', function(event) {
            event.preventDefault();
            
            if (validateEmail( index )){
                form.reset();
                hiddeMessageSuccess( index );
            }
        });
    });
})


const validateEmail = ( index ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if( !emailRegex.test( inputsEmail[index].value ) ){
        hideShowAlerts( index, !true, 'error', "Please provide a valid email address" );
        return false;
        
    } else {
        hideShowAlerts( index, true, 'error' );
        hideShowAlerts( index, !true, 'success', 'Email saved' );
        return true;
    }
}

//* Método para mostrar/ocultar msjs y efectos de error
/**
 ** index: posición de elemento html a aplicar efecto
 ** bool: boolean para ocultar/mostrar alerta
 ** typeAlert: error/success
 ** message: mensaje a mostrar.
 */
const hideShowAlerts = (index, bool, typeAlert, message = '') => {
    if( !bool ){
        inputsEmail[index].classList.add(`input__${ typeAlert }`);
        messages[index].classList.add(typeAlert);
        messages[index].innerHTML = message;
    } else {
        inputsEmail[index].classList.remove(`input__${ typeAlert }`);
        messages[index].classList.remove(typeAlert);
        messages[index].innerHTML = message;
    }

}

const hiddeMessageSuccess = ( index ) => {
    setTimeout(() => {
        hideShowAlerts( index, true, 'success' );
    }, 3000);
}
