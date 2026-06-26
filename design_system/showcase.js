const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const savedTheme = localStorage.getItem("marketeia-ds-showcase-theme");
const requestedTheme = new URLSearchParams(window.location.search).get("theme");

if (requestedTheme === "light" || (!requestedTheme && savedTheme === "light")) {
  root.classList.remove("theme-dark");
  root.classList.add("theme-light");
  themeLabel.textContent = "Light";
} else if (requestedTheme === "dark") {
  root.classList.remove("theme-light");
  root.classList.add("theme-dark");
  themeLabel.textContent = "Dark";
}

themeToggle?.addEventListener("click", () => {
  const isLight = root.classList.toggle("theme-light");
  root.classList.toggle("theme-dark", !isLight);
  themeLabel.textContent = isLight ? "Light" : "Dark";
  localStorage.setItem("marketeia-ds-showcase-theme", isLight ? "light" : "dark");
});

const heroTitle = document.querySelector(".js-hero-title");
if (heroTitle && !prefersReducedMotion) {
  const words = heroTitle.textContent.split(" ");
  heroTitle.innerHTML = words.map((w, i) =>
    `<span class="word" style="animation-delay:${i * 60}ms">${w}</span>`
  ).join(" ");
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-38% 0px -56% 0px" });

sections.forEach((section) => navObserver.observe(section));

document.querySelectorAll("[data-copy]").forEach((node) => {
  node.addEventListener("click", async () => {
    const value = node.getAttribute("data-copy");
    const label = node.querySelector("em");
    try {
      await navigator.clipboard.writeText(value);
      label.textContent = "Copiado";
      window.setTimeout(() => { label.textContent = value; }, 850);
    } catch {
      label.textContent = value;
    }
  });
});

const motionLab = document.getElementById("motionLab");
const replayMotion = document.getElementById("replayMotion");

function playMotionLab() {
  if (!motionLab) return;
  motionLab.classList.remove("is-playing");
  void motionLab.offsetWidth;
  motionLab.classList.add("is-playing");
}

replayMotion?.addEventListener("click", playMotionLab);
if (!prefersReducedMotion) window.setTimeout(playMotionLab, 900);
