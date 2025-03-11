document.addEventListener("DOMContentLoaded", () => {
    const marcasContainer = document.querySelector(".marcas-logos");
    const marcas = document.querySelectorAll(".contenedor-img1, .contenedor-img2, .contenedor-img3");

    marcas.forEach(marca => {
        const boton = marca.querySelector(".parrafo-logos a");

        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Si ya está expandido, lo cerramos
            if (marca.classList.contains("expandido")) {
                marca.classList.remove("expandido");
                marcasContainer.classList.remove("expandido");
                marcas.forEach(m => m.style.display = "flex"); // Restaurar todas
            } else {
                // Ocultar las otras marcas
                marcas.forEach(m => {
                    if (m !== marca) {
                        m.style.display = "none";
                    }
                });

                // Expandir la marca seleccionada
                marca.classList.add("expandido");
                marcasContainer.classList.add("expandido");
            }
        });
    });
});
