// Swiper  slide Sidebar
var swiperSidebar = new Swiper('.slide-swp', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynnamicBullests:true,
    },
    autoplay: {
        delay: 2500,   
        disableOnInteraction: false, 
    },
    loop: true,     
});
// ======================================

    var swiper = new Swiper(".sale_sec", {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,   
        disableOnInteraction: false, 
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
      loop:true,
    });

// ===========================================
var swiper = new Swiper(".product_swip", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,   
    disableOnInteraction: false, 
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
  loop:true,
});