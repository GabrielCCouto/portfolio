const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/gabrielccouto",
    external: true,
    svg: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-henrique-couto-da-costa/",
    external: true,
    svg: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`,
  },
  {
    label: "Email",
    href: "mailto:gabrihcosta@gmail.com",
    external: false,
    icon: "mail",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5541991870893",
    external: true,
    svg: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>`,
  },
];

export function renderSocialLinks() {
  const mount = document.querySelector("[data-social-links]");
  if (!mount) return;

  const items = SOCIAL_LINKS.map((link) => {
    const content = link.icon
      ? `<i data-lucide="${link.icon}"></i>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${link.svg}</svg>`;
    const external = link.external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `
      <a class="social-links__item" href="${link.href}"${external} aria-label="${link.label}">${content}</a>
    `;
  }).join("");

  mount.innerHTML = `
    <nav class="social-links" aria-label="Social links">
      ${items}
    </nav>
  `;
}
