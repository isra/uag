<?php
  
  require_once('../accesodatos/basedatos.class.php');
  require_once('../reglasnegocio/escuela.class.php');
  require_once('../reglasnegocio/catalogoPersonal.class.php');
  require_once('../reglasnegocio/personal.class.php');
  require_once('../reglasnegocio/plancarrera.class.php');
  
  class catalogoEscuelas
  {
     //agregar nueva escuela
     public function agregar($escuela)
     {
        $bd=new basedatos();
        $bd->conectar();
        $sql="INSERT INTO escuelas(nombre,idResponsable,idRevisor) VALUES('".$escuela->getNombre()."',".$escuela->getResponsable().",".$escuela->getRevisor().")";  
        $bd->crearComando($sql);
        $bd->ejecutarComando();  
        $bd->desconectar();
     }
     
     //eliminar escuela
     public function eliminar($idEscuela)
     {
        $bd=new basedatos();
        $bd->conectar();
        $sql="DELETE FROM escuelas WHERE id=".$idEscuela;
        $bd->crearComando($sql);
        $bd->ejecutarComando();
        $bd->desconectar();
     }
     
     //modificar informacion escuela
     public function modificar($escuela)
     {
        $bd=new basedatos();
        $bd->conectar();
        
        $sql="UPDATE escuelas SET nombre='".$escuela->getNombre()."', idResponsable=".$escuela->getResponsable().", idRevisor=".$escuela->getRevisor().
             " WHERE id=".$escuela->getId();  
        
        $bd->crearComando($sql);
        $bd->ejecutarComando();
        $bd->desconectar();  
     }
     
     //listar informacion clave,nombre,responsable,revisor DE UNA SOLA ESCUELA
     public function obtener($idEscuela)
     {
        $sql;
        $escuela;
        $cPersonal=new catalogoPersonal();
        
        $bd=new basedatos();
        $bd->conectar();
        $sql="SELECT nombre, idResponsable, idRevisor FROM escuelas WHERE id=".$idEscuela;
        $bd->crearComando($sql);
        $bd->ejecutarComando();
        
        if($bd->filasEncontradas()==0)
        {
          $bd->desconectar();   
          return false;
        }
        
        $registro=$bd->obtenerRegistro();
         
        $bd->desconectar();   
        
        $nombreEscuela=$registro[0];
        $responsable=$cPersonal->obtener($registro[1]);
        $revisor=$cPersonal->obtener($registro[2]);
        
        $escuela=new escuela($idEscuela,$nombreEscuela,$responsable,$revisor);

       

        return $escuela;   
        
     }
     
     
     //mostrar el clave,nombre de una escuela de todas las escuelas
     public function obtenerTodos()
     {
        $sql;
        $escuela;
        $escuelas=array();
        
        $bd=new basedatos();
        $bd->conectar();
        
        $sql="SELECT id, nombre FROM escuelas";
        
        $bd->crearComando($sql);
        $bd->ejecutarComando();
        
        while($registros=$bd->obtenerRegistros())
        {
           $escuela=new escuela($registros['id'],$registros['nombre']);
           $escuelas[]=$escuela;
        }

        $bd->desconectar();

        return $escuelas;
        
     }
     
     //asignar planes o carreras de estudios a una escuela
     public function asignarPlanesCarreras($escuela)
     {
        $bd=new basedatos();
        $bd->conectar();
        
        foreach($escuela->getPlanesCarreras() as $planCarrera)
        {
          
          $sql="INSERT INTO planescuelas(idEscuela, planCarrera) VALUES(".$escuela->getId().",'".$planCarrera."')";
          $bd->crearComando($sql);
          $bd->ejecutarComando(); 
         
        }
        
        $bd->desconectar();
     }
     
     //lista de planes o carreras de estudio pertenecientes a una escuela
     public function obtenerPlanesCarreras($idEscuela,$nombreEscuela="escuela")
     {
        $sql;
        
        $plancarrera;
        $escuela;
        
        $bd=new basedatos();
        $bd->conectar();
        
        $sql="SELECT id,planCarrera FROM planescuelas WHERE idEscuela=".$idEscuela;
        $bd->crearComando($sql);
        $bd->ejecutarComando();
        $escuela=new escuela($idEscuela,$nombreEscuela);
        
        
        while($registros=$bd->obtenerRegistros())
        {
            $plancarrera=new plancarrera($registros['id'],$registros['planCarrera']);
            $escuela->setPlanesCarreras($plancarrera);
        }
        
        $bd->desconectar();
        
        return $escuela;
     }
     
     //eliminar plan/carrera pertenecientes a una escuela
     public function eliminarPlanCarrera($idplancarrera)
     {
        $bd=new basedatos();
        $bd->conectar();
        $sql="DELETE FROM planescuelas WHERE id=".$idplancarrera;
        $bd->crearComando($sql);
        $bd->ejecutarComando();
        $bd->desconectar();
     }
     
     
     //obtener Nombre de Escuela y plan/carrera
     public function obtenerEscuelaCarrera($idPlanEscuela)
     {
        $sql;
        $escuela;
        $cEscuelas=new catalogoEscuelas();
        
        $bd=new basedatos();
        $bd->conectar();
        
        $sql="SELECT idEscuela,planCarrera FROM planescuelas WHERE id=".$idPlanEscuela;
        $bd->crearComando($sql);
        $bd->ejecutarComando();
        $registro=$bd->obtenerRegistro();
        
        $bd->desconectar();
        
        $escuela=$cEscuelas->obtener($registro[0]);
        $escuela->setPlanesCarreras($registro[1]);
        
        return $escuela;
        
     }
     
  }
?>