// toggle navbar sticky
document.addEventListener('scroll', () => {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})

// toggle active class
const navbarMenu = document.querySelector('.navbar-menu');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarMenu.classList.toggle('active');
}

// diactivate active class without using ham-menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
})