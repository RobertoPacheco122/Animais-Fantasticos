import SmoothScroll from "./modules/initSmoothScroll.js";
import AccordionList from "./modules/initAccordionList.js";
import TabNav from "./modules/initTabNav.js";
import initAnimationScroll from "./modules/initAnimationScroll.js";
import Modal from "./modules/initiModal.js";
import initTooltip from "./modules/initToolTip.js";
import initDropdownMenu from "./modules/initDropdown-menu.js";
import initOpeningSchedule from "./modules/initOpeningSchedule.js";
import initAnimalsFetch from "./modules/initAnimalsFetch.js";
import initBitcoinFetch from "./modules/initBitcoinFetch.js";

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="container"]',
  '[data-modal="open"]',
  '[data-modal="close"]'
);
modal.init();

initAnimationScroll();
initTooltip();
initDropdownMenu();
initOpeningSchedule();
initAnimalsFetch();
initBitcoinFetch();
