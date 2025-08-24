document.addEventListener("DOMContentLoaded", () => {
  /* ========= 1. Scroll Reveal ========= */
  const revealElements = document.querySelectorAll(".scroll-reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for very old browsers
    revealElements.forEach(el => el.classList.add("visible"));
  }

  /* ========= 2. Ripple Effect on Buttons ========= */
  document.querySelectorAll("button, .btn, .animated-cta-btn").forEach(button => {
    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = button.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;

      // Remove any existing ripple before adding new
      const oldRipple = button.querySelector(".ripple");
      if (oldRipple) oldRipple.remove();

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ========= 3. Smooth Scroll for Anchor Links ========= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
