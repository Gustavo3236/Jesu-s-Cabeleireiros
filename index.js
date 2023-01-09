let menu = document.querySelector(".menu-lateral");
let botaoMenu = document.querySelector(".botao__menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral--ativo");
})