<?php
  
  require_once('../accesodatos/basedatos.class.php');
  require_once('../reglasnegocio/infodocumento.class.php');
  
  class catalogoInfoDocumento
  {
    
    //inica revision del por parte del depto
    public function recibir($infodocumento)
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="INSERT INTO infotramites(folioTramite, idDepto, fechaEntrada, idRecibio, infoEstado) VALUES(".$infodocumento->getFolio().",".$infodocumento->getIdDepto().",'".$infodocumento->getFInicio()."',".$infodocumento->getIdRecibio().",':::AL RECIBIR::: ".$infodocumento->getEstado()."')";
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      if($bd->VerificaEjecutarComando()==false)
      {
        $bd->desconectar();
        return false;
      }
      else if($bd->VerificaEjecutarComando()==true)
      {
        $bd->desconectar();
        return true;
      }
    }
    
        
    //finaliza revision por parte del depto
    public function entregar($infodocumento)
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="UPDATE infotramites SET fechaSalida='".$infodocumento->getFFin()."', idEntrego=".$infodocumento->getIdEntrego().", infoEstado= CONCAT(infoEstado,' :::AL ENTREGAR::: ".$infodocumento->getEstado()."') WHERE id=".$infodocumento->getId();
      
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      if($bd->VerificaEjecutarComando()==false)
      {
        $bd->desconectar();
        return false;
      }
      else if($bd->VerificaEjecutarComando()==true)
      {
        $bd->desconectar();
        return true;
      }
    }
    
    //listar Revisiones realizadas a un tramite
    public function revisiones($folio)
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="SELECT id, folioTramite, idDepto, fechaEntrada, fechaSalida, idRecibio, idEntrego, infoEstado FROM infotramites WHERE folioTramite=".$folio;
      $bd->crearComando($sql);
      $bd->ejecutarComando();
      $numRevisiones=$bd->filasEncontradas();
      if($numRevisiones==0)
      {
        $bd->desconectar();
        return false;
      }
      else if($numRevisiones>0)
      {
        //revisiones=infodocumentos 
        $revisiones = array ();
        WHILE($revision=$bd->obtenerRegistros())
        {
           $infoDoc = new infodocumento($revision['id'],$revision['folioTramite'],$revision['idDepto']);
           $infoDoc->setFInicio($revision['fechaEntrada']);
           $infoDoc->setFFin($revision['fechaSalida']);
           $infoDoc->setIdRecibio($revision['idRecibio']);
           $infoDoc->setIdEntrego($revision['idEntrego']);
           $infoDoc->setEstado($revision['infoEstado']);
           
           $revisiones[]=$infoDoc;
        }
        $bd->desconectar();
        return $revisiones;
      }
    }
    
    /*
    //listar los Tramites Ya Revisados, pero que no han sido entregados
    public function listarPendientes()
    {
      $bd = new basedatos();
      $bd->conectar();
      $sql="SELECT id, folioTramite, idDepto, fechaEntrada FROM infotramites WHERE fechaEntrada IS NOT NULL AND idDepto=".$idDepto;
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
        $infoTramites= array();
        while($registro = $bd->obtenerRegistros())
        {
          //intoTramite=infodocumento
          $infoTramite = new infodocumento($registro['id'],$registro['folioTramite'],$registro['idDepto']);
          $infoTramite->setFInicio($registro['fInicio']);
          $infoTramites[]=$infoTramite; 
        }
        $bd->desconectar();
        return $infoTramites;
      }
    }
    */

  }
  
?>