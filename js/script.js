const hamMenuButton = document.querySelector('.ham-menu-button');

const mobileMenu = document.querySelector('.mobile-menu');

hamMenuButton.addEventListener('click', () => {
    hamMenuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})