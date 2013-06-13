<?php

  require_once('../reglasnegocio/escuela.class.php');
  require_once('../reglasnegocio/catalogoEscuela.class.php');
  
  if(isset($_REQUEST['opcion']))
    $_opcion = $_REQUEST['opcion'];
  else
    $_opcion = -1;
  
  switch($_opcion)
  {
    case 0:
            $nombre=$_POST['nombre'];
            $idResponsable=$_POST['idResponsable'];
            $idRevisor=$_POST['idRevisor'];
            
            $escuela= new escuela(0,$nombre,$idResponsable,$idRevisor);
            $cEscuela= new catalogoEscuelas();
            $cEscuela->agregar($escuela);
            echo "se agrego escuela: ".$nombre;
            break;
    case 1:
            $idEscuela=$_GET['idEscuela'];
            $cEscuela= new catalogoEscuelas();
            $escuela=$cEscuela->obtener($idEscuela);  
            if($escuela==false)
               echo 'No se encontro registro de Escuela con la Clave: '.$idEscuela;
            else
            {
              $responsable=$escuela->getResponsable();
              $revisor=$escuela->getRevisor();
              echo "Se elimino Escuela con Clave: ".$escuela->getId().", Nombre:".$escuela->getNombre()."<br>Responsable:".$responsable->getId()." ".$responsable->getNombres()." ".$responsable->getApellidos().
              "<br>Revisor:".$revisor->getId()." ".$revisor->getNombres()." ".$revisor->getApellidos();
              $cEscuela->eliminar($idEscuela);
            }
            break;
    case 2: 
            //listado de escuela todas en un combo SELECT(html)
            
            $opc=$_GET['opc'];
            
            $cEscuela= new catalogoEscuelas();
            $escuelas=$cEscuela->obtenerTodos();
            if($opc == 0)
              //listado todas las escuelas
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"muestraEscuelaMod(this.value)\">";
            if($opc == 1)
              //listado todas las escuelas + agregar Nuevo plan/carrera a escuela
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"addEscuelaPlanCarrera()\">"; 
            if($opc == 2)
              //listado todas las escuelas + listar plan/carrera de escuela
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"EliminaMuestraEscuelaPlanCarrera(this.value,'0')\">"; 
            if($opc == 3)
              //listado todas las escuelas + quitar plan/carrera de escuela
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"EliminaMuestraEscuelaPlanCarrera(this.value,'1')\">"; 
            if($opc == 4)
              //listado todas las escuelas + informacion general de escuela
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"infoGralEscuela(this.value)\">"; 
            if($opc == 5)
              //listado todas las escuelas + registrar alumno, mostrar planes/carrera
              echo "<select name=\"slListaPersonal\" id=\"slListaPersonal\" onchange=\"infoPlanCarrera(this.value)\">"; 
            
            $index=0;
            $contador=0;
            foreach($escuelas as $escuela)
            {
               if($contador==0)
                  echo "<option value=\"0\">- Selecciona Escuela -</option>";
               $contador++;
               if (($index % 2) == 0 )
                  echo "<option value=".$escuela->getId()." id=\"cero\">".$escuela->getId()." - ".$escuela->getNombre()."</option>";
               else
                  echo "<option value=".$escuela->getId()." id=\"uno\">".$escuela->getId()." - ".$escuela->getNombre()."</option>";
               $index = $index + 1;
            }
            echo "</select>";
            break;
    case 3:
            //mostrar informacion de la escuela para modificar en (html)
            $idEscuela= $_GET['idEscuela'];
            $cEscuela= new catalogoEscuelas();
            $escuela=$cEscuela->obtener($idEscuela);  
            $responsable=$escuela->getResponsable();
            $revisor=$escuela->getRevisor();
            
            /*echo "<br>id: ".$escuela->getId()." Nombre:".$escuela->getNombre()." Responsable:".$responsable->getId()." ".$responsable->getNombres()." ".$responsable->getApellidos().
                  " Revisor:".$revisor->getId()." ".$revisor->getNombres()." ".$revisor->getApellidos();
            */
            echo "<table border=\"0\" cellpadding=\"3\" cellspacing=\"0\"><tbody>";
            echo "<tr><th colspan=\"2\">Lista de Personal <span id=\"listadoPersonalEscuelas\"></span></th></tr>";
            echo "<tr><td>Clave Escuela:</td><td><input type=\"text\" id=\"txtIdEscuela\" value=\"".$escuela->getId()."\" disabled size=\"5\"></td></tr>";
            echo "<tr><td>Nombre:</td><td><input type=\"text\" id=\"txtNombreEscuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"20\"></td></tr>";
            echo "<tr><td>Personal Responsable:</td><td><input type=\"text\" name=\"".$responsable->getId()."\" id=\"txtResponsableEscuela\" size=\"30\" value=\"".$responsable->getId()." ".$responsable->getNombres()." ".$responsable->getApellidos()."\" disabled> <input type=\"button\" value=\"asignar\" onclick=\"nuevoResponsable()\"></td></tr>";
            echo "<tr><td>Personal Revisor:</td><td><input type=\"text\" name=\"".$revisor->getId()."\" id=\"txtRevisorEscuela\" size=\"30\" value=\"".$revisor->getId()." ".$revisor->getNombres()." ".$revisor->getApellidos()."\" disabled> <input type=\"button\" value=\"asignar\" onclick=\"nuevoRevisor()\"></td></tr>";
            echo "<tr><td colspan=\"2\" align=\"right\"><input type=\"button\" value=\"modificar informacion\" id=\"btnModificarPersonal\" onclick=\"modificarRegistroEscuela()\"></td></tr>";
            echo "</tbody></table>";

            /*
            //muesta info escuela para modificar
            $idEscuela=$_GET['idEscuela'];
            $cEscuela= new catalogoEscuelas();
            $escuela=$cEscuela->obtener($idEscuela);  
            if($escuela==false)
               echo 'No se encontro registro de Escuela con la Clave: '.$idEscuela;
            else
            {
              $responsable=$escuela->getResponsable();
              $revisor=$escuela->getRevisor();
              <iput type="text" name="txtIdEscuela" id="txtIdEscuela" disabled><br>
              <iput type="text" name="txtNombreEscuela" id="txtNombreEscuela"><br>
              <iput type="text" name="txtResponsableEscuela" id="txtResponsableEscuela" disabled><br>
              <iput type="text" name="txtRevisorEscuela" id="txtRevisorEscuela" disabled><br>
              
              echo "Clave Escuela: ".$escuela->getId().", Nombre:".$escuela->getNombre()."<br>Responsable:".$responsable->getId()." ".$responsable->getNombres()." ".$responsable->getApellidos().
              "<br>Revisor:".$revisor->getId()." ".$revisor->getNombres()." ".$revisor->getApellidos();
            }
            */
            break;
            
    case 4:
            //modificar informacion;
            $idEscuela=$_GET['idEscuela'];
            $nombre=$_GET['nombre'];
            $responsable=$_GET['responsable'];
            $revisor=$_GET['revisor'];
            $escuela= new escuela($idEscuela,$nombre,$responsable,$revisor);
            $cEscuela= new catalogoEscuelas();
            $cEscuela->modificar($escuela);
            echo "se modifico informacion de la clave de registro: ".$idEscuela;
            break;
    case 5:
             //asignar lista de planes o carreras a una escuela
            $idEscuela= $_POST['idEscuela'];
            $plancarrera= $_POST['plancarrera'];
            $escuela= new escuela($idEscuela,'x',0,0);
            $escuela->setPlanesCarreras($plancarrera);
            
            $cEscuela= new catalogoEscuelas();
            $cEscuela->asignarPlanesCarreras($escuela);
            echo "se asigno plan/carrera: ".$plancarrera.", a la escuela: ".$idEscuela;
            break;
    case 6:
            //lista de planes/carreras de una escuela
            /*
            $escuela->setId(9);
            $escuela=$cEscuela->obtenerPlanesCarreras($escuela->getId());
            echo "<br>:::lista de planes/carreras de una escuela:::";
            foreach($escuela->getPlanesCarreras() as $plancarrera)
            {
              echo "<br>id:".$plancarrera->getId()." plan/carrera:".$plancarrera->getPlanCarrera();
            }
            */
            //........
            $idEscuela=$_GET['idEscuela'];
            $op=$_GET['op'];
            
            $cEscuela= new catalogoEscuelas();
            $escuela=$cEscuela->obtenerPlanesCarreras($idEscuela);
            
            $index=0;
            if($op=='0')
            {
              foreach($escuela->getPlanesCarreras() as $plancarrera)
              { 
                echo "<p>".$plancarrera->getPlanCarrera()."</p>";
                $index++;
              }
            }
            if($op=='1')
            {
              foreach($escuela->getPlanesCarreras() as $plancarrera)
              { 
                if($index==0) echo "<table border=\"0\" align:\"left\" width=\"100%\" cellpadding=\"2\" cellspacing=\"0\"><tbody>";
                echo "<tr><td width=\"10px\"><input type=\"checkbox\" name=\"checkbox\" id=\"checkbox".$index."\" value=\"".$plancarrera->getId()."\"></td><td>".$plancarrera->getPlanCarrera()."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
              
            }
            if($index==0)
            { 
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Al la Escuela aun no se le han asignado planes/carreras de estudio.</h3>";
            }
            if($op=='1' && $index > 0)
            {
              echo "<html><input type=\"button\" value=\"Eliminar plan/carrera\" id=\"eliminarDeptosResp\" onclick=\"EliminarPlanCarrera()\"></html>";
            }
            break;
    case 7:
            $idplancarrera=$_GET['idplancarrera'];
            $cEscuela= new catalogoEscuelas();
            $cEscuela->eliminarPlanCarrera($idplancarrera);
            echo "se ha eliminado plan/carrera de la escuela.";
            break;
    case 8:
            //mostrar informacion de la escuela(html)
            $idEscuela= $_GET['idEscuela'];
            $cEscuela= new catalogoEscuelas();
            $escuela=$cEscuela->obtener($idEscuela);  
            $responsable=$escuela->getResponsable();
            $revisor=$escuela->getRevisor();
            
            echo "<table border=\"0\" width=\"100%\" cellpadding=\"3\" cellspacing=\"2\" id=\"divListaResp\"><tbody>";
            echo "<tr style=\"background-color:ffd;\"><th colspan=\"2\">Informacion General De Escuela</th></tr>";
            echo "<tr><td align=\"right\"><strong>Clave Escuela:</strong></td><td><input type=\"text\" value=\"".$escuela->getId()."\" disabled size=\"5\"></td></tr>";
            echo "<tr><td align=\"right\"><strong>Nombre:</strong></td><td><input type=\"text\" size=\"30\" value=\"".$escuela->getNombre()."\" disabled></td></tr>";
            echo "<tr><td align=\"right\"><strong>Personal Responsable:</strong></td><td><input type=\"text\" size=\"30\" value=\"".$responsable->getId()." ".$responsable->getNombres()." ".$responsable->getApellidos()."\" disabled></td></tr>";
            echo "<tr><td align=\"right\"><strong>Personal Revisor:</strong></td><td><input type=\"text\" size=\"30\" value=\"".$revisor->getId()." ".$revisor->getNombres()." ".$revisor->getApellidos()."\" disabled></td></tr>";
            echo "<tr style=\"background-color:ffd;\"><th colspan=\"2\">Listado de Planes Y Carreras</th><tr><td colspan=\"2\">";
            
            $cEscuela= new catalogoEscuelas();
            $escuela=$cEscuela->obtenerPlanesCarreras($idEscuela);
            
            $index=0;
            foreach($escuela->getPlanesCarreras() as $plancarrera)
              { 
                echo "<p>".$plancarrera->getPlanCarrera()."</p>";
                $index++;
              }
            
            if($index==0)
            { 
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Al la Escuela aun no se le han asignado planes/carreras de estudio.</h3>";
            }
            echo "</td><tr></tbody></table>";
            break;
            
    case 9:
            $idEscuela=$_GET['idEscuela'];
            
            $cEscuela= new catalogoEscuelas();
            $escuela=$cEscuela->obtenerPlanesCarreras($idEscuela);
            
            $index=0;

            foreach($escuela->getPlanesCarreras() as $plancarrera)
            { 
              if($index==0) echo "<select name=\"slListaPC\" id=\"slListaPC\">"; 
              
              echo "<option value=\"".$plancarrera->getId()."\">".$plancarrera->getPlanCarrera()."</option>";
              $index++;
            }
            
            if($index==0)
              echo "<label style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se han asignado planes/carreras de estudio.</label>";
            else
              echo "</select>";
            
            break;
    default:
            echo "opcion incorrecta";
            break;
  }
    
/*
<?php
  require_once('../reglasnegocio/escuela.class.php');
  require_once('../reglasnegocio/catalogoEscuela.class.php');
  
  //alta
  $escuela= new escuela(0,"tec iguala",2,3);
  
  $cEscuela= new catalogoEscuelas();
  $cEscuela->agregar($escuela);
  echo "se agrego escuela";
  
  
  //eliminar escuela
  
  $cEscuela->eliminar(17);
  echo "<br>se elimino escuela";
  
  
  //mostrar informacion de escuela escuela
  $escuela=$cEscuela->obtener(1);  
  $responsable=$escuela->getResponsable();
  $revisor=$escuela->getRevisor();
  echo "<br>id: ".$escuela->getId()." Nombre:".$escuela->getNombre()." Responsable:".$responsable->getId()." ".$responsable->getNombres()." ".$responsable->getApellidos().
        " Revisor:".$revisor->getId()." ".$revisor->getNombres()." ".$revisor->getApellidos();
  
  
  //modificar informacion escuela
  $escuela->setId(10);
  $escuela->setNombre("soledad");
  $escuela->setResponsable(10);
  $escuela->setRevisor(12);
  $cEscuela->modificar($escuela);
  echo "<br>se ha modificado informacion de la esuela ".$escuela->getId();
  $escuela=$cEscuela->obtener(2);  
  $responsable=$escuela->getResponsable();
  $revisor=$escuela->getRevisor();
  echo "<br>id: ".$escuela->getId()." Nombre:".$escuela->getNombre()." Responsable:".$responsable->getId()." ".$responsable->getNombres()." ".$responsable->getApellidos().
        " Revisor:".$revisor->getId()." ".$revisor->getNombres()." ".$revisor->getApellidos();
  
  //obtener listado de todas las escuelas existentes
  echo "<br>:::Listado de todas las escuelas:::";
  $escuelas=$cEscuela->obtenerTodos();
  foreach($escuelas as $escuela)
  {
    echo "<br>Id:".$escuela->getId()." Nombre:".$escuela->getNombre();
  }
  
  //asignar lista de planes o carreras a una escuela
  $escuela->setId(8);
  for($i=1;$i<4;$i++)
  {
    $escuela->setPlanesCarreras("carrera ".$i);
  }
  $cEscuela->asignarPlanesCarreras($escuela);
  echo "<br>se asignaron los planes y carreras de la escuela".$escuela->getId();
  
  //lista de planes/carreras de una escuela
  $escuela->setId(9);
  $escuela=$cEscuela->obtenerPlanesCarreras($escuela->getId());
  echo "<br>:::lista de planes/carreras de una escuela:::";
  foreach($escuela->getPlanesCarreras() as $plancarrera)
  {
    echo "<br>id:".$plancarrera->getId()." plan/carrera:".$plancarrera->getPlanCarrera();
  }
  
  //obtener nombre escuela y plan/carrera
  $escuela=$cEscuela->obtenerEscuelacarrera(6);
  $regPlanCarrera=$escuela->getPlanesCarreras();  
  echo "<br>Nombre de escual:".$escuela->getNombre()." plan/carrera:".$regPlanCarrera[0];
?>
*/

?>