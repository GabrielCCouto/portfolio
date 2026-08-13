export function createFocusArea(area, index = 0) {
  const item = document.createElement("article");
  item.className = "focus-area";
  item.innerHTML = `
    <div class="focus-area__icon">
      <i data-lucide="${area.icon}"></i>
    </div>
    <h3>${area.title}</h3>
    <p>${area.description}</p>
  `;

  return item;
}
