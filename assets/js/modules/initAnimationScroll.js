export default function initAnimationScroll() {
  function animateScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    sections.forEach((section) => {
      const heightToTop = section.getBoundingClientRect().top;
      const halfWindowHeight = window.innerHeight * 0.6;
      const heightToShow = heightToTop - halfWindowHeight < 0;

      if (heightToShow) {
        section.classList.add("ativo");
      }
    });
  }

  animateScroll();

  window.addEventListener("scroll", animateScroll);
}
