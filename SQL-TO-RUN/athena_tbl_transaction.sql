CREATE DATABASE `athena` /*!40100 DEFAULT CHARACTER SET utf8 */;

-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: athena
-- ------------------------------------------------------
-- Server version	5.7.20-log

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
-- Table structure for table `tbl_transaction`
--

USE `athena`;

DROP TABLE IF EXISTS `tbl_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_transaction` (
  `id` int(11) NOT NULL,
  `trns_id` int(11) DEFAULT NULL,
  `u_name` varchar(45) DEFAULT NULL,
  `p_zone` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `amt` float DEFAULT NULL,
  `trns_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `trns_id_UNIQUE` (`trns_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_transaction`
--

LOCK TABLES `tbl_transaction` WRITE;
/*!40000 ALTER TABLE `tbl_transaction` DISABLE KEYS */;
INSERT INTO `tbl_transaction` VALUES (1,100,'Muthu','sports','nike','K13',2,5000,'2017-11-24 02:24:02'),(2,101,'Krishna','Electronics','Sony','b17',5,456,'2017-11-24 02:24:02'),(3,102,'Deva','Book','McGrawHill','j45',7,958,'2017-11-24 02:24:02'),(4,103,'Thiru','Electronics','Bose','d18',6,574,'2017-11-24 02:24:02'),(5,104,'Shyam','sports','Reebok','R17',6,369,'2017-11-24 02:24:02'),(6,105,'Dhinesh','Book','Flipkart','r90',1,5478,'2017-11-24 02:24:02'),(7,106,'Srini','Electronics','Samsung','s76',7,145,'2017-11-24 02:24:02'),(8,107,'Ganesh','sports','Adidas','A89',4,258,'2017-11-24 02:24:02'),(9,108,'Subrata','sports','Local','L31',3,743,'2017-11-24 02:24:02'),(10,109,'Babu','Electronics','LG','K13',1,156,'2017-11-24 02:24:02'),(11,110,'Geetha','sports','Adidas','A12',9,987,'2017-11-24 02:24:02'),(12,111,'Vamsi','Fashion','Polo','PO1',5,456,'2017-11-24 02:24:02'),(13,112,'Murthy','Book','Amazon','K13',3,478,'2017-11-24 02:24:02'),(14,113,'Bala','sports','Puma','P56',9,1300,'2017-11-24 02:24:02'),(15,114,'Subrata','Fashion','Levis','L15',8,4198,'2017-11-24 02:24:02'),(16,115,'Srini','Food','Britania','Buboune',12,2450,'2017-11-25 03:34:04'),(17,116,'Subrata','Fashion','Levis','K13',2,1900,'2017-11-25 07:37:04');
/*!40000 ALTER TABLE `tbl_transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-26  2:24:52
