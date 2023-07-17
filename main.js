// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  spaceBetween: 20,
  // slidesPerGroup: 1,
  freeMode: true,
  loopFillGroupWithBlank: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", onScroll);

// Scroll
onScroll();
function onScroll() {
  showNavOnScroll();
}

function showNavOnScroll() {
  if (scrollY == 0) {
    navigationBar.classList.remove("scroll");
  } else {
    navigationBar.classList.add("scroll");
  }
}

// // Menu
// function openMenu() {
//   document.body.classList.add("menu-expanded");
// }

// function closeMenu() {
//   document.body.classList.remove("menu-expanded");
// }

// // Scroll Reveal
// ScrollReveal({
//   origin: "top",
//   distance: "30px",
//   duration: 700,
// }).reveal(`
// #home h1,
// #home p,
// #home a,
// #home img,
// #cronus-em-numeros .head,
// #services .card,
// #about .head,
// #about .content,
// #contact .head,
// #contact .content`);
