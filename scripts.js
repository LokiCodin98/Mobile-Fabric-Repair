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