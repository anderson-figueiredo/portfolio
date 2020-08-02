let header=document.querySelector('header')

header.addEventListener('click', acoesMenu)

let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu__icon')

function acoesMenu(event){
    if(event.target.matches('.js-icon__menu') && !isAtive(menu)){
        event.target.setAttribute('src', 'images/right-black.svg')
        menu.classList.toggle('menu--active')
        return
    }

    if(event.target.matches('.js-icon__menu') && isAtive(menu)){
        menuButton.setAttribute('src', 'images/left-black.svg')
        menu.classList.toggle('menu--active')
        return
    }
}

isAtive = (element) => {
    if (element.classList.contains("menu--active")) {
        return true
    } else {
        return false
    }
}

window.addEventListener('scroll',function(e){
    if(window.scrollY>200&&menu.classList.contains('menu--active')){
        menu.classList.remove('menu--active')
        menuCover.classList.remove('menu-cover--show')
    }
})