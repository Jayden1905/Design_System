const link = document.querySelector(".nav-link");
const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-toggle-active");
  navBar.classList.toggle("left-twenty");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navBar.classList.remove("left-twenty");
  })
);
