let arrow = document.querySelector('.closeArrow');
//let bg_nav = document.querySelector('.bg-nav');


if (window.innerWidth <= 650) {
    const header = document.querySelector('header');
    //const nav_mobile = document.querySelector('.nav-mobile');
    
    let prevScrollpos = window.scrollY;
    window.addEventListener('scroll', () => {
        let currScrollpos = window.scrollY;

        
        if (prevScrollpos < currScrollpos) {
            header.classList.remove('header-show');
            header.classList.add('header-hide');

           // nav_mobile.classList.remove('nav-show');
            //nav_mobile.classList.add('nav-hide');

        }
        else {
            header.classList.remove('header-hide');
            header.classList.add('header-show');

            //nav_mobile.classList.remove('nav-hide');
            //nav_mobile.classList.add('nav-show');
        }

        prevScrollpos = currScrollpos;
    })
}
else {
    arrow.addEventListener('click', () => {
        let nav_open = document.querySelector('.nav-pc');

        nav_open.classList.toggle('nav-open');
        arrow.classList.toggle('rotate-arrow');
        //bg_nav.classList.toggle('bg-nav-color');

    });
}
