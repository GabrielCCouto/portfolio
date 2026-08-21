export function initInteractions() {
  initMobileMenu();
  initScrollSpy();
  initReveal();
  initBackToTop();
  initScrollArrow();
  initContactPopup();
  initComingSoon();
}

function initReveal() {
  const sections = document.querySelectorAll(".home-cards");
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
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

function initScrollArrow() {
  const arrow = document.querySelector(".hero__scroll");
  if (!arrow) return;

  const onScroll = () => {
    arrow.hidden = window.scrollY > window.innerHeight * 0.3;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initContactPopup() {
  const modal = document.querySelector("[data-contact-popup-modal]");
  if (!modal) return;

  const open = () => {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-contact-popup]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });
  });

  modal.querySelectorAll("[data-close-contact-popup]").forEach((el) => {
    el.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") close();
  });

  if (location.hash === "#contact-popup") {
    open();
    history.replaceState(null, "", location.pathname + location.search);
  }
}

function initComingSoon() {
  let toast = null;

  const show = (e) => {
    e.preventDefault();
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = "Coming Soon";
      document.body.appendChild(toast);
    }
    requestAnimationFrame(() => {
      toast.classList.add("is-visible");
    });
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2500);
  };

  document.querySelectorAll("[data-coming-soon]").forEach((el) => {
    el.addEventListener("click", show);
  });
}
