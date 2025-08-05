// App.jsx - Versión refactorizada con hooks personalizados
import { Accessibility } from 'lucide-react';

// Importar componentes
import ComponenteCarga from './components/ComponenteCarga';
import DetallesPelicula from './components/DetallesPelicula';
import Footer from './components/Footer';
import Header from './components/Header';
import TarjetaListaPelicula from './components/TarjetaListaPelicula';
import TarjetaPelicula from './components/TarjetaPelicula';

// Importar hooks personalizados
import { useAccessibility } from './hooks/useAccesibility';
import { useMovies } from './hooks/useMovies';
import { useUI } from './hooks/useUI';

// Importar utilidades
import { filtrarPeliculas } from './utils/movieUtils';

export default function CinemaInterface() {
  // Hooks personalizados
  const {
    peliculas,
    loading,
    peliculasFavoritas,
    toggleFavorito
  } = useMovies();

  const {
    modoAltoContraste,
    tamanoTexto,
    anunciosActivados,
    setModoAltoContraste,
    setTamanoTexto,
    setAnunciosActivados
  } = useAccessibility();

  const {
    peliculaSeleccionada,
    vistaTarjetas,
    categoriaActiva,
    terminoBusqueda,
    filtrosVisible,
    configuracionVisible,
    searchInputRef,
    skipLinkRef,
    setVistaTarjetas,
    setCategoriaActiva,
    setTerminoBusqueda,
    setFiltrosVisible,
    setConfiguracionVisible,
    verDetallesPelicula,
    volverACartelera,
    limpiarFiltros
  } = useUI();

  // Computar películas filtradas
  const peliculasFiltradas = filtrarPeliculas(peliculas, terminoBusqueda, categoriaActiva);

  // Mostrar loading
  if (loading) {
    return <ComponenteCarga />;
  }

  // Mostrar detalles de película
  if (peliculaSeleccionada) {
    return (
      <DetallesPelicula
        pelicula={peliculaSeleccionada}
        onVolver={volverACartelera}
        modoAltoContraste={modoAltoContraste}
        tamanoTexto={tamanoTexto}
      />
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${modoAltoContraste ? 'bg-white' : 'bg-slate-50'
      }`}>
      {/* Skip Link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        ref={skipLinkRef}
      >
        Saltar al contenido principal
      </a>

      <Header
        modoAltoContraste={modoAltoContraste}
        setModoAltoContraste={setModoAltoContraste}
        tamanoTexto={tamanoTexto}
        setTamanoTexto={setTamanoTexto}
        anunciosActivados={anunciosActivados}
        setAnunciosActivados={setAnunciosActivados}
        vistaTarjetas={vistaTarjetas}
        setVistaTarjetas={setVistaTarjetas}
        configuracionVisible={configuracionVisible}
        setConfiguracionVisible={setConfiguracionVisible}
        terminoBusqueda={terminoBusqueda}
        setTerminoBusqueda={setTerminoBusqueda}
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
        filtrosVisible={filtrosVisible}
        setFiltrosVisible={setFiltrosVisible}
        peliculasFiltradas={peliculasFiltradas}
        searchInputRef={searchInputRef}
      />

      {/* Contenido principal */}
      <main id="main-content" className="container mx-auto px-4 py-8" role="main">
        {/* Anuncio de accesibilidad */}
        {anunciosActivados && (
          <div className="bg-blue-50 border-4 border-blue-200 rounded-xl p-6 mb-8" role="banner" aria-live="polite">
            <div className="flex items-start gap-4">
              <Accessibility className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-blue-900 mb-2">Compromiso con la Accesibilidad</h2>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Todas nuestras salas cuentan con opciones de accesibilidad completas. Si necesitas asistencia especial,
                  nuestro personal está capacitado para ayudarte. Puedes solicitar información adicional en la boletería.
                </p>
              </div>
              <button
                onClick={() => setAnunciosActivados(false)}
                className="text-blue-400 hover:text-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded p-1"
                aria-label="Cerrar anuncio"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Resultados */}
        {peliculasFiltradas.length === 0 ? (
          <div className="text-center py-16" role="status" aria-live="polite">
            <div className="text-8xl mb-6">🎭</div>
            <h2 className={`font-bold text-slate-900 mb-4 ${tamanoTexto === 'grande'
              ? 'text-2xl'
              : tamanoTexto === 'extra-grande'
                ? 'text-3xl'
                : 'text-xl'
              }`}>
              No se encontraron películas
            </h2>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              No hay películas que coincidan con tu búsqueda. Intenta cambiar los filtros o el término de búsqueda.
            </p>
            <button
              onClick={limpiarFiltros}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className={vistaTarjetas
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            : "space-y-6"
          }>
            {peliculasFiltradas.map((pelicula) => (
              vistaTarjetas ? (
                <TarjetaPelicula
                  key={pelicula.id}
                  pelicula={pelicula}
                  modoAltoContraste={modoAltoContraste}
                  tamanoTexto={tamanoTexto}
                  peliculasFavoritas={peliculasFavoritas}
                  toggleFavorito={toggleFavorito}
                  setPeliculaSeleccionada={verDetallesPelicula}
                />
              ) : (
                <TarjetaListaPelicula
                  key={pelicula.id}
                  pelicula={pelicula}
                  modoAltoContraste={modoAltoContraste}
                  setPeliculaSeleccionada={verDetallesPelicula}
                />
              )
            ))}
          </div>
        )}
      </main>

      <Footer
        modoAltoContraste={modoAltoContraste}
        tamanoTexto={tamanoTexto}
      />
    </div>
  );
}