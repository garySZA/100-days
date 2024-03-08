const form = document.getElementById( 'form__footer' );
const input = document.getElementById('email');
const messageContainer = document.getElementsByClassName('message')[0];
const links = document.getElementsByClassName("sign__up");

document.addEventListener('DOMContentLoaded', function() {
    form.addEventListener( 'submit', function( event ) {
        event.preventDefault();
        
        if( validateEmail() ){
            form.reset();
            hiddeMessageSuccess();
        }
    })

    for (const link of links) {
        link.addEventListener( 'click', function( event ) {
            event.preventDefault();

            form.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                input.focus();
            }, 500)
        } )
    }
});

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if( !emailRegex.test( input.value ) ){
        showAlerts( true, 'error', 'Please provide a valid email address' );
        return false;
        
    } else {
        showAlerts( false, 'error' );
        showAlerts( true, 'success', 'Email saved' );
        return true;

    }
}

const showAlerts = ( bool, typeAlert, message='' ) => {
    if( bool ){
        input.classList.add( `input__${ typeAlert }` );
        messageContainer.classList.add( `message__${ typeAlert }` );
        messageContainer.innerHTML = message;
    } else {
        input.classList.remove( `input__${ typeAlert }` );
        messageContainer.classList.remove( `message__${ typeAlert }` );
        messageContainer.innerHTML = message;
        console.log(messageContainer, 'asdas')
    }
}

const hiddeMessageSuccess = () => {
    setTimeout(() => {
        showAlerts( false, 'success', '' );
    }, 3000);
}