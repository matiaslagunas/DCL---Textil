document.addEventListener("DOMContentLoaded", () => {
    const contenedorMobail = document.getElementById("marcas-contenedor-mobail");
    const btnAnteriorMobail = document.getElementById("btn-anterior-mobail");
    const btnSiguienteMobail = document.getElementById("btn-siguiente-mobail");
  
    let marcasMobail = [];
    let indiceMobail = 0;
  
    fetch("/js/json/marcas.json")
      .then(res => res.json())
      .then(data => {
        marcasMobail = Object.entries(data);
        mostrarMarcaMobail();
      })
      .catch(err => console.error("Error al cargar JSON (mobile):", err));
  
    function mostrarMarcaMobail() {
      contenedorMobail.innerHTML = "";
  
      const [clave, marca] = marcasMobail[indiceMobail];
  
      const card = document.createElement("div");
      card.classList.add("tarjeta-marca-mobail");
  
      card.innerHTML = `
        <div class="tarjeta-marca__inner">
          <div class="tarjeta-marca__front">
            <img src="${marca.image}" alt="${marca.titulo}" />
          </div>
          <div class="tarjeta-marca__back">
            <h3>${marca.titulo}</h3>
            <p>${marca.descripcion}</p>
          </div>
        </div>
      `;
  
      const inner = card.querySelector(".tarjeta-marca__inner");
  
      // Toggle de rotación
      card.addEventListener("click", () => {
        inner.classList.toggle("activa");
      });
  
      contenedorMobail.appendChild(card);
    }
  
    btnSiguienteMobail.addEventListener("click", () => {
      if (indiceMobail < marcasMobail.length - 1) {
        indiceMobail++;
        mostrarMarcaMobail();
      }
    });
  
    btnAnteriorMobail.addEventListener("click", () => {
      if (indiceMobail > 0) {
        indiceMobail--;
        mostrarMarcaMobail();
      }
    });
  });
  