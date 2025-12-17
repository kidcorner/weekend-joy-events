// Particle System for Hero
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        container.appendChild(particle);
    }
}

// Initialize particles on page load
createParticles();

// Navbar scroll effect with section-based color changes
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

// Section color mapping (purple → orange → red → green cycle)
const sectionColors = {
    'hero': 'purple',
    'this-weekend': 'purple',
    'activities': 'orange',
    'families': 'red',
    'events': 'green',
    'newsletter': 'purple'
};

function updateNavbarColor() {
    const scrollPos = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Remove all color classes
    navbar.classList.remove('purple', 'orange', 'red', 'green');
    
    if (scrollPos < 50) {
        navbar.classList.remove('scrolled');
        return;
    }
    
    navbar.classList.add('scrolled');
    
    // Determine which section is in view
    const sections = document.querySelectorAll('section[id], .hero');
    let currentSection = 'hero';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.id || 'hero';
        
        if (scrollPos >= sectionTop) {
            currentSection = sectionId;
        }
    });
    
    // Apply color based on section
    const color = sectionColors[currentSection] || 'purple';
    navbar.classList.add(color);
}

window.addEventListener('scroll', () => {
    updateNavbarColor();
    lastScroll = window.pageYOffset;
});

// Initial check
updateNavbarColor();

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! We'll send weekly updates to ${email}`);
        newsletterForm.reset();
    });
}

// Load More Events Button
const loadMoreBtn = document.querySelector('.load-more');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        alert('Loading more events... (This is a demo functionality)');
    });
}

// Enhanced scroll animation observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger the animation for multiple elements
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all cards and sections with initial hidden state
document.querySelectorAll('.featured-card, .activity-card, .guide-card, .event-item, .showcase-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Removed parallax effect - keeping it simple

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Removed duplicate navbar scroll handler

// Card click handlers for demo (only for placeholder links)
document.querySelectorAll('.btn-outline').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            alert('This would navigate to the event details page. (Demo functionality)');
        }
    });
});

// Simple hover effects - no complex animations

// Console welcome message
console.log('%c🎉 Welcome to WeekendJoy! ', 'background: linear-gradient(135deg, #5A4A9F 0%, #9D8EC7 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold;');
console.log('%cDiscover amazing family activities every weekend!', 'color: #6B5CA5; font-size: 14px; font-weight: 600;');

// Add loading animation completion
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('%c✨ Page fully loaded!', 'color: #5A4A9F; font-size: 12px;');
});

