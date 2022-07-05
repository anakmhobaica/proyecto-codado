<?php

class Api{

    public function addRegistro($nombre, $cedula, $edad, $telefono, $curso, $correo, $fecha_creacion){
  
        $conn = new Conexion();
        $conexion = $conn->ConectarDB();
        $sql = "INSERT INTO data_usuario(nombre, cedula, edad, telefono, curso, correo, fecha_creacion) VALUES (:nombre, :cedula, :edad, :telefono, :curso, :correo, :fecha_creacion)";
        $consulta = $conexion->prepare($sql);
        $consulta->bindParam(':nombre', $nombre);
        $consulta->bindParam(':cedula', $cedula);
        $consulta->bindParam(':edad', $edad);
        $consulta->bindParam(':telefono', $telefono);
        $consulta->bindParam(':curso', $curso);
        $consulta->bindParam(':correo', $correo);
        $consulta->bindParam(':fecha_creacion', $fecha_creacion);
        $consulta->execute();
      
        return '{"msg":"Registro agregado exitosamente"}';
      }
}