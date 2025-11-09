-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2025 at 07:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travela`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `countries_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `countries_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Mafushi island', '2025-08-14 03:33:28', '2025-08-14 03:33:28'),
(2, 12, 'Kashmir', '2025-08-14 04:00:39', '2025-08-14 04:00:39'),
(3, 1, 'Maafushi island', '2025-08-14 04:04:44', '2025-08-14 04:04:44'),
(4, 12, 'Delhi', '2025-08-14 04:08:17', '2025-08-14 04:08:17'),
(5, 1, 'Sun Siyam Iru Veli', '2025-08-14 04:24:03', '2025-08-14 04:24:03'),
(6, 10, 'Athens', '2025-08-19 04:08:27', '2025-08-19 04:08:27'),
(7, 10, 'Santorini', '2025-08-19 04:08:44', '2025-08-19 04:08:44'),
(8, 18, 'Interlaken', '2025-08-19 04:09:23', '2025-08-19 04:09:23'),
(9, 18, 'Zermatt', '2025-08-19 04:09:43', '2025-08-19 04:09:43'),
(10, 19, 'Paris', '2025-08-19 04:10:56', '2025-08-19 04:10:56'),
(11, 18, 'Geneva', '2025-08-19 04:42:52', '2025-08-19 04:42:52'),
(12, 20, 'Phuket', '2025-08-19 04:58:59', '2025-08-19 04:58:59'),
(13, 21, 'Dhaka', '2025-08-20 04:26:40', '2025-08-20 04:26:40'),
(14, 21, 'Chittagong', '2025-08-20 04:26:50', '2025-08-20 04:26:50'),
(15, 21, 'Coxs Bazar', '2025-08-20 04:27:09', '2025-08-20 04:27:09'),
(16, 21, 'Thailand', '2025-08-20 04:27:19', '2025-08-20 04:27:19'),
(17, 21, 'Sylhet', '2025-08-20 05:18:57', '2025-08-20 05:18:57');

-- --------------------------------------------------------

--
-- Table structure for table `continents`
--

CREATE TABLE `continents` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `continents`
--

INSERT INTO `continents` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Asia', '2025-08-11 04:33:12', '2025-08-11 04:33:12'),
(2, 'Europe', '2025-08-11 04:33:26', '2025-08-11 04:33:26'),
(3, 'Australia', '2025-08-12 04:08:25', '2025-08-12 04:08:25'),
(4, 'North America', '2025-08-12 04:09:01', '2025-08-12 04:09:01'),
(5, 'Latin America', '2025-08-12 04:09:14', '2025-08-12 04:09:14'),
(7, 'Africa', '2025-08-12 04:36:31', '2025-08-12 04:36:31'),
(9, 'Asia', '2025-08-20 04:26:08', '2025-08-20 04:26:08');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `continents_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `continents_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Maldive', '2025-08-11 04:42:12', '2025-08-11 04:42:12'),
(2, 0, 'Japan', '2025-08-12 04:56:11', '2025-08-12 04:56:11'),
(3, 0, 'Thiland', '2025-08-12 05:17:50', '2025-08-12 05:17:50'),
(4, 0, 'India', '2025-08-12 05:18:53', '2025-08-12 05:18:53'),
(5, 0, 'Indonesia', '2025-08-12 05:19:13', '2025-08-12 05:19:13'),
(6, 0, 'Italy', '2025-08-12 05:19:53', '2025-08-12 05:19:53'),
(7, 0, 'Greece', '2025-08-12 05:21:06', '2025-08-12 05:21:06'),
(8, 0, 'USA', '2025-08-12 05:21:33', '2025-08-12 05:21:33'),
(9, 2, 'Italy', '2025-08-12 06:10:29', '2025-08-12 06:10:29'),
(10, 2, 'Greece', '2025-08-12 06:10:51', '2025-08-12 06:10:51'),
(12, 1, 'India', '2025-08-13 05:10:01', '2025-08-13 05:10:01'),
(13, 1, 'Indonesia', '2025-08-13 05:10:15', '2025-08-13 05:10:15'),
(14, 1, 'Japan', '2025-08-13 05:10:25', '2025-08-13 05:10:25'),
(15, 1, 'Srilanka', '2025-08-13 05:10:46', '2025-08-13 05:10:46'),
(16, 1, 'Pakistan', '2025-08-14 04:09:51', '2025-08-14 04:09:51'),
(17, 2, 'Spain', '2025-08-19 04:06:51', '2025-08-19 04:06:51'),
(18, 2, 'Switzerland', '2025-08-19 04:07:05', '2025-08-19 04:07:05'),
(19, 2, 'France', '2025-08-19 04:10:49', '2025-08-19 04:10:49'),
(20, 1, 'Thiland', '2025-08-19 04:58:14', '2025-08-19 04:58:14'),
(21, 1, 'Bangladesh', '2025-08-20 04:26:21', '2025-08-20 04:26:21');

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `finish_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coupon`
--

INSERT INTO `coupon` (`id`, `name`, `code`, `amount`, `start_date`, `finish_date`) VALUES
(1, 'kamal', 'RP20', 20.00, '2025-08-01', '2025-08-31'),
(2, 'jamal', 'jm20', 20.00, '2025-08-14', '2025-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `continents_id` int(11) NOT NULL,
  `countries_id` int(11) NOT NULL,
  `cities_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `continents_id`, `countries_id`, `cities_id`, `title`, `description`, `price`, `duration`, `image`, `created_at`, `updated_at`) VALUES
