<?php
  
  require_once('../reglasnegocio/alumno.class.php');
  require_once('../accesodatos/basedatos.class.php');
                   
  class catalogoAlumno
  {
    
    //agregar un registro de alumno al sistema
    public function agregar($alumno)
    {
      $bd= new basedatos();
      $bd->conectar();
      $sql="INSERT INTO alumnos(matricula, nombres, apellidos, mail, telefono, observacion, idPlanEscuela, password)".
            " VALUES('".$alumno->getMatricula()."','".$alumno->getNombres()."','".$alumno->getApellidos()."','".$alumno->getMail()."','".$alumno->getTelefono()."','".$alumno->getNota()."',".$alumno->getIdPlanEscuela().",'".$alumno->getPassword()."')";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      if($bd->verificaEjecutarComando()==false)
      {
        $bd->desconectar();
        return false;
      }
      $bd->desconectar();
      return true;
    }
    
    
    //obtener toda la info. a exception del password de un alumno
    public function obtener($matricula)
    {
      $bd=new basedatos();
      $bd->conectar();
      $sql="SELECT matricula, nombres, apellidos, mail, observacion, telefono, idPlanEscuela, password FROM alumnos WHERE matricula='".$matricula."'";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $resultado=$bd->filasEncontradas(); 
      if($resultado > 0 )
      {
        $reg=$bd->obtenerRegistro();
        $bd->desconectar();
        $alumno= new alumno($reg[0],$reg[1],$reg[2]);
        $alumno->setMail($reg[3]);
        $alumno->setNota($reg[4]);
        $alumno->setTelefono($reg[5]);
        $alumno->setIdPlanEscuela($reg[6]);
        $alumno->setPassword($reg[7]);
        return $alumno;
      }
      else if($resultado == 0)
      {
        $bd->desconectar();
        return false;
      }
      
      
      
    }
    
    //modificar un registro de alumno
    public function modificar($alumno)
    {
      $bd= new basedatos();
      $bd->conectar();
      $sql="UPDATE alumnos SET nombres='".$alumno->getNombres()."', apellidos='".$alumno->getApellidos()."', mail='".$alumno->getMail()."', telefono='".$alumno->getTelefono()."', observacion='".$alumno->getNota()."', idPlanEscuela=".$alumno->getIdPlanEscuela().", password='".$alumno->getPassword()."'".
            " WHERE matricula='".$alumno->getMatricula()."'";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      if($bd->verificaEjecutarComando()==false)
      {
        $bd->desconectar();
        return false;
      }
      $bd->desconectar();
      return true;
    }
    
    
    
    //lista info de alumno por criterio de nombre
    public function listarNombres($nombres)
    {
      $alumnos=array();
      $bd=new basedatos();
      $bd->conectar();
      $sql="SELECT matricula, nombres, apellidos FROM alumnos WHERE nombres like '".$nombres."%'";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      while($reg=$bd->obtenerRegistros())
      {
        $alumno= new alumno($reg['matricula'],$reg['nombres'],$reg['apellidos']);
        $alumnos[]=$alumno;
      }
      $bd->desconectar();
      return $alumnos;
    }
    
    //lista info de alumno por criterio de apellidos
    public function listarApellidos($apellidos)
    {
      $alumnos=array();
      $bd=new basedatos();
      $bd->conectar();
      $sql="SELECT matricula, nombres, apellidos FROM alumnos WHERE apellidos like '".$apellidos."%'";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      while($reg=$bd->obtenerRegistros())
      {
        $alumno= new alumno($reg['matricula'],$reg['nombres'],$reg['apellidos']);
        $alumnos[]=$alumno;
      }
      $bd->desconectar();
      return $alumnos;
    }
    
    /*
    public function listar($id)
    {
      $bd=new basedatos();
      $bd->conectar();
      $sql="SELECT nombres, aPaterno, aMaterno FROM alumnos WHERE id=".$id;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $reg=$bd->obtenerRegistro();

      $alumno= new alumnos($id);
      $alumno->setNombres($reg[0]);
      //echo $alumno->getNombres();
      $alumno->setaPaterno($reg[1]);
      $alumno->setaMaterno($reg[2]);
      
      $bd->desconectar();
      
      return $alumno;
    } 
    */
  }
?>