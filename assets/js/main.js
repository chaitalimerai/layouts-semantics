// product slider
var swiper = new Swiper('.product-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    rightSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// News slider
var swiper = new Swiper('.news-swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        640: {
            spaceBetween: 30,
            slidesPerView: 1
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 3
        },
        991: {
            spaceBetween: 30,
            slidesPerView: 5
        },
        1200: {
            spaceBetween: 30,
            slidesPerView: 5

        },
        1500: {
            spaceBetween: 50,
            slidesPerView: 6
        }
    }
});

/*----------------------
People Slider Js
------------------------*/
var peopleSwiper = new Swiper('.people-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    loop:false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 7,
        // depth: 150,
        // modifier: 6,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    }
});

peopleSwiper.slideTo(1, 0.5);