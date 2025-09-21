-- Script de inicialización para MySQL
CREATE DATABASE IF NOT EXISTS tasks_db;

-- Crear usuario para NestJS si no existe
CREATE USER IF NOT EXISTS 'nestjs'@'%' IDENTIFIED BY 'nestjs123';
GRANT ALL PRIVILEGES ON tasks_db.* TO 'nestjs'@'%';
FLUSH PRIVILEGES;