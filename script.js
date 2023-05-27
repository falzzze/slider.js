const SLIDER = document.querySelector('#slider');
const SLIDER_ITEMS = Array.from(SLIDER.children);
const BTN_NEXT = document.querySelector('#btnNext');
const BTN_PREV = document.querySelector('#btnPrev');


SLIDER_ITEMS.forEach((slide, index) => {
  index !== 0 ? slide.classList.add('hidden') : 0;

  slide.dataset.index = index;

  SLIDER_ITEMS[0].setAttribute('data-active', '');
  
  slide.addEventListener('click', () => {
    showNextSlide('next')
  });  
});

BTN_NEXT.onclick = function() {
  showNextSlide('next')
};

BTN_PREV.onclick = function() {
  showNextSlide('prev')
};

function showNextSlide(direction) {

  const currentSlide = SLIDER.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  let nextSlideIndex;
  if (direction === 'next') {
    nextSlideIndex = currentSlideIndex + 1 === SLIDER_ITEMS.length ? 0 : currentSlideIndex + 1;
  } else if (direction === 'prev') {
    nextSlideIndex = currentSlideIndex === 0 ? SLIDER_ITEMS.length - 1 : currentSlideIndex - 1;
  }

  const nextSlide = SLIDER.querySelector(`[data-index='${nextSlideIndex}']`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
};