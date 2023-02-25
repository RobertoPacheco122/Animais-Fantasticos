import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";
    this.events = ["touchstart", "click"];
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const { currentTarget } = event;
    currentTarget.classList.add(this.activeClass);
    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove(this.activeClass);
    });
  }

  addDropdownEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvents();
    }
    return this;
  }
}
