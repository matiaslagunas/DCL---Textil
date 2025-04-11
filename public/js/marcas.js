document.addEventListener("DOMContentLoaded", () => {
    const marcas = document.querySelectorAll(".marca");

    const infoMarcas = {
        "puma": {
            titulo: "PUMA",
            descripcion: "Puma es sinónimo de innovación y alto rendimiento. En DCL+ trabajamos juntos para desarrollar indumentaria que potencia el rendimiento de los atletas con diseños vanguardistas."
        },
        "head": {
            titulo: "HEAD",
            descripcion: "HEAD es una marca líder en el mundo del deporte, reconocida por su innovación y calidad. En DCL+, desarrollamos indumentaria técnica que combina diseño, confort y alto rendimiento."
        },
        "reef": {
            titulo: "REEF",
            descripcion: "Reef es la marca elegida por los amantes del surf y la aventura. En DCL+, compartimos su espíritu y diseñamos ropa cómoda y resistente para acompañar cada desafío."
        }
    };

    marcas.forEach(marca => {
        const link = marca.querySelector(".parrafo-logos a");

        if (!link) return; // Evita errores si no hay enlace

        link.addEventListener("click", (e) => {
            e.preventDefault();

            const marcaID = marca.dataset.marca;
            if (!infoMarcas[marcaID]) return; // Evita errores si la marca no está en infoMarcas

            // Si la marca ya está expandida, la cerramos
            if (marca.classList.contains("expandida")) {
                cerrarMarca(marca);
                return;
            }

            // Cerrar otras marcas antes de abrir una nueva
            document.querySelectorAll(".marca.expandida").forEach(cerrarMarca);

            // Expandir la marca seleccionada
            marca.classList.add("expandida");

            // Crear el contenido dinámico
            const info = document.createElement("div");
            info.classList.add("marca-info");
            info.innerHTML = `
                <h3>${infoMarcas[marcaID].titulo}</h3>
                <p>${infoMarcas[marcaID].descripcion}</p>
            `;
            marca.appendChild(info);
        });
    });

    function cerrarMarca(marca) {
        marca.classList.remove("expandida");
        const info = marca.querySelector(".marca-info");
        if (info) info.remove();
    }
});
