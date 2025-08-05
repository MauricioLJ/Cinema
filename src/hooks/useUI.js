// hooks/useUI.js
import { useState, useRef } from 'react';

/**
 * Hook personalizado para manejar estados de UI y navegación
 * @returns {Object} - Objeto con estados y funciones de UI
 */
export const useUI = () => {
  // Estados de vista y navegación
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [vistaTarjetas, setVistaTarjetas] = useState(true);
  
  // Estados de filtros y búsqueda
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [filtrosVisible, setFiltrosVisible] = useState(false);
  
  // Estados de configuración
  const [configuracionVisible, setConfiguracionVisible] = useState(false);
  
  // Referencias
  const searchInputRef = useRef(null);
  const skipLinkRef = useRef(null);

  // Funciones de navegación
  const verDetallesPelicula = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  const volverACartelera = () => {
    setPeliculaSeleccionada(null);
  };

  // Funciones de filtros
  const limpiarFiltros = () => {
    setTerminoBusqueda('');
    setCategoriaActiva('todas');
    searchInputRef.current?.focus();
  };

  const cambiarCategoria = (categoria) => {
    setCategoriaActiva(categoria);
  };

  // Funciones de vista
  const toggleVista = () => {
    setVistaTarjetas(!vistaTarjetas);
  };

  // Funciones de configuración
  const toggleConfiguracion = () => {
    setConfiguracionVisible(!configuracionVisible);
  };

  const cerrarConfiguracion = () => {
    setConfiguracionVisible(false);
  };

  // Función para manejar el foco en elementos de accesibilidad
  const enfocarBusqueda = () => {
    searchInputRef.current?.focus();
  };

  const enfocarSkipLink = () => {
    skipLinkRef.current?.focus();
  };

  return {
    // Estados de vista
    peliculaSeleccionada,
    vistaTarjetas,
    
    // Estados de filtros
    categoriaActiva,
    terminoBusqueda,
    filtrosVisible,
    
    // Estados de configuración
    configuracionVisible,
    
    // Referencias
    searchInputRef,
    skipLinkRef,
    
    // Setters directos (para casos simples)
    setPeliculaSeleccionada,
    setVistaTarjetas,
    setCategoriaActiva,
    setTerminoBusqueda,
    setFiltrosVisible,
    setConfiguracionVisible,
    
    // Funciones de navegación
    verDetallesPelicula,
    volverACartelera,
    
    // Funciones de filtros
    limpiarFiltros,
    cambiarCategoria,
    
    // Funciones de vista
    toggleVista,
    
    // Funciones de configuración
    toggleConfiguracion,
    cerrarConfiguracion,
    
    // Funciones de accesibilidad
    enfocarBusqueda,
    enfocarSkipLink
  };
};