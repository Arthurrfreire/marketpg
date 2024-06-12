function navigateTo(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newMainContent = doc.querySelector('main').innerHTML;
  
            document.getElementById('main-content').innerHTML = newMainContent;
            history.pushState({}, '', page); 
            if (page === 'localizacao.html') {
                initMap();
            }
        });
  }
  
  function initCarousel() {
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
  }
  
  function initMap() {
    const localizacao = { lat: -7.21968, lng: -35.88366 }; 
    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        center: localizacao,
        zoom: 15,
    });
    new google.maps.Marker({
        position: localizacao,
        map: mapa,
        title: "Provisão Supermercados",
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    navigateTo('index.html'); 
    initCarousel();
  
    if (window.location.pathname.endsWith('localizacao.html')) {
        initMap(); 
    }
  
    const trocarLojaButton = document.getElementById('trocar-loja');
    if (trocarLojaButton) {
        trocarLojaButton.addEventListener('click', () => {
            alert('Funcionalidade de troca de loja ainda não implementada.');
        });
    }
  });
  