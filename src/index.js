import * as bootstrap from "bootstrap";
import "./style.scss";
import { loadHeader, loadFooter } from "./components/global/global";

document.addEventListener("DOMContentLoaded", async () => {
  await loadHeader();
  await loadFooter();
});
