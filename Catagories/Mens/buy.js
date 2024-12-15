// Show popup when the form is submitted
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    const popup = document.getElementById('popup');
    popup.classList.add('show'); // Add 'show' class to display the popup
});

// Redirect to another page when "OK" button is clicked
document.getElementById('close-popup-btn').addEventListener('click', function () {
    const popup = document.getElementById('popup');
    popup.classList.remove('show'); // Remove 'show' class to hide the popup
    window.location.href = 'men.html'; // Redirect to the desired page
});