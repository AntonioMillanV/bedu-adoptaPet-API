CREATE DATABASE adoptapet;
USE adoptapet;

CREATE TABLE usuario (
    USU_CVE_USUARIO INT NOT NULL PRIMARY KEY,
    USU_USERNAME VARCHAR(50) NOT NULL,
    USU_NOMBRE VARCHAR(60) NOT NULL,
    USU_APELLIDO VARCHAR(30) NOT NULL,
    USU_EMAIL VARCHAR(50) NOT NULL,
    USU_UBICACION VARCHAR(150) NOT NULL,
    USU_BIO VARCHAR(500) NOT NULL,
    USU_FOTOS VARCHAR(1000),
    USU_TIPO VARCHAR (10) NOT NULL
);

CREATE TABLE mascota (
    MAS_CVE_MASCOTA INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    MAS_NOMBRE VARCHAR(30) NOT NULL,
    MAS_CATEGORIA VARCHAR(30) NOT NULL,
    MAS_FOTOS VARCHAR(50) NOT NULL,
    MAS_DESCRIPCION VARCHAR(500) NOT NULL,
    MAS_UBICACION VARCHAR(100) NOT NULL,
    USU_CVE_USUARIO INT NOT NULL
);

CREATE TABLE solicitud (
    SOL_CVE_SOLICIUD INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    SOL_FECHACREACION DATE NOT NULL,
    SOL_ESTADO VARCHAR(20) NOT NULL,
    USU_CVE_USUARIO_AN INT NOT NULL,
    USU_CVE_USUARIO_SO INT NOT NULL,
    MAS_CVE_MASCOTA INT NOT NULL
);
