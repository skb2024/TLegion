<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "traplegion@solargentinotv.com.ar";
    $subject = "Nuevo mensaje de TrapLegion";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    $body = "Nombre: $name <br> Email: $email <br> Mensaje: $message";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mensaje enviado correctamente. Gracias por contactarnos.'); window.location = 'contact.html';</script>";
    } else {
        echo "<script>alert('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.'); window.location = 'contact.html';</script>";
    }
}
?>