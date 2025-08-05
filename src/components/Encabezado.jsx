import { Eye, EyeOff, LayoutGrid, LayoutList } from 'lucide-react';

export default function Encabezado({ modoLista, setModoLista, modoAltoContraste, setModoAltoContraste, tamanoTexto, setTamanoTexto }) {
    return (
        <header className="bg-white border-b-2 border-slate-200 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">🎬 Cine Multiverso 2025</h1>
                <div className="flex items-center gap-4">
                    <button
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                        onClick={() => setModoLista((prev) => !prev)}
                        aria-label={`Cambiar a vista ${modoLista ? 'de tarjetas' : 'de lista'}`}
                    >
                        {modoLista ? <LayoutGrid className="w-6 h-6" /> : <LayoutList className="w-6 h-6" />}
                    </button>
                    <button
                        className="text-slate-600 hover:text-yellow-600 transition-colors"
                        onClick={() => setModoAltoContraste((prev) => !prev)}
                        aria-label="Activar o desactivar alto contraste"
                    >
                        {modoAltoContraste ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                    </button>
                    <select
                        className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={tamanoTexto}
                        onChange={(e) => setTamanoTexto(e.target.value)}
                        aria-label="Tamaño del texto"
                    >
                        <option value="normal">Texto normal</option>
                        <option value="grande">Texto grande</option>
                        <option value="extra-grande">Texto XL</option>
                    </select>
                </div>
            </div>
        </header>
    );
}
