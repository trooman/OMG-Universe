let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let closeButton = document.querySelector('#closeButton');

button.addEventListener('click', function () {
  modal.classList.add('modal-active');
});

closeButton.addEventListener('click', function () {
  modal.classList.remove('modal-active');
});


// Hide/Show services information
// let servicesTitle = document.querySelector('.services-title');

// servicesTitle.onclick = function () {
//   for (let i = 0; i < servicesTitle.length; i++) {
//     alert('df')
//   }
// }