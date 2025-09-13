// script.js
const enBtn = document.getElementById("en-btn");
const esBtn = document.getElementById("es-btn");
const elements = document.querySelectorAll(".lang");

function setLanguage(lang) {
  elements.forEach(el => {
    el.style.display = el.classList.contains(lang) ? "block" : "none";
  });
}

enBtn.addEventListener("click", () => setLanguage("en"));
esBtn.addEventListener("click", () => setLanguage("es"));

// Default language = English
setLanguage("en");
