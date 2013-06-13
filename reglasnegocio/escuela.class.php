<?php
  class escuela
  {
    private $_id;
    private $_nombre;
    private $_responsable;
    private $_revisor;
    private $_listaPlanesCarreras;
    
    public function __construct($id,$nombre,$idResponsable=0,$idRevisor=0)
    {
        $this->setId($id);
        $this->setNombre($nombre);
        $this->setResponsable($idResponsable);
        $this->setRevisor($idRevisor);
        $this->_listaPlanesCarreras=array();
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
    
    public function getResponsable(){ return $this->_responsable; }
    public function setResponsable($responsable)
    {
      $this->_responsable=$responsable;
    }
    
    public function getRevisor(){ return $this->_revisor; }
    public function setRevisor($revisor)
    {
      $this->_revisor=$revisor;
    }
    
    public function getPlanesCarreras(){ return $this->_listaPlanesCarreras; }
    public function setPlanesCarreras($planCarrera)
    {
      $this->_listaPlanesCarreras[]=$planCarrera;
    }
  }
?>
