import { renderHeader } from "../../components/header.js";
import { renderSocialLinks } from "../../components/socialLinks.js";
import { renderBackToTop } from "../../components/backToTop.js";
import { createHighlightCard } from "../../components/highlightCard.js";
import { createFocusArea } from "../../components/focusArea.js";
import { initTheme } from "../theme.js";
import { initInteractions } from "../interactions.js";
import { highlights, focusAreas, profileInfo } from "../data/about.js";

document.body.dataset.page = "about";

renderHeader({ active: "about", base: "../" });
renderSocialLinks();
renderBackToTop();

const highlightsGrid = document.querySelector("[data-highlights-grid]");
highlights.forEach((highlight, index) => highlightsGrid.appendChild(createHighlightCard(highlight, index)));

const focusGrid = document.querySelector("[data-focus-grid]");
focusAreas.forEach((area, index) => focusGrid.appendChild(createFocusArea(area, index)));

const profileList = document.querySelector("[data-profile-info]");
profileInfo.forEach((item) => {
  const li = document.createElement("li");
  li.className = "profile-info__item";

  const values = item.values
    ? item.values.map((value) => `<span class="profile-info__value">${value}</span>`).join("")
    : item.href
      ? `<a class="profile-info__value profile-info__value--link" href="${item.href}">${item.value}</a>`
      : `<span class="profile-info__value">${item.value}</span>`;

  li.innerHTML = `
    <span class="profile-info__icon" aria-hidden="true">
      <i data-lucide="${item.icon}"></i>
    </span>
    <span class="profile-info__content">
      <span class="profile-info__label">${item.label}</span>
      ${values}
    </span>
  `;

  profileList.appendChild(li);
});

initTheme();
initInteractions();

if (window.lucide) {
  window.lucide.createIcons();
}
