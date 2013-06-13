<?php

  require_once('config.class.php');
  
  class basedatos{
    
    //acceso
    private $_servidor;
    private $_usuario;
    private $_password;
    private $_basedatos;
   
    //coneccion
    private $_cnn;
    //comando sql
    private $_sql;
    
    //comando
    private $_cmd;
    
    public function __construct()
    {
     
      $config= new config();
      $this->_servidor = $config->getServidor();
      $this->_usuario = $config->getUsuario();
      $this->_password = $config->getPassword();
      $this->_basedatos = $config->getBaseDatos();
     
    }
    
    //conectar
    public function conectar()
    {
      $this->_cnn=mysql_connect($this->_servidor, $this->_usuario, $this->_password);
      mysql_select_db($this->_basedatos);
    }
    
    //desconectar
    public function desconectar()
    {
      mysql_close($this->_cnn);
    }
    
    //comando SQL
    public function crearComando($comando)
    {
      $this->_sql=$comando;
    }
    
    //ejecutar comando
    public function ejecutarComando()
    {
      $this->_cmd=mysql_query($this->_sql);
    }
    
    //verifica Ejecucacion Comando
    public function VerificaEjecutarComando()
    {
      if(!$this->_cmd)
        return false;
      return true;
    }
    
    //filas Afectadas
    public function filasEncontradas()
    {
      return mysql_num_rows($this->_cmd);
    }
        
    //obtener registro
    public function obtenerRegistro()
    {
      return mysql_fetch_row($this->_cmd);
    }  
    
    //obtener registros
    public function obtenerRegistros()
    {
      return mysql_fetch_array($this->_cmd,MYSQL_ASSOC);
    }
    
  }
?>