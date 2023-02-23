export default function initOpeningSchedule() {
  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hoursNow = dateNow.getHours();
  const opening = document.querySelector("[data-week]");
  const openingDays = opening.dataset.week.split(",").map(Number);
  const openingHours = opening.dataset.hour.split(",").map(Number);

  const compareDay = openingDays.includes(dayNow);
  const compareHour = hoursNow > openingHours[0] && hoursNow < openingHours[1];

  if (compareHour && compareDay) {
    opening.classList.add("aberto");
  }
}
