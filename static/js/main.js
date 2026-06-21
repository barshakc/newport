const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const body = document.body;

if (window.innerWidth <= 768) {
    sidebar.classList.add('closed');
    body.classList.remove('sidebar-open');
}

function toggleSidebar() {
    sidebar.classList.toggle('closed');
    body.classList.toggle('sidebar-open');
}

function closeSidebar() {
    sidebar.classList.add('closed');
    body.classList.remove('sidebar-open');
}

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('closed');
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

document.addEventListener('click', function(e) {
    if (e.target === document.body && window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            closeSidebar();
        }
    }
});

