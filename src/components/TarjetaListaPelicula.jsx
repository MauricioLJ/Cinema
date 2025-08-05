// components/TarjetaListaPelicula.jsx
import { Star } from 'lucide-react';

const TarjetaListaPelicula = ({
    pelicula,
    modoAltoContraste,
    setPeliculaSeleccionada
}) => {
    const manejarClickTarjeta = () => {
        setPeliculaSeleccionada(pelicula);
    };

    return (
        <article
            className={`flex gap-6 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-4 p-6 ${modoAltoContraste
                ? 'border-black bg-yellow-50'
                : 'border-transparent hover:border-slate-200'
                }`}
            onClick={manejarClickTarjeta}
        >
            <img
                src={pelicula.poster}
                alt=""
                className="w-24 h-36 object-cover rounded-lg flex-shrink-0"
                loading="lazy"
            />
            <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-slate-900">{pelicula.titulo}</h3>
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        {pelicula.precio}
                    </span>
                </div>
                <p className="text-slate-600 mb-2">{pelicula.genero} • {pelicula.duracion}</p>
                <p className="text-slate-700 mb-4 line-clamp-2">{pelicula.sinopsis}</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        {pelicula.horarios.map((horario, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-medium text-sm">
                                {horario}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="font-semibold text-slate-900">{pelicula.rating}</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TarjetaListaPelicula;