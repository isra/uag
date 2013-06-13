<?php
  
  require_once('../reglasnegocio/catalogoPersonal.class.php');
  require_once('../reglasnegocio/personal.class.php');
  
  if(isset( $_REQUEST['opcion']))
    $_opcion = $_REQUEST['opcion'];
  else
    $_opcion = -1;
  
  switch($_opcion)
  {
    case 0:
            $_nombres= $_POST['nombres'];
            $_apellidos= $_POST['apellidos'];
            $_password= $_POST['password'];
            $miPersona=new personal(0,$_nombres,$_apellidos,$_password);
            $cPersonal=new catalogoPersonal();
            $cPersonal->agregar($miPersona);
            echo "alta correcta de:".$_nombres;
            break;
    case 1:
            $cPersonal=new catalogoPersonal();
            echo "<table border=\"0\" cellPadding=\"2\" cellSpacing=\"0\" id=\"tablaListaPersonal\" align=\"center\"><tbody><tr><th>Clave</th><th>Nombres</th><th>Apellidos</th></tr>";
            $index=0;
            foreach($cPersonal->obtenerTodos() as $persona)
            {
               if (($index % 2) == 0 )
                  echo "<tr id=\"cero\"><td>".$persona->getId()."</td><td>".$persona->getNombres()."</td><td>".$persona->getApellidos()."</td></tr>";
               else
                  echo "<tr id=\"uno\"><td>".$persona->getId()."</td><td>".$persona->getNombres()."</td><td>".$persona->getApellidos()."</td></tr>";
               $index = $index + 1;
            }
            echo "</tbody></table>";
            break;
    case 3:
            $idPersonal=$_GET['idPersonal'];
            $cPersonal=new catalogoPersonal();
            $persona=$cPersonal->obtener($idPersonal);
            if ($persona->getNombres() == '')
            {
              echo "No se encontro ningun registro con esa clave";
            }
            else
            {
              $cPersonal->eliminar($idPersonal);
              echo "se elimino registro: ".$idPersonal." ".$persona->getNombres()." ".$persona->getApellidos();
            } 
            break;
    case 4:
            $idPersonal=$_GET['idPersonal'];
            $cPersonal=new catalogoPersonal();
            $persona=$cPersonal->obtener($idPersonal);
            if ($persona->getNombres() == '')
            {
              echo "No se encontro ningun registro con esa clave";
            }
            else
            {
              echo "<h3>Clave Personal: ".$idPersonal."  Nombres: ".$persona->getNombres()."  Apellidos: ".$persona->getApellidos().'</h3>';
            } 
            break;
    case 5:
            $idPersonal=$_GET['idPersonal'];
            $cPersonal=new catalogoPersonal();
            $persona=$cPersonal->obtener($idPersonal);
            if ($persona->getNombres() == '')
            {
              echo "No se encontro ningun registro con esa clave";
            }
            else
            {
              ?><html>
                <head>
                <script language="JavaScript">
                </script>
                </head>
                <body>
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr><td>Clave Personal:</td><td><input type="text" name="txtIdPersonal" id="txtIdPersonal" value="<?php echo $idPersonal ?>" disabled size="5"></td></tr>
                    <tr><td>Nombres:</td><td><input type="text" name="txtNombresPersonal" id="txtNombresPersonal" size="20" value="<?php echo $persona->getNombres() ?>" maxLength="20"></td></tr>
                    <tr><td>Apellidos:</td><td><input type="text" name="txtApellidosPersonal" id="txtApellidosPersonal" size="30" value="<?php echo $persona->getApellidos() ?>" maxLength="30"></td></tr>
                    <tr><td>Password:</td><td><input type="password" name="txtPasswordPersonal" id="txtPasswordPersonal" size="15" value="<?php echo $persona->getPassword() ?>" maxLength="15"></td></tr>
                    <tr><td colspan="2" align="right"><input type="button" value="modificar informacion" id="btnModificarPersonal" onclick="modificarRegistroPersonal()"></td></tr>
                  </table>
                </body>
                </html> 
              <?php
            } 
            break;
    case 6:
            $_id= $_POST['idPersonal'];
            $_nombres= $_POST['nombres'];
            $_apellidos= $_POST['apellidos'];
            $_password= $_POST['password'];
            $miPersona=new personal($_id,$_nombres,$_apellidos,$_password);
            $cPersonal=new catalogoPersonal();
            $cPersonal->modificar($miPersona);
            echo "actualizacion correcta de personal: ".$_id;
            break;
    case 7:
            $cPersonal=new catalogoPersonal();
            echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\">";
            $index=0;
            foreach($cPersonal->obtenerTodos() as $persona)
            {
               if (($index % 2) == 0 )
                  echo "<option value=".$persona->getId()." id=\"cero\">".$persona->getId()." - ".$persona->getNombres()." ".$persona->getApellidos()."</option>";
               else
                  echo "<option value=".$persona->getId()." id=\"uno\">".$persona->getId()." - ".$persona->getNombres()." ".$persona->getApellidos()."</option>";
               $index = $index + 1;
            }
            
            echo "</select>";
            break;
    default:
            echo 'opcion incorrecta';
            
  }

//foreach($q as $index)

  /*require_once('../reglasnegocio/catalogoPersonal.class.php');
  require_once('../reglasnegocio/personal.class.php');

  
  $miPersona=new personal(0,"pau","pawuoo","pauuuwis");
  $cPersonal=new catalogoPersonal();
  $cPersonal->agregar($miPersona);
  echo "simon ya se agrego<br>";
  $cPersonal->eliminar(70);
  
  //modificar
  $miPersona->setId(10);
  $miPersona->setNombres("n");
  $miPersona->setApellidos("ey");
  $miPersona->setPassword("bi");
  
  $cPersonal->modificar($miPersona);
  
  
  
  echo "estos sob los registros";
  echo "<select size=10>";
  foreach($cPersonal->obtenerTodos() as $persona)
  {
    echo "<option value=".$persona->getId()." >".$persona->getId().$persona->getNombres()." ".$persona->getApellidos()."</option>";
  }
  echo "</select>";
  
  $persona=$cPersonal->obtener(100);
  echo "id:".$persona->getId()." nombre:".$persona->getNombres()." apellidos:".$persona->getApellidos()." password: ".$persona->getPassword()."<br>";
  */
?>