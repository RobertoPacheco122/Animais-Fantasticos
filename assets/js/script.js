import initTabNav from "./modules/initTabNav.js";
import initAccordionList from "./modules/initAccordionList.js";
import SmoothScroll from "./modules/initSmoothScroll.js";
import initAnimationScroll from "./modules/initAnimationScroll.js";
import initModal from "./modules/initiModal.js";
import initTooltip from "./modules/initToolTip.js";
import initDropdownMenu from "./modules/initDropdown-menu.js";
import initOpeningSchedule from "./modules/initOpeningSchedule.js";
import initAnimalsFetch from "./modules/initAnimalsFetch.js";
import initBitcoinFetch from "./modules/initBitcoinFetch.js";

initTabNav();
initAccordionList();
const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

initAnimationScroll();
initModal();
initTooltip();
initDropdownMenu();
initOpeningSchedule();
initAnimalsFetch();
initBitcoinFetch();
