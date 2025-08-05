// components/TarjetaPelicula.jsx
import { Clock, Heart, Share2, Star } from 'lucide-react';
import { ICONOS_ACCESIBILIDAD } from '../data/movies';
import { getCategoriaColorClasses } from '../utils/movieUtils';

const TarjetaPelicula = ({
    pelicula,
    modoAltoContraste,
    tamanoTexto,
    peliculasFavoritas,
    toggleFavorito,
    setPeliculaSeleccionada
}) => {
    const manejarCompartir = (e) => {
        e.stopPropagation();
        if (navigator.share) {
            navigator.share({
                title: pelicula.titulo,
                text: pelicula.sinopsis,
            });
        }
    };

    const manejarClickTarjeta = () => {
        setPeliculaSeleccionada(pelicula);
    };

    const manejarKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setPeliculaSeleccionada(pelicula);
        }
    };

    const manejarToggleFavorito = (e) => {
        e.stopPropagation();
        toggleFavorito(pelicula.id);
    };

    return (
        <article
            className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer border-4 ${modoAltoContraste
                ? 'border-black bg-yellow-50 hover:border-yellow-600'
                : 'border-transparent hover:border-slate-200'
                } ${tamanoTexto === 'grande'
                    ? 'text-lg'
                    : tamanoTexto === 'extra-grande'
                        ? 'text-xl'
                        : 'text-base'
                }`}
            onClick={manejarClickTarjeta}
            role="button"
            tabIndex={0}
            onKeyDown={manejarKeyDown}
            aria-label={`Ver detalles de ${pelicula.titulo}. Clasificación ${pelicula.clasificacion}. Duración ${pelicula.duracion}. Rating ${pelicula.rating} de 5 estrellas.`}
        >
            <div className="relative">
                <img
                    src={pelicula.poster}
                    alt=""
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-white text-sm font-medium">{pelicula.director}</p>
                                <p className="text-slate-200 text-xs">{pelicula.reparto.slice(0, 2).join(', ')}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={manejarToggleFavorito}
                                    className={`p-2 rounded-full transition-colors border-2 ${peliculasFavoritas.has(pelicula.id)
                                        ? 'bg-red-600 text-white border-red-600'
                                        : 'bg-white/20 text-white hover:bg-white/30 border-white/30 hover:border-white/50'
                                        }`}
                                    aria-label={`${peliculasFavoritas.has(pelicula.id) ? 'Quitar de' : 'Agregar a'} favoritos`}
                                >
                                    <Heart className={`w-4 h-4 ${peliculasFavoritas.has(pelicula.id) ? 'fill-current' : ''}`} />
                                </button>
                                <button
                                    onClick={manejarCompartir}
                                    className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors border-2 border-white/30 hover:border-white/50"
                                    aria-label="Compartir película"
                                >
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Badges superiores */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div className="bg-slate-900/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                        {pelicula.clasificacion}
                    </div>
                    <div className="bg-emerald-600/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                        {pelicula.precio}
                    </div>
                </div>

                {/* Iconos de accesibilidad */}
                <div className="absolute bottom-3 left-3 flex gap-1">
                    {pelicula.accesibilidad.map((accesibilidad) => {
                        const config = ICONOS_ACCESIBILIDAD[accesibilidad];
                        return (
                            <div
                                key={accesibilidad}
                                className="bg-blue-600/90 text-white p-2 rounded-full backdrop-blur-sm hover:bg-blue-700 transition-colors"
                                title={config.label}
                                aria-label={config.label}
                            >
                                {config.icono}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">
                    {pelicula.titulo}
                </h3>

                <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pelicula.duracion}
                    </span>
                    <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        {pelicula.rating}
                    </span>
                </div>

                <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                    {pelicula.genero}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {pelicula.categorias.map((categoria, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoriaColorClasses(categoria)}`}
                        >
                            {categoria}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-slate-600 mb-1">Próxima función:</p>
                        <p className="font-semibold text-slate-900">{pelicula.horarios[0]}</p>
                    </div>
                    <button
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                        aria-label={`Comprar boletos para ${pelicula.titulo}`}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </article>
    );
};

export default TarjetaPelicula;