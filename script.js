function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("successMessage").textContent =
        "Thank you! Your message has been received.";

    this.reset();
});