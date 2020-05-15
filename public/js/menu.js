let body=document.querySelector('body')

body.addEventListener('click',acoesMenu)

let menu=document.querySelector('.menu');

function acoesMenu(event){
    if(event.target.matches('.js-icon__menu')){
        menu.classList.add('menu--active')
        return
    }

    if(event.target.matches('.menu-close')){
        menu.classList.remove('menu--active')
        return
    }
}

window.addEventListener('scroll',function(e){
    if(window.scrollY>200&&menu.classList.contains('menu--active')){
        menu.classList.remove('menu--active')
        menuCover.classList.remove('menu-cover--show')
    }
})