const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const heroPanel = document.querySelector(".hero-main");

if (heroPanel) {
  heroPanel.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;

    const rect = heroPanel.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 3;
    const rotateX = ((y / rect.height) - 0.5) * -3;

    heroPanel.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  heroPanel.addEventListener("mouseleave", () => {
    heroPanel.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
}
