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
const navContentEle = document.querySelector('.nav-content');
if (toggleBtn && navContentEle) {
    toggleBtn.addEventListener('click', () => {
        navContentEle.classList.toggle('active');  
    });
}

// Scroll Reveal Animation Observer
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal once
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});
revealElements.forEach(el => revealObserver.observe(el));

// Project Carousel Controls
const projectsTrack = document.getElementById('projects-track');
const wrapper = document.querySelector('.projects-carousel-wrapper');
const prevBtn = document.getElementById('prev-project-btn');
const nextBtn = document.getElementById('next-project-btn');
const scrollStatusSubtitle = document.getElementById('scroll-status-subtitle');

// Click-to-Pause / Click-to-Resume Toggle (Hover will NOT stop scrolling)
if (wrapper && projectsTrack) {
    wrapper.addEventListener('click', (e) => {
        // If clicking a link, let link open normally
        if (e.target.closest('a')) return;

        const isPaused = projectsTrack.classList.toggle('paused');
        if (scrollStatusSubtitle) {
            if (isPaused) {
                scrollStatusSubtitle.innerHTML = `<i class="fas fa-pause-circle" style="color: var(--accent-pink);"></i> Auto-scrolling Paused • Click to Resume`;
            } else {
                scrollStatusSubtitle.innerHTML = `<i class="fas fa-play-circle animate-pulse"></i> Auto-scrolling showcase • Click to pause/resume`;
            }
        }
    });
}

// Arrow Button Navigation
if (prevBtn && nextBtn && wrapper) {
    const scrollAmount = 380;
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent triggering pause toggle on wrapper click
        wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Cursor-Tracking Glow Effect on Cards
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Skills Category Filter Tabs
const skillTabBtns = document.querySelectorAll('.skill-tab-btn');
const skillCards = document.querySelectorAll('.skill-card-modern');

skillTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        skillTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tabCategory = btn.getAttribute('data-skill-tab');

        skillCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (tabCategory === 'all' || tabCategory === cardCategory) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});
