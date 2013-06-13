<?php
  
  require_once('persona.class.php');  
  
  class personal extends persona
  {
    
    private $_id;
    
    public function __construct($id,$nombres,$apellidos,$password="0")
    {
      $this->setId($id);
      $this->setNombres($nombres);
      $this->setApellidos($apellidos);
      $this->setPassword($password);
    }
    
    public function getId(){ return $this->_id; }
    public function setId($id)
    {
      $this->_id=$id;
    }
    
  }
  
?>