document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("marcas-contenedor");
    const btnIzquierda = document.getElementById("flecha-izquierda");
    const btnDerecha = document.getElementById("flecha-derecha");

    let marcas = [];
    let indice = 0;
    const cantidadVisible = 3;

    // Cargar el archivo JSON con las marcas
    fetch("/js/json/marcas.json")
        .then(res => res.json())
        .then(data => {
            marcas = Object.entries(data); // Convertir el objeto a array de [clave, valor]
            mostrarMarcas();
        })
        .catch(err => console.error("Error al cargar JSON:", err));

    // Mostrar marcas en el contenedor
    function mostrarMarcas() {
        contenedor.innerHTML = ""; // Limpiar el contenedor

        const visibles = marcas.slice(indice, indice + cantidadVisible); // Obtener las marcas visibles

        visibles.forEach(([clave, marca]) => {
            const div = document.createElement("div");
            div.classList.add("marca");
            div.setAttribute("data-marca", clave);
            div.innerHTML = `
                <div class="imagen">
                    <img src="${marca.image}" alt="${marca.titulo}" style="width: 100%;">
                </div>
                <p class="parrafo-logos">
                    <a href="#" data-marca="${clave}">Ver más</a>
                </p>
                <div class="marca-info">
                    <h3>${marca.titulo}</h3>
                    <p>${marca.descripcion}</p>
                    <button class="ver-menos" style="display: none;">Ver menos</button>
                </div>
            `;
            contenedor.appendChild(div);
        });

        // Añadir el evento para expandir y contraer
        const verMasLinks = document.querySelectorAll(".parrafo-logos a");
        verMasLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault(); // Evitar que se recargue la página

                const marcaDiv = e.target.closest(".marca"); // Obtener el contenedor de la marca
                const verMasBtn = marcaDiv.querySelector(".parrafo-logos a");
                const verMenosBtn = marcaDiv.querySelector(".marca-info .ver-menos");

                marcaDiv.classList.toggle("expandida"); // Alternar la clase expandida

                // Mostrar/ocultar botones
                if (marcaDiv.classList.contains("expandida")) {
                    verMasBtn.style.display = "none";
                    verMenosBtn.style.display = "inline-block";
                } else {
                    verMasBtn.style.display = "inline-block";
                    verMenosBtn.style.display = "none";
                }
            });
        });

        // Añadir el evento para "Ver menos"
        const verMenosBtns = document.querySelectorAll(".ver-menos");
        verMenosBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const marcaDiv = e.target.closest(".marca"); // Obtener el contenedor de la marca
                const verMasBtn = marcaDiv.querySelector(".parrafo-logos a");
                const verMenosBtn = marcaDiv.querySelector(".marca-info .ver-menos");

                marcaDiv.classList.toggle("expandida"); // Alternar la clase expandida

                // Mostrar/ocultar botones
                if (marcaDiv.classList.contains("expandida")) {
                    verMasBtn.style.display = "none";
                    verMenosBtn.style.display = "inline-block";
                } else {
                    verMasBtn.style.display = "inline-block";
                    verMenosBtn.style.display = "none";
                }
            });
        });
    }

    // Mover al siguiente conjunto de marcas
    btnDerecha.addEventListener("click", () => {
        if (indice + cantidadVisible < marcas.length) {
            indice++;
            mostrarMarcas();
        }
    });

    // Mover al conjunto anterior de marcas
    btnIzquierda.addEventListener("click", () => {
        if (indice > 0) {
            indice--;
            mostrarMarcas();
        }
    });
});
