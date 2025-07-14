document.addEventListener('DOMContentLoaded', function() {
    const burgerBtnOpen = document.querySelectorAll('#openBurger');
    const burgerBtnClose = document.querySelector('#closeBurger');
    const burgerMenu = document.querySelector('.header__burger-menu');
    
    burgerBtnOpen.forEach(btn => {
        btn.addEventListener('click', function() {
            burgerMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (burgerBtnClose) {
        burgerBtnClose.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    const headerFixed = document.querySelector('.header__fixed');
    let lastScroll = window.scrollY;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const currentScroll = window.scrollY;
                
                if (!headerFixed) return;
                
                if (currentScroll < lastScroll && currentScroll > 100) {
                    headerFixed.classList.add('header__fixed--visible');
                } else {
                    headerFixed.classList.remove('header__fixed--visible');
                }
                
                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });
    
    const burgerLinks = document.querySelectorAll('.header__burger-link');
    burgerLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});