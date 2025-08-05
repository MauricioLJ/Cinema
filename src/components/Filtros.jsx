// components/Filtros.jsx
import { ChevronDown, Filter } from 'lucide-react';
import { CATEGORIAS } from '../data/movies';

const Filtros = ({
    categoriaActiva,
    setCategoriaActiva,
    filtrosVisible,
    setFiltrosVisible,
    modoAltoContraste
}) => {
    return (
        <div className="flex items-center gap-4 mb-4">
            <button
                onClick={() => setFiltrosVisible(!filtrosVisible)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 md:hidden ${modoAltoContraste
                    ? 'bg-slate-200 hover:bg-slate-300'
                    : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                aria-expanded={filtrosVisible}
            >
                <Filter className="w-4 h-4" />
                Filtros
                <ChevronDown className={`w-4 h-4 transition-transform ${filtrosVisible ? 'rotate-180' : ''}`} />
            </button>

            <div className={`flex flex-wrap gap-3 ${filtrosVisible ? 'block' : 'hidden md:flex'}`}>
                {CATEGORIAS.map((categoria) => (
                    <button
                        key={categoria.id}
                        onClick={() => setCategoriaActiva(categoria.id)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 border-4 ${categoriaActiva === categoria.id
                            ? modoAltoContraste
                                ? 'bg-black text-white border-black'
                                : `${categoria.colorClase} border-transparent shadow-lg`
                            : modoAltoContraste
                                ? 'bg-slate-200 text-black border-slate-600 hover:bg-slate-300'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                            }`}
                        aria-label={`Filtrar por ${categoria.nombre}`}
                        aria-pressed={categoriaActiva === categoria.id}
                    >
                        <span className="text-lg">{categoria.icono}</span>
                        <span className="hidden sm:inline">{categoria.nombre}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filtros;