// 프로젝트 섹션 슬라이드
let projectSwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.project .swiper-pagination',
        type : 'fraction',
    },
    navigation: {
        nextEl: '.project .button-next',
        prevEl: '.project .button-prev',
    },
});