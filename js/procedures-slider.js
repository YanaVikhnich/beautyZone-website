
const swiper = new Swiper(".swiper", {
  loop: true,

  freeMode: {
    enabled: true,
    momentum: true,
    momentumBounceRatio: 1,
    sticky: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween:30,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: ".pagination",
    type: "bullets",
    // dynamicBullets: true,
    bulletClass: "pagination__bullet",
    bulletActiveClass: "pagination__bullet--active",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".carousel-button.next",
  //   prevEl: ".carousel-button.prev",
  // },
});
