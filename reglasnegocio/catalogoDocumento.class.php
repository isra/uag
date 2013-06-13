<?php
  
  require_once('../accesodatos/basedatos.class.php');
  require_once('../reglasnegocio/documento.class.php');
  require_once('../reglasnegocio/catalogoAlumno.class.php');
  require_once('../reglasnegocio/catalogoTramite.class.php');
  require_once('../reglasnegocio/infodocumento.class.php');
  
  class catalogoDocumento
  {
    //agregar nuevo tramite al sistema
    public function agregar($documento)
    {
      $bd= new basedatos();
      $bd->conectar();
      $sql="INSERT INTO tramites(folio,idCatalogoTramite,matriculaAlumno,folioCertificado,folioRegistro,quienTramita,fInicio)".
           " VALUES(".$documento->getFolio().",".$documento->getIdTramite().",'".$documento->getIdAlumno()."','".$documento->getCertificado()."','".$documento->getRegistro()."','".$documento->getTramita()."','".$documento->getInicio()."')";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $estadoComando=$bd->verificaEjecutarComando();
      if($estadoComando==false)
      {
        $bd->desconectar();
        return false;
      }
      $bd->desconectar();
      return true;
    }
    
    //Actualizar informacion de tramite en el sistema
    public function modificar($documento)
    {
      $bd= new basedatos();
      $bd->conectar();
      if($documento->getFin()=='NULL')
        $sql="UPDATE tramites SET folioCertificado='".$documento->getCertificado()."',folioRegistro='".$documento->getRegistro()."',quienTramita='".$documento->getTramita()."',fInicio='".$documento->getInicio()."',fFin=NULL WHERE folio='".$documento->getFolio()."'";
      else
        $sql="UPDATE tramites SET folioCertificado='".$documento->getCertificado()."',folioRegistro='".$documento->getRegistro()."',quienTramita='".$documento->getTramita()."',fInicio='".$documento->getInicio()."',fFin='".$documento->getFin()."' WHERE folio='".$documento->getFolio()."'";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $estadoComando=$bd->verificaEjecutarComando();
      if($estadoComando==false)
      {
        $bd->desconectar();
        return false;
      }
      $bd->desconectar();
      return true;
    }
    
    //listar los No finalizados
    public function listarNoFinalizados()
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="SELECT folio, idCatalogoTramite, matriculaAlumno, fInicio FROM tramites WHERE fFin IS NULL";
      //$sql="SELECT tramites.folio as folio, tramites.idCatalogoTramite as idCatalogoTramite, tramites.matriculaAlumno as matriculaAlumno, tramites.fInicio as fInicio FROM tramites INNER JOIN infotramites ON tramites.folio = infotramites.folioTramite WHERE tramites.fFin IS NULL AND infotramites.fechaEntrada IS NULL";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $resultado=$bd->filasEncontradas();
      if($resultado == 0)
      {
        $bd->desconectar();
        return false;
      }
      else if( $resultado > 0)
      {
        $tramites= array();
        while($registro = $bd->obtenerRegistros())
        {
          /*$folio,$idTramite,$idAlumno,$certificado,$registro,$tramita,$inicio*/
          $tramite = new documento($registro['folio'],$registro['idCatalogoTramite'],$registro['matriculaAlumno'],'0','0','X',$registro['fInicio']);
          $tramites[]=$tramite; 
        }
        $bd->desconectar();
        return $tramites;
      }
    }
    
    /*
    //listar los No finalizados
    public function listarNoFinalizados()
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="SELECT folio, idCatalogoTramite, matriculaAlumno, fInicio FROM tramites WHERE fFin IS NULL";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $resultado=$bd->filasEncontradas();
      if($resultado == 0)
      {
        $bd->desconectar();
        return false;
      }
      else if( $resultado > 0)
      {
        $tramites= array();
        while($registro = $bd->obtenerRegistros())
        {
          //$folio,$idTramite,$idAlumno,$certificado,$registro,$tramita,$inicio
          $tramite = new documento($registro['folio'],$registro['idCatalogoTramite'],$registro['matriculaAlumno'],'0','0','X',$registro['fInicio']);
          $tramites[]=$tramite; 
        }
        $bd->desconectar();
        return $tramites;
      }
    }
    */
    
    public function obtener($folio,$descripcionTramite)
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="SELECT folio, matriculaAlumno, folioCertificado, folioRegistro, quienTramita, fInicio, fFin FROM tramites WHERE folio=".$folio;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $resultado=$bd->filasEncontradas();
      if($resultado == 0)
      {
        $bd->desconectar();
        return false;
      }
      else if( $resultado > 0)
      {
        $registro = $bd->obtenerRegistro();
        /*$folio,$idTramite,$idAlumno,$certificado,$registro,$tramita,$inicio*/
        $tramite = new documento($registro[0],$descripcionTramite,$registro[1],$registro[2],$registro[3],$registro[4],$registro[5]);
        $tramite->setFin($registro[6]);
        $bd->desconectar();
        return $tramite;
      }
    }
    
    //listar Tramites Pendientes por entregar
    public function listarPendientes($idDepto)
    {
      $bd = new basedatos();
      $bd->conectar();
      /*
        $sql = 'SELECT tramites.folio , tramites.idCatalogoTramite , tramites.matriculaAlumno , tramites.fInicio , infotramites.id , infotramites.folioTramite , infotramites.idDepto , infotramites.fechaEntrada FROM tramites INNER JOIN infotramites ON tramites.folio = infotramites.folioTramite WHERE infotramites.fechaEntrada IS NOT NULL AND infotramites.idDepto = 1 LIMIT 0, 30 ; ';
      */
      $sql = "SELECT tramites.folio as folio , tramites.idCatalogoTramite as idTramite , tramites.matriculaAlumno as idAlumno, tramites.fInicio as inicioTramite, infotramites.id as idInfoTramites, infotramites.folioTramite as folioInfoTramite, infotramites.idDepto as idDeptoInfoTramites, infotramites.fechaEntrada as fechaEntradaInfoDepto FROM tramites INNER JOIN infotramites ON tramites.folio = infotramites.folioTramite WHERE tramites.fFin IS NULL AND infotramites.fechaEntrada IS NOT NULL AND infotramites.fechaSalida IS NULL AND infotramites.idDepto=".$idDepto;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $resultado=$bd->filasEncontradas();
      if($resultado == 0)
      {
        $bd->desconectar();
        return false;
      }
      else if( $resultado > 0)
      {
        $tramites= array();
        while($registro = $bd->obtenerRegistros())
        {
          /*$folio,$idTramite,$idAlumno,$certificado,$registro,$tramita,$inicio*/
          
          $tramite = new documento($registro['folio'],$registro['idTramite'],$registro['idAlumno'],'0','0','X',$registro['inicioTramite']);
          //infoTramite=infodocumento
          $infoTramite = new infodocumento($registro['idInfoTramites'],$registro['folioInfoTramite'],$registro['idDeptoInfoTramites']);
          $infoTramite->setFInicio($registro['fechaEntradaInfoDepto']);
          $tramite->setInfoDocumento($infoTramite);
          $tramites[]=$tramite; 
        }
        $bd->desconectar();
        return $tramites;
      }
    }
    
    public function listarFinalizadosDepto($idDepto)
    {
      $bd = new basedatos();
      $bd->conectar();
      /*
        $sql = 'SELECT tramites.folio , tramites.idCatalogoTramite , tramites.matriculaAlumno , tramites.fInicio , infotramites.id , infotramites.folioTramite , infotramites.idDepto , infotramites.fechaEntrada FROM tramites INNER JOIN infotramites ON tramites.folio = infotramites.folioTramite WHERE infotramites.fechaEntrada IS NOT NULL AND infotramites.idDepto = 1 LIMIT 0, 30 ; ';
      */
      $sql = "SELECT tramites.folio as folio , tramites.idCatalogoTramite as idTramite , tramites.matriculaAlumno as idAlumno, tramites.fInicio as inicioTramite, infotramites.id as idInfoTramites, infotramites.folioTramite as folioInfoTramite, infotramites.idDepto as idDeptoInfoTramites, infotramites.fechaEntrada as fechaEntradaInfoDepto, infotramites.fechaSalida as fechaSalidaInfoDepto FROM tramites INNER JOIN infotramites ON tramites.folio = infotramites.folioTramite WHERE tramites.fFin IS NULL AND infotramites.fechaEntrada IS NOT NULL AND infotramites.fechaSalida IS NOT NULL AND infotramites.idDepto=".$idDepto." GROUP BY (tramites.folio)";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $resultado=$bd->filasEncontradas();
      if($resultado == 0)
      {
        $bd->desconectar();
        return false;
      }
      else if( $resultado > 0)
      {
        $tramites= array();
        while($registro = $bd->obtenerRegistros())
        {
          /*$folio,$idTramite,$idAlumno,$certificado,$registro,$tramita,$inicio*/
          
          $tramite = new documento($registro['folio'],$registro['idTramite'],$registro['idAlumno'],'0','0','X',$registro['inicioTramite']);
          //infoTramite=infodocumento
          $infoTramite = new infodocumento($registro['idInfoTramites'],$registro['folioInfoTramite'],$registro['idDeptoInfoTramites']);
          $infoTramite->setFInicio($registro['fechaEntradaInfoDepto']);
          $infoTramite->setFFin($registro['fechaSalidaInfoDepto']);
          $tramite->setInfoDocumento($infoTramite);
          $tramites[]=$tramite; 
        }
        $bd->desconectar();
        return $tramites;
      }
    }
  
    //listar todos los Tramites de un Alumno
    public function listarTramitesAlumno($idAlumno)
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="SELECT folio, idCatalogoTramite, matriculaAlumno, fInicio FROM tramites WHERE matriculaAlumno='".$idAlumno."'";
      //$sql="SELECT tramites.folio as folio, tramites.idCatalogoTramite as idCatalogoTramite, tramites.matriculaAlumno as matriculaAlumno, tramites.fInicio as fInicio FROM tramites INNER JOIN infotramites ON tramites.folio = infotramites.folioTramite WHERE tramites.fFin IS NULL AND infotramites.fechaEntrada IS NULL";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $resultado=$bd->filasEncontradas();
      if($resultado == 0)
      {
        $bd->desconectar();
        return false;
      }
      else if( $resultado > 0)
      {
        $tramites= array();
        while($registro = $bd->obtenerRegistros())
        {
          /*$folio,$idTramite,$idAlumno,$certificado,$registro,$tramita,$inicio*/
          $tramite = new documento($registro['folio'],$registro['idCatalogoTramite'],$registro['matriculaAlumno'],'0','0','X',$registro['fInicio']);
          $tramites[]=$tramite; 
        }
        $bd->desconectar();
        return $tramites;
      }
    }
    
    //Eliminar tramite de Alumno
    public function eliminar($folio)
    {
      $bd= new basedatos();
      $bd->conectar();
      $sql="DELETE FROM tramites WHERE folio='".$folio."'";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $estadoComando=$bd->verificaEjecutarComando();
      if($estadoComando==false)
      {
        $bd->desconectar();
        return false;
      }
      $bd->desconectar();
      return true;
    }
  
  }
  
  
  
?>