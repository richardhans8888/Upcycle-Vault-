// const track = document.querySelector('.carousel-track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.next');
// const prevButton = document.querySelector('.prev');
// const indicators = document.querySelectorAll('.indicator');
// const slideWidth = slides[0].getBoundingClientRect().width;

// // Arrange slides side-by-side
// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// });

// // Update slide position
// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//   currentSlide.classList.remove('current-slide');
//   targetSlide.classList.add('current-slide');
// };

// // Update indicator
// const updateIndicators = (currentIndicator, targetIndicator) => {
//   currentIndicator.classList.remove('active');
//   targetIndicator.classList.add('active');
// };

// // Next Button
// nextButton.addEventListener('click', () => {
//   const currentSlide = track.querySelector('.current-slide') || slides[0];
//   const nextSlide = currentSlide.nextElementSibling || slides[0];
//   const currentIndicator = document.querySelector('.indicator.active');
//   const nextIndicator = currentIndicator.nextElementSibling || indicators[0];

//   moveToSlide(track, currentSlide, nextSlide);
//   updateIndicators(currentIndicator, nextIndicator);
// });

// // Previous Button
// prevButton.addEventListener('click', () => {
//   const currentSlide = track.querySelector('.current-slide') || slides[0];
//   const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
//   const currentIndicator = document.querySelector('.indicator.active');
//   const prevIndicator =
//     currentIndicator.previousElementSibling || indicators[indicators.length - 1];

//   moveToSlide(track, currentSlide, prevSlide);
//   updateIndicators(currentIndicator, prevIndicator);
// });

// // Indicator Clicks
// indicators.forEach((indicator, index) => {
//   indicator.addEventListener('click', () => {
//     const currentSlide = track.querySelector('.current-slide') || slides[0];
//     const targetSlide = slides[index];
//     const currentIndicator = document.querySelector('.indicator.active');

//     moveToSlide(track, currentSlide, targetSlide);
//     updateIndicators(currentIndicator, indicator);
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu_icon');
  const slideMenu = document.getElementById('slideMenu');
  const closeMenu = document.getElementById('closeMenu');
  const menuToggle = document.querySelector('.nav-hid');

  function toggleMenu() {
      slideMenu.classList.toggle('active');
  }

  // Event Listeners
  menuIcon.addEventListener('click', toggleMenu);
  menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      toggleMenu();
  });
  closeMenu.addEventListener('click', toggleMenu);

  // Close menu on outside click
  document.addEventListener('click', function (e) {
      if (!slideMenu.contains(e.target) && e.target !== menuIcon && e.target !== menuToggle) {
          slideMenu.classList.remove('active');
      }
  });
});