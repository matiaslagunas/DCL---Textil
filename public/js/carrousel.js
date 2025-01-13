let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-image').length;

function moveSlide() {
  const imagesContainer = document.querySelector('.carousel-images');
  
  // Desplazamiento hacia la derecha
  currentIndex = (currentIndex + 1) % totalImages;
  imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Cuando llegue a la última imagen, reiniciamos sin un salto brusco
  if (currentIndex === totalImages - 1) {
    setTimeout(() => {
      imagesContainer.style.transition = 'none';  // Desactivar transición para reiniciar el movimiento
      imagesContainer.style.transform = 'translateX(0)';
      currentIndex = 0;
      
      // Restaurar la transición después de reiniciar
      setTimeout(() => {
        imagesContainer.style.transition = 'transform 1s ease-in-out';
      }, 50);
    }, 1000); // Espera el tiempo de la transición
  }
}



