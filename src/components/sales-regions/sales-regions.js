import "../../style.scss";
import "./sales-regions.scss";
import { loadHeader, loadFooter, loadMap, scrollUp } from "../global/global.js";

function activeLinkNav() {
  const link = document.querySelector(".sales-regions-link");
  link.classList.add("active");
  link.setAttribute("aria-current", "page");
}
document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  await loadMap();
  activeLinkNav();
  await scrollUp();
});
