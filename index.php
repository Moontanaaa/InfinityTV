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
        $headers = "From: $name <$email>";
        if (mail($to, $subject, $emailContent, $headers)) {
            echo json_encode(["status" => "success", "message" => "Votre message a été envoyé avec succès !"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Erreur lors de l'envoi de l'e-mail."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Veuillez remplir tous les champs."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Méthode de requête invalide."]);
}
