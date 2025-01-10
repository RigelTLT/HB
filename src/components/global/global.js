export async function loadHeader() {
  const response = await fetch("./components/header/header.html");
  const headerHTML = await response.text();

  const headerElement = document.querySelector(".header");
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  } else {
    console.error("Элемент с классом 'header' не найден");
  }
}
export async function loadFooter() {
  const response = await fetch("./components/footer/footer.html");
  const headerHTML = await response.text();

  const headerElement = document.querySelector(".footer");
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  } else {
    console.error("Элемент с классом 'footer' не найден");
  }
}

export async function loadMap() {
  // Загрузка карты
  const mapElement = document.querySelector(".map");
  if (mapElement) {
    await fetch("./assets/image/russia1.svg")
      .then((response) => response.text())
      .then((data) => {
        mapElement.innerHTML = data;
        /*const svgElement = document.querySelector("svg");
        svgElement.addEventListener("click", () => {
          alert("SVG был нажат!");
        });*/
      });
  }
}
export function scrollUp() {
  document.body.scrollIntoView({ behavior: "smooth" });
}
const scrollBtn = document.querySelector(".btn-up-link");

scrollBtn.addEventListener("click", function () {
  scrollUp();
});
