<html>
    <head>
        <title>Sample</title>
    </head>
    <body>
        <?php
        if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
            $to = "contacto@porttobelhoeventos.com , ef.moyano@gmail.com";
            $subject = "Consulta de Salón Portto Belho";
            $contenido .= "Nombre: " . $_POST["name"] . "\n";
            $contenido .= "Teléfono: " . $_POST["phone"] . "\n\n";
            $contenido .= "Tipo de Evento: " . $_POST["category"] . "\n\n";
            $contenido .= "Fecha: " . $_POST["category"] . $_POST["year"] . $_POST["month"] . $_POST["day"] .  "\n\n";
            $contenido .= "Email: " . $_POST["email"] . "\n\n";
            $contenido .= "Consulta: " . $_POST["message"] . "\n\n";
            $header = "From: contacto@porttobelhoeventos.com\nReply-To:" . $_POST["email"] . "\n";
            $header .= "Mime-Version: 1.0\n";
            $header .= "Content-Type: text/plain";
            if (mail($to, $subject, $contenido, $header)) {
                echo "Mail Enviado.";
            } else {
                echo "Error al enviar el mensaje.";
            }
        } else {
            echo "Por favor, rellene todos los campos";
        }
        ?>
    </body>
</html>