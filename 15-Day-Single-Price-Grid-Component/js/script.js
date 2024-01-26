const button = document.getElementById("btn");

const handleOnClick = () => {
    const message = 'You will be redirected to the form to create an account'
    
    window.confirm(message);
}

button.addEventListener('click', handleOnClick);