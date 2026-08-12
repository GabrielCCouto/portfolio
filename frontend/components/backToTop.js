export function renderBackToTop() {
  const mount = document.querySelector("[data-back-to-top]");
  if (!mount) return;

  const href = document.body.dataset.page === "home" ? "#home" : "../index.html#home";
  mount.innerHTML = `
    <a class="back-to-top" href="${href}" data-back-to-top aria-label="Back to top">
      <i data-lucide="arrow-up"></i>
    </a>
  `;
}
