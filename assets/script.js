// toggle active class
const navbarMenu = document.querySelector('.navbar-menu');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarMenu.classList.toggle('active');
}