/* ================================
   MOBILE NAVIGATION
================================ */

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");

    navLinks.classList.toggle("active");
  });
}

/* ================================
   CURRENT YEAR
================================ */

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {
  element.textContent = new Date().getFullYear();
});
