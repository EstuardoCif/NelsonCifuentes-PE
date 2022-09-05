-- creacion de base de datos
CREATE DATABASE crudcar;

-- Utilizando la base de datos
use crudcar;

-- creando la tabla
CREATE TABLE car(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    año VARCHAR(50) NOT NULL,
    placa VARCHAR(50),
    estado VARCHAR(50) NOT NULL
);


-- mostrar todas las tablas

SHOW TABLES;


-- describir tabla
describe car;
