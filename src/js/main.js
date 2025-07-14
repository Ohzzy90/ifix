import mobileNav from './mobile-nav.js';

document.addEventListener('DOMContentLoaded', () => {
  mobileNav();
});

document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    window.open(icon.dataset.url, '_blank', 'noopener');
  });
});
