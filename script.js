document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carouselContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Función para obtener la distancia de desplazamiento según el ancho del elemento
  const getScrollAmount = () => {
    const card = container.querySelector(".service-card");
    const gap = 20; // Espacio entre tarjetas
    return card ? card.offsetWidth + gap : 300;
  };

  // Botón Siguiente
  nextBtn.addEventListener("click", () => {
    container.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });

  // Botón Anterior
  prevBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });
});
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

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  setTimeout(updateCarousel, 100);
});
