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
