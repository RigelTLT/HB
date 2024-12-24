export async function loadHeader() {
  const response = await fetch("./components/header/header.html");
  const headerHTML = await response.text();

  const headerElement = document.querySelector(".header");
  if (headerElement) {
    // Проверьте, что элемент найден
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
    // Проверьте, что элемент найден
    headerElement.innerHTML = headerHTML;
  } else {
    console.error("Элемент с классом 'footer' не найден");
  }
}
