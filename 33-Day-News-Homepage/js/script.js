let mainPosition = window.scrollY;
const nav = document.getElementsByTagName('nav')[0];

const displayMenuBar = () => {
    let currentPosition = window.scrollY;

    if( mainPosition >= currentPosition ) {
        nav.style.top = '0px'
    } else {
        nav.style.top = '-100px'
    }

    mainPosition = currentPosition;
};

window.addEventListener('scroll', displayMenuBar)

const links = document.querySelector('.links-header');
const menuButton = document.querySelector('.hamburguer');
const icon = document.getElementById('icon-menu');

let flag = true;

const displayMenu = () => {
    if( flag ){
        icon.classList.toggle('fa-bars')
        icon.classList.toggle('fa-xmark')
        flag = false
    } else {
        icon.classList.toggle('fa-bars')
        icon.classList.toggle('fa-xmark')
        flag = true;
    }

    links.classList.toggle('menu-effect');
}

menuButton.addEventListener('click', displayMenu);