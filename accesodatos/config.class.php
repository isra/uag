<?php
  
  class config
  {
    private $_servidor;
    private $_usuario;
    private $_password;
    private $_basedatos;
    
    public function __construct()
    {
      $archivoxml=simplexml_load_file("../accesodatos/config.xml");
      $this->_servidor="$archivoxml->servidor";    
      $this->_usuario="$archivoxml->usuario";    
      $this->_password="$archivoxml->password";    
      $this->_basedatos="$archivoxml->basedatos";    
    }
    
    public function getServidor(){ return $this->_servidor; }
    public function getUsuario(){ return $this->_usuario; }
    public function getPassword(){ return $this->_password; }
    public function getBaseDatos(){ return $this->_basedatos; }
  }
?>