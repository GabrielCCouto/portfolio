export function createSkillCard(skill, index = 0) {
  const items = skill.items.map((item) => `<li>${item}</li>`).join("");

  const card = document.createElement("article");
  card.className = "skill-card reveal";
  card.style.setProperty("--card-delay", `${index * 75}ms`);
  card.innerHTML = `
    <div class="skill-card__icon">
      <i data-lucide="${skill.icon}"></i>
    </div>
    <div class="skill-card__content">
      <h2>${skill.title}</h2>
      <ul class="skill-card__list" role="list">${items}</ul>
    </div>
  `;

  return card;
}
