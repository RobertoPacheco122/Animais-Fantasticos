export default function initiModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const openModalButton = document.querySelector('[data-modal="open"]');
  const closeModalButton = document.querySelector('[data-modal="close"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function clickOutsideModal(event) {
    if (event.target === this) toggleModal(event);
  }

  openModalButton.addEventListener("click", toggleModal);
  closeModalButton.addEventListener("click", toggleModal);
  modalContainer.addEventListener("click", clickOutsideModal);
}
