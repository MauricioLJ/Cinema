// hooks/useMovies.js
import { useEffect, useState } from 'react';
import { MOVIES_DATA } from '../data/movies';

/**
 * Hook personalizado para manejar el estado de las películas
 * @returns {Object} - Objeto con peliculas, loading y funciones de manejo
 */
export const useMovies = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [peliculasFavoritas, setPeliculasFavoritas] = useState(new Set());

  useEffect(() => {
    // Simular carga de datos desde API
    const cargarPeliculas = async () => {
      try {
        setLoading(true);
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPeliculas(MOVIES_DATA.peliculas);
      } catch (error) {
        console.error('Error cargando películas:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarPeliculas();
  }, []);

  const toggleFavorito = (id) => {
    setPeliculasFavoritas(prev => {
      const nuevasFavoritas = new Set(prev);
      if (nuevasFavoritas.has(id)) {
        nuevasFavoritas.delete(id);
      } else {
        nuevasFavoritas.add(id);
      }
      return nuevasFavoritas;
    });
  };

  return {
    peliculas,
    loading,
    peliculasFavoritas,
    toggleFavorito,
    setPeliculas
  };
};