// navbar-sticky
const navbarSticky = document.getElementById('navbar-sticky');
// burger nav menu open status
let isBurgerNavMenuOpen = false;
// handle burger menu click
function burgerMenuClickHandler(e) {
  const removeOrAddClass = isBurgerNavMenuOpen ? 'add' : 'remove';
  const openOrClose = isBurgerNavMenuOpen ? false : true;
  navbarSticky.classList[removeOrAddClass]('hidden');
  isBurgerNavMenuOpen = openOrClose;
}

// prev slide btn
const prevSlideBtn = document.getElementById('prev-slide-btn');
// next slide btn
const nextSlideBtn = document.getElementById('next-slide-btn');
// slides container
const slidesContainer = document.getElementById('slides-container');
// slides
const slides = slidesContainer.querySelectorAll('[data-carousel-item]');
// current slide
let currentSlide = 0;

setInterval(() => {
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
    return;
  }
  slides.forEach((slide) => slide.classList.add('hidden'));
  slides[currentSlide].classList.remove('hidden');
  currentSlide++;
}, 2000);
