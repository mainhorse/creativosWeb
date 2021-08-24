<?php
if(isset($_POST['send'])){
    if(!empty($_POST['nombre']) && !empty($_POST['celular']) && !empty($_POST['correo']) && !empty($_POST['ideaProyecto'])){
        if($_POST['keep']){
            $Autorizacion = TRUE;
            $asunto = 'Cotización';
        } else {
            $Autorizacio = FALSE;
            $asunto = 'Cotización';
        }

        $name = $_POST['nombre'];
        $celular = $_POST['celular'];
        $correr = $_POST['correo']; 
        $msg = $_POST['ideaProyecto'];
        $header = "From: " . $correo . "\r\n";
        $header .= "Reply-To: cristianSanchezh@gmail.com, web.luismauriciomelo@hotmail.com" . "\r\n";
        $header .= 'X-Mailer: PHP/' . phpversion();
        $mail = @mail('Gerencia@creativosweb.com.co',$asunto,$msg,$header);
        if($mail){
            echo "<script>
                alert('Correo enviado');
                window.location = '../front/index.php';
              </script>";
                 
        } else{
            echo "<script> 
                alert('Intenta mas tarde');
                window.location = '../front/agency.php';
              </script>";
        }
    }
}

?>