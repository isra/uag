<?php
  require_once('../reglasnegocio/tramite.class.php');
  require_once('../reglasnegocio/catalogoTramite.class.php');
  
  if(isset($_REQUEST['opcion']))
    $_opcion = $_REQUEST['opcion'];
  else
    $_opcion = -1;
  
  switch($_opcion)
  {
    case 0:
            //agregar nuevo tramite
            $nombreTramite=$_POST['nombreTramite'];
            $tramite=new tramite(0,$nombreTramite);
            $cTramite= new CatalogoTramites();
            $cTramite->agregar($tramite);
            echo "Se agrego tramite: ".$nombreTramite;
            break;
    case 1: 
            //Eliminar tramite
            $idTramite=$_GET['idTramite'];
            $cTramite= new CatalogoTramites();
            
            $tramite=$cTramite->obtener($idTramite);
            if($tramite==false)
              echo 'No se encontro registro de Tramite con la Clave: '.$idTramite;
            else
            {
              echo "Se elimino tramite: ".$tramite->getId()." - ".$tramite->getDescripcion();
              $cTramite->eliminar($idTramite);
            }
            break;
    case 2: 
            //listado de todos los tramites en un combo SELECT(html)
            $opc=$_GET['opc'];
            
            $cTramite= new CatalogoTramites();
            if($opc == 0)
              //listado todos los tramites
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\">";
            if($opc == 1)
              //listado todos los tramites - Modificar Informacion
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"modificarInfoTramiteMostrar(this.value)\">";
            if($opc == 2)
              //listado todos los tramites - Agregar los departamentos
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"agregarDeptoTramiteMostrar()\">";
            if($opc == 3)
              //listado todos los tramites - listar departamentos
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"MostrarEliminarDeptosTramite(this.value,'0')\">";
            if($opc == 4)
              //listado todos los tramites - eliminar departamentos
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"MostrarEliminarDeptosTramite(this.value,'1')\">";
            if($opc == 5)
              //listado todos los tramites - informacion general de tramite
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"infoGralTramite(this.value)\">";
            
            
            
            $index=0;
            $contador=0;
            
            foreach($cTramite->obtenerTodos() as $miTramite)
            {
               if($contador==0)
                  echo "<option value=\"0\">- Selecciona Tramite -</option>";
               $contador++;
               if (($index % 2) == 0 )
                  echo "<option value=".$miTramite->getId()." id=\"cero\">".$miTramite->getId()." - ".$miTramite->getDescripcion()."</option>";
               else
                  echo "<option value=".$miTramite->getId()." id=\"uno\">".$miTramite->getId()." - ".$miTramite->getDescripcion()."</option>";
               $index = $index + 1;
            }
            echo "</select>";
            break;
    case 3: 
            //mostrar informacion de Tramite para modificar en (html)
            $idTramite=$_GET['idTramite'];
            $cTramite= new CatalogoTramites();
            $tramite=$cTramite->obtener($idTramite);
            
            echo "<table border=\"0\" cellpadding=\"3\" cellspacing=\"0\"><tbody>";
            echo "<tr><td>Clave Tramite:</td><td><input type=\"text\" id=\"txtIdEscuela\" value=\"".$tramite->getId()."\" disabled size=\"5\"></td></tr>";
            echo "<tr><td>Nombre:</td><td><input type=\"text\" id=\"txtNombreEscuela\" size=\"30\" value=\"".$tramite->getDescripcion()."\" maxLength=\"20\"></td></tr>";
            echo "<tr><td colspan=\"2\" align=\"right\"><input type=\"button\" value=\"modificar informacion\" id=\"btnModificarPersonal\" onclick=\"modificarRegistroTramite()\"></td></tr>";
            echo "</tbody></table>";
            break;
    case 4:
            $idTramite=$_GET['idTramite'];
            $nombreTramite=$_GET['nombreTramite'];
            $tramite=new tramite($idTramite,$nombreTramite);
            
            $cTramite= new CatalogoTramites();
            $cTramite->modificar($tramite);
            echo "se modifico inoformacion de tramite con clave: ".$idTramite;
            break;
    case 5:
            $idTramite=$_GET['idTramite'];
            $idDepto=$_GET['idDepto'];
            $tramite=new tramite($idTramite,'x');
            $tramite->setListaDepartamentos($idDepto);     
            
            $cTramite= new CatalogoTramites();
            $cTramite->asignarDepartamentos($tramite);
            echo "se asigno Departamento con clave: ".$idDepto;
            break;
    case 6:
            $idTramite=$_GET['idTramite'];
            $op=$_GET['op'];
            
            $cTramite= new CatalogoTramites();
            $tramite=$cTramite->obtenerListaDepartamentos($idTramite);
            
            //echo "<br>Id:".$tramite->getId()." Clave departamento:".$depto->getId()." Nombre Departamento:".$depto->getNombre();
            
            $index=0;
            if($op=='0')
            {
              foreach( $tramite->getListaDepartamentos() as $depto)
              { 
                echo "<p>".$depto->getId()." - ".$depto->getNombre()."</p>";
                $index++;
              }
            }
            if($op=='1')
            {
              foreach( $tramite->getListaDepartamentos() as $depto)
              { 
                if($index==0) echo "<table border=\"0\" align:\"left\" width=\"100%\" cellpadding=\"2\" cellspacing=\"0\"><tbody>";
                echo "<tr><td width=\"10px\"><input type=\"checkbox\" name=\"checkbox\" id=\"checkbox".$index."\" value=\"".$depto->getId()."\"></td><td>".$depto->getId()." - ".$depto->getNombre()."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
              
            }
            if($index==0)
            { 
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Al Tramite aun no se le han asignado Departamentos.</h3>";
            }
            if($op=='1' && $index > 0)
            {
              echo "<html><input type=\"button\" value=\"Quitar Departamento\" id=\"eliminarDeptosResp\" onclick=\"EliminarDeptoTramite()\"></html>";
            }
            break;
    case 7:
            $idTramite=$_GET['idTramite'];
            $idDepto=$_GET['idDepto'];
            
            $cTramite= new CatalogoTramites();
            $tramite=$cTramite->eliminarDepto($idTramite,$idDepto);
            echo "Se ha quitado Departamento: ".$idDepto;
            break;
    case 8:
            //mostrar informacion de la tramite(html)
            $idTramite= $_GET['idTramite'];
            $cTramite= new CatalogoTramites();
            $tramite=$cTramite->obtener($idTramite);
            
            echo "<table border=\"0\" width=\"100%\" cellpadding=\"3\" cellspacing=\"2\" id=\"divListaResp\"><tbody>";
            echo "<tr style=\"background-color:ffd;\"><th colspan=\"2\">Informacion General De Tramite</th></tr>";
            
            echo "<tr><td align=\"right\"><strong>Clave Tramite:</strong></td><td><input type=\"text\" value=\"".$tramite->getId()."\" disabled size=\"5\"></td></tr>";
            echo "<tr><td align=\"right\"><strong>Nombre:</strong></td><td><input type=\"text\" size=\"30\" value=\"".$tramite->getDescripcion()."\" disabled></td></tr>";
            echo "<tr style=\"background-color:ffd;\"><th colspan=\"2\">Listado de Departamentos por los Cuales Sera Revisado el Tramite</th><tr><td colspan=\"2\">";
            
            $cTramite= new CatalogoTramites();
            $tramite=$cTramite->obtenerListaDepartamentos($idTramite);
            
            $index=0;
            foreach( $tramite->getListaDepartamentos() as $depto)
            { 
              echo "<p>".$depto->getId()." - ".$depto->getNombre()."</p>";
              $index++;
            }
            if($index==0)
            { 
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Al Tramite aun no se le han asignado departamentos.</h3>";
            }
            echo "</td><tr></tbody></table>";
            break;
    default:
            break;
  }
           


/*
  require_once('../reglasnegocio/tramite.class.php');
  require_once('../reglasnegocio/catalogoTramite.class.php');

  $tramite=new tramite(0,"certificado total");
  $cTramite= new CatalogoTramites();
  
  $cTramite->agregar($tramite);
  $cTramite->eliminar(5);
  
  $tramite->setId(29);
  $tramite->setDescripcion("constancia de 50 peses");
  
  $cTramite->modificar($tramite);
  
  
   $tramite=$cTramite->obtener(15);
   echo $tramite->getId()." ".$tramite->getDescripcion();
   
   foreach($cTramite->obtenerTodos() as $miTramite)
   {
      echo "<br>Id:".$miTramite->getId()." Descripcion:".$miTramite->getDescripcion();
   }

   $tramite->setId(11);
   for($i=20;$i<26;$i++)
   {
      $tramite->setListaDepartamentos($i);     
   }
   $cTramite->asignarDepartamentos($tramite);
   
   
   $tramite=$cTramite->obtenerListaDepartamentos(11);
   foreach( $tramite->getListaDepartamentos() as $depto)
   {
      echo "<br>Id:".$tramite->getId()." Clave departamento:".$depto->getId()." Nombre Departamento:".$depto->getNombre();
   }
*/
?>