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
  `texto` varchar(250) NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_11e7a95a-2f43-4544-8b18-9bc712cb402a` (`usuarioId`),
  KEY `FK_896efc10-5257-4a6a-90f1-45cb2de11bfb` (`productId`),
  CONSTRAINT `FK_11e7a95a-2f43-4544-8b18-9bc712cb402a` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `FK_896efc10-5257-4a6a-90f1-45cb2de11bfb` FOREIGN KEY (`productId`) REFERENCES `rescatados` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,'Muy lindo','0000-00-00 00:00:00',1),(2,2,'Que perrito lindo','0000-00-00 00:00:00',1),(3,3,'Mi perro favorito','0000-00-00 00:00:00',1),(4,4,'Un dia de estos paso por el refugio','0000-00-00 00:00:00',1),(5,1,'Un dia de estos paso por el refugio','0000-00-00 00:00:00',2),(6,2,'Un amor','0000-00-00 00:00:00',2),(7,3,'Perrazo','0000-00-00 00:00:00',2),(8,4,'Que perro mas lindo','0000-00-00 00:00:00',2),(9,1,'Que perro mas lindo','0000-00-00 00:00:00',3),(10,2,'Este perro tiene cosas del diego','0000-00-00 00:00:00',3),(11,3,'Que pelos locos','0000-00-00 00:00:00',3),(12,4,'Me vuelvo locooooooo, rooooompoooooo todooooooo, que lindo perrito','0000-00-00 00:00:00',3),(13,1,'Que lindo perrito','0000-00-00 00:00:00',4),(14,2,'Que feo perro','0000-00-00 00:00:00',4),(15,3,'Mi perrito favorito, muy educado','0000-00-00 00:00:00',4),(16,4,'Muy educado','0000-00-00 00:00:00',4),(17,1,'Un señor perruno','0000-00-00 00:00:00',5),(18,2,'Oficialmente considero haberme enamorado de este canino','0000-00-00 00:00:00',5),(19,3,'Dogs power','0000-00-00 00:00:00',5),(20,4,'muy lindo','0000-00-00 00:00:00',5),(21,1,'Te ofrezco 25.000$ por el lavaropas','0000-00-00 00:00:00',6),(22,1,'Perdon me equivoque de pestaña','0000-00-00 00:00:00',6),(23,3,'Muy lindo e gatito','0000-00-00 00:00:00',6),(24,4,'El gato mas educado que visite','0000-00-00 00:00:00',6),(25,1,'El gato mas educado que visite','0000-00-00 00:00:00',7),(26,2,'El gato mas lindo que vi','0000-00-00 00:00:00',7),(27,3,'El felino puede considerarse una especia bonita pero este gato esta a otro level','0000-00-00 00:00:00',7),(28,4,'Muy cariñoso ','0000-00-00 00:00:00',7),(29,1,'Que poder','0000-00-00 00:00:00',8),(30,2,'Muy lindo','0000-00-00 00:00:00',8),(31,3,'Que gatito hermoso','0000-00-00 00:00:00',8),(32,4,'Es muy tierno','0000-00-00 00:00:00',8),(33,1,'Buen dia, estaria interesado en adoptar este felino, donde puedo ir a buscarlo?','0000-00-00 00:00:00',9),(34,2,'Sigue disponible el gatito o ya lo adoptaron?','0000-00-00 00:00:00',9),(35,3,'Muy tierno','0000-00-00 00:00:00',9),(36,4,'Muy tierno','0000-00-00 00:00:00',9),(46,2,'mi raza favorita','1970-01-01 00:00:00',3),(47,2,'que lindos ojos','1970-01-01 00:00:00',6),(48,12,'parece jugueton','1970-01-01 00:00:00',8);
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

-- Dump completed on 2021-06-22 21:54:24
