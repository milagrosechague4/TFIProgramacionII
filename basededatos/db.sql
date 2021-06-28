CREATE DATABASE  IF NOT EXISTS `petfinder` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `petfinder`;
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
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `texto` varchar(250) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_11e7a95a-2f43-4544-8b18-9bc712cb402a` (`usuarioId`),
  KEY `FK_896efc10-5257-4a6a-90f1-45cb2de11bfb` (`productId`),
  CONSTRAINT `FK_11e7a95a-2f43-4544-8b18-9bc712cb402a` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FK_896efc10-5257-4a6a-90f1-45cb2de11bfb` FOREIGN KEY (`productId`) REFERENCES `rescatados` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'Muy lindo','2021-06-25 20:43:06',NULL),(2,2,1,'Que perrito lindo','2021-06-25 20:43:06',NULL),(3,3,1,'Mi perro favorito','2021-06-25 20:43:06',NULL),(4,4,1,'Un dia de estos paso por el refugio','2021-06-25 20:43:06',NULL),(5,1,2,'Un dia de estos paso por el refugio','2021-06-25 20:43:06',NULL),(6,2,2,'Un amor','2021-06-25 20:43:06',NULL),(7,3,2,'Perrazo','2021-06-25 20:43:06',NULL),(8,4,2,'Que perro mas lindo','2021-06-25 20:43:06',NULL),(9,1,3,'Que perro mas lindo','2021-06-25 20:43:06',NULL),(10,2,3,'Este perro tiene cosas del diego','2021-06-25 20:43:06',NULL),(11,3,3,'Que pelos locos','2021-06-25 20:43:06',NULL),(12,4,3,'Me vuelvo locooooooo, rooooompoooooo todooooooo, que lindo perrito','2021-06-25 20:43:06',NULL),(13,1,4,'Que lindo perrito','2021-06-25 20:43:06',NULL),(14,2,4,'Que feo perro','2021-06-25 20:43:06',NULL),(15,3,4,'Mi perrito favorito, muy educado','2021-06-25 20:43:06',NULL),(16,4,4,'Muy educado','2021-06-25 20:43:06',NULL),(17,1,5,'Un señor perruno','2021-06-25 20:43:06',NULL),(18,2,5,'Oficialmente considero haberme enamorado de este canino','2021-06-25 20:43:06',NULL),(19,3,5,'Dogs power','2021-06-25 20:43:06',NULL),(20,4,5,'muy lindo','2021-06-25 20:43:06',NULL),(21,1,6,'Te ofrezco 25.000$ por el lavaropas','2021-06-25 20:43:06',NULL),(22,1,6,'Perdon me equivoque de pestaña','2021-06-25 20:43:06',NULL),(23,3,6,'Muy lindo e gatito','2021-06-25 20:43:06',NULL),(24,4,6,'El gato mas educado que visite','2021-06-25 20:43:06',NULL),(25,1,7,'El gato mas educado que visite','2021-06-25 20:43:06',NULL),(26,2,7,'El gato mas lindo que vi','2021-06-25 20:43:06',NULL),(27,3,7,'El felino puede considerarse una especia bonita pero este gato esta a otro level','2021-06-25 20:43:06',NULL),(28,4,7,'Muy cariñoso ','2021-06-25 20:43:06',NULL),(29,1,8,'Que poder','2021-06-25 20:43:06',NULL),(30,2,8,'Muy lindo','2021-06-25 20:43:06',NULL),(31,3,8,'Que gatito hermoso','2021-06-25 20:43:06',NULL),(32,4,8,'Es muy tierno','2021-06-25 20:43:06',NULL),(46,2,3,'mi raza favorita','2021-06-25 20:43:06',NULL),(47,2,6,'que lindos ojos','2021-06-25 20:43:06',NULL),(48,12,8,'parece jugueton','2021-06-25 20:43:06',NULL),(51,12,1,'mira como posa este bebe','2021-06-25 20:43:06',NULL),(52,12,8,'palta es mi verdura fav','2021-06-25 20:43:06',NULL),(53,12,7,'hola que tal','2021-06-26 00:23:23','2021-06-26 00:23:23'),(55,12,7,'hola estamos presentadno','2021-06-28 16:10:25','2021-06-28 16:10:25'),(56,12,6,'hola estamos presentando','2021-06-28 19:32:36','2021-06-28 19:32:36');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rescatados`
--

DROP TABLE IF EXISTS `rescatados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rescatados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `fechaRescate` date NOT NULL,
  `clase` tinyint(4) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK_b3491588-ccf9-4013-a34d-9befbd354f91` (`usuarioId`),
  CONSTRAINT `FK_b3491588-ccf9-4013-a34d-9befbd354f91` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rescatados`
--

