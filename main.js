const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const hamburger = document.querySelector('.open');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('visible');
  hamburger.classList.toggle('visible');
});
