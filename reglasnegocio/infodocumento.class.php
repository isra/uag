<?php

  class infodocumento
  {
    private $_id;
    private $_folio;
    private $_idDepto;
    private $_fInicio;
    private $_fFin;
    private $_idRecibio;
    private $_idEntrego;
    private $_estado;
    
    function __construct($id,$folio,$idDepto)
    {
      $this->setId($id);
      $this->setFolio($folio);
      $this->setIdDepto($idDepto);
    }
    
    public function getId(){ return $this->_id; }
    public function setId($id)
    {
      $this->_id=$id;
    }
    
    public function getFolio(){ return $this->_folio; }
    public function setFolio($folio)
    {
      $this->_folio=$folio;
    }
    
    public function getIdDepto(){ return $this->_idDepto; }
    public function setIdDepto($idDepto)
    {
      $this->_idDepto=$idDepto;
    }
    
    public function getFInicio(){ return $this->_fInicio; }
    public function setFInicio($fInicio)
    {
      $this->_fInicio=$fInicio;
    }
    
    public function getFFin(){ return $this->_fFin; }
    public function setFFin($fFin)
    {
      $this->_fFin=$fFin;
    }
    
    public function getIdRecibio(){ return $this->_idRecibio; }
    public function setIdRecibio($idRecibio)
    {
      $this->_idRecibio=$idRecibio;
    }
    
    public function getIdEntrego(){ return $this->_idEntrego; }
    public function setIdEntrego($idEntrego)
    {
      $this->_idEntrego=$idEntrego;
    }
    
    public function getEstado(){ return $this->_estado; }
    public function setEstado($estado)
    {
      $this->_estado=$estado;
    }
    
  }
?>