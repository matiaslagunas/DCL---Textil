document.addEventListener("DOMContentLoaded", () => {
  const imagesContainer = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  let currentIndex = 0;
  let isTransitioning = false; // Bandera para evitar conflictos de transición

  // Duplicar imágenes para el efecto de bucle
  imagesContainer.style.transition = 'transform 1s ease-in-out';

  function moveSlide() {
      if (isTransitioning) return; // Evitar múltiples llamadas simultáneas
      isTransitioning = true;

      // Mover al siguiente slide
      currentIndex += 1;
      imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Detectar si es el final del carrusel
      if (currentIndex === totalImages - 2) { // Antes del final
          setTimeout(() => {
              // Reiniciar al principio
              imagesContainer.style.transition = 'none';
              currentIndex = 0;
              imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

              // Restaurar la transición
              setTimeout(() => {
                  imagesContainer.style.transition = 'transform 1s ease-in-out';
                  isTransitioning = false; // Liberar bandera
              }, 50);
          }, 1000); // Esperar a que termine la transición
      } else {
          // Solo mover entre imágenes normalmente
          setTimeout(() => {
              isTransitioning = false; // Liberar bandera después de la transición
          }, 1000);
      }
  }

  // Configurar intervalo para mover el carrusel automáticamente
  setInterval(moveSlide, 5000); // Cambia cada 5 segundos
});
