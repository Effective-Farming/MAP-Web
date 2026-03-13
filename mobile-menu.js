// Simple toggler for mobile navigation menus
// looks for buttons with aria-label="Toggle menu" and toggles
// the adjacent .mobile-menu div.

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('button[aria-label="Toggle menu"]').forEach(function (btn) {
    // look for a menu container inside the same <nav>
    var nav = btn.closest('nav');
    if (!nav) return;
    var menu = nav.querySelector('.mobile-menu');
    if (!menu) return; // nothing to toggle

    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });

    // hide menu when any link inside it is clicked
    menu.querySelectorAll('a, button').forEach(function(el){
      el.addEventListener('click', function(){
        menu.classList.add('hidden');
      });
    });
  });
});
