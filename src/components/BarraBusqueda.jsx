// components/BarraBusqueda.jsx
import { Search } from 'lucide-react';

const BarraBusqueda = ({
    terminoBusqueda,
    setTerminoBusqueda,
    modoAltoContraste,
    tamanoTexto,
    searchInputRef
}) => {
    return (
        <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
                ref={searchInputRef}
                type="text"
                placeholder="Buscar por título, género o director..."
                value={terminoBusqueda}
                onChange={(e) => setTerminoBusqueda(e.target.value)}
                className={`w-full pl-12 pr-12 py-4 rounded-xl border-4 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 ${modoAltoContraste ? 'border-black bg-white text-black' : 'bg-white border-slate-200'
                    } ${tamanoTexto === 'grande' ? 'text-lg' : tamanoTexto === 'extra-grande' ? 'text-xl' : 'text-base'
                    }`}
                aria-label="Buscar películas"
                role="searchbox"
            />
            {terminoBusqueda && (
                <button
                    onClick={() => setTerminoBusqueda('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded p-1"
                    aria-label="Limpiar búsqueda"
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default BarraBusqueda;