import './sass/main.scss';
import images from './js/images.js'

const refs = {
  section: document.querySelector('.slider-section'),
  divSlider: document.querySelector('.slider-div'),
  image: document.querySelector('.image'),
  divDots: document.querySelector('.div-dots'),
  dots: document.querySelectorAll('.dot'),
  prev: document.querySelector('.prev-image'),
  next: document.querySelector('.next-image'),
};

const { section, divSlider, image, divDots, dots, prev, next } = refs;

next.addEventListener('click', onNextClickHandler)
prev.addEventListener('click', onPrevClickHandler)

let index = 0;
const imgTag = document.querySelector('.js-image');

function onNextClickHandler() {

  if (index === (images.length - 1)) {
    index = 0;
    forIndexEqualZero();

  } else if (index === 0 || index < (images.length - 1)){
    onNextIndex();
    index += 1;
  }

  dotsClassActiveRemoverAndAdder();
 
}

function onPrevClickHandler() {

  if (index === 0) {
    index = images.length - 1;
    forIndexEqualZero();

  } else if (index === 0 || index <= images.length - 1) {
    onPreviousIndex();
    index -= 1;
  }

  dotsClassActiveRemoverAndAdder();
}

function forIndexEqualZero() {
  imgTag.setAttribute('src', images[index].src);
  imgTag.setAttribute('alt', images[index].alt);
}
function onNextIndex() {
  imgTag.setAttribute('src', images[index + 1].src);
  imgTag.setAttribute('alt', images[index + 1].alt);
}
function onPreviousIndex() {
  imgTag.setAttribute('src', images[index - 1].src);
  imgTag.setAttribute('alt', images[index - 1].alt);
}
function dotsClassActiveRemoverAndAdder() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}




