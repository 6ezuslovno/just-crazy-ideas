// Swiper

let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
})

// Tabs

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) {btn.classList.remove('tabs-nav__btn--active')});
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function(element) { element.classList.remove('tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

// Accordion

new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'
});

// Burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-nav-link')

burger.addEventListener('click', 

function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header-nav--active');
        document.body.classList.remove('stop-scroll');
    });
});

// Search

document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form--active')
})

document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form--active')
})

document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
})
