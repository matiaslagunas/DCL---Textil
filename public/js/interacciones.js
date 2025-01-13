document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid-propuestaIcons");
    const marcasSection = document.querySelector(".marcas-home_contenedor");
    const allSections = document.querySelectorAll("section.animated");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    grid.classList.add("active");
                }
            });
        },
        { threshold: 0.3 }
    );
    observer.observe(grid);

    const marcasObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    marcasSection.classList.add("active");
                } else {
                    marcasSection.classList.remove("active");
                }
            });
        },
        { threshold: 0.3 }
    );
    marcasObserver.observe(marcasSection);

    allSections.forEach((section) => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            { threshold: 0.3 }
        );
        sectionObserver.observe(section);
    });
});
