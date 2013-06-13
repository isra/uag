<?php
  
  class departamento
  {
    private $_id;
    private $_nombre;
    private $_nivel;
    
    private $_listaResponsabilidades;
    private $_listaPersonal;
    
    public function __construct($id,$nombre)
    {
      $this->setId($id);
      $this->setNombre($nombre);
      $this->_listaResponsabilidades=array();
      $this->_listaPersonal=array();  
    }
    
    public function getId(){ return $this->_id; }
    public function setId($id)
    {
      $this->_id=$id;
    }
    
    public function getNombre(){ return $this->_nombre; }
    public function setNombre($nombre)
    {
      $this->_nombre=$nombre;
    }
    
    public function getNivel(){ return $this->_nivel; }
    public function setNivel($nivel)
    {
      $this->_nivel=$nivel;
    }
    
    public function getListaPersonal(){ return $this->_listaPersonal; }
    public function setListaPersonal($personal)
    {
      $this->_listaPersonal[]=$personal;
    }
    
    public function getListaResponsabilidades(){ return $this->_listaResponsabilidades; }
    public function setListaResponsabilidades($responsabilidad)
    {
      $this->_listaResponsabilidades[]=$responsabilidad;
    }
    
  }
  
?>