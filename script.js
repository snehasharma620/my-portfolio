document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Navbar Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.navlist');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- 2. Typewriter Effect for Homepage ---
    const nameSpan = document.querySelector('.hero-section .content h1 span');
    if (nameSpan && nameSpan.textContent.includes('SNEHA SHARMA')) {
        const text = "SNEHA SHARMA";
        nameSpan.textContent = ''; // Clear the text
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                nameSpan.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150); // Adjust typing speed here
            }
        }
        typeWriter();
    }

    // --- 3. Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all relevant sections and cards
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .about-container, .contact-container');
    elementsToAnimate.forEach(el => observer.observe(el));

});