const mobileMenu = document.querySelector('.burger-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const aboutBtnClose = document.querySelector('.about-btn-close');
const advantageBtnClose = document.querySelector('.advantage-btn-close');
const servicesBtnClose = document.querySelector('.services-btn-close');
const contactBtnClose = document.querySelector('.contact-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

aboutBtnClose.addEventListener("click", toggleMenu);
advantageBtnClose.addEventListener('click', toggleMenu);
servicesBtnClose.addEventListener('click', toggleMenu);
contactBtnClose.addEventListener("click", toggleMenu);