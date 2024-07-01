create database proyectofinal;
use proyectofinal

/* TABLA USUARIO***********************************************************/
CREATE TABLE Usuario(
    id_U VARCHAR(36) not null PRIMARY KEY,
    nombre_U VARCHAR(50) NOT NULL,
    correo_U VARCHAR(50) NOT NULL,
    contrasena_U VARCHAR(20) NOT null,
    id_escuela_U VARCHAR(6),
    rol INT not null,
	foreign key(rol) references rol(id_rol),  	
    foreign key(id_escuela_U) references Escuelas(clave_E)    
	);

/* TABLA rol***********************************************************/
create table rol(
	id_rol int not null primary key,
	rol varchar (15) not null
);

/* TABLA Escuelas***********************************************************/
CREATE TABLE Escuelas (
    clave_E VARCHAR(6) primary key NOT NULL,
    nombre_E VARCHAR(255) NOT NULL
);

/* TABLA Temas***********************************************************/
CREATE TABLE Temas (
    id_T INT AUTO_INCREMENT PRIMARY KEY,
    nombre_T VARCHAR(100) NOT NULL
);
/* TABLA Practicas***********************************************************/
CREATE TABLE Practicas(
    id_P INT AUTO_INCREMENT PRIMARY KEY,
    tema_id INT NOT NULL,
    nombre_P TEXT NOT NULL,
    descripcion_P TEXT,
    calificacion int null,
    usuario_practica VARCHAR(36),
	profesor_practica VARCHAR(36),
    CONSTRAINT chk_valor CHECK (calificacion >= 0 AND calificacion <= 10),
    FOREIGN KEY (tema_id) REFERENCES Temas(id_T),
    foreign key (usuario_practica) references Usuario (id_U),
    foreign key (profesor_practica) references Usuario (id_U)
);

/* INSERT ROL ***********************************************************/
INSERT INTO rol(id_rol, rol)
VALUES (1, 'administrador'),
	   (2, 'profesor'),
       (3, 'alumno');

/* INSERT ESCUELAS ***********************************************************/
insert into Escuelas(clave_E, nombre_E)
values  ('ES001','Escuela 1'),
		('ES002','Escuela 2'),
		('ES003','Escuela 3');

/* INSERT Temas ***********************************************************/
insert into Temas(nombre_T)
values  ('repaso y examen diagnostico'),
		('modelado de bd distribuidas'),
		('fragmentacion de datos'),
		('entorno distribuido desvinculado');

/* INSERT ADMIN ***********************************************************/
insert into Usuario (id_U, nombre_U, correo_U, contrasena_U, rol) values
(UUID(),'admin', 'erickfuentes.ipn@gmail.com', 'admin1', 1);
