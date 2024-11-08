document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Vérification de base des champs
    if (name && email && message) {
        // Envoi des données au back-end PHP
        fetch('contact-form-handler.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    displayResponse(data.message, 'success');
                } else {
                    displayResponse(data.message, 'error');
                }
            })
            .catch(() => {
                displayResponse("Erreur de connexion avec le serveur.", 'error');
            });
    } else {
        displayResponse('Veuillez remplir tous les champs.', 'error');
    }
});


document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show'); // Fermer le menu
    });
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".modern-header");

    if (window.pageYOffset < 100) { // Lorsque le défilement dépasse 100 pixels
        navbar.classList.add("fixed"); // Ajoute la classe fixed
    } else {
        navbar.classList.remove("fixed"); // Retire la classe fixed
    }
});