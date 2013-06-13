<?php
  
  class documento
  {
    
    private $_folio;
    private $_idTramite;
    private $_idAlumno;
    private $_certificado;
    private $_registro;
    private $_tramita;
    private $_inicio;
    private $_fin;
    
    //clase infodocumento
    private $_infoDocumento;
    
    function __construct($folio,$idTramite,$idAlumno,$certificado,$registro,$tramita,$inicio)
    {
      $this->setFolio($folio);
      $this->setIdTramite($idTramite);
      $this->setIdAlumno($idAlumno);
      $this->setCertificado($certificado);
      $this->setRegistro($registro);
      $this->setTramita($tramita);
      $this->setInicio($inicio);
    
    }
    
    public function getFolio(){ return $this->_folio; }
    public function setFolio($folio)
    {
      $this->_folio=$folio;
    }
    
    public function getIdTramite(){ return $this->_idTramite; }
    public function setIdTramite($idTramite)
    {
      $this->_idTramite=$idTramite;
    }
    
    public function getIdAlumno(){ return $this->_idAlumno; }
    public function setIdAlumno($idAlumno)
    {
      $this->_idAlumno=$idAlumno;
    }
    
    public function getCertificado(){ return $this->_certificado; }
    public function setCertificado($certificado)
    {
      $this->_certificado=$certificado;
    }
    
    public function getRegistro(){ return $this->_registro; }
    public function setRegistro($registro)
    {
      $this->_registro=$registro;
    }
    
    public function getTramita(){ return $this->_tramita; }
    public function setTramita($tramita)
    {
      $this->_tramita=$tramita;
    }
    
    public function getInicio(){ return $this->_inicio; }
    public function setInicio($inicio)
    {
      $this->_inicio=$inicio;
    }
    
    public function getFin(){ return $this->_fin; }
    public function setFin($fin)
    {
      $this->_fin=$fin;
    }
    
    public function getInfoDocumento(){ return $this->_infoDocumento; }
    public function setInfoDocumento($infoDocumento)
    {
      $this->_infoDocumento=$infoDocumento;
    }
    
  }
  
?>
