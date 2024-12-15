document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu_icon');
    const menuToggle = document.getElementById('menu_toggle');
    const slideMenu = document.getElementById('slideMenu');
    const closeMenu = document.getElementById('closeMenu');

    // Function to toggle menu
    function toggleMenu() {
        slideMenu.classList.toggle('active');
    }

    // Open menu on icon or 'Menu' text click
    menuIcon.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent link behavior
        toggleMenu();
    });

    // Close menu on close arrow click
    closeMenu.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!slideMenu.contains(e.target) && e.target !== menuIcon && e.target !== menuToggle) {
            slideMenu.classList.remove('active');
        }
    });
});