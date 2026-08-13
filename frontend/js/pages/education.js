import { renderSocialLinks } from "../../components/socialLinks.js";
import { renderBackToTop } from "../../components/backToTop.js";
import { createEducationEntry } from "../../components/educationEntry.js";
import { initTheme } from "../theme.js";
import { initInteractions } from "../interactions.js";
import { education } from "../data/education.js";

document.body.dataset.page = "education";

renderSocialLinks();
renderBackToTop();

const timeline = document.querySelector("[data-education-timeline]");
education.forEach((entry) => timeline.appendChild(createEducationEntry(entry)));

initTheme();
initInteractions();

if (window.lucide) {
  window.lucide.createIcons();
}
