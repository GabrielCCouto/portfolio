export function createEducationEntry(entry) {
  const article = document.createElement("article");
  article.className = "education-entry";

  const institution = entry.institution
    ? `<p class="education-card__institution">${entry.institution}</p>`
    : "";

  article.innerHTML = `
    <time class="education-entry__date" datetime="${entry.dateTime}">${entry.period}</time>
    <span class="education-entry__marker" aria-hidden="true">
      <span class="education-entry__dot"></span>
    </span>
    <div class="education-card">
      <h2>${entry.title}</h2>
      ${institution}
      <p class="education-card__description">${entry.description}</p>
    </div>
  `;

  return article;
}
