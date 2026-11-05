// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Side menu toggle
const sideToggle = document.getElementById("side-toggle");
const sideNavbar = document.getElementById("side-navbar");

if (sideToggle && sideNavbar) {
  // Toggle via hamburger/side toggle button
  sideToggle.addEventListener("click", () => {
    sideNavbar.classList.toggle("active");
  });

  // Toggle via bookmark tab (click on the right edge)
  sideNavbar.addEventListener("click", (e) => {
    // Detect click near the right edge (pseudo-element area)
    if (e.offsetX > sideNavbar.offsetWidth - 30) {
      sideNavbar.classList.toggle("active");
    }
  });
}

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
}

// Toggle Theme
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }

});


const flipCard = document.getElementById("flip-card");

// Click to flip
flipCard.addEventListener("click", function() {

    flipCard.classList.toggle("is-flipped");

});

// Keyboard support
flipCard.addEventListener("keydown", function(event) {

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flipCard.classList.toggle("is-flipped");
    }

});

