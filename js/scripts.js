/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 37,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});