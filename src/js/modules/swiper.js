import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.arrivals__dots .dots',
    clickable: true,
  },
});

export default swiper;
