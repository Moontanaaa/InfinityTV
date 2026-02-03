// ===================================
// NETFLIX UI - INFINITYTV
// JavaScript Interactions
// ===================================

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.netflix-nav');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Anchor Links
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

// Intersection Observer for Scroll Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);



// Observe pricing cards
document.querySelectorAll('.pricing-card').forEach(card => {
    observer.observe(card);
});

// Optional: Add parallax effect to billboard on scroll
window.addEventListener('scroll', function () {
    const billboard = document.querySelector('.billboard-bg');
    if (billboard) {
        const scrolled = window.scrollY;
        billboard.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Mobile Menu interactions
const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu-overlay');
const closeMenu = document.querySelector('.mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Resume scrolling
    });
}

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Console message
console.log('%c🎬 InfinityTV - Powered by Netflix UI', 'color: #E50914; font-size: 20px; font-weight: bold;');
console.log('%cDéveloppé par Montana Connect', 'color: #808080; font-size: 12px;');