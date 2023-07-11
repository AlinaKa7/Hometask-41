const images = [
  "./images/beach.jpg",
  "./images/fieldSunset.jpg",
  "./images/horizont.jpg",
  "./images/sunset.jpg",
];

const image = document.querySelector('.slider-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImage = 0;

window.addEventListener('DOMContentLoaded', showImage);

function showImage() {
  image.src = images[currentImage];

  if (currentImage === images.length -1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }

  if (currentImage === 0) {
    prevBtn.classList.add('hide');
  } else {
    prevBtn.classList.remove('hide');
  }
}

nextBtn.addEventListener('click', function () {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
});

prevBtn.addEventListener('click', function () {
  currentImage--;
  if (currentImage < 0) {
      currentImage = images.length - 1;
  }
  showImage(currentImage);
});
