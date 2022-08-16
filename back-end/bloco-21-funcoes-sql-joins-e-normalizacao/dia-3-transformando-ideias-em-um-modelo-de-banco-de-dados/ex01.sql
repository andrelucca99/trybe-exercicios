-- Criando o banco de dados
CREATE DATABASE IF NOT EXISTS zoom;

-- Selecionando o banco de dados
USE zoom;

-- Criando a tabela gerente
CREATE TABLE gerente(
gerente_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100)
);

-- Criando a tabela cuidadores
CREATE TABLE cuidadores(
cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
gerente_id INT NOT NULL,
FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

-- Criando a tabela animais
CREATE TABLE animais(
animal_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
especie VARCHAR(100),
sexo VARCHAR(100),
idade INT,
localizacao VARCHAR(100)
);

-- Criando relacionamento da tabela animais e cuidadores
CREATE TABLE cuidador_animal(
animal_id INT NOT NULL,
cuidador_id INT NOT NULL,
FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
);
