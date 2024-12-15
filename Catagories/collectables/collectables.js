document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu_icon');
    const slideMenu = document.getElementById('slideMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menuToggle = document.querySelector('.nav-hid');

    function toggleMenu() {
        slideMenu.classList.toggle('active');
    }

    // Event Listeners
    menuIcon.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });
    closeMenu.addEventListener('click', toggleMenu);

    // Close menu on outside click
    document.addEventListener('click', function (e) {
        if (!slideMenu.contains(e.target) && e.target !== menuIcon && e.target !== menuToggle) {
            slideMenu.classList.remove('active');
        }
    });
});