(14, 1, 21, 17, 'Jol Torongo', 'Jol Torongo in Sylhet offers a 4-star hotel experience with air-conditioning, balconies, and private bathrooms.', 4031.00, '1 night', 'hotels_file/952390177959797178sundarban.jpg', '2025-08-20 04:48:52', '2025-08-20 04:48:52'),
(15, 1, 21, 13, 'The Divine Eco ResortOpens', 'The Divine Eco Resort in Dhaka offers family rooms with air-conditioning, private bathrooms, and sea or garden views. Each room includes a work desk, free toiletries, and a TV.\r\n', 4800.00, '1 night', 'hotels_file/1919781109sajek-the-queen-of-clouds.jpg', '2025-08-20 04:56:32', '2025-08-20 04:56:32'),
(16, 1, 21, 15, 'Anchor Eco Resort & Spa', 'Anchor Eco Resort & Spa in Coxs Bazar offers family rooms with modern amenities. Guests enjoy free WiFi, air-conditioning, and private bathrooms.', 4000.00, '1 night', 'hotels_file/13325618441862056764saint_martin.jpg', '2025-08-20 05:01:08', '2025-08-20 05:01:08'),
(17, 1, 21, 15, 'Royal Pearl Suites', 'Royal Pearl Suites in Coxs Bazar offers family rooms with air-conditioning, bathrooms, and free WiFi. Each room includes a work desk, TV, and sofa for added comfort.', 5041.00, '1 night', 'hotels_file/622041933coxbazar.jpg', '2025-08-20 05:12:40', '2025-08-20 05:12:40'),
(18, 1, 21, 14, 'Century Park Residence', 'The hotel offers 220 luxuriously furnished Guest Rooms and Suites, Multi Cuisine Restaurants, authentic Thai Spa center, Health Club, live entertainment Bar, a Mediterranean Lounge and country’s most beautiful Roof Top Restaurant with Swimming Pool and World Class Venue facilities', 3980.00, '1 night', 'hotels_file/504093049nilgiri.jpg', '2025-08-20 07:27:42', '2025-08-20 07:27:42');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_contact` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_address` text DEFAULT NULL,
  `datetime` date DEFAULT NULL,
  `person` varchar(255) NOT NULL,
  `messege` text NOT NULL,
  `sub_total` double(10,2) DEFAULT NULL,
  `order_status` int(11) DEFAULT 0 COMMENT '0 pending 1 accepted 2 delivered 3 canceled',
  `item_details` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `customer_contact`, `customer_email`, `customer_address`, `datetime`, `person`, `messege`, `sub_total`, `order_status`, `item_details`, `created_at`, `updated_at`) VALUES
