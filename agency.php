<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title> Creativos Web</title>
    <link rel="icon" type="image/png" href="img/faviconSVG.svg">
    <link rel="stylesheet" type="text/css" href="css/agency.css">
    <style>
        @font-face {
            font-family: Myriad;
            src: url(fonts/MYRIADPRO-BOLD.OTF);
        }
    </style>
  </head>
  <body>
    <nav>
        <div class="headLeft">
         <button class="pagMain" id="btnHome"> <img src='img/IconoparafondoblancoSVG.svg' width="100%" height="100%" alt="LOGO"></button> 
        </div>   
        <div class="headRight">
                <li><a href="briefCase.php">Portafolio</a></li>
                <li><a href="agency.php"> Agencia</a></li>
                <li><a href="contac.php"> Contacto</a></li>
        </div>   
    </nav> 
    <div class="main">
        <aside class="asideColorBlack">
            <p class="letterBig"> Somos una agencia</p>
            <p class="letterBig"> de productos <br> digitales</p>
            <p class="letterMidle">
            CreativosWeb es un equipo de expertos dedicados al diseño y creación de productos digitales, 
            con una estrategia multidisciplinar y un enfoque comercial. Un grupo de jóvenes con una mirada
            fresca y dinámica que ponen a la disposición de sus clientes todos sus conocimientos y experiencia. 
            Con sede en Bogotá Colombia y con alcance internacional buscamos siempre la satisfacción total de nuestros clientes.
            </p>
        </aside>
        <aside class="asideRight01" id="asideRight01">
            <div class="infCard">
                <p>
                    click!
                </p>
            </div>
        </aside>    
    </div>  
    <section class="modal" id="modal">
        <aside class="leftModal" id="leftModal">
        </aside>
        <aside class="rightModal" id="rightModal">
            <p> 
                Solicitar cotización
            </p>       
            <button id="closeModal">
                salir
            </button>      
            <form action="../front/envio.php" method="POST"> 
                <div class="conInput">
                    <input placeholder="Nombre" name="nombre" required>
                </div>
                <div class="conInput">
                    <input placeholder="Celular" name="celular" required >
                </div>
                <div class="conInput">
                    <input placeholder="Correo electronico" name="correo" required>
                </div>     
                <textarea placeholder="Escribe la idea de tu proyecto" required name="ideaProyecto"></textarea>              
                <input  type="checkbox" name="keep" required>
                <label for="keep">Keep me signed in</label>
                <a> Already a member? </a>
                <input type="submit" name="send" />   
            </form> 
        </aside>
    </section>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>   
  <script type="text/javaScript" src="js/javaScriptAgency.js"></script>  
  </body>
</html>  