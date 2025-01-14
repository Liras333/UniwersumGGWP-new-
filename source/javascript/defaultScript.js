let arrow = document.querySelector('.closeNav');

arrow.addEventListener('click', () => {
    let nav_open = document.querySelector('nav');

    nav_open.classList.toggle('nav-open');
    arrow.classList.toggle('rotate-arrow')

});


if(window.innerWidth <= 1000) {
    const header = document.querySelector('header');

    let prevScrollpos = window.scrollY;
    
    window.addEventListener('scroll', () => {
        let currScrollpos = window.scrollY;
    
        if(prevScrollpos < currScrollpos) {
            header.classList.remove('header-show');
            header.classList.add('header-hide');
        }
        else {
            header.classList.remove('header-hide');
            header.classList.add('header-show');
        }

        prevScrollpos = currScrollpos;
    })
    
}
