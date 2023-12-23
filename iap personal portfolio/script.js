document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scroll({
        top: targetElement.offsetTop - 60, // Adjusted for header height
        behavior: 'smooth'
      });
    });
  });
});