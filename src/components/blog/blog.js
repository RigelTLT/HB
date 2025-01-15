import "../../style.scss";
import "./blog.scss";
import { loadHeader, loadFooter, scrollUp } from "../global/global.js";

function activeLinkNav() {
  const link = document.querySelector(".blog-link");
  link.classList.add("active");
  link.setAttribute("aria-current", "page");
}
document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  activeLinkNav();
  await scrollUp();
});
