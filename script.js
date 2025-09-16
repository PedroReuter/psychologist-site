// Função para abrir/fechar o menu mobile
function toggleMenu() {
  const menu = document.getElementById("menuMobile");
  menu.classList.toggle("show");
}

// Fecha o menu ao clicar em um link (melhor UX em mobile)
document.querySelectorAll("#menuMobile a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menuMobile").style.display = "none";
  });
});
