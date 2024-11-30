document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');
    const menuItems = document.querySelectorAll('.nav-bar a');

    hamburger.addEventListener('click', function() {
        navBar.classList.toggle('active');
        hamburger.classList.toggle('clicked');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navBar.classList.remove('active');
            hamburger.classList.remove('clicked');
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

