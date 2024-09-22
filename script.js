document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Redirect to another page after submission
    window.location.href = 'system_check.html'; // Replace with your target page
});
