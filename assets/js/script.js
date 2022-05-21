var menuButton = document.querySelector('.menu-button');
var nav = document.querySelector('.creatives__header__nav');


menuButton.onclick = function () {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    }
    else {
        nav.classList.add('open');
    }   
}