export default function initAnimaNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll("[data-numero]");

    numbers.forEach((number) => {
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
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumbers();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector(".numeros");

  observer.observe(observerTarget, { attributes: true });
}
