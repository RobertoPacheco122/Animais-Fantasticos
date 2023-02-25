export default class OpeningSchedule {
  constructor(opening, openClass) {
    this.opening = document.querySelector(opening);
    if (openClass === undefined) this.openClass = "aberto";
    else this.openClass = openClass;
  }

  scheduleData() {
    this.openingDays = this.opening.dataset.week.split(",").map(Number);
    this.openingHours = this.opening.dataset.hour.split(",").map(Number);
  }

  nowData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hoursNow = this.dateNow.getUTCHours() - 3;
  }

  checkSchedule() {
    this.compareDay = this.openingDays.includes(this.dayNow);
    this.compareHour =
      this.hoursNow > this.openingHours[0] &&
      this.hoursNow < this.openingHours[1];
    return this.compareDay && this.compareHour;
  }

  checkIsOpened() {
    if (this.checkSchedule()) {
      this.opening.classList.add("aberto");
    }
  }

  init() {
    if (this.opening) {
      this.scheduleData();
      this.nowData();
      this.checkIsOpened();
    }
    return this;
  }
}
