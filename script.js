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

// ===================================
// MULTI-LANGUAGE SUPPORT (FR/EN)
// ===================================

const translations = {
    fr: {
        nav_home: "Accueil",
        nav_offers: "Abonnements",
        nav_reviews: "Avis",
        nav_subscribe: "S'abonner",
        hero_title: "Infinity TV - La Télévision Réinventée !",
        hero_desc_1: "Découvrez <strong>Infinity TV</strong>, votre solution IPTV de qualité, conçue pour révolutionner votre expérience de divertissement.",
        hero_desc_2: "Vous allez vivre un voyage sans fin à travers les chaînes et les contenus.",
        hero_rank: "N°1 en France",
        btn_offers: "Voir les offres",
        btn_test: "Test Gratuit",
        pricing_title: "Choisissez votre forfait",
        faq_title: "Questions Fréquentes",
        faq_subtitle: "Tout ce que vous devez savoir sur le service IPTV N°1 en France.",
        faq_q1: "Sur quels appareils ça fonctionne ?",
        faq_a1: "InfinityTV est compatible avec tous les appareils connectés : Smart TV (Samsung, LG, Android), Boîtiers Android/Apple TV, Mag, Smartphones (iOS/Android), Tablettes et Ordinateurs. Nous vous aidons à la configuration.",
        faq_q2: "Puis-je tester avant d'acheter ?",
        faq_a2: "Oui, absolument ! Nous proposons un <strong>test gratuit de 24h</strong> pour vous permettre de juger par vous-même de la qualité 4K et de la stabilité de nos serveurs.",
        faq_q3: "J'ai besoin d'un débit internet rapide ?",
        faq_a3: "Nous recommandons une vitesse d'au moins 10-15 Mbps pour la 4K. Nos serveurs adaptent aussi le flux si votre connexion est plus lente (qualité HD/SD disponible) pour éviter les coupures.",
        faq_q4: "Comment se passe le paiement et l'activation ?",
        faq_a4: "Contactez-nous simplement via WhatsApp. Le processus est sécurisé et l'activation est immédiate (moins de 15 minutes) après validation."
    },
    en: {
        nav_home: "Home",
        nav_offers: "Pricing",
        nav_reviews: "Reviews",
        nav_subscribe: "Subscribe",
        hero_title: "Infinity TV - TV Reinvented!",
        hero_desc_1: "Discover <strong>Infinity TV</strong>, your premium IPTV solution designed to revolutionize your entertainment experience.",
        hero_desc_2: "Embark on an endless journey through channels and content.",
        hero_rank: "#1 in France",
        btn_offers: "See Plans",
        btn_test: "Free Trial",
        pricing_title: "Choose Your Plan",
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Everything you need to know about France's #1 IPTV service.",
        faq_q1: "Which devices are compatible?",
        faq_a1: "InfinityTV works with all connected devices: Smart TVs (Samsung, LG, Android), Android/Apple TV boxes, Mag, Smartphones (iOS/Android), Tablets, and PC. We help you with the setup.",
        faq_q2: "Can I test before buying?",
        faq_a2: "Yes, absolutely! We offer a <strong>24h free trial</strong> so you can judge the 4K quality and server stability for yourself.",
        faq_q3: "Do I need fast internet?",
        faq_a3: "We recommend at least 10-15 Mbps for 4K. Our servers also adapt the stream if your connection is slower (HD/SD quality available) to prevent buffering.",
        faq_q4: "How do payment and activation work?",
        faq_a4: "Simply contact us via WhatsApp. The process is secure, and activation is immediate (less than 15 minutes) after validation."
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('infinity_lang') || 'fr';
        // Select both desktop (id) and mobile (class) buttons
        this.toggleBtns = document.querySelectorAll('#lang-toggle, .lang-toggle-btn');

        if (this.toggleBtns.length > 0) {
            this.init();
        }
    }

    init() {
        // Set initial state
        this.updateUI();

        // Event listeners for all buttons
        this.toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
                localStorage.setItem('infinity_lang', this.currentLang);
                this.updateUI();
            });
        });
    }

    updateUI() {
        // Update All Buttons Text
        this.toggleBtns.forEach(btn => {
            btn.innerText = this.currentLang === 'fr' ? 'FR | EN' : 'EN | FR';
        });

        // Translate Elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                const translation = translations[this.currentLang][key];
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});