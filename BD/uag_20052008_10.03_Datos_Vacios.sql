-- phpMyAdmin SQL Dump
-- version 2.10.1
-- http://www.phpmyadmin.net
-- 
-- Servidor: localhost
-- Tiempo de generación: 20-05-2008 a las 10:03:36
-- Versión del servidor: 5.0.45
-- Versión de PHP: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Base de datos: `uag`
-- 

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `alumnos`
-- 

CREATE TABLE `alumnos` (
  `matricula` varchar(20) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `mail` varchar(30) default NULL,
  `telefono` varchar(30) default NULL,
  `observacion` text,
  `idPlanEscuela` int(11) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY  (`matricula`),
  KEY `idPlanEscuela` (`idPlanEscuela`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `catalogotramites`
-- 

CREATE TABLE `catalogotramites` (
  `id` int(11) NOT NULL auto_increment,
  `descripcion` text NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `catalogotramitesdeptos`
-- 

CREATE TABLE `catalogotramitesdeptos` (
  `idCatalogoTramite` int(11) NOT NULL,
  `idDepto` int(11) NOT NULL,
  KEY `idCatalogoTramite` (`idCatalogoTramite`),
  KEY `idDepto` (`idDepto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `departamento`
-- 

CREATE TABLE `departamento` (
  `id` int(11) NOT NULL auto_increment,
  `nombre` varchar(30) NOT NULL,
  `nivel` smallint(6) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- 
-- Volcar la base de datos para la tabla `departamento`
-- 

INSERT INTO `departamento` (`id`, `nombre`, `nivel`) VALUES 
(1, 'NOMBRE-DEPARTAMENTO', 2);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `escuelas`
-- 

CREATE TABLE `escuelas` (
  `id` int(11) NOT NULL auto_increment,
  `nombre` varchar(60) NOT NULL,
  `idResponsable` int(11) NOT NULL,
  `idRevisor` int(11) NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `idResponsable` (`idResponsable`),
  KEY `idRevisor` (`idRevisor`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `infotramites`
-- 

CREATE TABLE `infotramites` (
  `id` int(11) NOT NULL auto_increment,
  `folioTramite` int(11) NOT NULL,
  `idDepto` int(11) NOT NULL,
  `fechaEntrada` date default NULL,
  `fechaSalida` date default NULL,
  `idRecibio` int(11) default NULL,
  `idEntrego` int(11) default NULL,
  `infoEstado` text,
  PRIMARY KEY  (`id`),
  KEY `folioTramite` (`folioTramite`),
  KEY `idDepto` (`idDepto`),
  KEY `idRecibio` (`idRecibio`),
  KEY `idEntrego` (`idEntrego`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `personal`
-- 

CREATE TABLE `personal` (
  `id` int(11) NOT NULL auto_increment,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- 
-- Volcar la base de datos para la tabla `personal`
-- 

INSERT INTO `personal` (`id`, `nombres`, `apellidos`, `password`) VALUES 
(2, 'NOMBRE-PERSONAL', 'APELLIDOS-PERSONAL', '123456');

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `personaldepto`
-- 

CREATE TABLE `personaldepto` (
  `idDepto` int(11) NOT NULL,
  `idPersonal` int(11) NOT NULL,
  KEY `idDepto` (`idDepto`),
  KEY `idPersonal` (`idPersonal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 
-- Volcar la base de datos para la tabla `personaldepto`
-- 

INSERT INTO `personaldepto` (`idDepto`, `idPersonal`) VALUES 
(1, 2);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `planescuelas`
-- 

CREATE TABLE `planescuelas` (
  `id` int(11) NOT NULL auto_increment,
  `idEscuela` int(11) NOT NULL,
  `planCarrera` text NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `idEscuela` (`idEscuela`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `responsabilidaddepto`
-- 

CREATE TABLE `responsabilidaddepto` (
  `idDepto` int(11) NOT NULL,
  `responsabilidad` text NOT NULL,
  KEY `idDepto` (`idDepto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `tramites`
-- 

CREATE TABLE `tramites` (
  `folio` int(11) NOT NULL,
  `idCatalogoTramite` int(11) NOT NULL,
  `matriculaAlumno` varchar(20) NOT NULL,
  `folioCertificado` varchar(20) default NULL,
  `folioRegistro` varchar(20) default NULL,
  `quienTramita` varchar(30) default NULL,
  `fInicio` date default NULL,
  `fFin` date default NULL,
  PRIMARY KEY  (`folio`),
  KEY `idCatalogoTramite` (`idCatalogoTramite`),
  KEY `matriculaAlumno` (`matriculaAlumno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 
-- Filtros para las tablas descargadas (dump)
-- 

-- 
-- Filtros para la tabla `alumnos`
-- 
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`idPlanEscuela`) REFERENCES `planescuelas` (`id`);

-- 
-- Filtros para la tabla `catalogotramitesdeptos`
-- 
ALTER TABLE `catalogotramitesdeptos`
  ADD CONSTRAINT `catalogotramitesdeptos_ibfk_1` FOREIGN KEY (`idCatalogoTramite`) REFERENCES `catalogotramites` (`id`),
  ADD CONSTRAINT `catalogotramitesdeptos_ibfk_2` FOREIGN KEY (`idDepto`) REFERENCES `departamento` (`id`);

-- 
-- Filtros para la tabla `escuelas`
-- 
ALTER TABLE `escuelas`
  ADD CONSTRAINT `escuelas_ibfk_1` FOREIGN KEY (`idResponsable`) REFERENCES `personal` (`id`),
  ADD CONSTRAINT `escuelas_ibfk_2` FOREIGN KEY (`idRevisor`) REFERENCES `personal` (`id`);

-- 
-- Filtros para la tabla `infotramites`
-- 
ALTER TABLE `infotramites`
  ADD CONSTRAINT `infotramites_ibfk_5` FOREIGN KEY (`folioTramite`) REFERENCES `tramites` (`folio`) ON DELETE CASCADE,
  ADD CONSTRAINT `infotramites_ibfk_6` FOREIGN KEY (`idDepto`) REFERENCES `departamento` (`id`),
  ADD CONSTRAINT `infotramites_ibfk_7` FOREIGN KEY (`idRecibio`) REFERENCES `personal` (`id`),
  ADD CONSTRAINT `infotramites_ibfk_8` FOREIGN KEY (`idEntrego`) REFERENCES `personal` (`id`);

-- 
-- Filtros para la tabla `personaldepto`
-- 
ALTER TABLE `personaldepto`
  ADD CONSTRAINT `personaldepto_ibfk_1` FOREIGN KEY (`idDepto`) REFERENCES `departamento` (`id`),
  ADD CONSTRAINT `personaldepto_ibfk_2` FOREIGN KEY (`idPersonal`) REFERENCES `personal` (`id`);

-- 
-- Filtros para la tabla `planescuelas`
-- 
ALTER TABLE `planescuelas`
  ADD CONSTRAINT `planescuelas_ibfk_1` FOREIGN KEY (`idEscuela`) REFERENCES `escuelas` (`id`);

-- 
-- Filtros para la tabla `responsabilidaddepto`
-- 
ALTER TABLE `responsabilidaddepto`
  ADD CONSTRAINT `responsabilidaddepto_ibfk_1` FOREIGN KEY (`idDepto`) REFERENCES `departamento` (`id`);

-- 
-- Filtros para la tabla `tramites`
-- 
ALTER TABLE `tramites`
  ADD CONSTRAINT `tramites_ibfk_1` FOREIGN KEY (`idCatalogoTramite`) REFERENCES `catalogotramites` (`id`),
  ADD CONSTRAINT `tramites_ibfk_2` FOREIGN KEY (`matriculaAlumno`) REFERENCES `alumnos` (`matricula`);