(10, 'rhygsrh', 'dh', 'egd', 'dshgbdz', '2025-08-21', '2', 'dg', 9600.00, 1, '{\"id\":\"15\",\"continents_id\":\"1\",\"countries_id\":\"21\",\"cities_id\":\"13\",\"title\":\"The Divine Eco ResortOpens\",\"description\":\"The Divine Eco Resort in Dhaka offers family rooms with air-conditioning, private bathrooms, and sea or garden views. Each room includes a work desk, free toiletries, and a TV.\\r\\n\",\"price\":\"4800.00\",\"duration\":\"1 night\",\"image\":\"hotels_file/1919781109sajek-the-queen-of-clouds.jpg\",\"created_at\":\"2025-08-20 10:56:32\",\"updated_at\":\"2025-08-20 10:56:32\",\"cat_name\":\"Asia\",\"count_name\":\"Bangladesh\",\"cit_name\":\"Dhaka\"}', '2025-08-20 06:04:23', '2025-08-20 06:04:23'),
(11, 'bristy', '124325', 'br@gmail.com', 'oxygen', '2025-08-21', '2', 'Requesting an early check-in if the flight arrives earlier than the standard check-in time.', 600000.00, 0, '{\"id\":\"6\",\"continents_id\":\"2\",\"countries_id\":\"10\",\"cities_id\":\"0\",\"title\":\"Santorini – The Jewel of the Aegean\",\"description\":\"Santorini is a breathtaking Greek island famous for its whitewashed buildings, blue-domed churches, stunning sunsets, and dramatic views over the Aegean Sea.\",\"price\":\"300000.00\",\"duration\":\"4 days\",\"image\":\"packages_file/361263725santorini_greece.jpg\",\"created_at\":\"2025-08-19 10:31:00\",\"updated_at\":\"2025-08-19 10:31:00\",\"cat_name\":\"Europe\",\"count_name\":\"Greece\",\"cit_name\":null}', '2025-08-20 07:01:47', '2025-08-20 07:01:47'),
(12, 'bristy', '2345', 'br@gmail.com', 'oxygen', '2025-08-21', '2', 'fjhgj', 600000.00, 0, '{\"id\":\"9\",\"continents_id\":\"2\",\"countries_id\":\"18\",\"cities_id\":\"11\",\"title\":\"The Heart of International Diplomacy\",\"description\":\"Geneva is a cosmopolitan Swiss city known for its beautiful lakefront, global organizations, and rich cultural scene.\",\"price\":\"300000.00\",\"duration\":\"4days\",\"image\":\"packages_file/2040825576swiss_miracle_switzerland.jpg\",\"created_at\":\"2025-08-19 10:42:30\",\"updated_at\":\"2025-08-19 10:42:30\",\"cat_name\":\"Europe\",\"count_name\":\"Switzerland\",\"cit_name\":\"Geneva\"}', '2025-08-20 07:45:37', '2025-08-20 07:45:37'),
(13, 'A N M SHAFIQ ULLAH', '1254376458', 'shafiq@gmail.com', 'Fatehapur, Hathazari,', '2025-10-28', '2', 'sfs', 300000.00, 0, '{\"id\":\"2\",\"continents_id\":\"1\",\"countries_id\":\"1\",\"cities_id\":\"0\",\"title\":\"Best Of Maldives\",\"description\":\"Maafushi Island is a budget-friendly Maldivian paradise known for its stunning beaches, water sports, and local island charm.\",\"price\":\"150000.00\",\"duration\":\"3 days\",\"image\":\"packages_file/13691200921084115639Maldives-1430677.jpg\",\"created_at\":\"2025-08-12 13:10:13\",\"updated_at\":\"2025-08-12 13:10:13\",\"cat_name\":\"Asia\",\"count_name\":\"Maldive\",\"cit_name\":null}', '2025-10-05 05:16:53', '2025-10-05 05:16:53'),
(14, 'A N M SHAFIQ ULLAH', '1254376458', 'shafiq@gmail.com', 'Fatehapur, Hathazari,', '2025-10-23', '2', '', 600000.00, 1, '{\"id\":\"6\",\"continents_id\":\"2\",\"countries_id\":\"10\",\"cities_id\":\"0\",\"title\":\"Santorini – The Jewel of the Aegean\",\"description\":\"Santorini is a breathtaking Greek island famous for its whitewashed buildings, blue-domed churches, stunning sunsets, and dramatic views over the Aegean Sea.\",\"price\":\"300000.00\",\"duration\":\"4 days\",\"image\":\"packages_file/361263725santorini_greece.jpg\",\"created_at\":\"2025-08-19 10:31:00\",\"updated_at\":\"2025-08-19 10:31:00\",\"cat_name\":\"Europe\",\"count_name\":\"Greece\",\"cit_name\":null}', '2025-10-05 05:17:50', '2025-10-05 05:17:50'),
(15, 'bristy', '234536', 'br@gmail.com', 'dsgfx', '2025-11-03', '3', 'dgd', 450000.00, 0, '{\"id\":\"2\",\"continents_id\":\"1\",\"countries_id\":\"1\",\"cities_id\":\"0\",\"title\":\"Best Of Maldives\",\"description\":\"Maafushi Island is a budget-friendly Maldivian paradise known for its stunning beaches, water sports, and local island charm.\",\"price\":\"150000.00\",\"duration\":\"3 days\",\"image\":\"packages_file/13691200921084115639Maldives-1430677.jpg\",\"created_at\":\"2025-08-12 13:10:13\",\"updated_at\":\"2025-08-12 13:10:13\",\"cat_name\":\"Asia\",\"count_name\":\"Maldive\",\"cit_name\":null}', '2025-11-03 07:00:08', '2025-11-03 07:00:08'),
(16, 'tahmina', '214356', 'tahmina@gmail.com', 'vbfxjhfx', '2025-11-10', '5', 'shfj', 750000.00, 1, '{\"id\":\"2\",\"continents_id\":\"1\",\"countries_id\":\"1\",\"cities_id\":\"0\",\"title\":\"Best Of Maldives\",\"description\":\"Maafushi Island is a budget-friendly Maldivian paradise known for its stunning beaches, water sports, and local island charm.\",\"price\":\"150000.00\",\"duration\":\"3 days\",\"image\":\"packages_file/13691200921084115639Maldives-1430677.jpg\",\"created_at\":\"2025-08-12 13:10:13\",\"updated_at\":\"2025-08-12 13:10:13\",\"cat_name\":\"Asia\",\"count_name\":\"Maldive\",\"cit_name\":null}', '2025-11-09 03:44:27', '2025-11-09 03:44:27'),
(17, 'br', '234532', 'br@gmail.com', 'zdg', '2025-11-17', '34', 'gd', 9350000.00, 0, '{\"id\":\"8\",\"continents_id\":\"2\",\"countries_id\":\"18\",\"cities_id\":\"11\",\"title\":\"Adventure Capital of the Swiss Alps\",\"description\":\"Interlaken is a scenic Swiss town nestled between two lakes, renowned for thrilling outdoor activities and stunning mountain views.\",\"price\":\"275000.00\",\"duration\":\"5 days\",\"image\":\"packages_file/1925880296980971735Switzerland.jpg\",\"created_at\":\"2025-08-19 10:40:02\",\"updated_at\":\"2025-08-19 10:40:02\",\"cat_name\":\"Europe\",\"count_name\":\"Switzerland\",\"cit_name\":\"Geneva\"}', '2025-11-09 05:56:44', '2025-11-09 05:56:44'),
(18, 'th', '32534', 'th@gmail.com', 'dg', '2025-11-10', '3', 'dsg', 450000.00, 0, '{\"id\":\"2\",\"continents_id\":\"1\",\"countries_id\":\"1\",\"cities_id\":\"0\",\"title\":\"Best Of Maldives\",\"description\":\"Maafushi Island is a budget-friendly Maldivian paradise known for its stunning beaches, water sports, and local island charm.\",\"price\":\"150000.00\",\"duration\":\"3 days\",\"image\":\"packages_file/13691200921084115639Maldives-1430677.jpg\",\"created_at\":\"2025-08-12 13:10:13\",\"updated_at\":\"2025-08-12 13:10:13\",\"cat_name\":\"Asia\",\"count_name\":\"Maldive\",\"cit_name\":null}', '2025-11-09 06:11:00', '2025-11-09 06:11:00');

