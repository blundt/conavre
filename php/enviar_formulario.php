<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge y limpia los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $title_text = htmlspecialchars($_POST['title_text']);
    $message = htmlspecialchars($_POST['message']);
    $company = htmlspecialchars($_POST['company']);

    // Dirección de correo electrónico a la que se enviará el mensaje
    $to = "contacto@conavre.com";
    $subject = $title_text; // El asunto será el título del texto
    $body = "Nombre: $name\nEmpresa: $company\nEmail: $email\n\nMensaje:\n$message\n\n---\nNombre: $name\nEmpresa: $company\nCorreo Electrónico: $email";

    // Cabeceras de correo
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto. Serás redirigido a la página principal en 5 segundos.";
        header("refresh:5;url=../index.html");
    } else {
        echo "Lo sentimos, ha ocurrido un error. Por favor, inténtalo de nuevo.";
    }
} else {
    echo "Acceso no permitido.";
}
?>
