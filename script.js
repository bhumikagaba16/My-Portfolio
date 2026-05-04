// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("status");

    if (name === "" || email === "" || message === "") {
        status.innerHTML = "Please fill all fields!";
        status.style.color = "red";
    } else {
        status.innerHTML = "Message Sent Successfully!";
        status.style.color = "green";

        // Clear fields
        document.getElementById("contactForm").reset();
    }
});
