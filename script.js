emailjs.init("eYZvFfiwEEVOw_BhJ");

// Contact Form Handler
document.getElementById('job-form').addEventListener('submit', function(e){
    e.preventDefault();

    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = "Sending... Please wait.";
    messageDiv.style.color = "var(--accent-indigo)";

    emailjs.sendForm("service_t59ylng", "template_4upyw27", this).then(function(response){
        console.log("Success", response.status, response.text);
        messageDiv.textContent = "🎉 Message sent successfully!";
        messageDiv.style.color = "#4ade80";
        messageDiv.style.textAlign = "center";
        messageDiv.style.fontSize = "16px";
        document.getElementById('job-form').reset();
    }, function(error){
        console.error("FAILED", error);
        messageDiv.textContent = "❌ Failed to send. Please try again later.";
        messageDiv.style.color = "#f87171";
        messageDiv.style.textAlign = "center";
    });
});

// Smooth Scrolling & Auto-collapse Menu on Mobile
document.querySelectorAll('.nav-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);  
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return; 

        // Collapse mobile menu
        const navContent = document.querySelector('.nav-content');
        navContent.classList.remove('active');

        // Scroll to target smoothly
        const targetPosition = targetSection.offsetTop - 80; // Offset for sticky header
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Title Toggler
const titles = ["Manikanta Allena", "PortFolio"];
let index = 0;
setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}, 2000);

// Navigation Drawer Toggle
const toggleBtn = document.getElementById('nav-toggle');
const navContent = document.querySelector('.nav-content');
if (toggleBtn && navContent) {
    toggleBtn.addEventListener('click', () => {
        navContent.classList.toggle('active');  
    });
}
