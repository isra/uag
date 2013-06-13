<?php
  class plancarrera
  {
    private $_id;
    private $_plancarrera;
    
    public function __construct($id,$plancarrera)
    {
      $this->setId($id);
      $this->setPlanCarrera($plancarrera);
    }
    
    public function getId(){ return $this->_id; }
    public function setId($id)
    {
      $this->_id=$id;
    }
    
    public function getPlanCarrera(){ return $this->_plancarrera; }
    public function setPlanCarrera($plancarrera)
    {
      $this->_plancarrera=$plancarrera;
    }
  }
?>