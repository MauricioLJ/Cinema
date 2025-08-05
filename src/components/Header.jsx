// components/Header.jsx
import { Grid, List, MapPin, Settings } from 'lucide-react';
import BarraBusqueda from './BarraBusqueda';
import ConfiguracionAccesibilidad from './ConfiguracionAccesibilidad';
import Filtros from './Filtros';

const Header = ({
    modoAltoContraste,
    setModoAltoContraste,
    tamanoTexto,
    setTamanoTexto,
    anunciosActivados,
    setAnunciosActivados,
    vistaTarjetas,
    setVistaTarjetas,
    configuracionVisible,
    setConfiguracionVisible,
    terminoBusqueda,
    setTerminoBusqueda,
    categoriaActiva,
    setCategoriaActiva,
    filtrosVisible,
    setFiltrosVisible,
    peliculasFiltradas,
    searchInputRef
}) => {
    return (
        <header className={`sticky top-0 z-40 shadow-lg backdrop-blur-sm transition-colors duration-300 ${modoAltoContraste
            ? 'bg-black text-white border-b-4 border-white'
            : 'bg-white/95'
            }`}>
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <h1 className={`font-bold flex items-center gap-3 ${modoAltoContraste ? 'text-white' : 'text-slate-900'
                            } ${tamanoTexto === 'grande'
                                ? 'text-3xl'
                                : tamanoTexto === 'extra-grande'
                                    ? 'text-4xl'
                                    : 'text-2xl'
                            }`}>
                            CineAccesible
                        </h1>
                        <div className="hidden md:block">
                            <div className={`flex items-center gap-2 text-sm ${modoAltoContraste ? 'text-slate-200' : 'text-slate-600'
                                }`}>
                                <MapPin className="w-4 h-4" />
                                <span>Centro Comercial Plaza Norte</span>
                            </div>
                        </div>
                    </div>

                    {/* Controles de accesibilidad */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setVistaTarjetas(!vistaTarjetas)}
                            className={`p-3 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${modoAltoContraste
                                ? 'hover:bg-white hover:text-black'
                                : 'hover:bg-slate-100'
                                }`}
                            aria-label={`Cambiar a vista de ${vistaTarjetas ? 'lista' : 'tarjetas'}`}
                        >
                            {vistaTarjetas ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setConfiguracionVisible(!configuracionVisible)}
                                className={`p-3 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${modoAltoContraste
                                    ? 'hover:bg-white hover:text-black'
                                    : 'hover:bg-slate-100'
                                    }`}
                                aria-label="Configuración de accesibilidad"
                                aria-expanded={configuracionVisible}
                            >
                                <Settings className="w-5 h-5" />
                            </button>

                            <ConfiguracionAccesibilidad
                                configuracionVisible={configuracionVisible}
                                setConfiguracionVisible={setConfiguracionVisible}
                                modoAltoContraste={modoAltoContraste}
                                setModoAltoContraste={setModoAltoContraste}
                                tamanoTexto={tamanoTexto}
                                setTamanoTexto={setTamanoTexto}
                                anunciosActivados={anunciosActivados}
                                setAnunciosActivados={setAnunciosActivados}
                            />
                        </div>
                    </div>
                </div>

                <BarraBusqueda
                    terminoBusqueda={terminoBusqueda}
                    setTerminoBusqueda={setTerminoBusqueda}
                    modoAltoContraste={modoAltoContraste}
                    tamanoTexto={tamanoTexto}
                    searchInputRef={searchInputRef}
                />

                <Filtros
                    categoriaActiva={categoriaActiva}
                    setCategoriaActiva={setCategoriaActiva}
                    filtrosVisible={filtrosVisible}
                    setFiltrosVisible={setFiltrosVisible}
                    modoAltoContraste={modoAltoContraste}
                />

                {/* Información de resultados */}
                <div className={`flex items-center justify-between text-sm ${modoAltoContraste ? 'text-slate-800' : 'text-slate-600'
                    }`}>
                    <p>
                        Mostrando <span className={`font-semibold ${modoAltoContraste ? 'text-black' : 'text-slate-900'
                            }`}>{peliculasFiltradas.length}</span>
                        {peliculasFiltradas.length === 1 ? ' película' : ' películas'}
                    </p>
                    <div className="flex items-center gap-2">
                        <span>Vista:</span>
                        <button
                            onClick={() => setVistaTarjetas(true)}
                            className={`p-2 rounded-lg ${vistaTarjetas
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                            aria-label="Vista de tarjetas"
                        >
                            <Grid className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setVistaTarjetas(false)}
                            className={`p-2 rounded-lg ${!vistaTarjetas
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                            aria-label="Vista de lista"
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;