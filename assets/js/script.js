import SmoothScroll from "./modules/initSmoothScroll.js";
import AccordionList from "./modules/initAccordionList.js";
import initTabNav from "./modules/initTabNav.js";
import initAnimationScroll from "./modules/initAnimationScroll.js";
import initModal from "./modules/initiModal.js";
import initTooltip from "./modules/initToolTip.js";
import initDropdownMenu from "./modules/initDropdown-menu.js";
import initOpeningSchedule from "./modules/initOpeningSchedule.js";
import initAnimalsFetch from "./modules/initAnimalsFetch.js";
import initBitcoinFetch from "./modules/initBitcoinFetch.js";

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();

initTabNav();
initAnimationScroll();
initModal();
initTooltip();
initDropdownMenu();
initOpeningSchedule();
initAnimalsFetch();
initBitcoinFetch();
