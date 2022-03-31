let botonMenuMobile = document.querySelector('.logo-container-button-menu-mobile')
let menuMobileContent = document.querySelector('.menu-mobile')
let botonMenuClose = document.querySelector('.menu-mobile-close')

botonMenuMobile.addEventListener('click', () => {
    menuMobileContent.classList.toggle('menu-mobile--show')
})

botonMenuClose.addEventListener('click', () => {
    menuMobileContent.classList.toggle('menu-mobile--show')
})

