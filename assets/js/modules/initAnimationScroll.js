export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindowHeight = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset) - this.halfWindowHeight,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
}
