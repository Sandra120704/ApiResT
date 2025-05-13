CREATE DATABASE Medicamentos;

USE Medicamentos;

CREATE TABLE Medicamentos (
	id INT NOT NULL AUTO_INCREMENT,
  tipo ENUM('A','B','C') NOT NULL,
	nombre VARCHAR(50) NOT NULL,
  nom_comercial VARCHAR(255) NOT NULL,
	presentacion ENUM('A','B','C') NOT NULL,
  receta ENUM('S','N') NOT NULL,
	precio DECIMAL(7,2) NOT NULL,
	PRIMARY KEY (id)
)ENGINE=InnoDB;

INSERT INTO Medicamentos (tipo, nombre, nom_comercial, presentacion, receta, precio) VALUES
('A', 'Paracetamol', 'Panadol', 'A', 'N', 0.10),
('B', 'Ibuprofeno', 'Advil', 'A', 'N', 0.15),
('C', 'Amoxicilina', 'Amoxil', 'B', 'S', 0.30),
('A', 'Paracetamol', 'Tempra', 'C', 'N', 0.50),
('B', 'Ibuprofeno', 'Motrin', 'C', 'N', 0.40),
('C', 'Amoxicilina', 'Trimox', 'C', 'S', 0.45),
('A', 'Paracetamol', 'Doliprane', 'A', 'N', 0.12),
('B', 'Ibuprofeno', 'Genpril', 'B', 'N', 0.25),
('C', 'Amoxicilina', 'Augmentin', 'B', 'S', 0.70),
('A', 'Paracetamol', 'Tylenol', 'A', 'N', 0.20),
('B', 'Ibuprofeno', 'Cialis', 'B', 'N', 0.30),
('C', 'Amoxicilina', 'Cialis', 'B', 'S', 0.35);

SELECT * FROM Medicamentos;