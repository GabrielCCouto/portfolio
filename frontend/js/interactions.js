export function initInteractions() {
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
}

function setMenuOpen(toggle, menu, open) {
  menu.classList.toggle("is-open", open);
  toggle.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle, menu, !menu.classList.contains("is-open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("[data-nav-link]")) {
      setMenuOpen(toggle, menu, false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(toggle, menu, false);
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll("[data-nav-link]")).filter((link) =>
    link.getAttribute("href").startsWith("#")
  );
  if (!links.length) return;

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-35% 0px -60% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function initBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;

  const onScroll = () => {
    button.classList.toggle("is-visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
