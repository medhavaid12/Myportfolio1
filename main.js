var typed= new typed(".text",{
    String:["Frontend Developer", "B.Tech. AIML Student", "Web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


// Function to handle highlighting the active navigation link
function highlightNavLink() {
    let scrollPosition = window.scrollY;  // Get the current scroll position

    // Get all the section elements and the navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    // Loop through each section to determine which one is in view
    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop - 10 && scrollPosition < section.offsetTop + section.offsetHeight - 10) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the corresponding link
            navLinks[index].classList.add('active');
        }
    });
}

// Add an event listener for scroll events
window.addEventListener('scroll', highlightNavLink);

// Ensure the active class is applied when the page is loaded and scrolled
highlightNavLink();
