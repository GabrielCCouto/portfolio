export function createHighlightCard(highlight, index = 0) {
  const description = highlight.description.join("<br>");

  const card = document.createElement("article");
  card.className = "highlight-card";
  card.innerHTML = `
    <div class="highlight-card__icon">
      <i data-lucide="${highlight.icon}"></i>
    </div>
    <strong class="highlight-card__value">${highlight.value}</strong>
    <p class="highlight-card__label">${description}</p>
  `;

  return card;
}
