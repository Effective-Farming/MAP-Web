// Scroll effect on nav
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const icon = toggle.querySelector('svg');
      if (menu.classList.contains('open')) {
        icon.innerHTML = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>';
      } else {
        icon.innerHTML = '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>';
      }
    });
  }
});
