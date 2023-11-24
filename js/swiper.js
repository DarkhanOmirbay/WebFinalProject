const swiper = new Swiper('.hero__swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 75,
// пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
