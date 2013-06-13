<?php 
  session_start(); 
  if(!isset($_SESSION['nivel'])) 
    header('Location:../');
  if(!($_SESSION['nivel']==0)) 
    header('Location:../');
?>
<html>
<head>
  <title>Sistema de Consulta y Control de Tramites de Certificados</title>
  <link rel="StyleSheet" type="text/css" href="estilos.css">
  <script language="JavaScript" type="text/JavaScript" src="javas.js"></script>
</head>
<body>
  <table border="0" width="100%" style="text-align:right;font-style:oblique"><tr><td>Sistema de Consulta y Control de Tramites de Certificados</td></tr></table>
  <img src="encabezado.jpg">

  <div id="opciones2">
    <table border="0" cellSpacing="0" cellPadding="2" align="center"><tbody><tr><td><strong>Departamento:</strong></td><td><span id="configIdDepto"><?php echo $_SESSION['idDepto'];?></span></td><td>-</td><td><span id="configNombreDepto"><?php echo $_SESSION['strDepto'];?></span></td><td> | </td><td><strong> Personal:</strong></td><td><span id="configIdPersonal"><?php echo $_SESSION['idUsuario'];?></span></td><td>-</td><td><span id="configNombrePersonal"><?php echo $_SESSION['strUsuario'];?></span></td></tr></tbody></table>
  </div>
  <div id="opciones">
    <table border="0" cellSpacing="0" cellPadding="2"><tbody><tr><td id="0">Recepcion Tramite</td><th>|</th><td id="1">Tramites Pendientes</td><th>|</th><td id="2">Tramites Finalizados</td><th>|</th><td id="3">Responsabilidades Departamento</td></tr></tbody></table>
  </div>
  <div id="ContenedorlistaOpciones">
    <div id="listaOpciones"></div>
  </div>
  <hr>
  <div id="avisos">
  </div>
  <div id="tareas">
  </div>
  
</body>
</html>