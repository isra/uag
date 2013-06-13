<?php
  
  require_once('../accesodatos/basedatos.class.php');
  require_once('../reglasnegocio/tramite.class.php');
  require_once('../reglasnegocio/catalogoDepartamento.class.php');
  require_once('../reglasnegocio/departamento.class.php');
  
  class catalogoTramites
  {
    //agregar tramite
    public function agregar($tramite)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="INSERT INTO catalogotramites(descripcion) VALUES('".$tramite->getDescripcion()."')";
      $bd->crearComando($sql);  
      $bd->ejecutarComando();
      
      $bd->desconectar();
    }
    
    //eliminar tramite
    public function eliminar($idTramite)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="DELETE FROM catalogotramites WHERE id=".$idTramite;
      $bd->crearComando($sql);  
      $bd->ejecutarComando();
      
      $bd->desconectar();
    }
    
    //modificar tramite
    public function modificar($tramite)
    {
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="UPDATE catalogotramites SET descripcion='".$tramite->getDescripcion()."' WHERE id=".$tramite->getId();
      $bd->crearComando($sql);  
      $bd->ejecutarComando();
      
      $bd->desconectar();
    }
    
    //lista tramites clave y nombre de un solo tramite
    public function obtener($idTramite)
    {
      $tramite;
      
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="SELECT descripcion FROM catalogotramites WHERE id=".$idTramite;
      $bd->crearComando($sql);  
      $bd->ejecutarComando();
      
       
      if($bd->filasEncontradas()==0)
      {
        $bd->desconectar();   
        return false;
      }
      
      $registro=$bd->obtenerRegistro();
      
      $bd->desconectar();
      
      $tramite= new tramite($idTramite,$registro[0]);
      
      
      return $tramite;
    }
    
    //lista completa de tramites:clave y nombre 
    public function obtenerTodos()
    {
      $tramite;
      $tramites=array();
      
      $bd=new basedatos();
      $bd->conectar();
      
      $sql="SELECT id, descripcion FROM catalogotramites";
      $bd->crearComando($sql);  
      $bd->ejecutarComando();
      
      while($registro=$bd->obtenerRegistros())
      {
        $tramite= new tramite($registro['id'],$registro['descripcion']);
        $tramites[]=$tramite;
      }
      
      $bd->desconectar();
      
      return $tramites;
    }
    
    //asigna departamentos por lo cual pasara un tramite
    public function asignarDepartamentos($tramite)
    {
      $bd=new basedatos();
      $bd->conectar();
      foreach($tramite->getListaDepartamentos() as $idDepartamento)  
      {  
        $sql="INSERT INTO catalogotramitesdeptos(idCatalogoTramite,idDepto) VALUES(".$tramite->getId().",".$idDepartamento.")";
        $bd->crearComando($sql);
        $bd->ejecutarComando();  
      }  
      $bd->desconectar();
    }
    
    //eliminar Departamento asignado a un tramite
    public function eliminarDepto($idTramite,$idDepto)
    {
      $bd=new basedatos();
      $bd->conectar();
      $sql="DELETE FROM catalogotramitesdeptos WHERE idCatalogoTramite=".$idTramite." AND idDepto=".$idDepto;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $bd->desconectar();
    }
    
    //obtiene lista de departamentos por los cuales pasa un tramite
    public function obtenerListaDepartamentos($idTramite,$descripcion="DescripcionTramite")
    {
      $tramite;
      $cDepartamento=new catalogoDepartamentos();
      $departamento;
      
      $bd=new basedatos();
      $bd->conectar();
      $sql="SELECT idDepto FROM catalogotramitesdeptos WHERE idCatalogoTramite=".$idTramite;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      
      
      $tramite=new tramite($idTramite,$descripcion);
      $bd->desconectar();
 
      while($registros=$bd->obtenerRegistros())
      {
          $departamento=$cDepartamento->obtener($registros['idDepto']);
          $tramite->setListaDepartamentos($departamento);
      }
      
      return $tramite;
    }
    

  }
?>