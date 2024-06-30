import Swiper from 'swiper/bundle';
import tagline from './modules/tagline.js';
// import 'swiper/css/bundle';

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

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

tagline();
