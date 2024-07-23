import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.arrivals__dots .dots',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    520: {
      slidesPerView: 2,
    },
    740: {
      slidesPerView: 3,
    },
    1180: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

export default swiper;
