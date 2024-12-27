import * as bootstrap from "bootstrap";
import "./style.scss";
import { loadHeader, loadFooter } from "./components/global/global";

async function loadMap() {
  // Загрузка карты
  const mapElement = document.querySelector(".map");
  if (mapElement) {
    fetch("/assets/image/russia1.svg")
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
document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  await loadMap();
});
