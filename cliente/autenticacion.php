<?php
  session_start();

	require_once('../reglasnegocio/catalogoAutenticacion.class.php');


	if(isset($_REQUEST['opcion']))
		$_opcion = $_REQUEST['opcion'];
	else
		$_opcion = -1;
	
	//$_opcion=2;
	
	
	switch($_opcion)
	{
		case 0:
	    	    //$idPersonal=$_POST['idPersonal'];
	    	    //$password=$_POST['password'];
	    	    $idPersonal='1';
	    	    $password='123456';
	    	    
	    	    $cAutenticacion= new catalogoAutenticacion();
	    	    $resultado=$cAutenticacion->verificar($idPersonal,$password);
	    	    if($resultado==false)
					echo "Usuario incorrecto";
				else
				{
					echo "si estas correcto <br>";
					echo "<br>";
					echo $resultado->getIdPersonal();
					echo "<br>";
					echo $resultado->getStrPersonal();
   					echo "<br>";
					echo $resultado->getIdDepto();
					
				}	
				break;
		case 1:
	    	    //$idDepto=$_POST['idDepto'];
	    	    //$idPersonal=$_POST['idPersonal'];
	    	    //$strPersonal=$_POST['strPersonal'];
	    	    
	    	    $idDepto=128;
	    	    $idPersonal=20;
	    	    $strPersonal='israel isaac';
	    	    
	    	    $cAutenticacion= new catalogoAutenticacion();
	    	    $resultado=$cAutenticacion->asignarDepto($idDepto);
	    	    if($resultado==false)
					echo "No existe Departamento";
				else
				{
					$autenticacion=new autenticacion($idPersonal);
					$autenticacion->setStrPersonal($strPersonal,".");
					$autenticacion->setIdDepto($resultado->getIdDepto());
					$autenticacion->setStrDepto($resultado->getStrDepto());
					$autenticacion->setNivel($resultado->getNivel());
					
					echo "si estas correcto DEPTO <br>";
					echo "<br>";
					echo $autenticacion->getIdPersonal();
					echo "<br>";
					echo $autenticacion->getStrPersonal();
   					echo "<br>";
					echo $autenticacion->getIdDepto();
   					echo "<br>";
					echo $autenticacion->getStrDepto();
   					echo "<br>";
					echo $autenticacion->getNivel();
					
				}	
				break;
		case 2:
	    	    $idPersonal=$_POST['usuario'];
	    	    $password=$_POST['password'];
	    	    
	    	    $cAutenticacion= new catalogoAutenticacion();
	    	    $resultado=$cAutenticacion->verificar($idPersonal,$password);
	    	    if($resultado==false)
            echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Usuario No Valido.</h3>";
				else
				{
		    	    $idDepto=$resultado->getIdDepto();
		    	    $idPersonal=$resultado->getIdPersonal();
		    	    $strPersonal=$resultado->getStrPersonal();

		    	    $resultado=$cAutenticacion->asignarDepto($idDepto);
		    	    if($resultado==false)
              echo "<h3 style=\"font:bolder oblique 16px Time New Roman;color:#00f;background-color:#ffb;text-align:center\">Departamento No existe.</h3>";
					else
					{
						$autenticacion=new autenticacion($idPersonal);
						$autenticacion->setStrPersonal($strPersonal," ");
						$autenticacion->setIdDepto($resultado->getIdDepto());
						$autenticacion->setStrDepto($resultado->getStrDepto());
						$autenticacion->setNivel($resultado->getNivel());
						
						/*
						echo "si estas correcto DEPTO <br>";
						echo "<br>";
						echo $autenticacion->getIdPersonal();
						echo "<br>";
						echo $autenticacion->getStrPersonal();
	   					echo "<br>";
						echo $autenticacion->getIdDepto();
	   					echo "<br>";
						echo $autenticacion->getStrDepto();
	   					echo "<br>";
						echo $autenticacion->getNivel();
						*/
						$_SESSION['idUsuario']=$autenticacion->getIdPersonal();
						$_SESSION['strUsuario']=$autenticacion->getStrPersonal();
						$_SESSION['idDepto']=$autenticacion->getIdDepto();
						$_SESSION['strDepto']=$autenticacion->getStrDepto();
						$_SESSION['nivel']=$autenticacion->getNivel();
						if($autenticacion->getNivel()==0)
              echo "<a href=\"depto/\">Bienvenido. ".$autenticacion->getStrPersonal()."</a>";
            if($autenticacion->getNivel()==1)
              echo "<a href=\"deptos/\">Bienvenido. ".$autenticacion->getStrPersonal()."</a>";
            if($autenticacion->getNivel()==2)
              echo "<a href=\"admin/\">Bienvenido. ".$autenticacion->getStrPersonal()."</a>";
						
					}	
				}	
				break;
		default:
				break;
	}

?>