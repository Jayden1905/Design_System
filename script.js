const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar");
const marker = document.querySelector("#marker");
const menuItem = document.querySelectorAll(".nav-link");
const currentLocation = location.href;
const menuLength = menuItem.length;

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
