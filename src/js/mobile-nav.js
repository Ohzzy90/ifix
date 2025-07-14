export default function mobileNav() {
  const navMenu = document.getElementById('nav-menu');
  const toggleMenu = document.getElementById('nav-toggle');
  const closeMenu = document.getElementById('nav-close');
  const navLink = document.querySelectorAll('.nav__link');

  if (toggleMenu && navMenu) {
    toggleMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  if (closeMenu && navMenu) {
    closeMenu.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  }

  navLink.forEach(link => {
    link.addEventListener('click', () => {
      navLink.forEach(n => n.classList.remove('active'));
      link.classList.add('active');
      navMenu.classList.remove('show');
    });
  });
}
