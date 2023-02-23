export default class TabNav {
  constructor(tabMenu, tabContent, activeClass) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);

    if (activeClass === undefined) {
      this.activeClass = "ativo";
    } else {
      this.activeClass = activeClass;
    }
  }

  showTabContent(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });
    const animationDirection = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, animationDirection);
  }

  addTabMenuEvent() {
    this.tabMenu.forEach((image, index) => {
      image.addEventListener("click", () => {
        this.showTabContent(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabMenuEvent();
      this.tabContent[0].classList.add(this.activeClass);
    }

    return this;
  }
}
