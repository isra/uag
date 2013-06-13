<?php

  class alumno
  {
    //private $_id;
    private $_matricula;
    private $_nombres;
    private $_apellidos;
    private $_mail;
    private $_telefono;
    private $_idPlanEscuela;
    private $_password;
    private $_nota;
    
    
    
    function __construct($matricula,$nombres,$apellidos)
    {
        //$this->setId($id);
        $this->setMatricula($matricula);
        $this->setNombres($nombres);
        $this->setApellidos($apellidos);
    }
    
    /*
    public function getId(){ return $this->_id; }
    public function setId($id)
    { 
      $this->_id=$id;
    }
    */
    
    public function getMatricula(){ return $this->_matricula; }
    public function setMatricula($matricula)
    { 
      $this->_matricula=$matricula;
    }
    
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
    
    public function getMail(){ return $this->_mail; }
    public function setMail($mail)
    { 
      $this->_mail=$mail;
    }
    
    public function getTelefono(){ return $this->_telefono; }
    public function setTelefono($telefono)
    { 
      $this->_telefono=$telefono;
    }
    
    public function getIdPlanEscuela(){ return $this->_idPlanEscuela; }
    public function setIdPlanEscuela($idPlanEscuela)
    { 
      $this->_idPlanEscuela=$idPlanEscuela;
    }
    
    public function getPassword(){ return $this->_password; }
    public function setPassword($password)
    { 
      $this->_password=$password;
    }
    
    public function getNota(){ return $this->_nota; }
    public function setNota($nota)
    { 
      $this->_nota=$nota;
    }
  }
?>