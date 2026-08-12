import { renderHeader } from "../../components/header.js";
import { renderSocialLinks } from "../../components/socialLinks.js";
import { renderBackToTop } from "../../components/backToTop.js";
import { createSkillCard } from "../../components/skillCard.js";
import { initTheme } from "../theme.js";
import { initInteractions } from "../interactions.js";
import { skills } from "../data/skills.js";

document.body.dataset.page = "skills";

renderHeader({ active: "skills", base: "../" });
renderSocialLinks();
renderBackToTop();

const grid = document.querySelector("[data-skills-grid]");
skills.forEach((skill, index) => grid.appendChild(createSkillCard(skill, index)));

initTheme();
initInteractions();

if (window.lucide) {
  window.lucide.createIcons();
}
