CREATE DATABASE IF NOT EXISTS rumbodb;
USE rumbodb;
CREATE TABLE despachadores (
   id_login INT AUTO_INCREMENT PRIMARY KEY, 
  identificacion int(52) NOT NULL,
  nombre varchar(52) NOT NULL ,
  email varchar(30) NOT NULL ,
  contrasena int(11) NOT NULL ,
  usuario varchar(20) NOT NULL ,
  fecha_de_creacion timestamp NOT NULL 
);

INSERT INTO `despachadores` (`identificacion`, `nombre`, `email`, `contrasena`, `usuario`, `fecha_de_creacion`) VALUES
(3456789, 'adriana', 'adriana@gmail.com', 1234, 'adripa', '2023-08-30 05:02:33'),
(1234560, 'ronald', 'ronald@gmail.com', 1234, 'rodare', '2023-08-30 05:02:33'),
(102457852, 'pedro', 'pedro@gmail.com', 1234, 'pedrito', '2023-08-30 05:02:33'),
(2077856432, 'juan', 'juan@gmail.com', 1234, 'juanito', '2023-08-30 05:02:33'),
(10556734, 'lucas', 'lucas@gmail.com', 1234, 'luko', '2023-08-30 05:02:33');


CREATE TABLE conductores (
  id_conductores int(11) AUTO_INCREMENT PRIMARY KEY,
  identificacion int(20) NOT NULL,
  placa_vehiculo varchar(11) NOT NULL,
  nombre varchar(52) NOT NULL,
  apellido varchar(52) NOT NULL,
  vehiculo_asociado varchar(30) NOT NULL,
  empresa varchar(30) NOT NULL,
  fecha_de_ingreso timestamp NOT NULL 
); 
--
-- Volcado de datos para la tabla `conductores`
--

INSERT INTO `conductores` (`identificacion`, `placa_vehiculo`, `nombre`, `apellido`, `vehiculo_asociado`, `empresa`, `fecha_de_ingreso`) VALUES
(2077856432, 'jhm234', 'ronald', 'cardona', 'camioneta', 'cootransgar', '2023-08-30 06:00:22'),
(1077645345, 'gfr243', 'pedro', 'alvarez', 'bus', 'coomotor', '2023-08-30 06:00:39'),
(12345765, 'fju234', 'lucas', 'cardozo', 'bus', 'transyari', '2023-08-30 06:00:58'),
(10556734, 'tur678', 'igenio', 'vargas', 'camioneta', 'transyari', '2023-08-30 06:01:19');

CREATE TABLE despachos (
  id_despacho  int(11) AUTO_INCREMENT PRIMARY KEY,
  hora_salida time NOT NULL,
  ruta varchar(20) NOT NULL,
  origen varchar(20) NOT NULL,
  destino varchar(20) NOT NULL,
  fk_id_conductor int(11) NOT NULL,
  fk_id_despachador int(11) NOT NULL,
  fecha_hora_de_creacion timestamp NOT NULL 
);

--
-- Volcado de datos para la tabla `despacho`
--

INSERT INTO `despachos` (`hora_salida`, `ruta`, `origen`, `destino`, `fk_id_conductor`, `fk_id_despachador`, `fecha_hora_de_creacion`) VALUES
('02:00:32', 'jamundi', 'garzon', 'zuluaga', 5, 1, '2023-08-30 01:04:21'),
('01:17:04', 'garzon-la jagua', 'garzon', 'la jagua', 7, 4, '2023-08-30 01:04:46'),
('04:00:00', 'suburbana', 'barrio  centro', 'barrio 20 de julio', 7, 2, '2023-08-30 01:05:35');


CREATE TABLE users (
  id_user int(11) AUTO_INCREMENT PRIMARY KEY,
  username varchar(25) NOT NULL,
  second_name varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  celular varchar(25) NOT NULL,
  fk_id_conductores int(11) NOT NULL,
  clase_pqrs varchar(50) NOT NULL,
  comentario text NOT NULL,
  fecha_pqrs timestamp NOT NULL
);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`username`, `second_name`, `email`, `celular`, `fk_id_conductores`, `clase_pqrs`, `comentario`, `fecha_pqrs`) VALUES
('gustavo', 'aldarriaga', 'aldo@gmail.com', '3145678765', 5, 'reclamo', 'mal servicio', '2023-08-30 06:02:49'),
('leopoldo', 'sespedes', 'leopoldo@gmail.com', '3145678767', 6, 'felicitacion', 'muy buen servicio', '2023-08-30 06:03:45');
