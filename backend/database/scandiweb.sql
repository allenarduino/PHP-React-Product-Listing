-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 17, 2022 at 03:55 PM
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
(1, 'JVC224488', 'Acme DISC', 1.00, 'DVD', 700, NULL, NULL, NULL, NULL),
(2, 'JVC882299', 'Bio DISC', 20.00, 'DVD', 1000, NULL, NULL, NULL, NULL),
(3, 'KCV23003030', 'CD Drive USB', 324.00, 'DVD', 3200, NULL, NULL, NULL, NULL),
(4, 'GCC1249988', 'Multi Media Player', 190.67, 'DVD', 300, NULL, NULL, NULL, NULL),
(5, 'KJC199774905', 'Waterproof Furniture', 900.00, 'Furniture', NULL, NULL, 300, 400, 600),
(6, 'NKT4490039', 'Java 3rd Edition', 200.45, 'Book', NULL, 1, NULL, NULL, NULL),
(8, 'MNC7893455', 'Dining Table Set', 568.00, 'Furniture', NULL, NULL, 2000, 5000, 3000),
(10, 'RTK0094567', 'External Hard Drive', 432.00, 'DVD', 1099, NULL, NULL, NULL, NULL),
(11, 'UMN789345545', 'PHP Cook Book', 98.00, 'Book', NULL, 1, NULL, NULL, NULL),
(12, 'XDC8923569593', 'USB Duplicator', 300.00, 'DVD', 700, NULL, NULL, NULL, NULL),
(13, 'UDR568484', 'Office Furniture Set', 1225.00, 'Furniture', NULL, NULL, 1000, 8000, 3000),
(14, 'SKJ90877666', 'C# Cook Book', 95.00, 'Book', NULL, 1, NULL, NULL, NULL);

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
