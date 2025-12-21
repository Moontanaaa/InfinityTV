<?php
// Configuration des variables
$to = "infinitytv.infoclients@gmail.com"; // Remplacez par votre adresse e-mail
$subject = "Nouveau message de contact depuis InfinityTV";

// Vérification si les données ont été envoyées via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validation de base des champs
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Construction du contenu de l'e-mail
        $emailContent = "Nom: $name\n";
        $emailContent .= "Email: $email\n\n";
        $emailContent .= "Message:\n$message\n";

        // Envoi de l'e-mail
        // Utiliser une adresse fixe du domaine pour le 'From' évite souvent les spam
        // L'adresse 'Reply-To' permet de répondre directement au client
        $headers = "From: no-reply@infinitytv.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $emailContent, $headers)) {
            echo json_encode(["status" => "success", "message" => "Votre message a été envoyé avec succès !"]);
        } else {
            // Log l'erreur côté serveur si possible, renvoi erreur client
            echo json_encode(["status" => "error", "message" => "Erreur serveur : l'envoi a échoué."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Veuillez remplir tous les champs."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Méthode de requête invalide."]);
}
