
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les données du formulaire
    const formData = new FormData(this);

    // Envoi des données via AJAX
    fetch("index.php", { // Remplacez par le chemin réel vers le script PHP
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const responseMessage = document.getElementById("responseMessage");
        if (data.status === "success") {
            responseMessage.innerHTML = data.message;
            responseMessage.style.color = "green";
            this.reset(); // Réinitialise le formulaire en cas de succès
        } else {
            responseMessage.innerHTML = data.message;
            responseMessage.style.color = "red";
        }
    })
    .catch(error => {
        console.error("Erreur:", error);
        document.getElementById("responseMessage").innerHTML = "Une erreur s'est produite. Veuillez réessayer plus tard.";
    });
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