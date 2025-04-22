document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("marcas-contenedor");
    const btnIzquierda = document.getElementById("flecha-izquierda");
    const btnDerecha = document.getElementById("flecha-derecha");

    let marcas = [];
    let indice = 0;
    const cantidadVisible = 3;

    fetch("/js/json/marcas.json")
        .then(res => res.json())
        .then(data => {
            marcas = Object.entries(data);
            mostrarMarcas();
        })
        .catch(err => console.error("Error al cargar JSON:", err));

    function mostrarMarcas() {
        contenedor.innerHTML = "";

        const visibles = marcas.slice(indice, indice + cantidadVisible);

        visibles.forEach(([clave, marca]) => {
            const div = document.createElement("div");
            div.classList.add("marca");
            div.setAttribute("data-marca", clave);
            div.innerHTML = `
                <div class="imagen">
                    <img src="${marca.image}" alt="${marca.titulo}" style="width: 100%;">
                </div>
                <div class="marca-info">
                    <h3>${marca.titulo}</h3>
                    <p>${marca.descripcion}</p>
                </div>
                <div class="botones-container">
                    <a href="#" class="ver-boton ver-mas">Ver más</a>
                    <a href="#" class="ver-boton ver-menos" style="display: none;">Ver menos</a>
                </div>
            `;
            contenedor.appendChild(div);
        });

        // Evento "Ver más"
        const verMasBotones = contenedor.querySelectorAll(".ver-mas");
        verMasBotones.forEach(boton => {
            boton.addEventListener("click", (e) => {
                e.preventDefault();
                const marcaDiv = e.target.closest(".marca");

                // Contraer todas primero
                contenedor.querySelectorAll(".marca").forEach(div => {
                    div.classList.remove("expandida");
                    div.querySelector(".ver-mas").style.display = "inline-block";
                    div.querySelector(".ver-menos").style.display = "none";
                });

                // Expandir la seleccionada
                marcaDiv.classList.add("expandida");
                marcaDiv.querySelector(".ver-mas").style.display = "none";
                marcaDiv.querySelector(".ver-menos").style.display = "inline-block";
            });
        });

        // Evento "Ver menos"
        const verMenosBotones = contenedor.querySelectorAll(".ver-menos");
        verMenosBotones.forEach(boton => {
            boton.addEventListener("click", (e) => {
                e.preventDefault();
                const marcaDiv = e.target.closest(".marca");
                marcaDiv.classList.remove("expandida");
                marcaDiv.querySelector(".ver-mas").style.display = "inline-block";
                marcaDiv.querySelector(".ver-menos").style.display = "none";
            });
        });
    }

    btnDerecha.addEventListener("click", () => {
        if (indice + cantidadVisible < marcas.length) {
            indice++;
            mostrarMarcas();
        }
    });

    btnIzquierda.addEventListener("click", () => {
        if (indice > 0) {
            indice--;
            mostrarMarcas();
        }
    });
});
