/* Fade title section on scroll */
// Get the title element
// Targets the network-background DIV to allow for fixed-position scroll
const title = document.querySelector('#logo');
const nav = document.querySelector('.menu-icon')

// Get the viewport height
const viewportHeight = window.innerHeight;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Calculate the opacity based on the scroll position
  const opacity = 1 - Math.min(window.scrollY / (viewportHeight * 0.8), 1);

  // Set the opacity of the title element
  title.style.opacity = opacity;

  // Check if the user has scrolled more than 80% of the viewport
  if (window.scrollY > viewportHeight * 0.8) {
    title.style.opacity = 0;
    nav.style.visibility = 'visible';
  } else {
    title.style.opacity = opacity;
    nav.style.visibility = 'hidden';
  }
});

/* Smooth scrolling for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/* Control nav bar */
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});

document.addEventListener('click', (event) => {
  const isClickInside = menu.contains(event.target) || menuIcon.contains(event.target);
  if (!isClickInside && menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
  }
});

document.querySelectorAll('.menu li a').forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('menu--open');
  });
});
