export default class SmoothScroll {
  constructor(link, options) {
    this.internalLinks = document.querySelectorAll(link);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else this.options = options;

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    console.log(this);
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.internalLinks.length) this.addLinkEvent();
    return this;
  }
}
