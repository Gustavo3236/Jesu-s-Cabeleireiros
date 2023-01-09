let menu = document.querySelector(".menu-lateral");
let botaoMenu = document.querySelector(".botao__menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral--ativo");
});

$('.carrossel').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    autoplay: true
  });