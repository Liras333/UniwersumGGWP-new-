let arrow = document.querySelector('.closeNav');

arrow.addEventListener('click', () => {
    let nav_open = document.querySelector('nav');

    nav_open.classList.toggle('nav-open');
    arrow.classList.toggle('rotate-arrow')

});

