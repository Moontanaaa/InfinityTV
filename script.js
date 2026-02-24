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
        hero_desc_complete: "Découvrez <strong>Infinity TV</strong>, votre solution IPTV de qualité, conçue pour révolutionner votre expérience de divertissement.<br>Vous allez vivre un voyage sans fin à travers les chaînes et les contenus.",
        hero_rank: "N°1 en France",
        btn_offers: "Voir les offres",
        btn_test: "Test Gratuit",
        preview_title: "Tout votre contenu au même endroit",
        preview_item_1: "Films & Séries Illimités",
        preview_item_2: "Qualité 4K HDR",
        preview_item_3: "+50 000 Chaînes TV",
        plan_popular: "Le plus populaire",
        plat_standard_name: "Infinity Standard",
        plan_plus_name: "Infinity +",
        plan_family_name: "Infinity Family",
        plan_family_subtitle: "pour 1 Écran",
        feature_channels_14: "14 000 Chaînes",
        feature_channels_20: "20 000 Chaînes",
        feature_channels_40: "+ de 40 000 Chaînes",
        feature_quality_hd: "Qualité HD/FHD",
        feature_quality_4k: "Qualité 4K UHD",
        feature_vod: "VOD Films & Séries",
        feature_vod_unlimited: "VOD Illimitée",
        feature_support: "Support 24/7",
        feature_replay: "Replay & Time-Shift",
        feature_antifreeze: "Anti-Freeze",
        feature_screens: "Jusqu'à 3 Écrans",
        feature_vpn: "VPN Intégré",
        feature_dns: "DNS Illimités",
        feature_server: "4K HDR+ & Serveurs Dédiés",
        screens_2: "2 Écrans",
        screens_3: "3 Écrans",
        plan_btn_choose: "Choisir",
        plan_btn_config: "Configurer",
        reviews_title: "Ce que disent nos clients",
        review_1: "\"Honnêtement bluffer par la qualité. Je n'ai plus aucun freeze sur les match de foot, c'est incroyable.\"",
        review_2: "\"J'ai remplacé Netflix et Canal par cet abonnement. L'économie est énorme et j'ai encore plus de films.\"",
        review_3: "\"Installation super rapide, le support m'a aidé en 5 minutes sur WhatsApp. Je recommande.\"",
        faq_title: "Questions Fréquentes",
        faq_subtitle: "Tout ce que vous devez savoir sur le service IPTV N°1 en France.",
        faq_q1: "Sur quels appareils ça fonctionne ?",
        faq_a1: "InfinityTV est compatible avec tous les appareils connectés : Smart TV (Samsung, LG, Android), Boîtiers Android/Apple TV, Mag, Smartphones (iOS/Android), Tablettes et Ordinateurs. Nous vous aidons à la configuration.",
        faq_q2: "Puis-je tester avant d'acheter ?",
        faq_a2: "Oui, absolument ! Nous proposons un <strong>test gratuit de 24h</strong> pour vous permettre de juger par vous-même de la qualité 4K et de la stabilité de nos serveurs.",
        faq_q3: "J'ai besoin d'un débit internet rapide ?",
        faq_a3: "Nous recommandons une vitesse d'au moins 10-15 Mbps pour la 4K. Nos serveurs adaptent aussi le flux si votre connexion est plus lente (qualité HD/SD disponible) pour éviter les coupures.",
        faq_q4: "Comment se passe le paiement et l'activation ?",
        faq_a4: "Contactez-nous simplement via WhatsApp. Le processus est sécurisé et l'activation est immédiate (moins de 15 minutes) après validation.",
        footer_legal: "Mentions Légales",
        footer_contact: "Contact",
        footer_copyright: "&copy; 2026 InfinityTV. Tous droits réservés.",
        footer_created: "Créé par"
    },
    en: {
        nav_home: "Home",
        nav_offers: "Pricing",
        nav_reviews: "Reviews",
        nav_subscribe: "Subscribe",
        hero_title: "Infinity TV - TV Reinvented!",
        hero_desc_complete: "Discover <strong>Infinity TV</strong>, your premium IPTV solution designed to revolutionize your entertainment experience.<br>Embark on an endless journey through channels and content.",
        hero_rank: "#1 in France",
        btn_offers: "See Plans",
        btn_test: "Free Trial",
        preview_title: "All your content in one place",
        preview_item_1: "Unlimited Movies & Series",
        preview_item_2: "4K HDR Quality",
        preview_item_3: "+50,000 TV Channels",
        plan_popular: "Most Popular",
        plat_standard_name: "Infinity Standard",
        plan_plus_name: "Infinity +",
        plan_family_name: "Infinity Family",
        plan_family_subtitle: "for 1 Screen",
        feature_channels_14: "14,000 Channels",
        feature_channels_20: "20,000 Channels",
        feature_channels_40: "+40,000 Channels",
        feature_quality_hd: "HD/FHD Quality",
        feature_quality_4k: "4K UHD Quality",
        feature_vod: "VOD Movies & Series",
        feature_vod_unlimited: "Unlimited VOD",
        feature_support: "24/7 Support",
        feature_replay: "Replay & Time-Shift",
        feature_antifreeze: "Anti-Freeze",
        feature_screens: "Up to 3 Screens",
        feature_vpn: "Built-in VPN",
        feature_dns: "Unlimited DNS",
        feature_server: "4K HDR+ & Dedicated Servers",
        screens_2: "2 Screens",
        screens_3: "3 Screens",
        plan_btn_choose: "Choose",
        plan_btn_config: "Configure",
        reviews_title: "What our customers say",
        review_1: "\"Honestly blown away by the quality. No more freezes during football matches, it's incredible.\"",
        review_2: "\"I replaced Netflix and Canal with this subscription. The savings are huge and I have even more movies.\"",
        review_3: "\"Super fast installation, support helped me in 5 minutes on WhatsApp. I recommend it.\"",
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Everything you need to know about France's #1 IPTV service.",
        faq_q1: "Which devices are compatible?",
        faq_a1: "InfinityTV works with all connected devices: Smart TVs (Samsung, LG, Android), Android/Apple TV boxes, Mag, Smartphones (iOS/Android), Tablets, and PC. We help you with the setup.",
        faq_q2: "Can I test before buying?",
        faq_a2: "Yes, absolutely! We offer a <strong>24h free trial</strong> so you can judge the 4K quality and server stability for yourself.",
        faq_q3: "Do I need fast internet?",
        faq_a3: "We recommend at least 10-15 Mbps for 4K. Our servers also adapt the stream if your connection is slower (HD/SD quality available) to prevent buffering.",
        faq_q4: "How do payment and activation work?",
        faq_a4: "Simply contact us via WhatsApp. The process is secure, and activation is immediate (less than 15 minutes) after validation.",
        footer_legal: "Legal Notice",
        footer_contact: "Contact",
        footer_copyright: "&copy; 2026 InfinityTV. All rights reserved.",
        footer_created: "Created by"
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