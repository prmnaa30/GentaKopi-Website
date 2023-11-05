window.onscroll = function() {navFunction()};

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function navFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}