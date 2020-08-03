<?php
	$salt = "DAA2098";
	$usuario = array();
	if(isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["usuario"]) && isset($_POST["correo"]) && isset($_POST["departamento"]) 
		&& isset($_POST["municipio"])){
			$usuario["nombre"]= $_POST["nombre"];
			$usuario["apellido"]= $_POST["apellido"];
			$usuario["usuario"]= $_POST["usuario"];
			$usuario["correo"]= $_POST["correo"];
			$usuario["departamento"]= $_POST["departamento"];
			$usuario["municipio"]= $_POST["municipio"];
	}
	
	$usuario["contrasena"]= md5($salt.$_POST["contrasena"]);
	echo json_encode($usuario);
?>