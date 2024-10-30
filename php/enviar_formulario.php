<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge y limpia los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Dirección de correo electrónico a la que se enviará el mensaje
    $to = "contacto@conavre.com";
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Nombre: $name\nEmail: $email\nMensaje:\n$message";

    // Cabeceras de correo
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
    } else {
        echo "Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
