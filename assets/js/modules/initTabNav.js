export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function showTabContent(index) {
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    const dataSetValue = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", dataSetValue);
  }

  tabMenu.forEach((image, index) => {
    image.addEventListener("click", () => {
      showTabContent(index);
    });
  });

  tabContent[0].classList.add("ativo");
}
