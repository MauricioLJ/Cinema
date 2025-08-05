// components/DetallesPelicula.jsx
import { Accessibility, Calendar, Clock, Star } from 'lucide-react';
import { CATEGORIAS, ICONOS_ACCESIBILIDAD } from '../data/movies';
import { getCategoriaColorClasses } from '../utils/movieUtils';

const DetallesPelicula = ({
    pelicula,
    onVolver,
    modoAltoContraste,
    tamanoTexto
}) => {
    return (
        <div className={`min-h-screen transition-colors duration-300 ${modoAltoContraste ? 'bg-white' : 'bg-slate-50'
            }`}>
            <div className="container mx-auto px-4 py-8">
                <nav className="mb-8" aria-label="Breadcrumb">
                    <button
                        onClick={onVolver}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg px-3 py-2 transition-colors"
                        aria-label="Volver a la cartelera"
                    >
                        ← Volver a cartelera
                    </button>
                </nav>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="lg:flex">
                        <div className="lg:w-2/5 relative">
                            <img
                                src={pelicula.poster}
                                alt=""
                                className="w-full h-full object-cover min-h-96"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden">
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h1 className="text-white text-3xl font-bold mb-2">{pelicula.titulo}</h1>
                                    <p className="text-slate-200">{pelicula.genero}</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/5 p-8 lg:p-12">
                            <div className="hidden lg:block">
                                <h1 className={`font-bold text-slate-900 mb-6 ${tamanoTexto === 'grande'
                                    ? 'text-4xl'
                                    : tamanoTexto === 'extra-grande'
                                        ? 'text-5xl'
                                        : 'text-3xl'
                                    }`}>
                                    {pelicula.titulo}
                                </h1>
                            </div>

                            <div className="flex flex-wrap gap-6 mb-8 text-slate-600">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-medium">{pelicula.duracion}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                                    <span className="font-medium">{pelicula.rating}/5</span>
                                </div>
                                <span className="bg-slate-200 px-4 py-2 rounded-full font-bold text-slate-800">
                                    {pelicula.clasificacion}
                                </span>
                                <span className="bg-emerald-600 text-white px-4 py-2 rounded-full font-bold">
                                    {pelicula.precio}
                                </span>
                            </div>

                            <div className="mb-8">
                                <h2 className="font-semibold text-slate-900 mb-3 text-lg">Sinopsis</h2>
                                <p className={`text-slate-700 leading-relaxed ${tamanoTexto === 'grande'
                                    ? 'text-lg'
                                    : tamanoTexto === 'extra-grande'
                                        ? 'text-xl'
                                        : 'text-base'
                                    }`}>
                                    {pelicula.sinopsis}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Director</h3>
                                    <p className="text-slate-700">{pelicula.director}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Reparto Principal</h3>
                                    <p className="text-slate-700">{pelicula.reparto.join(', ')}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-slate-900 mb-4">Formatos disponibles</h3>
                                <div className="flex flex-wrap gap-3">
                                    {pelicula.categorias.map((categoria, index) => {
                                        const categoriaInfo = CATEGORIAS.find(c => c.id === categoria);
                                        return (
                                            <span
                                                key={index}
                                                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium border-2 ${getCategoriaColorClasses(categoria)}`}
                                            >
                                                <span>{categoriaInfo?.icono}</span>
                                                {categoria}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <Accessibility className="w-5 h-5" />
                                    Opciones de accesibilidad
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {pelicula.accesibilidad.map((accesibilidad) => {
                                        const config = ICONOS_ACCESIBILIDAD[accesibilidad];
                                        return (
                                            <div
                                                key={accesibilidad}
                                                className="flex items-start gap-3 bg-emerald-50 border-2 border-emerald-200 p-4 rounded-xl"
                                            >
                                                <div className="text-emerald-600 flex-shrink-0 mt-1">
                                                    {config.icono}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-emerald-800 mb-1">{config.label}</p>
                                                    <p className="text-emerald-700 text-sm">{config.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="border-t-2 border-slate-200 pt-8">
                                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Horarios disponibles hoy
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {pelicula.horarios.map((horario, index) => (
                                        <button
                                            key={index}
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                                            aria-label={`Comprar boletos para función de las ${horario}`}
                                        >
                                            {horario}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallesPelicula;