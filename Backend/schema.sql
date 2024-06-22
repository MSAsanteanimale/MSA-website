-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MSA
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MSA
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MSA` DEFAULT CHARACTER SET utf8 ;
USE `MSA` ;

-- -----------------------------------------------------
-- Table `MSA`.`banner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MSA`.`banner` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `srcSP` MEDIUMTEXT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `promotion` BOOLEAN NOT NULL,
  `subtitle` MEDIUMTEXT NOT NULL,
  `description` LONGTEXT NOT NULL,
  `specification` LONGTEXT NOT NULL,
  `in_stock` BOOLEAN NOT NULL,
  `promotionOffer` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 100000;


-- -----------------------------------------------------
-- Table `MSA`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MSA`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `src` MEDIUMTEXT NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `target` VARCHAR(100) NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `promotion` BOOLEAN NOT NULL,
  `topSale` BOOLEAN NOT NULL,
  `newProduct` BOOLEAN NOT NULL,
  `srcSP` MEDIUMTEXT NOT NULL,
  `subtitle` MEDIUMTEXT NOT NULL,
  `description` LONGTEXT NOT NULL,
  `specification` LONGTEXT NOT NULL,
  `in_stock` BOOLEAN NOT NULL,
  `promotionOffer` VARCHAR(100) NOT NULL,
  `filter` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MSA`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MSA`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `client_name` VARCHAR(100) NOT NULL,
  `address` LONGTEXT NOT NULL,
  `telephone` VARCHAR(90) NOT NULL,
  `email` VARCHAR(90) NOT NULL,
  `note` LONGTEXT NOT NULL,
  `commande` LONGTEXT NOT NULL,
  `status` VARCHAR(45) NOT NULL DEFAULT 'en attente',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MSA`.`newsletter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MSA`.`newsletter` (
  `email` VARCHAR(90) NOT NULL UNIQUE
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MSA`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MSA`.`contact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `email` VARCHAR(90) NOT NULL,
  `phone` VARCHAR(90) NOT NULL,
  `message` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
