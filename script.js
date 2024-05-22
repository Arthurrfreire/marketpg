
const carouselImages = document.querySelectorAll('#carousel img');
let currentImageIndex = 0;

function showImage(index) {
  carouselImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  showImage(currentImageIndex);
}

showImage(currentImageIndex);
setInterval(nextImage, 5000); 
