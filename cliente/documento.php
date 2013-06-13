<?php  

  require_once('../reglasnegocio/documento.class.php');
  require_once('../reglasnegocio/catalogoDocumento.class.php');
  require_once('../reglasnegocio/catalogoAlumno.class.php');
  require_once('../reglasnegocio/catalogoTramite.class.php');
  require_once('../reglasnegocio/catalogoEscuela.class.php');
  require_once('../reglasnegocio/catalogoInfoDocumento.class.php');
  require_once('../reglasnegocio/catalogoDepartamento.class.php');
  require_once('../reglasnegocio/infodocumento.class.php');
                                 
  
  if(isset($_REQUEST['opcion']))
    $_opcion = $_REQUEST['opcion'];
  else
    $_opcion = -1;
  
  switch($_opcion)
  {
    case 0:
            //Iniciar un nuevo tramite en el sistema
            $folio = $_POST['folio'];
            $idTramite = $_POST['idTramite'];
            $idAlumno = $_POST['idAlumno'];
            $fCertificado = $_POST['fCertificado'];
            $fRegistro = $_POST['fRegistro'];
            $tramita = $_POST['tramita'];
            $fInicio = $_POST['fInicio'];
            
            $documento = new documento($folio,$idTramite,$idAlumno,$fCertificado,$fRegistro,$tramita,$fInicio);
            $cDocumento = new catalogoDocumento();
            $estado=$cDocumento->agregar($documento);
            if($estado==false)
              echo "Error: No se agrego Nuevo Tramite al Sistema, verifica que FOLIO DE TRAMITE, No este Duplicado.";
            else if($estado==true)
              echo "Tramite Iniciado. Folio de tramite es: ".$folio.", Matricula Alumno: ".$idAlumno.", Folio Certificado: ".$fCertificado.", Folio Registro: ".$fRegistro;
            break;
    case 1:
            //listar los tramites No Finalizados
            $cDocumento = new catalogoDocumento();
            $tramites = $cDocumento->listarNoFinalizados();
            if($tramites==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No hay tramites en proceso de revision.</h3>";
            }
            else 
            {
              $index=0;
              echo "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"3\" id=\"tramitesIniciados\"><tbody><tr><th>Folio</th><th>|</th><th>Matricula</th><th>|</th><th align=\"left\">Alumno</th><th>|</th><th>Fecha de Inicio</th><th>|</th><th align=\"left\">Tramite</th></tr>";
              foreach($tramites as $tramite)
              {
                //nombre alumno
                $cAlumno= new catalogoAlumno();
                $regAlumno=$cAlumno->obtener($tramite->getIdAlumno()); 
                //mostrar informacion de la tramite(html)
                $cTramite= new CatalogoTramites();
                $regTramite=$cTramite->obtener($tramite->getIdTramite());
                
                if(($index % 2) == 0)
                  echo "<tr id=\"cero\"><td><span onclick=\"preRevisarTramite(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td></tr>";
                else
                  echo "<tr id=\"uno\"><td><span onclick=\"preRevisarTramite(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
            }
            break;
            
    case 2:
            //listar informarcion de tramite/documento para Recepcion
            //..litar informacion de tramite
            //..litar informacion de alumno
            
            //revisar documento
            $idD=$_POST['idD'];
            
            $folio=$_POST['folio'];
            $descripcionTramite=$_POST['descripcionTramite'];
            $cDocumento = new catalogoDocumento();
            $documento = $cDocumento->obtener($folio,$descripcionTramite);
            if($documento==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No existe informacion de tramite. ".$folio."</h3>";
            }
            else
            {
              echo "<fieldSet><legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Tramite</legend><div align=\"center\">";
              echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
              echo "<tr><th colSpan=\"3\">Tramite - ".$documento->getIdTramite()."</th></tr>";
              echo "<tr><td>Folio Tramite: <input type=\"text\" name=\"txtFTramite\" id=\"txtFTramite\" value=\"".$documento->getFolio()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Certificado: <input type=\"text\" name=\"txtFCertificado\" id=\"txtFCertificado\" value=\"".$documento->getCertificado()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Registro: <input type=\"text\" name=\"txtFRegistro\" id=\"txtFRegistro\" value=\"".$documento->getRegistro()."\" size=\"15\" maxLength=\"10\" disabled></td></tr>";
              echo "<tr><td colspan=\"3\" align=\"right\">Persona que realiza tramite: <input type=\"text\" name=\"txtTramita\" id=\"txtTramita\" value=\"".$documento->getTramita()."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td colsPan=\"3\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\" width=\"100%\"><tbody><tr><td>Fecha Inicio: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaInicio\" id=\"txtFechaInicio\" value=\"".$documento->getInicio()."\" size=\"10\" maxLength=\"10\" disabled></td><td align=\"right\">Fecha Finalizado: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaFin\" id=\"txtFechaFin\" size=\"10\" maxLength=\"8\" disabled></td></tr></tbody></table></td></tr>";
              echo "</tbody></table></div></fieldSet>";
              
              //para Departamentos: Mostrar la informacion de un alumno
              //case 4(-alumnos-):
              //listar toda la informacion de una Alumno HTML
              $cAlumno= new catalogoAlumno();
              $regAlumno=$cAlumno->obtener($documento->getIdAlumno());  
              if($regAlumno==false)
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion de Matricula de Alumno.</h3>";
              else 
              {
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Alumno</legend><div align=\"center\">";
                echo "<table border=\"1\" cellPadding=\"5\" cellSpacing=\"0\" align=\"center\"><tbody>";
                echo "<tr><td align=\"left\">Matricula Alumno: <input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td><td align=\"left\">Nombres: <input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td><td align=\"right\">Apellidos: <input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
                //echo "<tr><td align=\"left\">Mail: <input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled></td><td align=\"center\" colspan=\"2\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\"><tbody><tr><td>Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr></tbody></table></td></tr>";
                echo "<tr><td align=\"left\">Telefono: <input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td>";
                
                //obtener nombre escuela y plan/carrera
                $cEscuela= new catalogoEscuelas();
                $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
                $regPlanCarrera=$escuela->getPlanesCarreras();  
                
                echo "<td align=\"left\">Escuela: <input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td>";
                echo "<td align=\"right\">Plan/Carrera: <input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
                echo "</tbody></table></div></fieldSet>";
              } 
              
              //listar revisiones  
              $infoDoc = new catalogoInfoDocumento();
              $revisiones = $infoDoc->revisiones($documento->getFolio());
              if($revisiones==false)
              {
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">El tramite No ha tenido ninguna revision.</h3>";
              }
              else
              {
                //*************************  
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Revisiones Realizadas</legend><div align=\"center\">";
                foreach($revisiones as $revision)
                {
                  //Nombre del Depto
                  $cDepto=new catalogoDepartamentos();
                  $registro=$cDepto->obtener($revision->getIdDepto());
                  echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
                  if($idD==$revision->getIdDepto())
                    echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" disabled style=\"background-color:#ffd;\"></td></tr>";
                  else
                    echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" disabled></td></tr>";
                  
                  //nombres-apellidos Personal
                  $cPersonal=new catalogoPersonal();
                  $persona=$cPersonal->obtener($revision->getIdRecibio());
                  
                  echo "<tr><td align=\"right\">Fecha Entrada: <input type=\"text\" value=\"".$revision->getFInicio()."\" size=\"10\" disabled></td><td>Personal que Recibio: <input type=\"text\" value=\"".$revision->getIdRecibio()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  
                  if($revision->getIdEntrego() == null)
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" size=\"50\" disabled></td></tr>";
                  else
                  {
                    $persona=$cPersonal->obtener($revision->getIdEntrego());
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" value=\"".$revision->getFFin()."\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" value=\"".$revision->getIdEntrego()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  } 
                  echo "<tr><td align=\"right\">Comentarios<br>y Anexos:</td><td><textarea cols=\"65\" rows=\"5\" disabled>".$revision->getEstado()."</textarea></td></tr>";
                  echo "</tbody></table>";
                }
                echo "</div></fieldSet>";
                
              }
               
              //revisar documento
              //$idD=$_POST['idD'];
              $nD=$_POST['nD'];
              $idP=$_POST['idP'];
              $nP=$_POST['nP'];
              echo "<fieldSet>";
              echo "<legend align=\"center\" style=\"font-weight:bolder;color:#00f;font-style:oblique;\">Recibir Tramite</legend>";
              echo "<div align=\"center\"><table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\" style=\"border:1px solid #f00;\"><tbody>";
              echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" name=\"depto\" id=\"depto\" value=\"".$idD ." - ".$nD."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Fecha Entrada: <input type=\"text\" name=\"fEntrada\" id=\"fEntrada\" value=\"".(date('Y-m-d'))."\" size=\"10\" disabled></td><td>Personal que Recibio: <input type=\"text\" name=\"recibio\" id=\"recibio\" value=\"".$idP." - ".$nP."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Comentarios y<br>Anexos al Recibir:</td><td><textarea id=\"tInfoEstado\" name=\"tInfoEstado\" cols=\"65\" rows=\"5\" style=\"background-color:#ffd;\"></textarea></td></tr>";
              echo "</tbody></table></div></fieldSet>";
            
              echo "<input type=\"button\" id=\"btnGuardarRevision\" name=\"btnGuardarRevision\" value=\"Guardar la Recepcion del Tramite\" onclick=\"guardar(".$documento->getFolio().",".$idD.",'".(date('Y-m-d'))."',".$idP.")\">";
            }
            
            break;    
    case 3:
            $folio=$_POST['folio'];
            $depto=$_POST['depto'];
            $entrada=$_POST['entrada'];
            $recibio=$_POST['recibio'];
            $estado=$_POST['estado'];
            $infoDocumento= new infodocumento(0,$folio,$depto);
            $infoDocumento->setFInicio($entrada);
            $infoDocumento->setIdRecibio($recibio);
            $infoDocumento->setEstado($estado);
            
            $cInfoDoc= new catalogoInfoDocumento();
            $estado=$cInfoDoc->recibir($infoDocumento);
            if($estado==false)
            {
              echo "Error: No se agrego revision de tramite.!!!";
            }
            else if($estado==true)
            {
              echo "La revision de tramite guardada.";
            }
            break;
            
    case 4:
            //listar los tramites Ya Revisados
            
            $idDepto=$_GET['idDepto'];
            $cDocumento = new catalogoDocumento();
            $tramites = $cDocumento->listarPendientes($idDepto);
            if($tramites==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Aun no se ha hecho la Recepcion de ningun Tramite.</h3>";
            }
            else 
            {
              $index=0;
              echo "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"3\" id=\"tramitesIniciados\"><tbody><tr><th>Folio</th><th>|</th><th>Matricula</th><th>|</th><th align=\"left\">Alumno</th><th>|</th><th>Fecha de Inicio</th><th>|</th><th align=\"left\">Tramite</th><th>|</th><th>Fecha de Recepcion</th></tr>";
              foreach($tramites as $tramite)
              {
                //nombre alumno
                $cAlumno= new catalogoAlumno();
                $regAlumno=$cAlumno->obtener($tramite->getIdAlumno()); 
                //mostrar informacion de la tramite(html)
                $cTramite= new CatalogoTramites();
                $regTramite=$cTramite->obtener($tramite->getIdTramite());
                
                if(($index % 2) == 0)
                  echo "<tr id=\"cero\"><td><span onclick=\"preEntregarTramite(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."',".$tramite->getInfoDocumento()->getId().")\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td><td></td><td>".$tramite->getInfoDocumento()->getFInicio()."</td></tr>";
                else
                  echo "<tr id=\"uno\"><td><span onclick=\"preEntregarTramite(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."',".$tramite->getInfoDocumento()->getId().")\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td><td></td><td>".$tramite->getInfoDocumento()->getFInicio()."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
            }
            break;
    case 5:
            //listar informarcion de tramite/documento para ENTREGAR
            //..litar informacion de tramite
            //..litar informacion de alumno
            
            //revisar documento
            $idD=$_POST['idD'];
            
            $folio=$_POST['folio'];
            $descripcionTramite=$_POST['descripcionTramite'];
            $cDocumento = new catalogoDocumento();
            $documento = $cDocumento->obtener($folio,$descripcionTramite);
            if($documento==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No existe informacion de tramite. ".$folio."</h3>";
            }
            else
            {
              echo "<fieldSet><legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Tramite</legend><div align=\"center\">";
              echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
              echo "<tr><th colSpan=\"3\">Tramite - ".$documento->getIdTramite()."</th></tr>";
              echo "<tr><td>Folio Tramite: <input type=\"text\" name=\"txtFTramite\" id=\"txtFTramite\" value=\"".$documento->getFolio()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Certificado: <input type=\"text\" name=\"txtFCertificado\" id=\"txtFCertificado\" value=\"".$documento->getCertificado()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Registro: <input type=\"text\" name=\"txtFRegistro\" id=\"txtFRegistro\" value=\"".$documento->getRegistro()."\" size=\"15\" maxLength=\"10\" disabled></td></tr>";
              echo "<tr><td colspan=\"3\" align=\"right\">Persona que realiza tramite: <input type=\"text\" name=\"txtTramita\" id=\"txtTramita\" value=\"".$documento->getTramita()."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td colsPan=\"3\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\" width=\"100%\"><tbody><tr><td>Fecha Inicio: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaInicio\" id=\"txtFechaInicio\" value=\"".$documento->getInicio()."\" size=\"10\" maxLength=\"10\" disabled></td><td align=\"right\">Fecha Finalizado: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaFin\" id=\"txtFechaFin\" size=\"10\" maxLength=\"8\" disabled></td></tr></tbody></table></td></tr>";
              echo "</tbody></table></div></fieldSet>";
              
              //para Departamentos: Mostrar la informacion de un alumno
              //case 4(-alumnos-):
              //listar toda la informacion de una Alumno HTML
              $cAlumno= new catalogoAlumno();
              $regAlumno=$cAlumno->obtener($documento->getIdAlumno());  
              if($regAlumno==false)
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion de Matricula de Alumno.</h3>";
              else 
              {
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Alumno</legend><div align=\"center\">";
                echo "<table border=\"1\" cellPadding=\"5\" cellSpacing=\"0\" align=\"center\"><tbody>";
                echo "<tr><td align=\"left\">Matricula Alumno: <input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td><td align=\"left\">Nombres: <input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td><td align=\"right\">Apellidos: <input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
                //echo "<tr><td align=\"left\">Mail: <input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled></td><td align=\"center\" colspan=\"2\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\"><tbody><tr><td>Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr></tbody></table></td></tr>";
                echo "<tr><td align=\"left\">Telefono: <input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td>";
                
                //obtener nombre escuela y plan/carrera
                $cEscuela= new catalogoEscuelas();
                $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
                $regPlanCarrera=$escuela->getPlanesCarreras();  
                
                echo "<td align=\"left\">Escuela: <input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td>";
                echo "<td align=\"right\">Plan/Carrera: <input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
                echo "</tbody></table></div></fieldSet>";
              } 
              
              //listar revisiones  
              $infoDoc = new catalogoInfoDocumento();
              $revisiones = $infoDoc->revisiones($documento->getFolio());
              if($revisiones==false)
              {
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">El tramite No ha tenido ninguna revision.</h3>";
              }
              else
              {
                //*************************  
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Revisiones Realizadas</legend><div align=\"center\">";
                foreach($revisiones as $revision)
                {
                  //Nombre del Depto
                  $cDepto=new catalogoDepartamentos();
                  $registro=$cDepto->obtener($revision->getIdDepto());
                  echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
                  if($idD==$revision->getIdDepto())
                    echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" style=\"background-color:#ffd;\" disabled></td></tr>";
                  else
                    echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" disabled></td></tr>";
                  
                  //nombres-apellidos Personal
                  $cPersonal=new catalogoPersonal();
                  $persona=$cPersonal->obtener($revision->getIdRecibio());
                  
                  echo "<tr><td align=\"right\">Fecha Entrada: <input type=\"text\" value=\"".$revision->getFInicio()."\" size=\"10\" disabled></td><td>Personal que Recibio: <input type=\"text\" value=\"".$revision->getIdRecibio()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  
                  if($revision->getIdEntrego() == null)
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" size=\"50\" disabled></td></tr>";
                  else
                  {
                    $persona=$cPersonal->obtener($revision->getIdEntrego());
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" value=\"".$revision->getFFin()."\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" value=\"".$revision->getIdEntrego()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  } 
                  echo "<tr><td align=\"right\">Comentarios<br>y Anexos:</td><td><textarea cols=\"65\" rows=\"5\" disabled>".$revision->getEstado()."</textarea></td></tr>";
                  echo "</tbody></table>";
                }
                echo "</div></fieldSet>";
                
              }
               
              //revisar documento
              //$idD=$_POST['idD'];
              $nD=$_POST['nD'];
              $idP=$_POST['idP'];
              $nP=$_POST['nP'];
              
              //id INFOTRAMITES - para actualizar
              $idInfoTramites=$_POST['idInfoTramite'];
              
              echo "<fieldSet>";
              echo "<legend align=\"center\" style=\"font-weight:bolder;color:#00f;font-style:oblique;\">Finalizar Revision De Tramite en el Departamento</legend>";
              echo "<div align=\"center\"><table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\" style=\"border:1px solid #f00;\"><tbody>";
              echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" name=\"depto\" id=\"depto\" value=\"".$idD ." - ".$nD."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" name=\"fSalida\" id=\"fSalida\" value=\"".(date('Y-m-d'))."\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" name=\"entrego\" id=\"entrego\" value=\"".$idP." - ".$nP."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td align=\"right\">Comentarios y<br>Anexos al Entregar:</td><td><textarea id=\"tInfoEstado\" name=\"tInfoEstado\" cols=\"65\" rows=\"5\" style=\"background-color:#ffd;\"></textarea></td></tr>";
              echo "</tbody></table></div></fieldSet>";
            
              echo "<input type=\"button\" id=\"btnGuardarRevision\" name=\"btnGuardarRevision\" value=\"Guardar Revision del Tramite\" onclick=\"guardarEntrega(".$documento->getFolio().",".$idD.",'".(date('Y-m-d'))."',".$idP.",".$idInfoTramites.")\">";
            }
            
            break; 
     case 6:
     
            $folio=$_POST['folio'];
            $depto=$_POST['depto'];
            $entrada=$_POST['entrada'];
            $recibio=$_POST['recibio'];
            $estado=$_POST['estado'];
            
            $idInfoTramite=$_POST['idInfoTramite'];
            
            $infoDocumento= new infodocumento($idInfoTramite,$folio,$depto);
            $infoDocumento->setFFin($entrada);
            $infoDocumento->setIdEntrego($recibio);
            $infoDocumento->setEstado($estado);
            
            $cInfoDoc= new catalogoInfoDocumento();
            $estado=$cInfoDoc->entregar($infoDocumento);
            if($estado==false)
            {
              echo "Error: La entrega del Tramite No se grabo en el sistema.!!!";
            }
            else if($estado==true)
            {
              echo "Entrega de tramite guardada.";
            }
            break;  
     case 7:
            //listar los tramites Ya Revisados y Entregados por el Departamento
            
            $idDepto=$_GET['idDepto'];
            $cDocumento = new catalogoDocumento();
            $tramites = $cDocumento->listarFinalizadosDepto($idDepto);
            if($tramites==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Aun no se ha hecho la Recepcion de ningun Tramite.</h3>";
            }
            else 
            {
              $index=0;
              echo "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"3\" id=\"tramitesIniciados\"><tbody><tr><th>Folio</th><th>|</th><th>Matricula</th><th>|</th><th align=\"left\">Alumno</th><th>|</th><th>F. Inicio</th><th>|</th><th align=\"left\">Tramite</th><th>|</th><th>Recepcion</th><th>|</th><th>Entrega</th></tr>";
              foreach($tramites as $tramite)
              {
                //nombre alumno
                $cAlumno= new catalogoAlumno();
                $regAlumno=$cAlumno->obtener($tramite->getIdAlumno()); 
                //mostrar informacion de la tramite(html)
                $cTramite= new CatalogoTramites();
                $regTramite=$cTramite->obtener($tramite->getIdTramite());
                
                if(($index % 2) == 0)
                  echo "<tr id=\"cero\"><td><span onclick=\"tramitesFinalizadosDepto(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td><td></td><td>".$tramite->getInfoDocumento()->getFInicio()."</td><td></td><td>".$tramite->getInfoDocumento()->getFFin()."</td></tr>";
                else
                  echo "<tr id=\"uno\"><td><span onclick=\"tramitesFinalizadosDepto(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td><td></td><td>".$tramite->getInfoDocumento()->getFInicio()."</td><td></td><td>".$tramite->getInfoDocumento()->getFFin()."</td></tr>";
                  
                $index++;
              }
              echo "</tbody></table>";
            }
            break;   
    case 8:
            //listar informarcion de tramite/documento -- REVISION DEL DEPTO
            //..litar informacion de tramite
            //..litar informacion de alumno
            
            //revisar documento
            $idD=$_POST['idD'];
            
            $folio=$_POST['folio'];
            $descripcionTramite=$_POST['descripcionTramite'];
            $cDocumento = new catalogoDocumento();
            $documento = $cDocumento->obtener($folio,$descripcionTramite);
            if($documento==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No existe informacion de tramite. ".$folio."</h3>";
            }
            else
            {
              echo "<fieldSet><legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Tramite</legend><div align=\"center\">";
              echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
              echo "<tr><th colSpan=\"3\">Tramite - ".$documento->getIdTramite()."</th></tr>";
              echo "<tr><td>Folio Tramite: <input type=\"text\" name=\"txtFTramite\" id=\"txtFTramite\" value=\"".$documento->getFolio()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Certificado: <input type=\"text\" name=\"txtFCertificado\" id=\"txtFCertificado\" value=\"".$documento->getCertificado()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Registro: <input type=\"text\" name=\"txtFRegistro\" id=\"txtFRegistro\" value=\"".$documento->getRegistro()."\" size=\"15\" maxLength=\"10\" disabled></td></tr>";
              echo "<tr><td colspan=\"3\" align=\"right\">Persona que realiza tramite: <input type=\"text\" name=\"txtTramita\" id=\"txtTramita\" value=\"".$documento->getTramita()."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td colsPan=\"3\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\" width=\"100%\"><tbody><tr><td>Fecha Inicio: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaInicio\" id=\"txtFechaInicio\" value=\"".$documento->getInicio()."\" size=\"10\" maxLength=\"10\" disabled></td><td align=\"right\">Fecha Finalizado: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaFin\" id=\"txtFechaFin\" value=\"".$documento->getFin()."\" size=\"10\" maxLength=\"10\" disabled></td></tr></tbody></table></td></tr>";
              echo "</tbody></table></div></fieldSet>";
              
              //para Departamentos: Mostrar la informacion de un alumno
              //case 4(-alumnos-):
              //listar toda la informacion de una Alumno HTML
              $cAlumno= new catalogoAlumno();
              $regAlumno=$cAlumno->obtener($documento->getIdAlumno());  
              if($regAlumno==false)
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion de Matricula de Alumno.</h3>";
              else 
              {
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Alumno</legend><div align=\"center\">";
                echo "<table border=\"1\" cellPadding=\"5\" cellSpacing=\"0\" align=\"center\"><tbody>";
                echo "<tr><td align=\"left\">Matricula Alumno: <input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td><td align=\"left\">Nombres: <input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td><td align=\"right\">Apellidos: <input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
                //echo "<tr><td align=\"left\">Mail: <input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled></td><td align=\"center\" colspan=\"2\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\"><tbody><tr><td>Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr></tbody></table></td></tr>";
                echo "<tr><td align=\"left\">Telefono: <input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td>";
                
                //obtener nombre escuela y plan/carrera
                $cEscuela= new catalogoEscuelas();
                $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
                $regPlanCarrera=$escuela->getPlanesCarreras();  
                
                echo "<td align=\"left\">Escuela: <input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td>";
                echo "<td align=\"right\">Plan/Carrera: <input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
                echo "</tbody></table></div></fieldSet>";
              } 
              
              //listar revisiones  
              $infoDoc = new catalogoInfoDocumento();
              $revisiones = $infoDoc->revisiones($documento->getFolio());
              if($revisiones==false)
              {
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">El tramite No ha tenido ninguna revision.</h3>";
              }
              else
              {
                //*************************  
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Revisiones Realizadas</legend><div align=\"center\">";
                foreach($revisiones as $revision)
                {
                  //Nombre del Depto
                  $cDepto=new catalogoDepartamentos();
                  $registro=$cDepto->obtener($revision->getIdDepto());
                  echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
                  
                  if($idD==$revision->getIdDepto())
                    echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" style=\"background-color:#ffd;\" disabled></td></tr>";
                  else
                    echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" disabled></td></tr>";
                  
                  //echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" disabled></td></tr>";
                  
                  
                  //nombres-apellidos Personal
                  $cPersonal=new catalogoPersonal();
                  $persona=$cPersonal->obtener($revision->getIdRecibio());
                  
                  echo "<tr><td align=\"right\">Fecha Entrada: <input type=\"text\" value=\"".$revision->getFInicio()."\" size=\"10\" disabled></td><td>Personal que Recibio: <input type=\"text\" value=\"".$revision->getIdRecibio()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  
                  if($revision->getIdEntrego() == null)
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" size=\"50\" disabled></td></tr>";
                  else
                  {
                    $persona=$cPersonal->obtener($revision->getIdEntrego());
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" value=\"".$revision->getFFin()."\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" value=\"".$revision->getIdEntrego()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  } 
                  echo "<tr><td align=\"right\">Comentarios<br>y Anexos:</td><td><textarea cols=\"65\" rows=\"5\" disabled>".$revision->getEstado()."</textarea></td></tr>";
                  echo "</tbody></table>";
                }
                echo "</div></fieldSet>";
                
              }
              
            }
            
            break;    
    case 9:
            //listar los tramites DE UN ALUMNO
            $idAlumno=$_GET['idAlumno'];
            $cDocumento = new catalogoDocumento();
            $tramites = $cDocumento->listarTramitesAlumno($idAlumno);
            if($tramites==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No hay tramites en proceso.</h3>";
            }
            else 
            {
              $index=0;
              echo "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"3\" id=\"tramitesIniciados\"><tbody><tr><th>Folio</th><th>|</th><th>Matricula</th><th>|</th><th align=\"left\">Alumno</th><th>|</th><th>Fecha de Inicio</th><th>|</th><th align=\"left\">Tramite</th></tr>";
              foreach($tramites as $tramite)
              {
                //nombre alumno
                $cAlumno= new catalogoAlumno();
                $regAlumno=$cAlumno->obtener($tramite->getIdAlumno()); 
                //mostrar informacion de la tramite(html)
                $cTramite= new CatalogoTramites();
                $regTramite=$cTramite->obtener($tramite->getIdTramite());
                
                if(($index % 2) == 0)
                  echo "<tr id=\"cero\"><td><span onclick=\"tramitesAlumno(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td></tr>";
                else
                  echo "<tr id=\"uno\"><td><span onclick=\"tramitesAlumno(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
            }
            break;
    case 10:
            //listar informarcion de tramite/documento -- REVISION DEL DEPTO
            //..litar informacion de tramite
            //..litar informacion de alumno
            $folio=$_POST['folio'];
            $descripcionTramite=$_POST['descripcionTramite'];
            $cDocumento = new catalogoDocumento();
            $documento = $cDocumento->obtener($folio,$descripcionTramite);
            if($documento==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No existe informacion de tramite. ".$folio."</h3>";
            }
            else
            {
              echo "<fieldSet><legend align=\"center\" style=\"font-weight:bolder;color:#00f;font-style:oblique;\">Modificar Informacion de Tramite</legend><div align=\"center\">";
              echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\" style=\"border:1px solid #f00;\"><tbody>";
              echo "<tr><th colSpan=\"3\">Tramite - ".$documento->getIdTramite()."</th></tr>";
              echo "<tr><td>Folio Tramite: <input type=\"text\" name=\"txtFTramite\" id=\"txtFTramite\" value=\"".$documento->getFolio()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Certificado: <input type=\"text\" name=\"ModtxtFCertificado\" id=\"ModtxtFCertificado\" value=\"".$documento->getCertificado()."\" size=\"15\" maxLength=\"10\" style=\"background-color:#ffd;\"></td><td>Folio Registro: <input type=\"text\" name=\"ModtxtFRegistro\" id=\"ModtxtFRegistro\" value=\"".$documento->getRegistro()."\" size=\"15\" maxLength=\"10\" style=\"background-color:#ffd;\"></td></tr>";
              echo "<tr><td colspan=\"3\" align=\"right\">Persona que realiza tramite: <input type=\"text\" name=\"ModtxtTramita\" id=\"ModtxtTramita\" value=\"".$documento->getTramita()."\" size=\"50\" maxLength=\"30\" style=\"background-color:#ffd;\"></td></tr>";
              echo "<tr><td colsPan=\"3\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\" width=\"100%\"><tbody><tr><td>Fecha Inicio: (yyyy-mm-dd) <input type=\"text\" name=\"ModtxtFechaInicio\" id=\"ModtxtFechaInicio\" value=\"".$documento->getInicio()."\" size=\"10\" maxLength=\"10\" style=\"background-color:#ffd;\"></td><td align=\"right\">Fecha Finalizado: (yyyy-mm-dd) <input type=\"text\" name=\"ModtxtFechaFin\" id=\"ModtxtFechaFin\" size=\"10\" maxLength=\"10\" value=\"".$documento->getFin()."\" style=\"background-color:#ffd;\"></td></tr></tbody></table></td></tr>";
              echo "</tbody></table>";
              echo "<input type=\"button\" value=\"Modificar Informacion de Tramite\" id=\"btnModInfoTramite\" name=\"btnModInfoTramite\" onclick=\"modInfoTramite(".$documento->getFolio().")\">";
              echo "</div></fieldSet>";
              
              //para Departamentos: Mostrar la informacion de un alumno
              //case 4(-alumnos-):
              //listar toda la informacion de una Alumno HTML
              $cAlumno= new catalogoAlumno();
              $regAlumno=$cAlumno->obtener($documento->getIdAlumno());  
              if($regAlumno==false)
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion de Matricula de Alumno.</h3>";
              else 
              {
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Alumno</legend><div align=\"center\">";
                echo "<table border=\"1\" cellPadding=\"5\" cellSpacing=\"0\" align=\"center\"><tbody>";
                echo "<tr><td align=\"left\">Matricula Alumno: <input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td><td align=\"left\">Nombres: <input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td><td align=\"right\">Apellidos: <input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
                //echo "<tr><td align=\"left\">Mail: <input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled></td><td align=\"center\" colspan=\"2\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\"><tbody><tr><td>Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr></tbody></table></td></tr>";
                echo "<tr><td align=\"left\">Telefono: <input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td>";
                
                //obtener nombre escuela y plan/carrera
                $cEscuela= new catalogoEscuelas();
                $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
                $regPlanCarrera=$escuela->getPlanesCarreras();  
                
                echo "<td align=\"left\">Escuela: <input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td>";
                echo "<td align=\"right\">Plan/Carrera: <input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
                echo "</tbody></table></div></fieldSet>";
              } 
              
              //listar revisiones  
              $infoDoc = new catalogoInfoDocumento();
              $revisiones = $infoDoc->revisiones($documento->getFolio());
              if($revisiones==false)
              {
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">El tramite No ha tenido ninguna revision.</h3>";
              }
              else
              {
                //*************************  
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Revisiones Realizadas</legend><div align=\"center\">";
                foreach($revisiones as $revision)
                {
                  //Nombre del Depto
                  $cDepto=new catalogoDepartamentos();
                  $registro=$cDepto->obtener($revision->getIdDepto());
                  echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
                  echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" disabled></td></tr>";
                  
                  //nombres-apellidos Personal
                  $cPersonal=new catalogoPersonal();
                  $persona=$cPersonal->obtener($revision->getIdRecibio());
                  
                  echo "<tr><td align=\"right\">Fecha Entrada: <input type=\"text\" value=\"".$revision->getFInicio()."\" size=\"10\" disabled></td><td>Personal que Recibio: <input type=\"text\" value=\"".$revision->getIdRecibio()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  
                  if($revision->getIdEntrego() == null)
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" size=\"50\" disabled></td></tr>";
                  else
                  {
                    $persona=$cPersonal->obtener($revision->getIdEntrego());
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" value=\"".$revision->getFFin()."\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" value=\"".$revision->getIdEntrego()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  } 
                  echo "<tr><td align=\"right\">Comentarios<br>y Anexos:</td><td><textarea cols=\"65\" rows=\"5\" disabled>".$revision->getEstado()."</textarea></td></tr>";
                  echo "</tbody></table>";
                }
                echo "</div></fieldSet>";
                
              }
              
            }
            
            break; 
    case 11:
            //Modificar informacion de tramite en el sistema
            $folio = $_POST['folio'];
            $fCertificado = $_POST['fCertificado'];
            $fRegistro = $_POST['fRegistro'];
            $tramita = $_POST['tramita'];
            $fInicio = $_POST['fInicio'];
            $fFin = $_POST['fFin'];
            
            if((ereg('(2005|2006|2007|2008|2009|2010)\-(00|01|02|03|04|05|06|07|08|09|10|11|12)\-(0|1|2|3)(0|1|2|3|4|5|6|7|8|9)',$fInicio) && (ereg('(2005|2006|2007|2008|2009|2010)\-(00|01|02|03|04|05|06|07|08|09|10|11|12)\-(0|1|2|3)(0|1|2|3|4|5|6|7|8|9)',$fFin)) | $fFin=='NULL'))
            {
              $documento = new documento($folio,0,0,$fCertificado,$fRegistro,$tramita,$fInicio);
              if(empty($fFin) | $fFin=='') $documento->setFin('NULL');
              $documento->setFin($fFin);
              $cDocumento = new catalogoDocumento();
              $estado=$cDocumento->modificar($documento);
              if($estado==false)
                echo "Error: No se agrego Nuevo Tramite al Sistema, verifica que valores de fechas de ingreso y de finalizacion que tengan valores en el formato correcto.";
              else if($estado==true)
                echo "Tramite Moficado. Folio de tramite es: ".$folio.", Matricula Alumno: ".$idAlumno.", Folio Certificado: ".$fCertificado.", Folio Registro: ".$fRegistro;             
            }
            else
            {
              echo "Error: No se agrego Nuevo Tramite al Sistema, verifica que valores de fechas de ingreso y de finalizacion que tengan valores en el formato correcto.";
            }
            break;
     case 12:
            //listar los tramites DE UN ALUMNO, para Eliminar *** CASE 9:
            $idAlumno=$_GET['idAlumno'];
            $cDocumento = new catalogoDocumento();
            $tramites = $cDocumento->listarTramitesAlumno($idAlumno);
            if($tramites==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No hay tramites en proceso.</h3>";
            }
            else 
            {
              $index=0;
              echo "<table border=\"0\" cellSpacing=\"0\" cellPadding=\"3\" id=\"tramitesIniciados\"><tbody><tr><th>Folio</th><th>|</th><th>Matricula</th><th>|</th><th align=\"left\">Alumno</th><th>|</th><th>Fecha de Inicio</th><th>|</th><th align=\"left\">Tramite</th></tr>";
              foreach($tramites as $tramite)
              {
                //nombre alumno
                $cAlumno= new catalogoAlumno();
                $regAlumno=$cAlumno->obtener($tramite->getIdAlumno()); 
                //mostrar informacion de la tramite(html)
                $cTramite= new CatalogoTramites();
                $regTramite=$cTramite->obtener($tramite->getIdTramite());
                
                if(($index % 2) == 0)
                  echo "<tr id=\"cero\"><td><span onclick=\"CancelarTramitesAlumno(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td></tr>";
                else
                  echo "<tr id=\"uno\"><td><span onclick=\"CancelarTramitesAlumno(".$tramite->getFolio().",'".$regTramite->getId()." ".$regTramite->getDescripcion()."')\">".$tramite->getFolio()."</span></td><td></td><td>".$regAlumno->getMatricula()."</td><td></td><td>".$regAlumno->getNombres()." ".$regAlumno->getApellidos()."</td><td></td><td>".$tramite->getInicio()."</td><td></td><td>".$regTramite->getId()." ".$regTramite->getDescripcion()."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
            }
            break;
            
    case 13:
            //para Eliminar Tramite de Alumno
            // case 8:
            //listar informarcion de tramite/documento -- REVISION DEL DEPTO
            //..litar informacion de tramite
            //..litar informacion de alumno
            $folio=$_POST['folio'];
            $descripcionTramite=$_POST['descripcionTramite'];
            $cDocumento = new catalogoDocumento();
            $documento = $cDocumento->obtener($folio,$descripcionTramite);
            if($documento==false)
            {
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No existe informacion de tramite. ".$folio."</h3>";
            }
            else
            {
              echo "<fieldSet><legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Tramite</legend><div align=\"center\">";
              echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
              echo "<tr><th colSpan=\"3\">Tramite - ".$documento->getIdTramite()."</th></tr>";
              echo "<tr><td>Folio Tramite: <input type=\"text\" name=\"txtFTramite\" id=\"txtFTramite\" value=\"".$documento->getFolio()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Certificado: <input type=\"text\" name=\"txtFCertificado\" id=\"txtFCertificado\" value=\"".$documento->getCertificado()."\" size=\"15\" maxLength=\"10\" disabled></td><td>Folio Registro: <input type=\"text\" name=\"txtFRegistro\" id=\"txtFRegistro\" value=\"".$documento->getRegistro()."\" size=\"15\" maxLength=\"10\" disabled></td></tr>";
              echo "<tr><td colspan=\"3\" align=\"right\">Persona que realiza tramite: <input type=\"text\" name=\"txtTramita\" id=\"txtTramita\" value=\"".$documento->getTramita()."\" size=\"50\" disabled></td></tr>";
              echo "<tr><td colsPan=\"3\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\" width=\"100%\"><tbody><tr><td>Fecha Inicio: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaInicio\" id=\"txtFechaInicio\" value=\"".$documento->getInicio()."\" size=\"10\" maxLength=\"10\" disabled></td><td align=\"right\">Fecha Finalizado: (yyyy-mm-dd) <input type=\"text\" name=\"txtFechaFin\" id=\"txtFechaFin\" size=\"10\" maxLength=\"8\" disabled></td></tr></tbody></table></td></tr>";
              echo "</tbody></table></div></fieldSet>";
              
              //para Departamentos: Mostrar la informacion de un alumno
              //case 4(-alumnos-):
              //listar toda la informacion de una Alumno HTML
              $cAlumno= new catalogoAlumno();
              $regAlumno=$cAlumno->obtener($documento->getIdAlumno());  
              if($regAlumno==false)
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">No se encontro informacion de Matricula de Alumno.</h3>";
              else 
              {
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Informacion Alumno</legend><div align=\"center\">";
                echo "<table border=\"1\" cellPadding=\"5\" cellSpacing=\"0\" align=\"center\"><tbody>";
                echo "<tr><td align=\"left\">Matricula Alumno: <input type=\"text\" id=\"MtxtMatricula\" value=\"".$regAlumno->getMatricula()."\" disabled size=\"20\"></td><td align=\"left\">Nombres: <input type=\"text\" id=\"MtxtNombres\" size=\"25\" value=\"".$regAlumno->getNombres()."\" maxLength=\"30\" disabled></td><td align=\"right\">Apellidos: <input type=\"text\" id=\"MtxtApellidos\" size=\"30\" value=\"".$regAlumno->getApellidos()."\" maxLength=\"35\" disabled></td></tr>";
                //echo "<tr><td align=\"left\">Mail: <input type=\"text\" id=\"MtxtMail\" size=\"30\" value=\"".$regAlumno->getMail()."\" maxLength=\"25\" disabled></td><td align=\"center\" colspan=\"2\"><table border=\"0\" cellPadding=\"0\" cellSpacing=\"0\"><tbody><tr><td>Observacion:</td><td><textarea id=\"MtxtObs\" cols=\"50\" rows=\"4\" disabled>".$regAlumno->getNota()."</textarea></td></tr></tbody></table></td></tr>";
                echo "<tr><td align=\"left\">Telefono: <input type=\"text\" id=\"MtxtTel\" size=\"30\" value=\"".$regAlumno->getTelefono()."\" maxLength=\"25\" disabled> </td>";
                
                //obtener nombre escuela y plan/carrera
                $cEscuela= new catalogoEscuelas();
                $escuela=$cEscuela->obtenerEscuelacarrera($regAlumno->getIdPlanEscuela());
                $regPlanCarrera=$escuela->getPlanesCarreras();  
                
                echo "<td align=\"left\">Escuela: <input type=\"text\" id=\"escuela\" size=\"30\" value=\"".$escuela->getNombre()."\" maxLength=\"25\" disabled></td>";
                echo "<td align=\"right\">Plan/Carrera: <input type=\"text\" id=\"plancarrera\" name=\"".$regAlumno->getIdPlanEscuela()."\" value=\"".$regPlanCarrera[0]."\" maxLength=\"25\" size=\"40\" disabled></td></tr>";
                echo "</tbody></table></div></fieldSet>";
              } 
              
              //listar revisiones  
              $infoDoc = new catalogoInfoDocumento();
              $revisiones = $infoDoc->revisiones($documento->getFolio());
              if($revisiones==false)
              {
                echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">El tramite No ha tenido ninguna revision.</h3>";
              }
              else
              {
                //*************************  
                
                echo "<fieldSet>";
                echo "<legend align=\"center\" style=\"font-weight:bolder;color:#369;font-style:oblique;\">Revisiones Realizadas</legend><div align=\"center\">";
                foreach($revisiones as $revision)
                {
                  //Nombre del Depto
                  $cDepto=new catalogoDepartamentos();
                  $registro=$cDepto->obtener($revision->getIdDepto());
                  echo "<table border=\"1\" cellSpacing=\"0\" cellPadding=\"5\"><tbody>";
                  echo "<tr><td colSpan=\"2\">Departamento: <input type=\"text\" value=\"".$revision->getIdDepto()." - ".$registro->getNombre()."\" size=\"50\" disabled></td></tr>";
                  
                  //nombres-apellidos Personal
                  $cPersonal=new catalogoPersonal();
                  $persona=$cPersonal->obtener($revision->getIdRecibio());
                  
                  echo "<tr><td align=\"right\">Fecha Entrada: <input type=\"text\" value=\"".$revision->getFInicio()."\" size=\"10\" disabled></td><td>Personal que Recibio: <input type=\"text\" value=\"".$revision->getIdRecibio()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  
                  if($revision->getIdEntrego() == null)
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" size=\"50\" disabled></td></tr>";
                  else
                  {
                    $persona=$cPersonal->obtener($revision->getIdEntrego());
                    echo "<tr><td align=\"right\">Fecha Salida: <input type=\"text\" value=\"".$revision->getFFin()."\" size=\"10\" disabled></td><td>Personal que Entrego: <input type=\"text\" value=\"".$revision->getIdEntrego()." - ".$persona->getNombres()." ".$persona->getApellidos()."\" size=\"50\" disabled></td></tr>";
                  } 
                  echo "<tr><td align=\"right\">Comentarios<br>y Anexos:</td><td><textarea cols=\"65\" rows=\"5\" disabled>".$revision->getEstado()."</textarea></td></tr>";
                  echo "</tbody></table>";
                }
                echo "</div></fieldSet>";
                
              }
              
              echo "<div align=\"center\" style=\"border:1px solid #f00;background-color:#ffd;\"><p><input type=\"submit\" value=\"Eliminar Informacion de Tramite\" name=\"btnCancelarTramite\" id=\"btnCancelarTramite\" onclick=\"CancelarTramite(".$folio.")\"></p></div>";
              
            }
            
            break; 
    case 14:
            //Iniciar un nuevo tramite en el sistema
            $folio = $_GET['folio'];
            $cDocumento = new catalogoDocumento();
            $estado=$cDocumento->eliminar($folio);
            if($estado==false)
              echo "Error: No se elimino Tramite de Alumno, FOLIO DE TRAMITE.";
            else if($estado==true)
              echo "Tramite Eliminado. Folio de tramite: ".$folio;
            break;        
    default:
            break;
  }         
?>
  