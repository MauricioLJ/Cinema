// utils/movieUtils.js
import { CATEGORIAS } from '../data/movies';

/**
 * Obtiene las clases CSS de color para una categoría específica
 * @param {string} categoria - El ID de la categoría
 * @returns {string} - Las clases CSS correspondientes
 */
export const getCategoriaColorClasses = (categoria) => {
  const categoriaInfo = CATEGORIAS.find(c => c.id === categoria);
  if (!categoriaInfo) return 'bg-blue-100 text-blue-800 border-blue-200';

  const colorMap = {
    'bg-slate-600': 'bg-slate-100 text-slate-800 border-slate-200',
    'bg-purple-600': 'bg-purple-100 text-purple-800 border-purple-200',
    'bg-orange-600': 'bg-orange-100 text-orange-800 border-orange-200',
    'bg-emerald-600': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'bg-pink-600': 'bg-pink-100 text-pink-800 border-pink-200',
    'bg-red-600': 'bg-red-100 text-red-800 border-red-200'
  };

  const baseColor = categoriaInfo.colorClase.split(' ')[0];
  return colorMap[baseColor] || 'bg-blue-100 text-blue-800 border-blue-200';
};

/**
 * Filtra películas basado en término de búsqueda y categoría
 * @param {Array} peliculas - Array de películas
 * @param {string} terminoBusqueda - Término de búsqueda
 * @param {string} categoriaActiva - Categoría activa
 * @returns {Array} - Películas filtradas
 */
export const filtrarPeliculas = (peliculas, terminoBusqueda, categoriaActiva) => {
  return peliculas.filter(pelicula => {
    const coincideBusqueda = pelicula.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      pelicula.genero.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      pelicula.director.toLowerCase().includes(terminoBusqueda.toLowerCase());

    const coincideCategoria = categoriaActiva === 'todas' ||
      pelicula.categorias.includes(categoriaActiva);

    return coincideBusqueda && coincideCategoria;
  });
};

/**
 * Guarda la configuración de accesibilidad
 * @param {Object} configuracion - Objeto con la configuración
 */
export const guardarConfiguracionAccesibilidad = (configuracion) => {
  console.log('Configuración guardada:', configuracion);
  // Aquí podrías implementar el guardado en localStorage o en una API
  // localStorage.setItem('configAccesibilidad', JSON.stringify(configuracion));
};