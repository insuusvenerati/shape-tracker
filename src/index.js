import Triangle from "./triangle";
import "@picocss/pico/css/pico.min.css";
import "./css/styles.css";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/styles.css";

function handleTriangleForm(event) {
  event.preventDefault();
  document.querySelector("#response").innerText = null;
  const length2 = parseInt(document.querySelector("#length2").value);
  const length1 = parseInt(document.querySelector("#length1").value);
  const length3 = parseInt(document.querySelector("#length3").value);
  const triangle = new Triangle(length1, length2, length3);
  const response = triangle.checkType();
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector("#response").append(pTag);
}

window.addEventListener("load", function () {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
  const htmlElement = document.querySelector("html");
  const colorSchemeToggle = document.querySelector("#dark-mode");
  const themeIcon = document.querySelector("#theme-icon");
  const theme = localStorage.getItem("theme");
  const loadingScreen = document.querySelector("#loading-screen");

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.visibility = "hidden";
  }, 500);

  if (theme) {
    htmlElement.setAttribute("data-theme", theme);
    colorSchemeToggle.checked = theme === "dark";
    themeIcon.innerText = theme === "dark" ? "Dark Mode 🌛" : "Light Mode 🌞";
  }

  colorSchemeToggle.addEventListener("change", function (event) {
    if (event.target.checked) {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeIcon.innerText = "Dark Mode 🌙";
    } else {
      htmlElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeIcon.innerText = "Light Mode 🌞";
    }
  });
});
