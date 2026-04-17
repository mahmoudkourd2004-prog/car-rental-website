const toggle = document.querySelector(".menu-toggle");
const navContent = document.querySelector(".nav-content");

toggle.addEventListener("click", () => {
  navContent.classList.toggle("active");
});
