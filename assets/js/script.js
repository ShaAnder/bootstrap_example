document.addEventListener("DOMContentLoaded", () => {
  const nomadicaBtn = document.getElementById("nomadica-btn");
  const purchaseBtn = document.getElementById("purchase-btn");
  const menuDropdown = document.getElementById("menu-dropdown");
  const purchaseDropdown = document.getElementById("purchase-dropdown");
  const navbar = document.querySelector(".navbar");

  // Toggle dropdown menus
  nomadicaBtn.addEventListener("click", () => {
    menuDropdown.style.display =
      menuDropdown.style.display === "block" ? "none" : "block";
    purchaseDropdown.style.display = "none"; // Close other menu
    nomadicaBtn.style.color = "white";
    purchaseBtn.style.color = "white";
  });

  purchaseBtn.addEventListener("click", () => {
    purchaseDropdown.style.display =
      purchaseDropdown.style.display === "block" ? "none" : "block";
    menuDropdown.style.display = "none"; // Close other menu
  });

  // Scroll behavior
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("scrolled");
      menuDropdown.classList.add("dropdown-scrolled");
      purchaseDropdown.classList.add("dropdown-scrolled");
    } else {
      navbar.classList.remove("scrolled");
      menuDropdown.classList.remove("dropdown-scrolled");
      purchaseDropdown.classList.remove("dropdown-scrolled");
    }
  });
});