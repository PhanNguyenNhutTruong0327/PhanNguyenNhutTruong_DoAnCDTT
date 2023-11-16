-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 16, 2023 lúc 10:04 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `phannguyennhuttruong_laravel`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `sort_order`, `metakey`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Bánh kem vị việt', 'banh-kem-huong-vi-viet', 'banh-kem-huong-vi-viet.jpg', 1, 'q', 'q', '2023-09-21 11:40:20', '2023-09-21 11:40:20', 1, NULL, 1),
(3, 'Kinh đô', 'kinh-do', 'kinh-do.jpg', 2, 'b', 'b', '2023-10-02 05:01:31', '2023-10-02 05:01:31', 1, NULL, 1),
(4, 'Brodark-Bakery', 'brodark-bakery', 'brodark-bakery.jpg', 3, 'Brodark-Bakery', 'bbb', '2023-10-02 05:14:00', '2023-10-17 08:19:45', 1, 1, 1),
(16, 'ddadda', 'ddadda', 'ddadda.png', 0, 'ddadda', 'dadada', '2023-10-19 03:46:34', '2023-10-24 03:29:51', 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `metakey`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Bánh Kem', 'banh-kem', 'banh-kem.jpg', 0, 1, 'a', 'a', '2023-09-28 00:02:31', '2023-09-28 00:03:15', 1, 1, 1),
(2, 'Bánh bông lan', 'banh-bong-lan', 'banh-bong-lan.jpg', 0, 2, 'a', 'a', '2023-09-28 12:39:16', '2023-09-28 12:39:16', 1, NULL, 1),
(3, 'Bánh mì', 'banh-mi', 'banh-mi.jpg', 0, 3, 'a', 'a', '2023-09-28 12:39:16', '2023-09-28 12:39:16', 1, NULL, 1),
(4, 'Bánh ngọt', 'banh-ngot', 'banh-ngot.jpg', 0, 4, 'a', 'a', '2023-09-28 12:40:22', '2023-09-28 12:40:22', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `metakey` varchar(255) DEFAULT NULL,
  `metadesc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_config`
--

INSERT INTO `db_config` (`id`, `author`, `email`, `phone`, `zalo`, `facebook`, `address`, `youtube`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Tr Cake', 'caitiembanh@gmail.com', '0123456789', '012345678', 'Tr Cake Shop', 'Số 20 Tăng Nhơn Phú - Phường Phước Long B - Thành Phố Thủ Đức - TP. Hồ Chí Minh', 'Tr Cake', 'Tr Cake', 'Tr Cake', '2023-10-16 04:21:51', '2023-11-13 20:37:00', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_contact`
--

INSERT INTO `db_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'ahihi', 'ahihi@gmail.com', '0123456789', 'helloo', 'hello', 0, '2023-10-01 01:16:58', '2023-10-24 08:32:33', 1, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `level` int(10) UNSIGNED DEFAULT NULL,
  `table_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `position`, `level`, `table_id`, `type`, `parent_id`, `sort_order`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Trang chủ', '/', 'mainmenu', 1, 0, 'custom', 0, 1, '2023-09-28 10:23:18', '2023-09-28 10:23:18', 1, NULL, 1),
(2, 'Sản phẩm', '/pages/san-pham', 'mainmenu', 1, 0, 'custom', 0, 3, '2023-09-28 03:26:30', '2023-09-28 03:26:30', 1, NULL, 1),
(3, 'Thương hiệu', '', 'mainmenu', 1, 0, 'custom', 0, 4, '2023-09-28 03:27:10', '2023-09-28 03:27:10', 1, NULL, 1),
(4, 'Giới thiệu', '/pages/gioi-thieu', 'mainmenu', 1, 0, 'custom', 0, 2, '2023-09-28 03:27:38', '2023-09-28 03:27:38', 1, NULL, 1),
(5, 'Tin tức', '/pages/tin-tuc', 'mainmenu', 1, 0, 'custom', 0, 5, '2023-09-28 03:28:02', '2023-09-28 03:28:02', 1, NULL, 1),
(6, 'Liên hệ', '/pages/lien-he', 'mainmenu', 1, 0, 'custom', 0, 6, '2023-09-28 03:28:26', '2023-09-28 03:28:26', 1, NULL, 1),
(7, 'Bánh Kem', '/pages/san-pham/banh-kem', 'mainmenu', 1, 0, 'custom', 2, 0, '2023-09-28 03:31:42', '2023-09-28 03:31:42', 1, NULL, 1),
(8, 'Bánh Mì', '/pages/san-pham/banh-mi', 'mainmenu', 1, 0, 'custom', 2, 0, '2023-09-28 03:32:43', '2023-09-28 03:32:43', 1, NULL, 1),
(9, 'Bánh Bông Lan', '/pages/san-pham/banh-bong-lan', 'mainmenu', 1, 0, 'custom', 2, 0, '2023-09-28 03:33:10', '2023-09-28 03:33:10', 1, NULL, 1),
(10, 'Bánh Ngọt', '/pages/san-pham/banh-ngot', 'mainmenu', 1, 0, 'custom', 2, 0, '2023-09-28 03:33:35', '2023-09-28 03:33:35', 1, NULL, 1),
(11, 'Kinh Đô', '/pages/thuong-hieu/kinh-do', 'mainmenu', 1, 0, 'custom', 3, 0, '2023-09-28 03:34:35', '2023-09-28 03:34:35', 1, NULL, 1),
(12, 'Bánh Kem Hương Vị Việt', '/pages/thuong-hieu/banh-kem-huong-vi-viet', 'mainmenu', 1, 0, 'custom', 3, 0, '2023-09-28 03:35:01', '2023-09-28 03:35:01', 1, NULL, 1),
(13, 'Brodark Bakery', '/pages/thuong-hieu/brodark-bakery', 'mainmenu', 1, 0, 'custom', 3, 0, '2023-09-28 03:35:23', '2023-09-28 03:35:23', 1, NULL, 1),
(15, 'Bánh mới tháng 10', '/pages/tin-tuc/banh-moi-thang-10', 'mainmenu', 1, 0, 'custom', 5, 0, '2023-09-28 04:40:38', '2023-09-28 04:40:38', 1, NULL, 1),
(16, 'Bánh ngọt mùa lễ hội', '/pages/tin-tuc/banh-ngot-mua-le-hoi', 'mainmenu', 1, 0, 'custom', 5, 0, '2023-10-04 07:30:47', '2023-10-04 07:30:47', 1, NULL, 1),
(17, 'Chính sách an toàn thực phẩm', '/pages/chinh-sach-an-toan-thuc-pham', 'footermenu', 1, 0, 'page', 0, 0, '2023-10-09 03:43:42', '2023-10-09 03:43:42', 1, NULL, 1),
(18, 'Chính sách đổi trả', '/pages/chinh-sach-doi-tra', 'footermenu', 1, 0, 'page', 0, 0, '2023-10-09 03:45:22', '2023-10-09 03:45:22', 1, NULL, 1),
(19, 'Chính sách vận chuyển', '/pages/chinh-sach-van-chuyen', 'footermenu', 1, 0, 'page', 0, 0, '2023-10-09 03:46:27', '2023-10-09 03:46:27', 1, NULL, 1),
(20, 'Chính sách bảo mật', '/pages/chinh-sach-bao-mat', 'footermenu', 1, 0, 'page', 0, 0, '2023-10-09 03:47:10', '2023-11-13 01:25:38', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `TrangThai` int(11) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `updated_at`, `updated_by`, `TrangThai`, `status`) VALUES
(11, 4, 'Nhut Truong', '0123456789', 'nhuttruong@gmail.com', 'tpHCM', 'Giao vao buoi chieu', '2023-10-07 07:59:28', '2023-10-30 06:58:42', NULL, 0, 2),
(14, 5, 'Truong', '1231231', 'fsaf@gmail.com', 'sdvsv', NULL, '2023-10-24 20:00:34', '2023-10-30 07:00:21', NULL, 0, 2),
(87, 4, 'Tuong Nhii', '012323232', 'nhii@gmail.com', 'tpHCM', NULL, '2023-11-03 01:42:10', '2023-11-03 01:42:10', NULL, 1, 1),
(88, 4, 'cua pho mai và bong lan cha bog', '039129774', 'bl@gmail.com', 'tphcm', NULL, '2023-11-04 23:31:15', '2023-11-04 23:31:15', NULL, 2, 1),
(89, 4, 'cua k sale', '032332', 'cu@gmail.com', 'dssdfs', NULL, '2023-11-04 23:32:39', '2023-11-04 23:32:39', NULL, 1, 1),
(90, 4, 'dfsdfs', '432425', 'dfsdfs@gmail.com', 'sdsd', NULL, '2023-11-05 03:10:04', '2023-11-05 03:10:04', NULL, 2, 1),
(91, 8, 'Truong P', '0123123321', 'truong05@gmail.com', 'adadadada', NULL, '2023-11-12 22:52:43', '2023-11-12 22:52:43', NULL, 0, 1),
(92, 5, 'dáa', 'dsdffsd', 'sddg@gmail.com', 'sdfsfs', 'null', '2023-11-13 02:25:58', '2023-11-13 02:25:58', NULL, 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `discount` double DEFAULT NULL,
  `amount` double(8,2) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `price`, `qty`, `discount`, `amount`, `updated_at`, `created_at`) VALUES
(1, 11, 1, 1111.00, 1, 1, 11111.00, NULL, NULL),
(2, 14, 7, 123.00, 3, 2, 2.00, NULL, NULL),
(3, 14, 5, 32.00, 2, 32, 23.00, NULL, NULL),
(14, 87, 25, 20.00, 2, 0, 40.00, '2023-11-03 01:42:10', '2023-11-03 01:42:10'),
(15, 87, 7, 50.00, 1, 0, 50.00, '2023-11-03 01:42:10', '2023-11-03 01:42:10'),
(16, 88, 25, 20.00, 2, 0, 40.00, '2023-11-04 23:31:15', '2023-11-04 23:31:15'),
(17, 88, 7, 50.00, 1, 0, 50.00, '2023-11-04 23:31:15', '2023-11-04 23:31:15'),
(18, 89, 25, 30.00, 1, 0, 30.00, '2023-11-04 23:32:39', '2023-11-04 23:32:39'),
(19, 90, 7, 50.00, 1, 0, 50.00, '2023-11-05 03:10:04', '2023-11-05 03:10:04'),
(20, 91, 1, 150.00, 1, 0, 150.00, '2023-11-12 22:52:43', '2023-11-12 22:52:43'),
(21, 91, 26, 20.00, 1, 0, 20.00, '2023-11-12 22:52:43', '2023-11-12 22:52:43'),
(22, 92, 7, 50.00, 1, 0, 50.00, '2023-11-13 01:56:05', '2023-11-13 01:56:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `type` varchar(100) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `image`, `type`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 1, 'RED VELVET - NỮ HOÀNG TRÊN SÀN DIỄN BÁNH NGỌT', 'red-velvet-nu-hoang-tren-san-dien-banh-ngot', 'Từ khi xuất hiện, red velvet (bánh nhung đỏ) được người mê bánh ngọt khắp nơi trên thế giới yêu thích nhờ hương vị cổ điển và màu đỏ bắt mắt. Tên gọi của chúng cũng khá sang trọ...', 'red-velvet-nu-hoang-tren-san-dien-banh-ngot.jpg', 'post', 'new', 'Từ khi xuất hiện, red velvet (bánh nhung đỏ) được người mê bánh ngọt khắp nơi trên thế giới yêu thích nhờ hương vị cổ điển và màu đỏ bắt mắt. Tên gọi của chúng cũng khá sang trọng, như một phiên bản mềm, bông và đắt tiền của những chiếc bánh thông thường.', '2023-06-21 18:16:41', '2023-06-21 18:16:41', 1, NULL, 1),
(15, 2, 'NGÀY LỄ HAPPY VALENTINE\'S DAY 2023', 'happy-valentines-day-2023', 'Nhắc đến tình yêu - là nhắc đến những trái tim ngập tràn màu hồng, ngọt ngào và hạnh phúc. Bạn biết không, người ta vẫn tin rằng trái tim là trung tâm của mọi cảm xúc...', 'happy-valentines-day-2023.jpg', 'post', 'HAPPY VALENTINE\'S DAY 2023', 'Nhắc đến tình yêu - là nhắc đến những trái tim ngập tràn màu hồng, ngọt ngào và hạnh phúc.\r\n Sẽ không còn là khó khăn khi phải đau đầu suy nghĩ tặng gì để chiếm trọn tình cảm vì chúng tôi đã chuẩn bị cho bạn chiếc bánh kem tặng người ấy thật ý nghĩa.', '2023-06-21 17:49:37', '2023-06-21 17:49:37', 1, NULL, 1),
(16, 2, 'BÁNH KEM NGON - ĐÓN GIÁNG SINH VỀ', 'banh-kem-ngon-don-giang-sinh-ve', 'Giáng sinh luôn là thời gian \" lấp lánh \" nhất trong năm , cũng là lúc tâm hồn con người được \" thắp sáng \" bởi bầu không khí rộn ràng, vui tươi giữa trời đông lạnh giá. Tạ...', 'banh-kem-ngon-don-giang-sinh-ve.jpg', 'post', 'BÁNH KEM NGON - ĐÓN GIÁNG SINH VỀ', 'Giáng sinh luôn là thời gian \" lấp lánh \" nhất trong năm , cũng là lúc tâm hồn con người được \" thắp sáng \" bởi bầu không khí rộn ràng, vui tươi giữa trời đông lạnh giá.  Tại đây những thứ \" lấp lánh\" luôn là những chiếc bánh mang tình thần Giáng Sinh.', '2023-06-21 17:51:44', '2023-06-21 17:51:44', 1, NULL, 1),
(17, 0, 'Giới thiệu', 'gioi-thieu', 'Thành lập vào tháng 12/2010 từ tình yêu với những chiếc bánh, Tr Cake khởi nguồn cùng slogan “Bánh tươi mỗi ngày” và sứ mệnh xuyên suốt về mang tới những sản phẩm thơm ngon nhất. Những năm đầu, sản phẩm chủ lực của Tr Cake là bánh kem và bánh mì tươi. Trong mỗi dịp lễ hay sinh nhật, bánh kem của Tr Cake luôn là một trong những lựa chọn hàng đầu, bởi độ ngọt vừa phải, mẫu bánh đẹp, giá thành hợp lý. Bên cạnh đó, đồng hành mỗi ngày của khách hàng là các sản phẩm bánh mì tươi dinh dưỡng, thơm ngon.', 'gioi-thieu.jpg', 'page', 'gioi-thieu', 'Đội ngũ nhân viên, đầu bếp luôn nỗ lực sáng tạo, không ngừng đam mê để có thể đưa ra những sản chất lượng, đẹp mắt và an toàn cho sức khỏe khách hàng. Đi cùng quy trình làm bánh nghiêm ngặt, khép kín, đòi hỏi nhân viên phải cẩn thận, tỉ mỉ và chăm chút tr', '2023-06-28 23:02:04', '2023-06-28 23:02:04', 1, NULL, 1),
(23, 0, 'Chính sách đổi trả', 'chinh-sach-doi-tra', '- Tr Cake chấp nhận đổi/trả, hoàn tiền đối với các sản phẩm bị lỗi, hỏng không thể sử dụng hoặc không đảm bảo vệ sinh an toàn thực phẩm tại thời điểm khách hàng mua hàng tại cửa hàng.\n- Những sản phẩm không nằm trong trường hợp trên, Tr Cake không chấp nhận đổi, trả, hoàn tiền sau khi đã xuất hóa đơn và hoàn thành thanh toán.', 'chinh-sach-doi-tra.jpg', 'page', 'Chính sách đổi trả', 'Chính sách đổi trả', '2023-06-28 23:06:43', '2023-06-28 23:06:43', 1, NULL, 1),
(24, 0, 'Chính sách an toàn thực phẩm', 'chinh-sach-an-toan-thuc-pham', 'Giấy chứng nhận an toàn thực phẩm được bộ y tế công nhận là sản phẩm chất lượng tốt vào 2020', 'chinh-sach-an-toan-thuc-pham.jpg', 'page', 'Chính sách an toàn thực phẩm', 'Chính sách an toàn thực phẩm', '2023-06-28 23:34:14', '2023-10-24 05:47:59', 1, NULL, 1),
(25, 0, 'Chính sách vận chuyển', 'chinh-sach-van-chuyen', '- Toàn bộ đơn hàng được áp dụng vận chuyển qua bên đối tác thứ 3, đảm bảo quyền lợi và yêu cầu của khách hàng.\n- Đơn hàng nội thành Hà Nội và TP Hồ Chí Minh: Giao trong ngày kể từ thời điểm chốt đơn hoặc thời gian hẹn trước. \n- Thời gian giao hàng có thể chậm hơn dự kiến vì một số lý do như: Địa chỉ khách hàng không đúng, khách hàng không có ở nhà, nhân viên giao hàng không liên hệ được với khách hàng, thiên tai, hỏa hoạn, ...\n- Trường hợp đã quá số thời gian dự kiến mà khách hàng chưa nhận được hàng, vui lòng phản hồi lại để chúng tôi có biện pháp khắc phục nhanh nhất. Trong thời gian chờ hàng nếu Quý khách muốn thay đổi đơn hàng (Thay đổi sản phẩm, Không muốn nhận hàng nữa,...) mà bên dịch vụ chưa phát khách hàng, vui lòng thông báo lại để chúng tôi giải quyết với bên dịch vụ chuyển phát.\nKhách hàng sẽ được kiểm tra sản phẩm thuộc đơn hàng của mình trước khi hoàn tất nhận hàng từ bên giao hàng.\n- Thương nhân, tổ chức cung ứng dịch vụ vận chuyển có trách nhiệm về chứng từ hàng hóa trong quá trình giao nhận hàng hóa cho Khách hàng.', 'chinh-sach-van.jpg', 'page', 'Chính sách vận', 'ádfdsa', '2023-06-28 23:20:05', '2023-06-28 23:20:05', 1, NULL, 1),
(26, 0, 'Chính sách bảo mật', 'chinh-sach-bao-mat', 'Paris Gâteaux thu thập các thông tin trên website bao gồm: họ tên, email, số điện thoại, địa chỉ. Những thông tin này khách hàng phải cung cấp khi mua hàng nhằm bảo quyền lợi của người tiêu dùng.\r\nMục đích thu thập thông tin cá nhân:\r\n   - Nắm bắt được các nguyện vọng, mong muốn của khách hàng nhằm cải tiến, nâng cao chất lượng dịch vụ. \r\n   - Giúp quý khách hàng cập nhật các chương trình khuyến mại, giảm giá...do Paris Gâteaux tổ chức sớm nhất và nhanh nhất.\r\n   - Hỗ trợ khách hàng khi có khiếu nại, ý kiến một cách nhanh nhất.', 'chinh-sach-bao-mat.jpg', 'page', 'Chính sách bảo mật', 'Chính sách bảo mật', '2023-06-28 23:23:08', '2023-06-28 23:23:08', 1, NULL, 1),
(27, 1, 'GATEAUX MOUSSE - MANG CẢ THẾ GIỚI TRONG MIỆNG BẠN', 'gateaux-mousse-mang-ca-the-gioi-trong-mieng-ban', 'Mùa hè là phải ăn Mousse. Đúng vậy đó ạ - Những ngày thời tiết bước vào đợt nắng nóng như này thì một chiếc bánh Mousse mát lạnh sẽ giúp bạn xua tan đi cái oi ả ngày hè.&nb...', 'gateaux-mousse-mang-ca-the-gioi-trong-mieng-ban.jpg', 'post', 'GATEAUX MOUSSE', 'GATEAUX MOUSSE', '2023-06-29 11:01:08', '2023-06-29 11:01:08', 1, NULL, 2),
(30, 1, 'BÁNH KEM NGON - VỊ MATCHA', 'banh-kem-ngon-vi-matcha', '- Toàn bộ đơn hàng được áp dụng vận chuyển qua bên đối tác thứ 3, đảm bảo quyền lợi và yêu cầu của khách hàng.\n- Đơn hàng nội thành Hà Nội và TP Hồ Chí Minh: Giao trong ngày kể từ thời điểm chốt đơn hoặc thời gian hẹn trước. \n- Thời gian giao hàng có thể chậm hơn dự kiến vì một số lý do như: Địa chỉ khách hàng không đúng, khách hàng không có ở nhà, nhân viên giao hàng không liên hệ được với khách hàng, thiên tai, hỏa hoạn, ...\n- Trường hợp đã quá số thời gian dự kiến mà khách hàng chưa nhận được hàng, vui lòng phản hồi lại để chúng tôi có biện pháp khắc phục nhanh nhất. Trong thời gian chờ hàng nếu Quý khách muốn thay đổi đơn hàng (Thay đổi sản phẩm, Không muốn nhận hàng nữa,...) mà bên dịch vụ chưa phát khách hàng, vui lòng thông báo lại để chúng tôi giải quyết với bên dịch vụ chuyển phát.\nKhách hàng sẽ được kiểm tra sản phẩm thuộc đơn hàng của mình trước khi hoàn tất nhận hàng từ bên giao hàng.\n- Thương nhân, tổ chức cung ứng dịch vụ vận chuyển có trách nhiệm về chứng từ hàng hóa trong quá trình giao nhận hàng hóa cho Khách hàng.', 'banh-kem-ngon-vi-matcha.jpg', 'post', 'banh-kem-ngon-vi-matcha', 'banh-kem-ngon-vi-matcha', '2023-10-06 17:00:00', '2023-10-06 17:00:00', 1, NULL, 1),
(31, 9, 'asdasd', 'asdasd', 'asdasdasda', 'asdasd.jpg', 'post', 'asdasd', 'asdasd', '2023-10-23 20:17:00', '2023-10-24 03:30:46', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` double(8,2) NOT NULL,
  `price_sale` double(8,2) DEFAULT NULL,
  `sale` tinyint(3) DEFAULT NULL,
  `image` varchar(1000) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `detail` mediumtext NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `price_sale`, `sale`, `image`, `qty`, `detail`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 1, 'Bánh kem trái cây', 'banh-kem-trai-cay', 150.00, 0.00, 0, 'banh-kem-trai-cay.jpg', 10, 'banh-kem-trai-cay', 'banh-kem-trai-cay', 'banh-kem-trai-cay', '2023-09-30 02:01:41', '2023-09-30 02:01:41', 1, NULL, 1),
(3, 1, 1, 'Bánh kem socola', 'banh-bong-lan-cuon', 200.00, 0.00, 0, 'banh-kem-socola.jpg', 10, 'Thành phần từ bột gạo, đường...', 'banh-bong-lan-cuon', 'Thành phần từ bột gạo, đường...', '2023-09-30 02:09:22', '2023-09-30 02:09:22', 1, NULL, 1),
(4, 4, 3, 'Bánh su kem', 'banh-su-kem', 30.00, 0.00, 0, 'banh-su-kem.jpg', 10, 'Lớp vỏ mềm mỏng và thơm phức đến vị kem béo ngậy và ngọt mát', 'Bánh su kem', 'Bánh su kem', '2023-09-30 02:12:01', '2023-09-30 02:12:01', 1, NULL, 1),
(5, 4, 3, 'Bánh Cupcake Dâu', 'banh-cupcake-dau', 100.00, 0.00, 0, 'banh-cupcake-dau.jpg', 10, 'Bánh Cupcake Dâu', 'Bánh Cupcake Dâu', 'Bánh Cupcake Dâu', '2023-09-30 02:12:01', '2023-09-30 02:12:01', 1, NULL, 1),
(6, 2, 1, 'Bánh Bông Lan Kem Tươi', 'banh-bong-lan-kem-tuoi', 34.00, 0.00, 0, 'banh-bong-lan-kem-tuoi.jpg', 10, 'Bánh Bông Lan Kem Tươi', 'Bánh Bông Lan Kem Tươi', 'Bánh Bông Lan Kem Tươi', '2023-10-24 20:03:48', '2023-10-24 20:03:48', 1, NULL, 1),
(7, 2, 1, 'Bánh bông lan trứng muối', 'banh-bong-lan-trung-muoi', 50.00, 0.00, 0, 'banh-bong-lan-trung-muoi.jpg', 10, 'Bánh bông lan được rất nhiều người yêu thích bởi độ bông mềm, xốp mịn của nó. Hương vị bánh thơm ngon, tan ngay trên đầu lưỡi ngay cả trẻ em và người lớn tuổi đều có thể thưởng thức', 'Bánh bông lan trứng muối', 'Bánh bông lan trứng muối', '2023-11-05 03:10:28', '2023-11-05 03:10:28', 1, NULL, 1),
(21, 4, 2, 'Bánh Gato', 'banh-gato', 50.00, 0.00, 0, 'banh-gato.jpg', 10, 'Gato hạnh nhân, nhân kem tươi', 'Bánh Gato', 'Với thành phần chủ đạo từ socola hòa quyện cùng kem gato, kem tươi, ..', '2023-06-10 22:59:52', '2023-06-10 22:59:52', 1, NULL, 1),
(22, 4, 1, 'Bánh Donut', 'banh-donut', 50.00, 0.00, 0, 'banh-donut.jpg', 10, 'Bánh Donut', 'Bánh Donut', 'Bánh Donut', '2023-06-18 10:46:04', '2023-06-18 10:46:04', 1, NULL, 1),
(23, 3, 4, 'Bánh gối Sandwich', 'banh-goi-sandwich', 15.00, 0.00, 0, 'banh-goi-sandwich.jpg', 10, 'Bánh gối Sandwich', 'Bánh gối Sandwich', 'Bánh gối Sandwich', '2023-11-13 02:24:32', '2023-11-13 02:24:32', 1, NULL, 1),
(24, 3, 3, 'Bánh Mì Ngọt', 'banh-mi-ngot', 5.00, 0.00, 0, 'banh-mi-ngot.jpg', 10, 'Bánh mì được làm từ bột gạo, đường...', 'Bánh Mì Ngọt', 'Bánh mì là món ăn phụ tiện lợi', '2023-06-10 23:09:42', '2023-06-10 23:09:42', 1, NULL, 1),
(25, 3, 4, 'Bánh mỳ Croissant Socola', 'banh-my-croissant-socola', 30.00, NULL, 1, 'banh-my-croissant-socola.jpg', 10, 'Với thành phần hỗn hợp bột Đan Mạch cao cấp.', 'Bánh mỳ Croissant Socola', 'Với thành phần hỗn hợp bột Đan Mạch cao cấp.', '2023-06-10 23:11:47', '2023-06-10 23:11:47', 1, NULL, 1),
(26, 3, 3, 'Bánh mỳ kem tươi nguyên vị', 'banh-my-kem-tuoi-nguyen-vi', 20.00, NULL, 1, 'banh-my-kem-tuoi-nguyen-vi.jpg', 10, 'Thành phần là hỗn hợp bột kiểu Nhật, nhân kem tươi nhập khẩu.', 'Bánh mỳ kem tươi nguyên vị', 'Thành phần là hỗn hợp bột kiểu Nhật, nhân kem tươi nhập khẩu.', '2023-06-10 23:13:58', '2023-06-10 23:13:58', 1, NULL, 1),
(28, 1, 1, 'Bánh bông lan chà bông', 'banh-bong-lan-cha-bong', 25.00, NULL, 1, 'banh-bong-lan-cha-bong.jpg', 10, 'Thành phần từ hỗn hợp đơn giản.', 'Bánh bông lan chà bông', 'Thành phần từ hỗn hợp đơn giản.', '2023-06-10 23:22:14', '2023-06-10 23:22:14', 1, NULL, 1),
(29, 4, 3, 'GREEN TEA CAKE CHỮ NHẬT', 'green-tea-cake-chu-nhat', 100.00, NULL, 1, 'green-tea-cake-chu-nhat.jpg', 10, 'Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi. Bên ngoài bánh phủ 1 lớp kem tươi vị trà xanh và bột trà xanh rắc phía trên.', 'GREEN TEA CAKE CHỮ NHẬT', 'Hương vị: Gato, kem tươi, trà xanh', '2023-06-14 23:20:08', '2023-06-14 23:20:08', 1, NULL, 1),
(36, 3, 3, 'bbbb', 'bbbb', 14000.00, NULL, NULL, 'aaa.jpg', 14, 'bbbb', 'bbbb', 'bbbb', '2023-10-23 23:45:00', '2023-10-24 03:29:38', 1, NULL, 0),
(39, 2, 1, 'Bánh bông lan cuộn', 'banh-bong-lan-cuon', 15.00, NULL, NULL, 'banh-bong-lan-cuon.jpg', 20, 'Bánh ngon ngon ngon', 'Bánh bông lan cuộn', 'Bánh bông lan cuộn', '2023-11-04 20:48:54', '2023-11-04 20:48:54', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_productsale`
--

CREATE TABLE `db_productsale` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price_sale` double NOT NULL,
  `qty` int(11) NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) NOT NULL DEFAULT 1,
  `updated_by` int(10) DEFAULT NULL,
  `status` tinyint(3) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_productsale`
--

INSERT INTO `db_productsale` (`id`, `product_id`, `price_sale`, `qty`, `date_begin`, `date_end`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 25, 20, 10, '2023-10-12 00:00:00', '2023-11-10 00:00:00', '2023-10-12 02:25:21', '2023-11-04 23:31:52', 1, NULL, 2),
(2, 26, 15, 10, '2023-10-12 00:00:00', '2023-10-31 00:00:00', '2023-10-12 02:25:21', '2023-10-29 22:10:42', 1, NULL, 2),
(3, 28, 20, 10, '2023-10-12 09:27:30', '2023-10-26 09:27:30', '2023-10-12 02:27:30', '2023-10-12 02:27:30', 1, NULL, 1),
(4, 29, 90, 10, '2023-10-12 09:27:30', '2023-10-27 09:27:30', '2023-10-12 02:27:30', '2023-10-12 02:27:30', 1, NULL, 1),
(6, 1, 5, 5, '2023-11-10 00:00:00', '2023-11-15 00:00:00', '2023-11-14 22:10:18', '2023-11-14 22:10:18', 1, NULL, 1),
(10, 3, 5, 5, '2023-11-10 00:00:00', '2023-11-15 00:00:00', '2023-11-14 22:19:28', '2023-11-14 22:19:28', 1, NULL, 1),
(11, 4, 6, 5, '2023-11-11 00:00:00', '2023-11-20 00:00:00', '2023-11-14 22:19:28', '2023-11-14 22:19:28', 1, NULL, 2),
(12, 23, 6, 5, '2023-11-15 00:00:00', '2023-11-17 00:00:00', '2023-11-14 23:20:55', '2023-11-14 23:20:55', 1, NULL, 1),
(13, 39, 8, 5, '2023-11-16 00:00:00', '2023-11-01 00:00:00', '2023-11-14 23:30:26', '2023-11-14 23:30:26', 1, NULL, 1),
(14, 3, 9, 6, '2023-11-16 00:00:00', '2023-11-13 00:00:00', '2023-11-14 23:39:51', '2023-11-15 19:43:44', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_productstore`
--

CREATE TABLE `db_productstore` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_productstore`
--

INSERT INTO `db_productstore` (`id`, `product_id`, `price`, `qty`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 5, 5, '2023-11-16 03:48:00', '2023-11-16 03:48:00', 1, NULL, 2),
(2, 4, 30, 10, '2023-11-15 21:41:21', '2023-11-15 22:00:14', 1, NULL, 0),
(3, 3, 6, 9, '2023-11-15 21:44:47', '2023-11-15 21:44:47', 1, NULL, 1),
(5, 23, 15, 10, '2023-11-15 21:45:42', '2023-11-15 21:58:03', 1, NULL, 0),
(6, 29, 100, 10, '2023-11-15 21:47:04', '2023-11-15 21:56:36', 1, NULL, 0),
(7, 5, 100, 10, '2023-11-15 22:01:09', '2023-11-15 22:01:09', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_ratings`
--

CREATE TABLE `db_ratings` (
  `id` int(11) NOT NULL,
  `user_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `number_rating` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_slider`
--

CREATE TABLE `db_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `link` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_slider`
--

INSERT INTO `db_slider` (`id`, `name`, `description`, `sub_title`, `link`, `image`, `sort_order`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Bánh ngọt vị dâu', 'giá chỉ từ 15.000 đ', 'Best Seller', '#', 'banner-1.jpg', 1, 'slider_main', '2023-09-28 11:46:42', '2023-09-28 11:46:42', 1, NULL, 1),
(2, 'Khuyến mãi bánh mới', ' giá chỉ từ 20.000 đ', 'Trending', '#', 'banner-2.jpg', 2, 'slider_main', '2023-09-28 11:55:18', '2023-09-28 11:55:18', 1, NULL, 1),
(3, 'Khuyến mãi từ 5 sản phẩm trở lên', 'giá chỉ từ 29.000 đ', NULL, '#', 'banner-3.jpg', 3, 'slider_main', '2023-10-24 07:50:43', '2023-10-24 07:50:43', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL,
  `sort_order` int(10) UNSIGNED DEFAULT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `parent_id`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Bánh mới tháng 10', 'banh-moi-thang-10', 0, NULL, 'banh-moi', 'banh-moi', '2023-09-30 06:19:47', '2023-09-30 06:19:47', 1, NULL, 1),
(2, 'Bánh ngọt mùa lễ hội', 'banh-ngot-mua-le-hoi', 0, NULL, 'banh-le', 'banh-le', '2023-09-29 23:24:36', '2023-09-29 23:24:36', 1, NULL, 1),
(6, 'hello', 'hello', 0, NULL, 'hello', 'aaa', '2023-10-22 22:07:02', '2023-10-22 22:11:05', 1, NULL, 2),
(9, 'asdsadas', 'asdsadas', 0, NULL, 'asdsadas', 'asdsad', '2023-10-22 22:10:54', '2023-10-22 22:45:45', 1, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `db_user`
--

CREATE TABLE `db_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `email`, `phone`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(4, 'xin chao', 'dd@gmail.com', '1111', 'qwdqd', '123', 'daad', 'hello.jpg', 'customer', '2023-10-24 18:16:35', '2023-10-24 18:16:35', 1, NULL, 1),
(5, 'NhutTruong', 'nt@gmail.com', '0123456789', 'nhuttruong', '123', 'aaa', 'NhutTruong.jpg', 'admin', '2023-10-24 18:49:39', '2023-10-24 19:03:49', 1, NULL, 1),
(6, 'hello', 'abcd@gmail.com', '012312121', 'abcd', '123', 'asdsa', 'fvcxvs.jpg', 'admin', '2023-10-24 18:55:53', '2023-10-24 18:55:53', 1, NULL, 1),
(7, 'Tường Nhii', 'nhii@gmail.com', '0312321323', NULL, '123', NULL, 'avt.jpg', 'customer', '2023-11-06 21:46:31', '2023-11-06 21:46:31', 1, NULL, 1),
(8, 'Nhựt Trường', 'truong05@gmail.com', '0123123321', NULL, '123', NULL, 'avt.jpg', 'customer', '2023-11-12 22:24:05', '2023-11-12 22:24:05', 1, NULL, 1),
(9, 'Nhựt Trường', 'truong@gmail.com', '0123455666', 'nhuttruong', '123', 'Thành phố HCM', 'Nhựt Trường.jpg', 'customer', '2023-11-13 06:28:37', '2023-11-13 06:28:37', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2023_09_21_103146_create_brand_table', 1),
(3, '2023_09_21_103207_create_category_table', 1),
(4, '2023_09_21_103221_create_contact_table', 1),
(5, '2023_09_21_103229_create_menu_table', 1),
(6, '2023_09_21_103238_create_order_table', 1),
(7, '2023_09_21_103247_create_orderdetail_table', 1),
(8, '2023_09_21_103306_create_product_table', 1),
(9, '2023_09_21_103315_create_post_table', 1),
(10, '2023_09_21_103349_create_slider_table', 1),
(11, '2023_09_21_103357_create_topic_table', 1),
(12, '2023_09_21_103406_create_user_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_productstore`
--
ALTER TABLE `db_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_ratings`
--
ALTER TABLE `db_ratings`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_slider`
--
ALTER TABLE `db_slider`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `db_config`
--
ALTER TABLE `db_config`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT cho bảng `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `db_productsale`
--
ALTER TABLE `db_productsale`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `db_productstore`
--
ALTER TABLE `db_productstore`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `db_ratings`
--
ALTER TABLE `db_ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `db_slider`
--
ALTER TABLE `db_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
