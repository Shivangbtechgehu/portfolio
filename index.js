document.addEventListener("DOMContentLoaded", function () {
    const hireBtn = document.getElementById("hireBtn");
    const aboutSection = document.getElementById("aboutSection");
    const skillsSection = document.getElementById("skillsSection");
    const contactSection = document.getElementById("contactSection");

    // Toggle visibility for each section inside the Hire Me button
    hireBtn.addEventListener("click", function () {
        // Toggle the visibility of the About Me, Skills, and Contact sections
        if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
            aboutSection.style.display = "block";
            skillsSection.style.display = "block";
            contactSection.style.display = "block";
        } else {
            aboutSection.style.display = "none";
            skillsSection.style.display = "none";
            contactSection.style.display = "none";
        }
    });

    const navLinks = document.querySelectorAll("nav a");

    // Add active class to current page link
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Smooth scrolling for internal links
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
