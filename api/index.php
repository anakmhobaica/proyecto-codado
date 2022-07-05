<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, Authorization,X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST");
header("Allow: POST");

include ('conexion.php');
include ('api.php');

$objeto = new Conexion();
$conexion = $objeto->ConectarDB();

$method = $_SERVER['REQUEST_METHOD'];

if($method=="POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $nombre = $data['nombre'];
    $cedula = $data['cedula'];
    $edad = $data['edad'];
    $telefono = $data['telefono'];
    $curso = $data['curso'];
    $correo = $data['correo'];
    date_default_timezone_set('America/Caracas');
    $fecha_creacion = date('Y-m-d H:i:s');
    $api = new Api();
    $json = $api->addRegistro($nombre, $cedula, $edad, $telefono, $curso, $correo, $fecha_creacion);
    echo $json;
}

?>