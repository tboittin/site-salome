const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navbar.classList.toggle('nav-open');
});
