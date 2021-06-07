--CREATE DATABASE  IF NOT EXISTS `petfinder` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
--USE `petfinder`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: petfinder
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.18-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rescatados`
--

DROP TABLE IF EXISTS `rescatados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rescatados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `fechaRescate` date NOT NULL,
  `clase` tinyint(4) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b3491588-ccf9-4013-a34d-9befbd354f91` (`idUsuario`),
  CONSTRAINT `FK_b3491588-ccf9-4013-a34d-9befbd354f91` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rescatados`
--

LOCK TABLES `rescatados` WRITE;
/*!40000 ALTER TABLE `rescatados` DISABLE KEYS */;
INSERT INTO `rescatados` VALUES (1,1,'dog.jpg','Titan','2019-03-01',1,'Hola! mi nombre es Titan, soy un cachorro muy energetico, bueno y confiable! Estoy vacunado, tengo 11 meses y busco familia!'),(2,2,'dog.jpg','Toby','2019-03-01',1,'Hola! mi nombre es Toby, soy muy jugueton y sociable! Me gusta salir a pasear con otro perros. Estoy buscando a mi dueno!'),(3,3,'dog.jpg','Umma','2019-03-01',1,'Hola! mi nombre es Umma, tengo 8 meses y estoy vacunada. Soy muy activa y juguetona, necesito una casa con proteccion para no escaparme!'),(4,4,'dog.jpg','Diegote','2019-03-01',1,'Hola! mi nombre es Diegote, soy muy dulce y celoso. Busco hogar, preferiblemente quiero ser mascota unica para recibir mucho amor!'),(5,1,'kitten_1.jpg','Bigotes','2020-05-25',0,'Hola! mi nombre es Bigotes, soy amistoso y muy carinoso. Siempre estoy en paz. Me encanta jugar con hilitos y tapitas! Busco un hogar!'),(6,2,'kitten_1.jpg','Jack','2020-05-25',0,'Hola! mi nombre es Jack. Buscamos un mismo hogar para no separarnos. Somos curiosos, chrlatanes y necesitamos muchos mimos!'),(7,3,'kitten_1.jpg','Joe','2020-05-25',0,'Hola! mi nombre es Joe! Me gusta jugar, dormir mucho y soy muy comunicativa. Quiero tener un dueno!'),(8,4,'kitten_1.jpg','Palta','2020-05-25',0,'Hola! mi nombre es Palta, soy muy juguetona! Me gusta salir a pasear sola y volver. Estoy buscando a mi dueno!'),(9,2,'dog.jpg','Rita','2020-05-25',1,'Hola! mi nombre es Rita, soy muy sociable! Me gusta dormir y limpiarme todo el dia. Estoy buscando a mi dueno!'),(10,1,'kitten_1.jpg','Jenny','2020-05-25',0,'Hola! mi nombre es Jenny. Me gusta dar carino, voy a hacerte mucha compañia, seguirte por toda la casa y por supuesto dormir con vos! Busco a mi dueño!');
/*!40000 ALTER TABLE `rescatados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-25 21:27:39
