<?php

include ('datosConexion.php');

class Conexion{
    function ConectarDB(){
        try{
            $conexion = new PDO ("pgsql:host=".SERVER.";port=5432; dbname=" .DBNAME, USER, PASSWORD);
            return $conexion;    
        }catch (Exception $error){
            die("El error de conexion es: " .$error->getMessage());
        }
}

}
?>