-- --------------------------------------------------------

--
-- Table structure for table `orders_hotels`
--

CREATE TABLE `orders_hotels` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_contact` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_address` text DEFAULT NULL,
  `datetime` date DEFAULT NULL,
  `per_night` varchar(255) NOT NULL,
  `messege` text NOT NULL,
  `sub_total` double(10,2) DEFAULT NULL,
  `order_status` int(11) DEFAULT 0 COMMENT '0 pending 1 accepted 2 delivered 3 canceled',
  `item_details` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders_hotels`
--

INSERT INTO `orders_hotels` (`id`, `customer_name`, `customer_contact`, `customer_email`, `customer_address`, `datetime`, `per_night`, `messege`, `sub_total`, `order_status`, `item_details`, `created_at`, `updated_at`) VALUES
(26, 'bristy', '2153', 'br@gmail.com', 'chattogram', '2025-08-22', '2', 'Requesting an early check-in if the flight arrives earlier than the standard check-in time.', 9600.00, 2, '{\"id\":\"15\",\"continents_id\":\"1\",\"countries_id\":\"21\",\"cities_id\":\"13\",\"title\":\"The Divine Eco ResortOpens\",\"description\":\"The Divine Eco Resort in Dhaka offers family rooms with air-conditioning, private bathrooms, and sea or garden views. Each room includes a work desk, free toiletries, and a TV.\\r\\n\",\"price\":\"4800.00\",\"duration\":\"1 night\",\"image\":\"hotels_file/1919781109sajek-the-queen-of-clouds.jpg\",\"created_at\":\"2025-08-20 10:56:32\",\"updated_at\":\"2025-08-20 10:56:32\",\"cat_name\":\"Asia\",\"count_name\":\"Bangladesh\",\"cit_name\":\"Dhaka\"}', '2025-08-20 07:03:58', '2025-08-20 07:03:58'),
(27, 'bristy', '3253', 'br@gmail.com', 'dhgbfd', '2025-08-21', '3', 'gdag', 14400.00, 0, '{\"id\":\"15\",\"continents_id\":\"1\",\"countries_id\":\"21\",\"cities_id\":\"13\",\"title\":\"The Divine Eco ResortOpens\",\"description\":\"The Divine Eco Resort in Dhaka offers family rooms with air-conditioning, private bathrooms, and sea or garden views. Each room includes a work desk, free toiletries, and a TV.\\r\\n\",\"price\":\"4800.00\",\"duration\":\"1 night\",\"image\":\"hotels_file/1919781109sajek-the-queen-of-clouds.jpg\",\"created_at\":\"2025-08-20 10:56:32\",\"updated_at\":\"2025-08-20 10:56:32\",\"cat_name\":\"Asia\",\"count_name\":\"Bangladesh\",\"cit_name\":\"Dhaka\"}', '2025-08-20 07:46:05', '2025-08-20 07:46:05'),
(28, 'tahminaa', '214235', 'ta@gmail.com', 'sdghfj', '2025-11-10', '2', 'd', 8062.00, 2, '{\"id\":\"14\",\"continents_id\":\"1\",\"countries_id\":\"21\",\"cities_id\":\"17\",\"title\":\"Jol Torongo\",\"description\":\"Jol Torongo in Sylhet offers a 4-star hotel experience with air-conditioning, balconies, and private bathrooms.\",\"price\":\"4031.00\",\"duration\":\"1 night\",\"image\":\"hotels_file/952390177959797178sundarban.jpg\",\"created_at\":\"2025-08-20 10:48:52\",\"updated_at\":\"2025-08-20 10:48:52\",\"cat_name\":\"Asia\",\"count_name\":\"Bangladesh\",\"cit_name\":\"Sylhet\"}', '2025-11-09 03:47:12', '2025-11-09 03:47:12'),
(29, 'jerin', '1243', 'jrr@gmail.com', 'dgfx', '2025-11-10', '2', 'fxgf', 8062.00, 1, '{\"id\":\"14\",\"continents_id\":\"1\",\"countries_id\":\"21\",\"cities_id\":\"17\",\"title\":\"Jol Torongo\",\"description\":\"Jol Torongo in Sylhet offers a 4-star hotel experience with air-conditioning, balconies, and private bathrooms.\",\"price\":\"4031.00\",\"duration\":\"1 night\",\"image\":\"hotels_file/952390177959797178sundarban.jpg\",\"created_at\":\"2025-08-20 10:48:52\",\"updated_at\":\"2025-08-20 10:48:52\",\"cat_name\":\"Asia\",\"count_name\":\"Bangladesh\",\"cit_name\":\"Sylhet\"}', '2025-11-09 05:57:44', '2025-11-09 05:57:44');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `continents_id` int(11) NOT NULL,
  `countries_id` int(11) NOT NULL,
  `cities_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `continents_id`, `countries_id`, `cities_id`, `title`, `description`, `price`, `duration`, `image`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 0, 'Best Of Maldives', 'Maafushi Island is a budget-friendly Maldivian paradise known for its stunning beaches, water sports, and local island charm.', 150000.00, '3 days', 'packages_file/13691200921084115639Maldives-1430677.jpg', '2025-08-12 07:10:13', '2025-08-12 07:10:13'),
