(function () { 
    const header = document.querySelector('.header'); /*возвращает 1-й элемент с тем селектором имя которого мы передадим */
    window.onscroll = ()=>{
        if (window.pageYOffset > 50) { /*если прокрутка > 50 точек то запускаем класс 'header_active'*/
            header.classList.add('header_active');
        }else{
            header.classList.remove('header_active'); /*иначе удаляем класс*/
        }
    }
}());

// burger handler
(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav')
    burgerItem.addEventListener('click',()=> {
        menu.classList.add('header__nav_active');
    });

    const menuCloseItem = document.querySelector('.header__nav-close');
    menuCloseItem.addEventListener('click',()=>{
        menu.classList.remove('header__nav_active');
    });
//убираем меню при нажатии на ссылку
    const menuLinks = document.querySelectorAll('.header__link');
    if(window.innerWidth <= 767){
        for (let i = 0; i < menuLinks.length; i+=1){

        menuLinks[i].addEventListener('click',()=>{
        menu.classList.remove('header__nav_active')
            });
        }
    }
}());
