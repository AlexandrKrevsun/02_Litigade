
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

