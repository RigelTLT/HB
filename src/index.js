import * as bootstrap from "bootstrap";
import "./style.scss";
import { loadHeader, loadFooter, loadMap } from "./components/global/global";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  await loadMap();
});

function scrollUp() {
  document.body.scrollIntoView({ behavior: "smooth" });
}
const scrollBtn = document.querySelector(".btn-up-link");

scrollBtn.addEventListener("click", function () {
  scrollUp();
});
