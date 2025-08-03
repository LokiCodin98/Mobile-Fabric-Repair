const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".side-lines, .p-section, .material-img, .main-sign-img").forEach(el => {
  observer.observe(el);
});

const text = "502-817-8864 (Norbert)";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 250); 
  }
}

window.addEventListener('load', typeEffect);