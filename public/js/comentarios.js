document.addEventListener("DOMContentLoaded", () => {
    // Obtener el contenedor del comentario izquierdo y los de la derecha
    const leftComment = document.getElementById("left-text");
    const rightComments = document.querySelectorAll(".comentarios-derecha .comentario");

    let currentIndex = 0; // Índice del comentario actual en la derecha

    // Función para intercambiar comentarios
    function rotateComments() {
        // Obtener el autor y texto actuales del lado izquierdo
        const leftAuthor = leftComment.querySelector("h2 b").innerText;
        const leftText = leftComment.querySelector("p").innerHTML;

        // Obtener el autor y texto del comentario derecho actual
        const rightComment = rightComments[currentIndex];
        const rightAuthor = rightComment.querySelector("h5 b").innerText;
        const rightText = rightComment.querySelector("p").innerHTML;

        // Intercambiar autor y texto
        leftComment.querySelector("h2 b").innerText = rightAuthor;
        leftComment.querySelector("p").innerHTML = rightText;

        rightComment.querySelector("h5 b").innerText = leftAuthor;
        rightComment.querySelector("p").innerHTML = leftText;

        // Mover al siguiente comentario en la derecha
        currentIndex = (currentIndex + 1) % rightComments.length;
    }

    // Iniciar la rotación cada 10 segundos
    setInterval(rotateComments, 8000);
});
