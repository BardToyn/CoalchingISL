var swiper = new Swiper(".rewiews__swiper", {
    slidesPerView: 4,
    spaceBetween: 22,
    navigation: {
        nextEl: ".rewiews__button-next",
        prevEl: ".rewiews__button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 22,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
    }
});