const NAV_ITEMS = [
  { id: "home", page: "index.html", section: "home", label: "Home" },
  { id: "about", page: "index.html", section: "about", label: "About" },
  { id: "skills", page: "pages/skills.html", section: "skills", label: "Skills" },
  { id: "projects", page: "index.html", section: "projects", label: "Projects" },
  { id: "education", page: "index.html", section: "education", label: "Education" },
  { id: "contact", page: "index.html", section: "contact", label: "Contact" },
];

function hrefFor(item, base) {
  const isCurrentPage = item.id === document.body.dataset.page;
  if (isCurrentPage) return `#${item.section}`;
  return `${base}${item.page}#${item.section}`;
}

function logoHref(base) {
  const isHome = document.body.dataset.page === "home";
  return isHome ? "#home" : `${base}index.html#home`;
}

export function renderHeader({ active = "", base = "" } = {}) {
  const mount = document.querySelector("[data-header]");
  if (!mount) return;

  const links = NAV_ITEMS.map((item) => {
    const isActive = item.id === active;
    return `
      <li>
        <a class="nav__link${isActive ? " is-active" : ""}" href="${hrefFor(item, base)}" data-nav-link>${item.label}</a>
      </li>
    `;
  }).join("");

  mount.innerHTML = `
    <header class="site-header">
      <a href="${logoHref(base)}" class="logo" aria-label="Back to home">&lt;Dev/Portfolio&gt;</a>

      <nav class="nav" data-nav-menu aria-label="Main navigation">
        <ul class="nav__list" role="list">
          ${links}
        </ul>
      </nav>

      <div class="header__actions">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle theme">
          <i data-lucide="sun"></i>
          <i data-lucide="moon"></i>
        </button>
        <button class="nav-toggle" type="button" data-nav-toggle aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
          <i data-lucide="menu"></i>
          <i data-lucide="x"></i>
        </button>
      </div>
    </header>
  `;
}
