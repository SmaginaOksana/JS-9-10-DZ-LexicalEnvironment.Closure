// Задание 4
// Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
// Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
// Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.
// Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.
// ПОДСКАЗКИ. Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер". Скрыть выпадающий блок с помощью CSS. При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.

const btnClose = document.querySelector(".btnClose");
const btnMenu = document.querySelector(".btnMenu");
const menu = document.querySelector(".menu");
const form = document.querySelector(".form");
const input = document.querySelector("input");

btnMenu.addEventListener("click", () => {
  menu.classList.remove("none");
  btnMenu.classList.add("none");
  btnClose.classList.remove("none");
});
btnClose.addEventListener("click", () => {
  menu.classList.add("none");
  btnMenu.classList.remove("none");
  btnClose.classList.add("none");
});
form.addEventListener("click", () => {
  form.style.background = "white";
  input.style.background = "white";
});
