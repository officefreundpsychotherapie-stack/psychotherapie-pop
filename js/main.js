/* main.js — Navigation (mobiles Menü) */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Menü schließen beim Klick auf einen Link (mobil)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Jahr im Footer
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
