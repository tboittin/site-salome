const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navbarItems = document.querySelectorAll('.navbar-item');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navbar.classList.toggle('nav-open');
});

// Boucle sur chaque élément
navbarItems.forEach((item) => {
  // Ajout d'un écouteur d'événement "click"
  item.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('nav-open');
  });
});

// Obtenez la modale et le bouton de fermeture
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');

// Ajouter un gestionnaire d'événements click au bouton déclencheur
var triggerBtn = document.querySelector('.trigger-modal');
triggerBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Ajouter un gestionnaire d'événements click au bouton de fermeture
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});