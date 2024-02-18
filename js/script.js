const hamburguer = document.querySelector("#hamburguer");
const nav = document.querySelector("#responsive");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));