document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos las secciones a observar
    const sections = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Cuando la sección es visible, se agrega la clase active
                    entry.target.classList.add('active');
                    entry.target.classList.remove('inactive');
                } else {
                    // Cuando la sección deja de ser visible, se agrega la clase inactive
                    entry.target.classList.remove('active');
                    entry.target.classList.add('inactive');
                }
            });
        },
        { threshold: 0.3 } // Se activa cuando al menos el 30% de la sección es visible
    );

    // Observar todas las secciones
    sections.forEach(section => {
        observer.observe(section);
    });
});
