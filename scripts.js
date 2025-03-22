document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response-message").textContent = "Message sent successfully!";
});
