import "../../style.scss";
import "./bid.scss";
import { loadHeader, loadFooter } from "../global/global.js";
/*
function activeLinkNav() {
  const link = document.querySelector(".catalog-link");
  link.classList.add("active");
  link.setAttribute("aria-current", "page");
}*/
function selectedBtnSize() {
  const buttons = document.querySelectorAll(".btn-size-container");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      } else {
        button.classList.add("selected");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  //activeLinkNav();
  selectedBtnSize();
});
