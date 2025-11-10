new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    watchOverflow: true,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,


    breakpoints: {
        320:  { slidesPerView: 'auto' },
        640:  { slidesPerView: 'auto' },
        720:  { slidesPerView: 'auto' },
        768:  { destroy() {
            }},
        1280: { slidesPerView: 'auto' },
    }


});