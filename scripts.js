// Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Typewriter effect for the phone number in the hero
const typewriterEl = document.getElementById("typewriter");

if (typewriterEl) {
  const text = "502-817-8864";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typewriterEl.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 90);
    }
  }

  window.addEventListener("load", typeEffect);
}