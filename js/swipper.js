// import Swiper from "swiper/swiper-bundle.esm.js";
// import "swiper/swiper-bundle.css";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
