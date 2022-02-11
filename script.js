const link = document.querySelector(".nav-link");

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    link.classList.add("active");
    console.log("It trigger");
  })
);
