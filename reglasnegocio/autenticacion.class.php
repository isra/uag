<?php

  class autenticacion
  {
	private $_idDepto;
	private $_strDepto;
	private $_idPersonal;
	private $_strPersonal;
	private $_nivel;
	
	//private $_password;
	
   	function __construct($idPersonal)
   	{
		$this->setIdPersonal($idPersonal);
	}
	
	public function getIdDepto(){ return $this->_idDepto; }
	public function setIdDepto($idDepto)
	{
		$this->_idDepto=$idDepto;
	}
	
	public function getStrDepto(){ return $this->_strDepto; }
	public function setStrDepto($strDepto)
	{
		$this->_strDepto=$strDepto;
	}
	
	public function getIdPersonal(){ return $this->_idPersonal; }
	public function setIdPersonal($idPersonal)
	{
		$this->_idPersonal=$idPersonal;
	}
	
	public function getStrPersonal(){ return $this->_strPersonal; }
	public function setStrPersonal($nombres,$apellidos)
	{
		$this->_strPersonal=$nombres." ".$apellidos;
	}
	
	public function getNivel(){ return $this->_nivel; }
	public function setNivel($nivel)
	{
		$this->_nivel=$nivel;
	}
	
	/*
	public function getPassword(){ $this->_password; }
	public function setPassword($password)
	{
		$this->_password=$password;
	}
	*/
  
  }
?>