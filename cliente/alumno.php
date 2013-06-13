<?php
  require_once('../reglasnegocio/alumno.class.php');
  require_once('../reglasnegocio/catalogoAlumno.class.php');
  require_once('../reglasnegocio/catalogoEscuela.class.php');
  
 if(isset($_REQUEST['opcion']))
    $_opcion = $_REQUEST['opcion'];
  else
    $_opcion = -1;
  
  switch($_opcion)
  {
    case 0:
            //agregar alumnos
            $matricula=$_POST['matricula'];
            $nombres=$_POST['nombres'];
            $apellidos=$_POST['apellidos'];
            $mail=$_POST['mail'];
            $tel=$_POST['tel'];
            $obs=$_POST['obs'];
            $idPlanEscuela=$_POST['idPlanEscuela'];
    
            
            $alumno= new alumno($matricula,$nombres,$apellidos);
            $alumno->setMail($mail);
            $alumno->setNota($obs);
            $alumno->setTelefono($tel);
            $alumno->setIdPlanEscuela($idPlanEscuela);
            $alumno->setPassword($matricula);
            $cAlumno= new catalogoAlumno();
            $estado=$cAlumno->agregar($alumno);
            if($estado==false)
            {
              echo "NO se realizo alta de registro. Matricula: ".$matricula." Nombres: ".$nombres." Apellidos: ".$apellidos;
            }
            else if($estado==true)
            {
              echo "Se agrego informacion de Alumno al sistema. Matricula: ".$matricula." Nombres: ".$nombres." Apellidos: ".$apellidos;
            }
            break;
    case 1:
            //listar alumnos que cumplan con el criterio de busqueda, nombres, apellidos
            if(isset($_POST['nombres']))
            {
              $nombres=$_POST['nombres'];
              $cAlumno= new catalogoAlumno();
              $index=0;
              foreach($cAlumno->listarNombres($nombres)  as $alumno)
              {
                if($index==0) echo "<table border=\"0\" cellPadding=\"3\" cellSpacing=\"0\"><tbody>";
                if(($index % 2) == 0)
                  echo "<tr id=\"cero\"><td>".$alumno->getMatricula()."</td><td width=\"25%\">".$alumno->getNombres()."</td><td width=\"75%\">".$alumno->getApellidos()."</td></tr>";
                else
                  echo "<tr id=\"uno\"><td>".$alumno->getMatricula()."</td><td width=\"25%\">".$alumno->getNombres()."</td><td width=\"75%\">".$alumno->getApellidos()."</td></tr>";
                
                $index++;
              }
              if($index==0)
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion.</h3>";
              else
                echo "</tbody></table>";
            }
            else if(isset($_POST['apellidos']))
            {
              $apellidos=$_POST['apellidos'];
              $cAlumno= new catalogoAlumno();
              $index=0;
              foreach($cAlumno->listarApellidos($apellidos)  as $alumno)
              {
                if($index==0) echo "<table border=\"0\" cellPadding=\"3\" cellSpacing=\"0\"><tbody>";
                if(($index % 2) == 0)
                  echo "<tr id=\"cero\"><td>".$alumno->getMatricula()."</td><td width=\"25%\">".$alumno->getNombres()."</td><td width=\"75%\">".$alumno->getApellidos()."</td></tr>";
                else
                  echo "<tr id=\"uno\"><td>".$alumno->getMatricula()."</td><td width=\"25%\">".$alumno->getNombres()."</td><td width=\"75%\">".$alumno->getApellidos()."</td></tr>";
                
                $index++;
              }
              if($index==0)
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion.</h3>";
              else
                echo "</tbody></table>";
            }
            break;
    case 2:
            //listar toda la informacion de una Alumno para modificar HTML
            $matricula=$_GET['matricula'];
            $cAlumno= new catalogoAlumno();
            $regAlumno=$cAlumno->obtener($matricula);  
            if($regAlumno==false)
              echo "No se encontro registro de Alumno con Matricula: ".$matricula;
            else 
            {
              echo "<table border=\"0\" cellpadding=\"3\" cellspacing=\"0\"><tbody>";
              echo "<tr><th>Escuela:<span id=\"spanContenedorListaEscuelas\"></span></th><th>Plan/Carrera:<span id=\"spanContenedorListaPC\"></span></th></tr>";
              echo "<tr><td align=\"right\">Matricula Alumno:</td><td><input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"><strong>*</strong></td></tr>";
              echo "<tr><td align=\"right\">Nombres:</td><td><input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\"><strong>*</strong></td></tr>";
              echo "<tr><td align=\"right\">Apellidos:</td><td><input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\"><strong>*</strong></td></tr>";
              echo "<tr><td align=\"right\">Mail:</td><td><input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\"> </td></tr>";
              echo "<tr><td align=\"right\">Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\">".$regAlumno->getNota()."</textarea></td></tr>";
              echo "<tr><td align=\"right\">Telefono:</td><td><input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\"> </td></tr>";
              
              //obtener nombre escuela y plan/carrera
              $cEscuela= new catalogoEscuelas();
              $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
              $regPlanCarrera=$escuela->getPlanesCarreras();  
              
              echo "<tr><td><strong>*</strong>Escuela:<input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td><td><strong>*</strong>Plan/Carrera:<input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled><input type=\"button\" value=\"asignar\" id=\"btnAsignarPC\" onclick=\"AsignarPCMod()\"></td></tr>";
              echo "<tr><td align=\"right\">Password:</td><td><input type=\"text\" id=\"MtxtPass\" size=\"25\" value=\"".$regAlumno->getPassword()."\" maxLength=\"20\"><strong>*</strong></td></tr>";
              echo "<tr><td colspan=\"2\" align=\"right\"><strong>*</strong>Datos requeridos <input type=\"button\" value=\"modificar informacion\" id=\"btnModificarAlumnos\" onclick=\"btnModificarAlumnos()\"></td></tr>";
              echo "</tbody></table><p></p>";
            }
            break;
    case 3:
             //modificar informacion de alumno
            $matricula=$_POST['matricula'];
            $nombres=$_POST['nombres'];
            $apellidos=$_POST['apellidos'];
            $mail=$_POST['mail'];
            $tel=$_POST['tel'];
            $obs=$_POST['obs'];
            $idPlanEscuela=$_POST['idPlanEscuela'];
            $password=$_POST['pass'];
    
            $alumno= new alumno($matricula,$nombres,$apellidos);
            $alumno->setMail($mail);
            $alumno->setNota($obs);
            $alumno->setTelefono($tel);
            $alumno->setIdPlanEscuela($idPlanEscuela);
            $alumno->setPassword($password);
            $cAlumno= new catalogoAlumno();
            $estado=$cAlumno->modificar($alumno);
            echo "Se modifico el registro. Matricula: ".$matricula." Nombres: ".$nombres." Apellidos: ".$apellidos;
            break;
    case 4:
            //listar toda la informacion de una Alumno HTML
            $matricula=$_GET['matricula'];
            $cAlumno= new catalogoAlumno();
            $regAlumno=$cAlumno->obtener($matricula);  
            if($regAlumno==false)
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion de Matricula.</h3>";
            else 
            {
              echo "<div style=\"border:1px dashed #f00;background-color:#ffd;\" ><table border=\"0\" cellpadding=\"3\" cellspacing=\"0\" align=\"center\"><tbody>";
              echo "<tr><td align=\"right\">Matricula Alumno:</td><td><input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td></tr>";
              echo "<tr><td align=\"right\">Nombres:</td><td><input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Apellidos:</td><td><input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Mail:</td><td><input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled> </td></tr>";
              echo "<tr><td align=\"right\">Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr>";
              echo "<tr><td align=\"right\">Telefono:</td><td><input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td></tr>";
              
              //obtener nombre escuela y plan/carrera
              $cEscuela= new catalogoEscuelas();
              $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
              $regPlanCarrera=$escuela->getPlanesCarreras();  
              
              echo "<tr><td align=\"right\">Escuela:</td><td><input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Plan/Carrera:</td><td><input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Password:</td><td><input type=\"text\" id=\"MtxtPass\" size=\"25\" value=\"".$regAlumno->getPassword()."\" maxLength=\"20\" disabled></td></tr>";
              echo "</tbody></table></div>";
            }
            break;
    case 5:
            //para Departamentos: Mostrar la informacion de un alumno
            //case 4:
            //listar toda la informacion de una Alumno HTML
            $matricula=$_GET['matricula'];
            $cAlumno= new catalogoAlumno();
            $regAlumno=$cAlumno->obtener($matricula);  
            if($regAlumno==false)
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion de Matricula.</h3>";
            else 
            {
              /*
              echo "<div align=\"center\"><fieldSet>";
              echo "<legend>Informacion Alumno</legend>";
              echo "<div style=\"border:1px dashed #f00;background-color:#ffd;\" >";
              echo "<table border=\"0\" cellpadding=\"3\" cellspacing=\"0\" align=\"center\"><tbody>";
              echo "<tr><td align=\"right\">Matricula Alumno:</td><td><input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td></tr>";
              echo "<tr><td align=\"right\">Nombres:</td><td><input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Apellidos:</td><td><input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Mail:</td><td><input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled> </td></tr>";
              echo "<tr><td align=\"right\">Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr>";
              echo "<tr><td align=\"right\">Telefono:</td><td><input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td></tr>";
              
              //obtener nombre escuela y plan/carrera
              $cEscuela= new catalogoEscuelas();
              $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
              $regPlanCarrera=$escuela->getPlanesCarreras();  
              
              echo "<tr><td align=\"right\">Escuela:</td><td><input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Plan/Carrera:</td><td><input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Password:</td><td><input type=\"text\" id=\"MtxtPass\" size=\"25\" value=\"".$regAlumno->getPassword()."\" maxLength=\"20\" disabled></td></tr>";
              echo "</tbody></table></div></fieldSet>";
              */
              echo "<div align=\"center\"><fieldSet>";
              echo "<legend>Informacion Alumno</legend>";
              echo "<div style=\"border:1px dashed #f00;background-color:#ffd;\" >";
              echo "<table border=\"0\" cellpadding=\"3\" cellspacing=\"0\" align=\"center\"><tbody>";
              echo "<tr><td align=\"left\">Matricula Alumno: <input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td><td align=\"left\">Nombres: <input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td><td align=\"right\">Apellidos: <input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
              echo "<tr><td align=\"left\">Mail: <input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled></td><td align=\"left\" colspan=\"2\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\"><tbody><tr><td>Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr></tbody></table></td></tr>";
              echo "<tr><td align=\"left\">Telefono: <input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td>";
              
              //obtener nombre escuela y plan/carrera
              $cEscuela= new catalogoEscuelas();
              $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
              $regPlanCarrera=$escuela->getPlanesCarreras();  
              
              echo "<td align=\"left\">Escuela: <input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td>";
              echo "<td align=\"right\">Plan/Carrera: <input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
              echo "</tbody></table></div></fieldSet></div>";
              
              echo "<div align=\"center\"><fieldSet>";
              echo "<legend>Informacion Tramite</legend>";
              echo "<div style=\"border:1px dashed #f00;background-color:#ffd;\">";
              echo "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
              echo "<tr><td align=\"right\">Folio Tramite: <input type=\"text\" name=\"txtFolioTramite\" id=\"txtFolioTramite\" size=\"15\" maxLength=\"10\"></td><td align=\"center\">Folio Certificado: <input type=\"text\" name=\"txtFolioCertificado\" id=\"txtFolioCertificado\" size=\"15\" maxLength=\"10\"></td><td align=\"left\">Folio Registro: <input type=\"text\" name=\"txtFolioRegistro\" id=\"txtFolioRegistro\" size=\"15\" maxLength=\"10\"></td></tr>";
              echo "<tr><td colspan=\"3\" align=\"right\">Persona que realiza tramite: <input type=\"text\" name=\"txtTramita\" id=\"txtTramita\" size=\"50\" maxLength=\"28\"></td></tr>";
              echo "<tr><td colsPan=\"3\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\" width=\"100%\"><tbody><tr><td>Fecha Inicio: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaInicio\" id=\"txtFechaInicio\" size=\"10\" value=\"".(date("Y-m-d"))."\" maxLength=\"10\" disabled></td><td align=\"right\">Fecha Finalizado: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaFin\" id=\"txtFechaFin\" size=\"10\" maxLength=\"10\" disabled></td></tr></tbody></table></td></tr>";
              echo "<tr><td colspan=\"3\" align=\"right\">Tramite que se realizar: <span id=\"listaTramites\"></span></td></tr>";
              echo "</tbody></table></div></fieldSet><br><input type=\"button\" id=\"btnGuardarTramite\" value=\"Guardar Tramite\" onclick=\"btnGuardarTramite()\"></div>";
            }
            break;
    default;
            break;
  }          

/*

  //agregar alumnos
  $alumno= new alumno('147','isra','salgado');
  $alumno->setMail('a@a.com');
  $alumno->setNota('asasas');
  $alumno->setTelefono('123654798');
  $alumno->setIdPlanEscuela('1');
  $alumno->setPassword('123');
  $cAlumno= new catalogoAlumno();
  $estado=$cAlumno->agregar($alumno);
  if($estado==false)
  {
    echo "no se realizo alto de registro";
  }
  else if($estado==true)
  {
    echo "se agrego alumno";
  }
*/

?>