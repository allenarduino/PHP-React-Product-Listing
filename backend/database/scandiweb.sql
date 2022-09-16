-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 15, 2022 at 03:02 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scandiweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `SKU` varchar(250) NOT NULL,
  `name` varchar(250) CHARACTER SET utf8mb4 NOT NULL,
  `price` float(10,2) NOT NULL,
  `type` varchar(250) NOT NULL,
  `size` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `SKU`, `name`, `price`, `type`, `size`, `weight`, `height`, `length`, `width`) VALUES
(1, 'JVC200123', 'Acme DISC', 1.00, 'DVD', 700, NULL, NULL, NULL, NULL),
(2, 'JVC200123', 'Acme DISC', 1.00, 'DVD', 700, NULL, NULL, NULL, NULL),
(5, 'JVC200123', 'Acme DISC', 1.00, 'DVD', 700, NULL, NULL, NULL, NULL),
(6, 'JVC200123', 'Acme DISC', 1.00, 'DVD', 700, NULL, NULL, NULL, NULL),
(7, 'GGWPOOO7', 'War and Peace', 20.00, 'Book', NULL, 2, NULL, NULL, NULL),
(8, 'GGWPOOO7', 'War and Peace', 20.00, 'Book', NULL, 2, NULL, NULL, NULL),
(9, 'GGWPOOO7', 'War and Peace', 20.00, 'Book', NULL, 2, NULL, NULL, NULL),
(10, 'GGWPOOO7', 'War and Peace', 20.00, 'Book', NULL, 2, NULL, NULL, NULL),
(11, 'TR120555', 'Chair', 40.00, 'Furniture', NULL, NULL, 24, 15, 45),
(12, 'TR120555', 'Chair', 40.00, 'Furniture', NULL, NULL, 24, 15, 45),
(13, 'TR120555', 'Chair', 40.00, 'Furniture', NULL, NULL, 24, 15, 45),
(14, 'TR120555', 'Chair', 40.00, 'Furniture', NULL, NULL, 24, 15, 45);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
