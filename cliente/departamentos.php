<?php

  require_once('../reglasnegocio/departamento.class.php');
  require_once('../reglasnegocio/catalogoDepartamento.class.php');

  if(isset($_REQUEST['opcion']))
    $_opcion = $_REQUEST['opcion'];
  else
    $_opcion = -1;
  
  switch($_opcion)
  {
    case 0:
            $_nombre= $_POST['nombre'];
            $_nivelDepto= $_POST['nivelDepto'];
            
            $depto=new departamento(0,$_nombre);
            $depto->setNivel($_nivelDepto);
            $cDepto= new catalogoDepartamentos();
            $cDepto->agregar($depto);  
            echo "alta correcta de:".$_nombre;
            break;
    case 1:
            $cDepto=new catalogoDepartamentos();
            echo "<table border=\"0\" cellPadding=\"2\" cellSpacing=\"0\" id=\"tablaListaPersonal\" align=\"center\"><tbody><tr><th>Clave Departamento</th><th>Nombre</th><th>Roles Departamentales</th></tr>";
            $index=0;
            foreach($cDepto->obtenerTodos() as $depto)
            {
               if (($index % 2) == 0 )
               {
                  if($depto->getNivel()==0) echo "<tr id=\"cero\"><td>".$depto->getId()."</td><td>".$depto->getNombre()."</td><td>Solo lectura</td></tr>";
                  if($depto->getNivel()==1) echo "<tr id=\"cero\"><td>".$depto->getId()."</td><td>".$depto->getNombre()."</td><td>Lectura/Modificar</td></tr>";
                  if($depto->getNivel()==2) echo "<tr id=\"cero\"><td>".$depto->getId()."</td><td>".$depto->getNombre()."</td><td>Acceso Administrador</td></tr>";
               }
               else
               {
                  if($depto->getNivel()==0) echo "<tr id=\"uno\"><td>".$depto->getId()."</td><td>".$depto->getNombre()."</td><td>Solo lectura</td></tr>";
                  if($depto->getNivel()==1) echo "<tr id=\"uno\"><td>".$depto->getId()."</td><td>".$depto->getNombre()."</td><td>Lectura/Modificar</td></tr>";
                  if($depto->getNivel()==2) echo "<tr id=\"uno\"><td>".$depto->getId()."</td><td>".$depto->getNombre()."</td><td>Acceso Administrador</td></tr>";
               }
               $index = $index + 1;
            }
            echo "</tbody></table>";
            break;
    case 2:
            $_idDepto=$_GET['idDepto'];
            $cDepto=new catalogoDepartamentos();
            $registro=$cDepto->obtener($_idDepto);
            if ($registro->getNombre()=='')
            {
              echo "No se encontro ningun registro con esa clave";
            }
            else
            {
              $cDepto->eliminar($_idDepto);
              echo "se elimino registro: ".$registro->getId()."&nbsp;".$registro->getNombre();
            }
            break;
    case 3:
            $idDepto=$_GET['idDepto'];
            $cDepto=new catalogoDepartamentos();
            $registro=$cDepto->obtener($idDepto);
            if ($registro->getNombre()=='')
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
                    <tr><td>Clave Departamento:</td><td><input type="text" name="txtIdDepto" id="txtIdDepto" value="<?php echo $idDepto ?>" disabled size="5"></td></tr>
                    <tr><td>Nombre:</td><td><input type="text" name="txtNombreDepto" id="txtNombreDepto" size="30" value="<?php echo $registro->getNombre() ?>" maxLength="28"></td></tr>
                    <tr><td>Roles Departamentales:</td><td><select name="nivelDepto" id="nivelDepto"><option value="0">Solo lectura</option><option value="1">Lectura/Modificar</option><option value="2">Acceso Administrador</option></select></td></tr>
                    <tr><td colspan="2" align="right"><input type="button" value="modificar informacion" id="btnModificarDepto" onclick="modificarRegistroDepto()"></td></tr>
                  </table>
                </body>
                </html> 
              <?php
            } 
            break;
    case 4:
            $idDepto=$_POST['idDepto'];
            $nombre=$_POST['nombre'];
            $nivelDepto=$_POST['nivelDepto'];
            
            $depto=new departamento($idDepto,$nombre);
            $depto->setNivel($nivelDepto);
            $cDepto= new catalogoDepartamentos();
            
            $cDepto->modificar($depto);
            echo "Acualizacion correcta de registro: ".$idDepto;
            break;
    case 5:
            
            $fun=$_GET['fun'];
            $cDepto=new catalogoDepartamentos();
            
            if ($fun==0)
              echo "<select name=\"slListaDeptos\" id=\"slListaDeptos\" onchange=\"cboDeptos(this.value)\">";
            if ($fun==1)
              echo "<select name=\"slListaDeptos\" id=\"slListaDeptos\" onchange=\"MuestraEliminaResp(this.value,'0')\">";
            if ($fun==2)
              echo "<select name=\"slListaDeptos\" id=\"slListaDeptos\" onchange=\"MuestraEliminaResp(this.value,'1')\">";
            if ($fun==3)
              echo "<select name=\"slListaDeptos\" id=\"slListaDeptos\" onchange=\"cboDeptosAddPersonal()\">";
            if ($fun==4)
              echo "<select name=\"slListaDeptos\" id=\"slListaDeptos\" onchange=\"MuestraEliminaPersonal(this.value,'0')\">";
            if ($fun==5)
              echo "<select name=\"slListaDeptos\" id=\"slListaDeptos\" onchange=\"MuestraEliminaPersonal(this.value,'1')\">";
            //para tramites, asignar por cuales departamentos pasara el tramite
            if ($fun==6)
              echo "<select name=\"slListaDeptos\" id=\"slListaDeptos\">";
            
            $index=0;
            echo "<option value=\"0\">-Seleccionar Departamento-</option>";
            foreach($cDepto->obtenerTodos() as $depto)
            {
               //echo "<option value=".$depto->getId().">".$depto->getId()." - ".$depto->getNombre()."</option>";
               if (($index % 2) == 0 )
                  echo "<option value=".$depto->getId()." id=\"cero\">".$depto->getId()." - ".$depto->getNombre()."</option>";
               else
                  echo "<option value=".$depto->getId()." id=\"uno\">".$depto->getId()." - ".$depto->getNombre()."</option>";
               $index = $index + 1;
                
            }
            echo "</select>";
            break;
    case 6:
            $idDepto=$_POST['idDepto'];
            $resp=$_POST['resp'];
            
            $cDepto=new catalogoDepartamentos();
            $depto=new departamento($idDepto,'X');
            
            $depto->setListaResponsabilidades($resp);
            
            $cDepto->agregarResponsabilidades($depto);
            echo "<strong>se agrego responsabilidad:</strong> ".$resp;
            break;
    case 7:
            $idDepto=$_GET['idDepto'];
            $op=$_GET['op'];
            $cDepto=new catalogoDepartamentos();
            $responsabilidadesDepto=$cDepto->obtenerResponsabilidades($idDepto);
            $index=0;
            if($op=='0')
            {
              foreach($responsabilidadesDepto->getListaResponsabilidades() as $responsabilidad)
              { 
                echo "<p>".$responsabilidad."</p>";
                $index++;
              }
            }
            if($op=='1')
            {
              foreach($responsabilidadesDepto->getListaResponsabilidades() as $responsabilidad)
              { 
                if($index==0) echo "<table border=\"0\" align:\"left\" width=\"100%\" cellpadding=\"2\" cellspacing=\"0\"><tbody>";
                echo "<tr><td width=\"10px\"><input type=\"checkbox\" name=\"checkbox\" id=\"checkbox".$index."\" value=\"".$responsabilidad."\"></td><td>".$responsabilidad."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
            }
            if($index==0)
            { 
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Al departamento aun no se le han asignado responsabilidades.</h3>";
            }
            if($op=='1' && $index > 0)
            {
              echo "<html><input type=\"button\" value=\"Eliminar Responsabilidades\" id=\"eliminarDeptosResp\" onclick=\"EliminarResp()\"></html>";
            }
            break;  
    case 8:
            $idDepto=$_POST['idDepto'];
            $resp=$_POST['resp'];
            $cDepto=new catalogoDepartamentos();
            $cDepto->quitarResponsabilidad($idDepto,$resp);
            echo "Se elimino responsabilidad: ".$resp;
            break;
    case 9:
            //signar personal
            $idDepto=$_GET['idDepto'];
            $idPersonal=$_GET['idPersonal'];
            
            $cDepto=new catalogoDepartamentos();
            $depto=new departamento($idDepto,'X');
            $depto->setListaPersonal($idPersonal);
            
            $cDepto->agregarPersonal($depto);
            
            echo "<strong>se asigno personal: </strong> ".$idPersonal;
            break;
    case 10:
            $idDepto=$_GET['idDepto'];
            $op=$_GET['op'];
            $cDepto=new catalogoDepartamentos();
            $personalDepto=$cDepto->obtenerPersonal($idDepto);
            $index=0;
            if($op=='0')
            {
              foreach($personalDepto->getListaPersonal() as $personal)
              { 
                echo "<p>".$personal->getId()." ".$personal->getNombres()." ".$personal->getApellidos()."</p>";
                $index++;
              }
            }
            if($op=='1')
            {
              foreach($personalDepto->getListaPersonal() as $personal)
              { 
                if($index==0) echo "<table border=\"0\" align:\"left\" width=\"100%\" cellpadding=\"2\" cellspacing=\"0\"><tbody>";
                echo "<tr><td width=\"10px\"><input type=\"checkbox\" name=\"checkbox\" id=\"checkbox".$index."\" value=\"".$personal->getId()."\"></td><td>".$personal->getId()." ".$personal->getNombres()." ".$personal->getApellidos()."</td></tr>";
                $index++;
              }
              echo "</tbody></table>";
            }
            if($index==0)
            { 
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Al departamento aun no se le ha asignado Personal.</h3>";
            }
            if($op=='1' && $index > 0)
            {
              echo "<html><input type=\"button\" value=\"Eliminar Personal\" id=\"eliminarDeptosResp\" onclick=\"EliminarPersonal()\"></html>";
            }
            break; 
    case 11:
            $idDepto=$_POST['idDepto'];
            $idPersonal=$_POST['idPersonal'];
            $cDepto=new catalogoDepartamentos();
            $cDepto->quitarPersonal($idDepto,$idPersonal);
            echo "Se elimino Personal: ".$idPersonal;
            break; 
    default:
            echo "opcion incorrecta";
            break;
  }

