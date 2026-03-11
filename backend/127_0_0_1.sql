-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Nov 04. 12:05
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `jatek2025`
--
CREATE DATABASE IF NOT EXISTS `jatek2025` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `jatek2025`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatek`
--

CREATE TABLE `jatek` (
  `jatek_id` int(11) NOT NULL,
  `jatek_nev` varchar(255) NOT NULL,
  `jatek_ertekeles` float NOT NULL,
  `jatek_ar` int(11) NOT NULL,
  `jatek_leiras` text NOT NULL,
  `jatek_tipus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatek`
--

INSERT INTO `jatek` (`jatek_id`, `jatek_nev`, `jatek_ertekeles`, `jatek_ar`, `jatek_leiras`, `jatek_tipus`) VALUES
(1, 'Minecraft', 9, 14000, 'A Minecraft nyílt világú sandbox videójáték, melyet a svéd Markus Persson programozó indított útjára 2009-ben,[24] és a Mojang adott ki 2011-ben.[25] 2014-ben a Microsoft felvásárolta a játék fejlesztésével és kiadásával foglalkozó céget, ezzel együtt birtokukba került a Minecraft tulajdonjoga is.[26][27] A Minecraft minden idők legkelendőbb játéka.[28] 2023 októberére 300 millió példányt adtak el belőle valamennyi platformon, továbbá havi szinten 126 millió aktív játékossal rendelkezik.[29]', 1),
(2, 'Valorant', 8, 0, 'A VALORANT egy karakteralapú, öt az öt elleni taktikai lövöldözős játék, amely a globális színtéren játszódik. Járj túl az ellenfeleid eszén, és győzd le őket .', 1),
(3, 'Clash Royale', 10, 0, 'A Clash Royale egy tower rush alapú videójáték, amely két vagy négy játékos (1v1 vagy 2v2) által játszott meccsekből áll, melyek célja, hogy az ellenfél minél több tornyát leromboljuk (a \"King Tower\" (a \"Király Tornya\") elpusztításával azonnal nyerhetünk). Minden torony ledöntéséért egy-egy koronát kapunk. Három perc után ha mindkét játékosnak/csapatnak ugyanannyi koronája van, a meccs folytatódik egy két perces overtime-mal, ahol az a játékos/csapat, amely először dönti le az ellenfél egyik tornyát, azonnal nyer. Ha egy tornyot se döntenek le a játékosok/csapatok az overtime alatt, akkor a legalacsonyabb élettel rendelkező torony tulajdonosa(i) veszít(enek). Ha két bármely toronynak megegyezik az életereje, akkor a meccs döntetlennel végződik és semelyik játékos/csapat sem kap nyereményt. ', 2),
(4, 'Just Dance', 5, 0, 'Táncolj!', 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tipus`
--

CREATE TABLE `tipus` (
  `tipus_id` int(11) NOT NULL,
  `tipus_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tipus`
--

INSERT INTO `tipus` (`tipus_id`, `tipus_nev`) VALUES
(1, 'asztali játék'),
(2, 'mobil játék'),
(3, 'xbox játék');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `jatek`
--
ALTER TABLE `jatek`
  ADD PRIMARY KEY (`jatek_id`),
  ADD KEY `jatek_tipus` (`jatek_tipus`);

--
-- A tábla indexei `tipus`
--
ALTER TABLE `tipus`
  ADD PRIMARY KEY (`tipus_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `jatek`
--
ALTER TABLE `jatek`
  MODIFY `jatek_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `tipus`
--
ALTER TABLE `tipus`
  MODIFY `tipus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jatek`
--
ALTER TABLE `jatek`
  ADD CONSTRAINT `jatek_ibfk_1` FOREIGN KEY (`jatek_tipus`) REFERENCES `tipus` (`tipus_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
