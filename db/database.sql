CREATE DATABASE IF NOT EXISTS rumbodb;
USE rumbodb;
CREATE TABLE `despachador` (
  `id_login` int(52) NOT NULL,
  `identificacion` int(52) DEFAULT NULL,
  `nombre` varchar(52) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contrasena` int(11) DEFAULT NULL,
  `usuario` varchar(20) DEFAULT NULL,
  `fecha_de_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `despachador` (`id_login`, `identificacion`, `nombre`, `email`, `contrasena`, `usuario`, `fecha_de_creacion`) VALUES
(1, 3456789, 'adriana', 'adriana@gmail.com', 1234, 'adripa', '2023-08-30 05:02:33'),
(2, 1234560, 'ronald', 'ronald@gmail.com', 1234, 'rodare', '2023-08-30 05:02:33'),
(3, 102457852, 'pedro', 'pedro@gmail.com', 1234, 'pedrito', '2023-08-30 05:02:33'),
(4, 2077856432, 'juan', 'juan@gmail.com', 1234, 'juanito', '2023-08-30 05:02:33'),
(5, 10556734, 'lucas', 'lucas@gmail.com', 1234, 'luko', '2023-08-30 05:02:33');
