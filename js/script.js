const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menuClose = document.querySelector('.menu-close');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
});

menuClose.addEventListener('click', function() {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});