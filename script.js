// WhatsApp modal selector
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('whatsapp-btn');
  var modal = document.getElementById('whatsapp-modal');
  var close = document.getElementById('whatsapp-close');
  var form = document.getElementById('whatsapp-form');
  var select = document.getElementById('whatsapp-select');
  var custom = document.getElementById('whatsapp-custom');
  var phone = '5491130714260';
  var currentLang = 'en';

  // Opciones de mensajes en ambos idiomas
  var options = {
    en: [
      {v: "Hello Iván, I'm interested in your QA Testing services. Could you share info about your proposals and availability?", t: "Inquiry about proposals and availability"},
      {v: "Hi! I'd like to know how you could help improve my software quality with your QA testing services.", t: "Improve software quality"},
      {v: "Hello Iván, I have a project and need support in quality testing. Could you advise me about your services and experience?", t: "Support in quality testing"},
      {v: "Hi, I'd like to get a quote and details about your QA services for my company/project.", t: "Quote and service details"},
      {v: "Hello Iván, what kind of tests and tools do you use in your QA services? I'm looking for collaboration for my project.", t: "Types of tests and tools"}
    ],
    es: [
      {v: "Hola Iván, estoy interesado en tus servicios de QA Testing. ¿Podrías brindarme información sobre tus propuestas y disponibilidad?", t: "Consulta sobre propuestas y disponibilidad"},
      {v: "¡Hola! Quisiera saber cómo podrías ayudarme a mejorar la calidad de mi software con tus servicios de testing QA.", t: "Mejorar calidad de software"},
      {v: "Hola Iván, tengo un proyecto y necesito soporte en pruebas de calidad. ¿Podrías asesorarme sobre tus servicios y experiencia?", t: "Soporte en pruebas de calidad"},
      {v: "Hola, me gustaría recibir una cotización y detalles sobre tus servicios de QA para mi empresa/proyecto.", t: "Cotización y detalles de servicios"},
      {v: "Hola Iván, ¿qué tipo de pruebas y herramientas utilizas en tus servicios de QA? Estoy buscando colaboración para mi proyecto.", t: "Tipo de pruebas y herramientas"}
    ]
  };

  function updateWhatsappOptions(lang) {
    select.innerHTML = "";
    options[lang].forEach(function(opt) {
      var o = document.createElement('option');
      o.value = opt.v;
      o.textContent = opt.t;
      select.appendChild(o);
    });
    currentLang = lang;
    custom.placeholder = lang === 'en' ? "Write your custom message..." : "Escribe tu mensaje personalizado...";
  }

  if (btn && modal && close && form && select && custom) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'block';
    });
    close.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var msg = custom.value.trim() ? custom.value.trim() : select.value;
      var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank');
      modal.style.display = 'none';
    });
    // Inicializa opciones según idioma por defecto
    updateWhatsappOptions('en');
    // Detecta cambio de idioma
    document.getElementById('en-btn').addEventListener('click', function() {
      updateWhatsappOptions('en');
    });
    document.getElementById('es-btn').addEventListener('click', function() {
      updateWhatsappOptions('es');
    });
  }
});
// Oculta el loader cuando la página termina de cargar
window.addEventListener('load', function() {
  var loader = document.getElementById('loader-bg');
  if (loader) loader.style.display = 'none';
});
// script.js
const enBtn = document.getElementById("en-btn");
const esBtn = document.getElementById("es-btn");
const elements = document.querySelectorAll(".lang");

function setLanguage(lang) {
  elements.forEach(el => {
    el.style.display = el.classList.contains(lang) ? "block" : "none";
  });
  if (lang === "en") {
    enBtn.classList.add("selected");
    esBtn.classList.remove("selected");
  } else {
    esBtn.classList.add("selected");
    enBtn.classList.remove("selected");
  }
}

function typeEffect(element, text, speed = 45) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function animateMainText(lang) {
  if (lang === "en") {
    const roleEl = document.getElementById("main-role-en");
    roleEl.textContent = "";
    typeEffect(document.getElementById("main-title-en"), "Hello, I'm Iván Collar", 45);
    setTimeout(() => {
      typeEffect(roleEl, "QA Tester Jr | Manual & Automation", 30);
    }, 900);
  } else {
    const roleEl = document.getElementById("main-role-es");
    roleEl.textContent = "";
    typeEffect(document.getElementById("main-title-es"), "Hola, soy Iván Collar", 45);
    setTimeout(() => {
      typeEffect(roleEl, "QA Tester Jr | Manual & Automatización", 30);
    }, 900);
  }
}

// Default language = English
setLanguage("en");
animateMainText("en");

// Animación de entrada en secciones
const sectionIds = ["about", "skills", "projects", "certifications", "contact"];
const sections = sectionIds.map(id => document.getElementById(id));

function revealSectionsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add("section-visible");
    }
  });
}

window.addEventListener("scroll", revealSectionsOnScroll);
window.addEventListener("DOMContentLoaded", revealSectionsOnScroll);

enBtn.addEventListener("click", () => {
  setLanguage("en");
  animateMainText("en");
});
esBtn.addEventListener("click", () => {
  setLanguage("es");
  animateMainText("es");
});
