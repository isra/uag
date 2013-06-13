<?php
  
  require_once('../accesodatos/basedatos.class.php');
  require_once('../reglasnegocio/personal.class.php');
  
  class catalogoPersonal
  {
    
        
    public function agregar($personal)
    {
      $sql;
      $bd = new basedatos();
      $bd->conectar();
        
      $sql="INSERT INTO personal(nombres,apellidos,password)".
      " VALUES('".$personal->getNombres()."','".$personal->getApellidos()."','".$personal->getPassword()."')";
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $bd->desconectar();
      
    }
    
     public function eliminar($id)
    {
      $sql;
      $bd = new basedatos();
      $bd->conectar();
        
      $sql="DELETE FROM personal WHERE id=".$id;
     
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $bd->desconectar();
    }
    
    
    public function modificar($personal)
    {
      $sql;
      $bd = new basedatos();
      $bd->conectar();
        
      $sql="UPDATE personal SET nombres='".$personal->getNombres()."',apellidos='".$personal->getApellidos()."',password='".$personal->getPassword()."'".
            " WHERE id=".$personal->getId();
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $bd->desconectar();
      
    }
    
    public function obtenerTodos()
    {
      
      $sql;
      $personal;
      $listaPersonal=array();
      
      $bd = new basedatos();
      $bd->conectar();
        
      $sql="SELECT id,nombres,apellidos FROM personal";
        
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      while($registros=$bd->obtenerRegistros())
      {
        $personal = new personal($registros["id"],$registros["nombres"],$registros["apellidos"]);
        $listaPersonal[]=$personal;
      }
      $bd->desconectar();
      
      return $listaPersonal;
    }
    
    public function obtener($id)
    {
      $sql;
      $registro=array();
      $personal;
      
      $bd= new basedatos();
      $bd->conectar();
      $sql="SELECT id, nombres, apellidos, password FROM personal WHERE id=".$id;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $registro=$bd->obtenerRegistro();
      
      $bd->desconectar();  
      
      $personal=new personal($registro[0],$registro[1],$registro[2],$registro[3]);
     
      return $personal;    
    }
    

  }
?>