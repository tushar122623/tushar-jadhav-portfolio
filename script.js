// Smooth scrolling for links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Trigger animation when the section is visible
    const animateProgress = () => {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    };

    // Observe when skills section is visible
    const skillsSection = document.querySelector('#skills');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateProgress();
        }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});
// Dynamic Greeting Based on Time of Day
document.addEventListener("DOMContentLoaded", () => {
    const greetingMessage = document.getElementById("greeting-message");
    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingMessage.textContent = greeting + " Thank you for visiting my portfolio.";
});
