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

-- Dump completed on 2021-06-28 17:26:25
