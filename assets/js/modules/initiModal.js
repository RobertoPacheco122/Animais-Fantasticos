export default class Modal {
  constructor(modalContainer, openModalButton, closeModalButton) {
    this.modalContainer = document.querySelector(modalContainer);
    this.openModalButton = document.querySelector(openModalButton);
    this.closeModalButton = document.querySelector(closeModalButton);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(event) {
    if (event.target === this.modalContainer) this.toggleModal(event);
  }

  addModalEvents() {
    this.openModalButton.addEventListener("click", this.eventToggleModal);
    this.closeModalButton.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickOutsideModal);
    console.log("entrei");
  }

  init() {
    if (this.modalContainer && this.openModalButton && this.closeModalButton) {
      this.addModalEvents();
    }

    return this;
  }
}
