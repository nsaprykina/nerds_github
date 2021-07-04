let modalWindows = document.querySelector('.modal-windows');
let mapButton = document.querySelector('.map__button');
let close = document.querySelector('.modal-windows__close');

mapButton.onclick = function() {
    modalWindows.classList.add('modal-windows--open');
}

close.onclick = function() {
    modalWindows.classList.remove('modal-windows--open');
}