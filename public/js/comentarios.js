document.addEventListener("DOMContentLoaded", function () {
    fetch('/js/json/comentarios.json') // Carga los comentarios desde un JSON
        .then(response => response.json())
        .then(comentarios => {
            let indice = 0;
            const contenedor = document.getElementById("testimonios-container");

            function mostrarTestimonios() {
                contenedor.innerHTML = ""; // Limpiar antes de actualizar

                for (let i = 0; i < 2; i++) { // Mostrar siempre 2 testimonios
                    let comentario = comentarios[(indice + i) % comentarios.length]; // Rotar testimonios

                    let div = document.createElement("div");
                    div.className = `contenedor${i + 1}`;
                    div.innerHTML = `
                        <div><img src="/images/comentario.svg" alt=""></div>
                        <div class="comentario">
                            <h5>${comentario.texto}</h5>
                        </div>
                        <p class="nombreComent"><b>${comentario.marca}</b></p>
                    `;
                    contenedor.appendChild(div);
                }

                indice = (indice + 1) % comentarios.length; // Avanzar al siguiente
            }

            mostrarTestimonios(); // Mostrar los primeros testimonios
            setInterval(mostrarTestimonios, 10000); // Rotar cada 10 segundos
        })
        .catch(error => console.error('Error cargando los comentarios:', error));
});

