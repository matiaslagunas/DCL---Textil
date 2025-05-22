document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
  
    links.forEach(link => {
      link.addEventListener('click', e => {
        const wrapper = link.closest('.link-wrapper');
        const href = link.getAttribute('href');
  
        // Evitar animaciones si ya estamos en esa página
        if (link.classList.contains('active')) return;
  
        e.preventDefault(); // Evita navegación inmediata
  
        if (wrapper) {
          // Remover animaciones anteriores
          wrapper.classList.remove('bajar');
          wrapper.classList.add('subir');
  
          // Esperar a que termine la animación y luego redirigir
          setTimeout(() => {
            window.location.href = href;
          }, 400); // Debe coincidir con duración en CSS
        } else {
          // Si no está dentro de link-wrapper, redirigir sin animar
          window.location.href = href;
        }
      });
  
      // Agregar animación de entrada solo al link activo
      const wrapper = link.closest('.link-wrapper');
      if (link.classList.contains('active') && wrapper) {
        wrapper.classList.add('bajar');
      }
    });
  });
  