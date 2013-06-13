<?php
  
  class persona
  {
  
    private $_nombres;
    private $_apellidos;
    private $_password;
  
    public function getNombres(){ return $this->_nombres; }
    public function setNombres($nombres)
    { 
      $this->_nombres=$nombres; 
    }
  
    public function getApellidos(){ return $this->_apellidos; }
    public function setApellidos($apellidos)
    {
      $this->_apellidos=$apellidos;
    }
  
    public function getPassword(){ return $this->_password; }
    public function setPassword($password)
    {
      $this->_password=$password;
    }
  }
  
?>