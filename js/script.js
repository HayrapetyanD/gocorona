const burgerOpen = document.querySelector('.icon-menu'),
      burgerClose = document.querySelector('.close-icon-menu'),
      burgerMenu = document.querySelector('.menu__body');

burgerOpen.addEventListener('click', () => {
    burgerMenu.style.left = "0%";
    burgerOpen.classList.toggle('hidden');
    burgerClose.classList.toggle('show');
})

burgerClose.addEventListener('click', () => {
    burgerMenu.style.left = "-100%";
    burgerOpen.classList.toggle('hidden');
    burgerClose.classList.toggle('show');
})
