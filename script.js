// 'use strict'
// // function for toggle

// const elemToggleFunc = function (elem) {
//   elem.classList.toggle("active");
// }
  

// // variable for the navbar
// const navbar = document.querySelector("[data-navbar]");
// const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

// navbarOpenBtn.addEventListener("click", function () {
//   elemToggleFunc(navbar);
// });
// navbarCloseBtn.addEventListener("click", function () {
//   elemToggleFunc(navbar);
// });

'use strict';

// element toggle function
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
}



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});
