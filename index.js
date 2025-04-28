document.addEventListener("DOMContentLoaded", function () {
    const hireBtn = document.getElementById("hireBtn"); // Get Hire Me button
    const aboutSection = document.getElementById("aboutSection"); // About Me Section
    const skillsSection = document.getElementById("skillsSection"); // Skills Section
    const contactSection = document.getElementById("contactSection"); // Contact Section

    // Add click event listener for Hire Me button
    hireBtn.addEventListener("click", function () {
        // Check if sections are currently hidden and toggle visibility
        if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
            aboutSection.style.display = "block"; // Show About Me section
            skillsSection.style.display = "block"; // Show Skills section
            contactSection.style.display = "block"; // Show Contact section
        } else {
            aboutSection.style.display = "none"; // Hide About Me section
            skillsSection.style.display = "none"; // Hide Skills section
            contactSection.style.display = "none"; // Hide Contact section
        }
    });

    // Smooth scrolling for internal links (if any)
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
