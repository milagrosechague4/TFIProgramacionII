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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-28 17:26:25