/*  
  $depto=new departamento(0,"sistemas");
  $cDepto= new catalogoDepartamentos();
  $cDepto->agregar($depto);  
  echo "se ha agregado";
  
  $depto->setId(1);
  $depto->setNombre("que no non nno no");
  $cDepto->modificar($depto);
  echo "se ha modificado";
  
  $cDepto->eliminar(11);
  echo "se ha elimanado";
  
  $registro=$cDepto->obtener(10);
  echo $registro->getId() .$registro->getNombre();
  
  foreach($cDepto->obtenerTodos() as $misDeptos)
  { 
    echo $misDeptos->getId()." ".$misDeptos->getNombre()."<br>";
  }
  
  //asignar personal
  $depto->setId(12);
  for($indice=1; $indice<11; $indice++)
  {
    $depto->setListaPersonal($indice);
  
  }
  $cDepto->agregarPersonal($depto);
  echo "<br>se agrego lista de personal";
  
  //lista de personal
  $personalDepto=$cDepto->obtenerPersonal(12) ;
  foreach($personalDepto->getListaPersonal() as $personal)
  { 
   echo "<br>hey ".$personal->getNombres().$personal->getId().$personal->getApellidos();
  }
  
  //quitar personal de depto
  $cDepto->quitarPersonal(aqui id depto, aqui idPersonal);
  echo "se ha quita el la persona con el id de 10";
  
  //asignar responsabilidades
  $depto->setId(3);
  for($indice=1; $indice<11; $indice++)
  {
    $depto->setListaResponsabilidades("tarea ".$indice);
  
  }
  $cDepto->agregarResponsabilidades($depto);
  echo "<br>se agrego lista de RESPONSABILIDADES";
  
  //lista de RESPONSABILIDADES
  $responsabilidadesDepto=$cDepto->obtenerResponsabilidades(3) ;
  foreach($responsabilidadesDepto->getListaResponsabilidades() as $responsabilidad)
  { 
   echo "<br>responsabilidad : ".$responsabilidad;
  }
  
  //quitar responsabilidad de depto
  $cDepto->quitarResponsabilidad(3);
  echo "se quitaron responsabilidades del depto";
  
*/  
?>