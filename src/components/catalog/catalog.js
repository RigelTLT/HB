import "../../style.scss";
import "./catalog.scss";
import { loadHeader, loadFooter, scrollUp } from "../global/global.js";

function activeLinkNav() {
  const link = document.querySelector(".catalog-link");
  link.classList.add("active");
  link.setAttribute("aria-current", "page");
}
document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  activeLinkNav();
  await scrollUp();
});
