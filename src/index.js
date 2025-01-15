import * as bootstrap from "bootstrap";
import "./style.scss";
import {
  loadHeader,
  loadFooter,
  loadMap,
  scrollUp,
  scrolNav,
} from "./components/global/global";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
  await loadMap();
  await scrollUp();
  scrolNav();
});
