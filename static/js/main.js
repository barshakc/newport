console.log("main.js loaded");
document.addEventListener("DOMContentLoaded", function () {

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    if (window.innerWidth <= 768) {
        sidebar?.classList.add('closed');
        body.classList.remove('sidebar-open');
    }

    function toggleSidebar() {
        sidebar?.classList.toggle('closed');
        body.classList.toggle('sidebar-open');
    }

    function closeSidebar() {
        sidebar?.classList.add('closed');
        body.classList.remove('sidebar-open');
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar?.classList.remove('closed');
            body.classList.remove('sidebar-open');
        }
    });

    document.querySelectorAll('.sidebar-menu a.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            closeSidebar();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        });
    });

    const roles = [
        "Electronics, Communication and Information Engineer",
        "Backend Engineer",
        "AI and Machine Learning Enthusiast"
    ];

    let i = 0;
    let j = 0;
    let currentText = "";
    let isDeleting = false;

    function typeEffect() {
        const element = document.getElementById("typewriter");
        if (!element) return;

        if (!isDeleting && j <= roles[i].length) {
            currentText = roles[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = roles[i].substring(0, j--);
        }

        element.textContent = currentText;

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && j === roles[i].length) {
            speed = 1200;
            isDeleting = true;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
            speed = 300;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

});