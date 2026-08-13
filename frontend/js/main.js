import { renderSocialLinks } from "../components/socialLinks.js";
import { renderBackToTop } from "../components/backToTop.js";
import { initTheme } from "./theme.js";
import { initInteractions } from "./interactions.js";

document.body.dataset.page = "home";

renderSocialLinks();
renderBackToTop();

initTheme();
initInteractions();

if (window.lucide) {
  window.lucide.createIcons();
}