(6, 2, 10, 0, 'Santorini – The Jewel of the Aegean', 'Santorini is a breathtaking Greek island famous for its whitewashed buildings, blue-domed churches, stunning sunsets, and dramatic views over the Aegean Sea.', 300000.00, '4 days', 'packages_file/361263725santorini_greece.jpg', '2025-08-19 04:31:00', '2025-08-19 04:31:00'),
(7, 2, 10, 6, 'Athens – The Cradle of Western Civilization', 'Athens is a historic city famed for its ancient landmarks like the Acropolis and its vibrant blend of old and modern culture.', 250000.00, '4 days', 'packages_file/110157373greece.jpg', '2025-08-19 04:33:46', '2025-08-19 04:33:46'),
(8, 2, 18, 11, 'Adventure Capital of the Swiss Alps', 'Interlaken is a scenic Swiss town nestled between two lakes, renowned for thrilling outdoor activities and stunning mountain views.', 275000.00, '5 days', 'packages_file/1925880296980971735Switzerland.jpg', '2025-08-19 04:40:02', '2025-08-19 04:40:02'),
(9, 2, 18, 11, 'The Heart of International Diplomacy', 'Geneva is a cosmopolitan Swiss city known for its beautiful lakefront, global organizations, and rich cultural scene.', 300000.00, '4days', 'packages_file/2040825576swiss_miracle_switzerland.jpg', '2025-08-19 04:42:30', '2025-08-19 04:42:30'),
(10, 2, 19, 10, 'The City of Love and Lights', 'Discover the romance, history, and charm of Paris with an unforgettable journey through iconic landmarks and hidden gems.', 300000.00, '3days', 'packages_file/1267549714paris_france.jpg', '2025-08-19 04:51:15', '2025-08-19 04:51:15'),
(11, 1, 12, 2, 'Kashmir Serenity: Pahalgam Paradise Retreat', 'Immerse yourself in the tranquil beauty of Pahalgam, where lush valleys and snow-capped peaks create the perfect Himalayan escape.', 90000.00, '4days', 'packages_file/794219491601617565Baisaran-Valley-pahalgam_kashmir.jpg', '2025-08-19 04:53:35', '2025-08-19 04:53:35'),
(12, 1, 20, 12, ' A Journey Through Thailand’s Wonders', 'Experience the vibrant culture, tropical beaches, and exotic flavors of Thailand in an unforgettable adventure.', 120000.00, '7days', 'packages_file/3755580thiland.jpg', '2025-08-19 04:59:49', '2025-08-19 04:59:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `remember_token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `contact_no`, `email`, `password`, `status`, `remember_token`) VALUES
(1, 'jamal', '124', 'jamal@yahoo.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '65921754723580808781'),
(2, 'tomal', '124', 'tomal@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '56261754723852974201'),
(3, 'himel', '12', 'himel@gmail.com', '356a192b7913b04c54574d18c28d46e6395428ab', 1, NULL),
(4, 'jamal', '12324', 'jamal@yahoo.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '28201755573676488221'),
(5, 'jesmin', '12425', 'js@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '94421754888416804688'),
(6, 'jesmin', '13214', 'js@gmail.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '94621754892046219730'),
(7, 'jerin', '12455', 'jamal@yahoo.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '15881755673463657841'),
(8, 'jamal', '13125', 'jamal@yahoo.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '18331755674192558001'),
(9, 'jamal', '21536', 'jamal@yahoo.com', '7b52009b64fd0a2a49e6d8a939753077792b0554', 1, '42921762667643305559'),
(10, 'jerin', '12324325', 'jerin@gmail.com', '356a192b7913b04c54574d18c28d46e6395428ab', 1, '31371759641700775417'),
(11, 'bristy', '325346', 'br@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, '98261762153330953200');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `continents`
--
ALTER TABLE `continents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_hotels`
--
ALTER TABLE `orders_hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `continents`
--
ALTER TABLE `continents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orders_hotels`
--
ALTER TABLE `orders_hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
