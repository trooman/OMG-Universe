let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let closeButton = document.querySelector('#closeButton');

button.addEventListener('click', function () {
  modal.classList.add('modal-active');
});

closeButton.addEventListener('click', function () {
  modal.classList.remove('modal-active');
});

// бургер меню
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header-navbar__navigation');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-navbar__navigation__active');
});