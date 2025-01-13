document.addEventListener("DOMContentLoaded", () => {
    // Obtener el contenedor del comentario izquierdo y los de la derecha
    const leftComment = document.getElementById("left-text");
    const rightComments = document.querySelectorAll(".comentarios-derecha .comentario");

    let currentIndex = 0; // Índice del comentario actual en la derecha

    // Función para intercambiar comentarios
    function rotateComments() {
        // Obtener el texto actual del comentario izquierdo
        const currentLeftText = leftComment.querySelector("p").innerHTML;

        // Obtener el texto del comentario derecho actual
        const currentRightText = rightComments[currentIndex].querySelector("div p").innerHTML;

        // Intercambiar el texto
        leftComment.querySelector("p").innerHTML = currentRightText;
        rightComments[currentIndex].querySelector("div p").innerHTML = currentLeftText;

        // Mover al siguiente comentario en la derecha
        currentIndex = (currentIndex + 1) % rightComments.length;
    }

    // Iniciar la rotación cada 10 segundos
    setInterval(rotateComments, 10000);
});
