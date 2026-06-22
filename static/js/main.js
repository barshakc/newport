console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", function () {

  const sidebarToggle = document.getElementById('sidebarToggle');
  const body = document.body;

  function toggleSidebar() {
    body.classList.toggle('sidebar-open');
  }

  function closeSidebar() {
    body.classList.remove('sidebar-open');
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  document.querySelectorAll('.sidebar-menu a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      closeSidebar();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    });
  });

  const roles = [
    "Electronics, Communication and Information Engineer",
    "Backend Engineer",
    "AI and Machine Learning Enthusiast"
  ];

  let i = 0, j = 0;
  let isDeleting = false;

  function typeEffect() {
    const element = document.getElementById("typewriter");
    if (!element) return;

    const currentRole = roles[i];

    if (!isDeleting) {
      element.textContent = currentRole.substring(0, j++);
      if (j > currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      element.textContent = currentRole.substring(0, j--);
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
});