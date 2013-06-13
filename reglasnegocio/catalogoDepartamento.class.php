<?php
  require_once('../accesodatos/basedatos.class.php');
  require_once('../reglasnegocio/departamento.class.php');
  require_once('../reglasnegocio/catalogoPersonal.class.php');
  require_once('../reglasnegocio/personal.class.php');

  class catalogoDepartamentos
  {
    //agregar nuevo
    public function agregar($departamento)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="INSERT INTO departamento(nombre,nivel) VALUES('".$departamento->getNombre()."',".$departamento->getNivel().")";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $bd->desconectar();
      
    }
    
    //elimar departamento
    public function eliminar($id)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="DELETE FROM departamento WHERE id=".$id;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $bd->desconectar();
      
    }
    
    //modificar información
    public function modificar($departamento)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="UPDATE departamento SET nombre='".$departamento->getNombre()."', nivel=".$departamento->getNivel()." WHERE id=".$departamento->getId() ;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $bd->desconectar();
      
    }
    
    //obtener id y nombre de solo un departamento
    public function obtener($id)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="SELECT id, nombre FROM departamento WHERE id=".$id;
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $registro= $bd->obtenerRegistro();
      
      $bd->desconectar();
      
      $departamento= new departamento($registro[0],$registro[1]);
      
      return $departamento;
      
    }
    
    //obtener id y nombre de todos los departamentos
    public function obtenerTodos()
    {
      
      $departamento;
      $departamentos= array();
      
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="SELECT id, nombre, nivel FROM departamento";
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      while($registros=$bd->obtenerRegistros())
      {
        $departamento= new departamento($registros['id'],$registros['nombre']);
        $departamento->setNivel($registros['nivel']);
        $departamentos[]=$departamento;
      }
      
      $bd->desconectar();
      
      return $departamentos;
      
    }
    
    //asignar personal a un departamento
    public function agregarPersonal($departamento)
    {
      $bd=new basedatos();
      $bd->conectar();
      //echo "agregar lista de persoan";
      
      foreach($departamento->getListaPersonal() as $persona)
      {
        //echo "agregar lista de persoan";
        //echo "<br>".$departamento->getId().$persona;
      
        $sql="INSERT INTO personaldepto(idDepto,idPersonal)".
             " VALUES (".$departamento->getId().",".$persona.")";
      
        $bd->crearComando($sql);
        $bd->ejecutarComando();
      }
      
      $bd->desconectar();
      
    }
    
    //devolver lista de personal
    public function obtenerPersonal($idDepartamento,$nombreDepartamento="NombreDepartamento")
    {
      
      $departamento;
      
      $cPersonal=new catalogoPersonal();
      $personal;
      
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="SELECT idPersonal FROM personaldepto WHERE idDepto=".$idDepartamento;
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $departamento= new departamento($idDepartamento,$nombreDepartamento);
      $bd->desconectar();
      while($registros=$bd->obtenerRegistros())
      {
        $personal= $cPersonal->obtener($registros['idPersonal']);
        $departamento->setListaPersonal($personal);
      }
      
      return $departamento;
      
    }
    
    //quitar personal de depto
    public function quitarPersonal($idDepto,$idPersonal)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="DELETE FROM personaldepto WHERE idDepto=".$idDepto." AND idPersonal=".$idPersonal ;
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $bd->desconectar();
      
    }
    
  
  //asignar Responsabilidades a un departamento
    public function agregarResponsabilidades($departamento)
    {
      $bd=new basedatos();
      $bd->conectar();
    
      foreach($departamento->getListaResponsabilidades() as $responsabilidad)
      {
    
        $sql="INSERT INTO responsabilidaddepto(idDepto,responsabilidad)".
             " VALUES (".$departamento->getId().",'".$responsabilidad."')";
      
        $bd->crearComando($sql);
        $bd->ejecutarComando();
      }
      
      $bd->desconectar();
    }
    
    
    //devolver lista de responsabilidades de un departamento
    public function obtenerResponsabilidades($idDepartamento)
    {
      
      $departamento;
      
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="SELECT responsabilidad FROM responsabilidaddepto WHERE idDepto=".$idDepartamento;
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $departamento=new departamento($idDepartamento,"DATO");
      while($registros=$bd->obtenerRegistros())
      {
        $departamento->setListaResponsabilidades($registros['responsabilidad']);
      }
      
      return $departamento;
      
      $bd->desconectar();
      
    }
  
    //quitar responsabilidad depto
    public function quitarResponsabilidad($idDepartamento,$idResonsabilidad)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="DELETE FROM responsabilidaddepto WHERE idDepto=".$idDepartamento ." AND responsabilidad='".$idResonsabilidad."'";
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      $bd->desconectar();
      
    }
    
  }
  
  
?>  