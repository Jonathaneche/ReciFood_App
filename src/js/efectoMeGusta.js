export default function favoritos() {
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle) => {
    const corazonSVG = circle.querySelector("svg");

    if (!corazonSVG) {
      return; // Si el elemento svg no está presente, salimos de la iteración
    }

    circle.addEventListener("click", () => {
      circle.classList.toggle("clicked");
      if (circle.classList.contains("clicked")) {
        corazonSVG.classList.add("like");
      }
      setTimeout(() => {
        corazonSVG.classList.remove("like");
      }, 1500);
    });
  });
}
