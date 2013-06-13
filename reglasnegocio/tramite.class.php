<?php
  
  class tramite
  {
    private $_id;
    private $_descripcion;
    private $_listaDepartamentos;
    
    public function __construct($id,$descripcion)
    {
      $this->setId($id);
      $this->setDescripcion($descripcion);
      $this->_listaDepartamentos=array();
    }
    
    public function getId(){ return $this->_id; }
    public function setId($id)
    {
      $this->_id=$id;
    }
    
    public function getDescripcion(){ return $this->_descripcion; }
    public function setDescripcion($descripcion)
    {
      $this->_descripcion=$descripcion;
    }
    
    public function getListaDepartamentos(){ return $this->_listaDepartamentos; }
    public function setListaDepartamentos($departamento)
    {
      $this->_listaDepartamentos[]=$departamento;
    }  
  }
?>