const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar");
const marker = document.querySelector("#marker");
const destinationItem = document.querySelector(".destination-link");
const crewItem = document.querySelector(".crew-link");
const menuItem = document.querySelectorAll(".nav-link");
const menuLength = menuItem.length;
const planetItem = document.querySelectorAll(".planet-link");
const planetLength = planetItem.length;
const circleItem = document.querySelectorAll(".circle");
const circleLength = circleItem.length;
const currentLocation = location.href;

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-toggle-active");
  navBar.classList.toggle("left-twenty");
});

document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    navBar.classList.remove("left-twenty");
    navToggle.classList.remove("nav-toggle-active");
  })
);

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "nav-link active-link";
  }
}

for (let i = 0; i < planetLength; i++) {
  if (planetItem[i].href === currentLocation) {
    planetItem[i].className = "planet-link planet-active-link";
    destinationItem.className = "destination-link nav-link active-link";
  }
}

for (let i = 0; i < circleLength; i++) {
  if (circleItem[i].href === currentLocation) {
    circleItem[i].className = "circle circle-active";
    crewItem.className = "crew-link nav-link active-link";
  }
}
