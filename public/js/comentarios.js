document.addEventListener("DOMContentLoaded", function () {
    fetch('/js/json/comentarios.json')
        .then(response => response.json())
        .then(comentarios => {
            let indice = 0;
            let turno = 0; // Alternar entre 0 y 1
            const contenedor = document.getElementById("testimonios-container");

            const div1 = document.createElement("div");
            div1.className = "contenedor1";
            const div2 = document.createElement("div");
            div2.className = "contenedor2";

            // Set inicial de z-index
            div1.style.zIndex = 2;
            div2.style.zIndex = 1;

            contenedor.appendChild(div1);
            contenedor.appendChild(div2);

            function renderComentario(div, comentario) {
                div.innerHTML = `
                    <div><img src="/images/comentario.svg" alt=""></div>
                    <div class="comentario">
                    <p class="nombreComent"><b>${comentario.marca}</b></p>
                        <h5>${comentario.texto}</h5>
                    </div>
                `;
            }

            renderComentario(div1, comentarios[indice % comentarios.length]);
            renderComentario(div2, comentarios[(indice + 1) % comentarios.length]);

            setInterval(() => {
                if (turno === 0) {
                    indice = (indice + 2) % comentarios.length;
                    renderComentario(div1, comentarios[indice % comentarios.length]);
                    // Traer div1 al frente
                    div1.style.zIndex = 3;
                    div2.style.zIndex = 1;
                } else {
                    renderComentario(div2, comentarios[(indice + 1) % comentarios.length]);
                    // Traer div2 al frente
                    div2.style.zIndex = 3;
                    div1.style.zIndex = 1;
                }
                turno = 1 - turno;
            }, 10000);
        })
        .catch(error => console.error('Error cargando los comentarios:', error));
});