LOCK TABLES `rescatados` WRITE;
/*!40000 ALTER TABLE `rescatados` DISABLE KEYS */;
INSERT INTO `rescatados` VALUES (1,1,'dog.jpg','Titan','2019-03-01',1,'Hola! mi nombre es Titan, soy un cachorro muy energetico, bueno y confiable! Estoy vacunado, tengo 11 meses y busco familia!','2021-06-25 23:44:34','2021-06-28 17:08:34'),(2,1,'french.jpg','Toby','2019-03-01',1,'Hola! mi nombre es Toby, soy muy jugueton y sociable! Me gusta salir a pasear con otro perros. Estoy buscando a mi dueno!','2021-06-25 23:44:34','2021-06-28 17:08:34'),(3,2,'golden.jpg','Umma','2019-03-01',1,'Hola! mi nombre es Umma, tengo 8 meses y estoy vacunada. Soy muy activa y juguetona, necesito una casa con proteccion para no escaparme!','2021-06-25 23:44:34','2021-06-28 17:08:35'),(4,2,'pet.jpg','Diegote','2019-03-01',1,'Hola! mi nombre es Diegote, soy muy dulce y celoso. Busco hogar, preferiblemente quiero ser mascota unica para recibir mucho amor!','2021-06-25 23:44:34','2021-06-28 17:08:35'),(5,14,'gato1.jpg','Bigotes','2020-05-25',0,'Hola! mi nombre es Bigotes, soy amistoso y muy carinoso. Siempre estoy en paz. Me encanta jugar con hilitos y tapitas! Busco un hogar!','2021-06-25 23:44:34','2021-06-25 23:48:47'),(6,12,'gato2.jpg','Joe','2020-05-25',0,'Hola! mi nombre es Joe. Buscamos un mismo hogar para no separarnos. Somos curiosos, chrlatanes y necesitamos muchos mimos!','2021-06-25 23:44:34','2021-06-27 23:38:53'),(7,12,'gato3.jpg','Joe','2020-05-25',0,'Hola! mi nombre es Joe! Me gusta jugar, dormir mucho y soy muy comunicativa. Quiero tener un dueno!','2021-06-25 23:44:34','2021-06-25 23:48:47'),(8,12,'gato4.jpg','Palta','2020-05-25',0,'Hola! mi nombre es Palta, soy muy juguetona! Me gusta salir a pasear sola y volver. Estoy buscando a mi dueno!','2021-06-25 23:44:34','2021-06-25 23:48:47');
/*!40000 ALTER TABLE `rescatados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Maria','Gutierrez','user.jpg','1978-07-03','mgutierrez@gmail.com','hola123','2021-06-25 23:46:41','2021-06-25 23:47:54'),(2,'Juana','Beslavsky','user2.jpg','1999-09-01','beslaf@fibertel.com.ar','quetal321','2021-06-25 23:46:41','2021-06-25 23:47:54'),(3,'Lucas','Fernandez','user1.jpg','1978-07-03','lfernandez@gmail.com','contraseña','2021-06-25 23:46:41','2021-06-25 23:47:54'),(4,'Cate','Benitez','user3.jpg','1993-09-02','santinob@gmail.com','43031278','2021-06-25 23:46:41','2021-06-25 23:47:54'),(5,'Teresa','Martinez','user4.jpg','1989-05-19','teremartinez@gmail.com','47070229','2021-06-25 23:46:41','2021-06-25 23:47:54'),(12,'Mili','Echague','imagen-1624838025918.jpg','2000-11-03','miluechague@hotmail.com','$2a$10$5g40V17tA9rtu5DkW3PqweR.ZpNmgTq3uBmbOpVgBemIluNNghjtG','2021-06-25 23:46:41','2021-06-28 16:25:37'),(13,'Joaquin','Lopez','default-image.png','2021-06-07','joacolopez@gmail.com','$2a$10$OWLc6takSfocdMciIoqKxuJF8vc1aMEo6M74lTkwzvDaTJkDp7CRK','2021-06-25 23:46:41','2021-06-25 23:47:54'),(14,'Benjamin','Echague','default-image.png','2021-06-07','bechague@gmail.com.ar','$2a$10$pEwPFe0q6yjk9dQ.nFrjo.HK9ObH1DsblO3JF.FXqNYNqf0.AgBnm','2021-06-25 23:46:41','2021-06-25 23:47:54'),(15,'Facundo','Bosc','default-image.png','0000-00-00','facubosc@gmail.com','$2a$10$JsKxUaA9bw7JCuJMzMUzz.cgYyvsZc2iTBhl9Qulm9TGDlPzmK8Ra','2021-06-26 00:33:57','2021-06-26 00:37:11'),(16,'Gonzalo','Echague','default-image.png','1987-06-09','gechague@fibertel.com.ar','$2a$10$vKqYconLk3I/UO2dZAEXS.F1SDTV/j8bdzwMXoCAW5bQp89rY91na','2021-06-27 23:00:53','2021-06-27 23:00:53'),(17,'Luciana','Garcia','default-image.png','2021-06-23','pocholosalina2012@gmail.com','$2a$10$Z/iXVFipmM0GUz0ONaT/wuPx1NJivG4v5GNN0/dJVgLw0EjdsNIIC','2021-06-27 23:14:53','2021-06-27 23:14:53');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-28 17:35:27
