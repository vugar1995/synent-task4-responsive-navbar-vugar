const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#primary-menu');
const navLinks = document.querySelectorAll('#primary-menu a');

function setMenu(open) {
  menuToggle.classList.toggle('is-open', open);
  navMenu.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenu(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) setMenu(false);
});
