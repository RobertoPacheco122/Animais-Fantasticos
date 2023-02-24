import AnimaNumbers from "./initAnimaNumbers.js";

export default function initAnimalsFetch() {
  const url = "./animalsFetch.json";
  const fatherContainer = document.querySelector(".numeros-grid");

  function createAnimal(animal) {
    const animalContainer = document.createElement("div");
    animalContainer.classList.add("numero-animal");
    animalContainer.innerHTML = `
            <h3>${animal.species}</h3>
            <span data-numero>${animal.total}</span>
        `;
    fatherContainer.appendChild(animalContainer);
  }

  async function getAllSpecies() {
    const species = await fetch(url);
    const speciesData = await species.json();

    speciesData.forEach((specie) => {
      createAnimal(specie);
    });

    const animaNumbers = new AnimaNumbers("[data-numero]", ".numeros", "ativo");
    animaNumbers.init();
  }

  getAllSpecies();
}
