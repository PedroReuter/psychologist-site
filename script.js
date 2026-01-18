const body = document.body;
const toggle = document.getElementById('navToggle');
const overlay = document.getElementById('navOverlay');

function openNav(){ body.classList.add('nav-open'); }
function closeNav(){ body.classList.remove('nav-open'); }
function toggleNav(){ body.classList.toggle('nav-open'); }

toggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleNav();
});

overlay?.addEventListener('click', closeNav);

// fecha ao clicar em qualquer link do drawer
document.querySelectorAll('.nav-float__drawer .nav-link').forEach(a => {
  a.addEventListener('click', closeNav);
});

function toggleMenu() {
  const menuMobile = document.getElementById("menuMobile");
  menuMobile.classList.toggle("show");
}

document.querySelectorAll(".menu-mobile a").forEach(link => {
  link.addEventListener("click", () => {
    const menuMobile = document.getElementById("menuMobile");
    menuMobile.classList.remove("show");
  });
});
