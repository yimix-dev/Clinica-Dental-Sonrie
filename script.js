document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carouselContainer");
  const cards = document.querySelectorAll(".service-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0; // Inicia con la primera tarjeta seleccionada

  function updateCarousel() {
    // 1. Asignar clase 'active' solo al elemento central
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    // 2. Calcular el desplazamiento para centrar la tarjeta activa
    const activeCard = cards[currentIndex];

    // Obtener la posición central de la tarjeta respecto a su contenedor
    const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    // Obtener el centro visible del contenedor
    const containerCenter = container.offsetWidth / 2;

    // Realizar el scroll exactamente hacia el punto calculado
    container.scrollTo({
      left: cardCenter - containerCenter,
      behavior: "smooth",
    });

    // 3. Activar / Desactivar botones si llegamos a los extremos (no infinito)
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
  }

  // Evento Botón Siguiente
  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Evento Botón Anterior
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Recalcular el centro si el usuario redimensiona la ventana del navegador
  window.addEventListener("resize", updateCarousel);

  // Inicialización (Añade un pequeño timeout para asegurar que el CSS haya cargado)
  setTimeout(updateCarousel, 100);
});
