const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navbarItems = document.querySelectorAll('.navbar-item');
const navbarLinks = navbar.querySelectorAll('a');

// Fonction qui change la classe active de la navbar en fonction de la section visible
function setActiveNav() {
  // Récupération de la section visible en fonction de la position du scroll
  const sections = document.querySelectorAll('.section');
  let visibleSection;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 0) {
      visibleSection = section.getAttribute('id');
    }
  });
  // Parcours des liens de la navbar pour ajouter ou supprimer la classe active
  navbarLinks.forEach((link) => {
    if (link.getAttribute('href').substring(1) === visibleSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Ajout d'un écouteur d'événement pour mettre à jour la navbar lors d'un scroll
window.addEventListener('scroll', setActiveNav);

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