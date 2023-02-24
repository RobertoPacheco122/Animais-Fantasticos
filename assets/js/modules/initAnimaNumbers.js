export default class AnimaNumbers {
  constructor(numbers, observerTarget, activeClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.activeClass = activeClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumber(number) {
    const total = +number.textContent;
    const incremet = Math.floor(total / 100);
    let accumulator = 0;

    const timer = setInterval(() => {
      accumulator += incremet;
      number.textContent = accumulator;
      if (accumulator > total) {
        clearInterval(timer);
        number.textContent = total;
      }
    }, 25 * Math.random());
  }

  animaNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.activeClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget && this.activeClass) {
      this.addMutationObserver();
    }
    return this;
  }
}
