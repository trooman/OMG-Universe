// Modal-form
let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let closeButton = document.querySelector('#closeButton');

button.addEventListener('click', function () {
  modal.classList.add('modal-active');
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
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




// Закрытие бургера при нажатии на элементы navbar
let aboutUs = document.querySelector('#aboutUs');
aboutUs.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}

let servicesInNavbar = document.querySelector('#servicesInNavbar');
servicesInNavbar.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}

let contactsInNavbar = document.querySelector('#contactsInNavbar');
contactsInNavbar.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}

let findUs = document.querySelector('#findUs');
findUs.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}


// show-hide picture

// let imgLink = document.querySelector('.services-img-link');
// let imgs = document.querySelector('.services-img');

// function showHide() {
//   if (imgs.style.display = 'none') {
//     imgs.style.display = 'block';
//   } else {
//     imgs.style.display = 'none';
//   }
// }
// imgLink.onclick = showHide();