<?php

	require_once('../accesodatos/basedatos.class.php');
	require_once('../reglasnegocio/autenticacion.class.php');
	
	class catalogoAutenticacion
	{
		public function verificar($idPersonal,$password)
		{
		 	$bd = new basedatos();
		 	$bd->conectar();
		 	$sql="SELECT personal.id as idP, personal.nombres as nomP, personal.apellidos as apeP, personaldepto.idDepto as idD FROM personal INNER JOIN personaldepto ON personal.id=personaldepto.idPersonal WHERE personal.id=".$idPersonal." AND personal.password='".$password."'";
			$bd->crearComando($sql);
			$bd->ejecutarComando();
			
			$resultado=$bd->filasEncontradas();
			
			if($resultado==0)
			{
	 		 	$bd->desconectar();
				return false;
			}
			else
			{
	 		
			 	$registro=$bd->obtenerRegistro();
			 	$autenticacion=new autenticacion($registro[0]);
			 	$autenticacion->setStrPersonal($registro[1],$registro[2]);	
			 	$autenticacion->setIdDepto($registro[3]);
			 	$bd->desconectar();				
			 
			 	return $autenticacion;	
			}
				
		}
		
		public function asignarDepto($idDepto)
		{
		 	$bd = new basedatos();
		 	$bd->conectar();
		 	$sql="SELECT id, nombre, nivel FROM departamento WHERE id=".$idDepto;
			$bd->crearComando($sql);
			$bd->ejecutarComando();
			
			$resultado=$bd->filasEncontradas();
			
			if($resultado==0)
			{
	 		 	$bd->desconectar();
				return false;
			}
			else
			{
	 		
			 	$registro=$bd->obtenerRegistro();
			 	$autenticacion=new autenticacion(0);
			 	$autenticacion->setIdDepto($registro[0]);
			 	$autenticacion->setStrDepto($registro[1]);
			 	$autenticacion->setNivel($registro[2]);
			 	$bd->desconectar();		
				 			 	
			 	return $autenticacion;	
			 	
			}
		}
	}

?>