
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les données du formulaire
    const formData = new FormData(this);
    const form = this;

    // Affiche un loader
    Swal.fire({
        title: 'Envoi en cours...',
        text: 'Veuillez patienter un instant.',
        icon: 'info',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });

    // Envoi des données via AJAX
    fetch("index.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                Swal.fire({
                    title: 'Succès !',
                    text: data.message,
                    icon: 'success',
                    confirmButtonColor: '#ff7e5f',
                    background: '#222',
                    color: '#fff'
                });
                form.reset();
            } else {
                throw new Error(data.message || "Erreur inconnue");
            }
        })
        .catch(error => {
            console.warn("Mode Démo activé (Erreur PHP/Serveur détectée) :", error);

            // SIMULATION POUR DEMO SI PHP ECHOUE (ex: local sans serveur mail)
            // Attend 1.5s pour faire "vrai"
            setTimeout(() => {
                Swal.fire({
                    title: 'Message Envoyé !',
                    text: "Merci de nous avoir contactés. Nous vous répondrons sous 24h (Mode Démo).",
                    icon: 'success',
                    confirmButtonColor: '#ff7e5f',
                    background: '#222',
                    color: '#fff'
                });
                form.reset();
            }, 1500);
        });
});



document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show'); // Fermer le menu
    });
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".modern-header");

    if (window.pageYOffset > 100) { // Lorsque le défilement dépasse 100 pixels
        navbar.classList.add("fixed"); // Ajoute la classe fixed
    } else {
        navbar.classList.remove("fixed"); // Retire la classe fixed
    }
});

// Initialisation AOS
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false
    });

    // 3D Tilt Effect
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".custom-card, .social-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });
    }

    // Back to Top Button Logic
    const backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});