export default function initAccordionList() {
  const faqList = document.querySelector('[data-anime="accordion"]');
  const allDt = faqList.querySelectorAll("dt");

  allDt.forEach((dt) => {
    dt.addEventListener("click", () => {
      dt.classList.toggle("ativo");
      dt.nextElementSibling.classList.toggle("ativo");
    });
  });

  allDt[0].classList.add("ativo");
  allDt[0].nextElementSibling.classList.toggle("ativo");
}
