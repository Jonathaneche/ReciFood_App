export default function favoritos() {
  const circle = document.querySelector(".circle");
  const icon = document.querySelector("svg");

  circle.addEventListener("click", () => {
    circle.classList.toggle("clicked");
    if (circle.classList.contains("clicked")) {
      icon.classList.add("like");
    }
    setTimeout(() => {
      icon.classList.remove("like");
    }, 1500);
  });
}
