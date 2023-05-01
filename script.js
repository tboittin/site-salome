// Sélection des éléments du DOM
const hamburger = document.getElementById("hamburger")
const navbar = document.getElementById("navbar")
const doctolib = document.getElementById("doctolib")
const navbarItems = document.querySelectorAll(".navbar-item")
const navbarLinks = navbar.querySelectorAll("a")
const sections = document.querySelectorAll(".section")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")
const triggerBtn = document.querySelector(".trigger-modal")

// Fonction pour mettre à jour la classe active de la navbar en fonction de la section visible
function setActiveNav() {
  let visibleSection

  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= 1) {
      visibleSection = section.getAttribute("id")
      if (section.className.includes("about") || section.className.includes("contact")) {
        doctolib.classList.remove("visible")
      } else {
        doctolib.classList.add("visible")
      }
    }
  })

  navbarLinks.forEach(link => {
    if (link.getAttribute("href").substring(1) === visibleSection) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

// Fonction pour gérer le comportement du menu hamburger
function toggleHamburgerMenu() {
  hamburger.classList.toggle("active")
  navbar.classList.toggle("nav-open")
}

// Fonction pour gérer le redimensionnement de l'écran
function handleResize() {
  const navElement = document.querySelector(".nav-open")
  const hamburgerElement = document.querySelector("#hamburger")

  if (window.innerWidth > 768) {
    if (navElement && navElement.classList.contains("nav-open")) {
      navElement.classList.remove("nav-open")
    }
    if (hamburgerElement && hamburgerElement.classList.contains("active")) {
      hamburgerElement.classList.remove("active")
    }
  }
}

// Ajout des écouteurs d'événements
window.addEventListener("scroll", setActiveNav)
window.addEventListener("resize", handleResize)
hamburger.addEventListener("click", toggleHamburgerMenu)

navbarItems.forEach(item => {
  item.addEventListener("click", toggleHamburgerMenu)
})

triggerBtn.addEventListener("click", () => {
  modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

window.addEventListener("click", event => {
  setActiveNav()
  if (event.target === modal) {
    modal.style.display = "none"
  }
})
