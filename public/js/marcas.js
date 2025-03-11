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

        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Verificar si ya está expandida
            if (marca.classList.contains("expandida")) {
                marca.classList.remove("expandida");
                marca.querySelector(".marca-info").remove();
                return;
            }

            // Cerrar cualquier otra marca expandida
            document.querySelectorAll(".marca.expandida").forEach(m => {
                m.classList.remove("expandida");
                if (m.querySelector(".marca-info")) m.querySelector(".marca-info").remove();
            });

            // Expandir la marca seleccionada
            marca.classList.add("expandida");

            // Crear la info de la marca
            const info = document.createElement("div");
            info.classList.add("marca-info");
            info.innerHTML = `
                <h3>${infoMarcas[marca.dataset.marca].titulo}</h3>
                <p>${infoMarcas[marca.dataset.marca].descripcion}</p>
            `;
            marca.appendChild(info);
        });
    });
});
