// ===== MOBILE MENU TOGGLE =====
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

// Toggle mobile menu when hamburger icon is clicked
mobileMenu.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a navigation link
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

// ===== FORM SUBMISSION HANDLER =====
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  // Prevent default form submission
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple form validation (browser does most of this with 'required' attribute)
  if (name && email && message) {
    // Display success message
    alert("Thank you for your message! We will get back to you soon.");

    // Reset the form fields
    contactForm.reset();
  }
});

// ===== SMOOTH SCROLL ENHANCEMENT =====
// Additional smooth scroll behavior for older browsers that don't support CSS scroll-behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the target element
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      // Smooth scroll to target
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
