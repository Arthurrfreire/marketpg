// ... (função navigateTo e carregamento inicial) ...

// Carrossel
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

// Inicia o carrossel
showImage(currentImageIndex);
setInterval(nextImage, 5000); // Troca a imagem a cada 5 segundos
