document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form'); // Target the form
    const loginMessage = document.createElement('p'); // Create a message element
    loginMessage.id = "login-message";
    loginMessage.style.display = "none";
    loginMessage.style.color = "green";
    loginMessage.style.fontWeight = "bold";
    loginMessage.style.marginTop = "20px";

    // Append the message element to the form
    loginForm.appendChild(loginMessage);

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show the "Logging in your account..." message
        loginMessage.textContent = "Logging in your account...";
        loginMessage.style.display = "block";

        // Simulate a delay before redirecting
        setTimeout(function () {
            window.location.href = "../../../index.html"; // Redirect to ../../../index.html
        }, 2000); // Delay for 2 seconds (2000ms)
    });
});