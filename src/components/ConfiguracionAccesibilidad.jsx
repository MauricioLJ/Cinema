// components/ConfiguracionAccesibilidad.jsx
import { Accessibility } from 'lucide-react';
import { guardarConfiguracionAccesibilidad } from '../utils/movieUtils';

const ConfiguracionAccesibilidad = ({
    configuracionVisible,
    setConfiguracionVisible,
    modoAltoContraste,
    setModoAltoContraste,
    tamanoTexto,
    setTamanoTexto,
    anunciosActivados,
    setAnunciosActivados
}) => {
    const manejarGuardarConfiguracion = () => {
        guardarConfiguracionAccesibilidad({
            modoAltoContraste,
            tamanoTexto,
            anunciosActivados
        });
        setConfiguracionVisible(false);
    };

    if (!configuracionVisible) return null;

    return (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border-2 border-slate-200 p-6 z-50">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Configuración de Accesibilidad
            </h3>

            <div className="space-y-4">
                <div>
                    <label htmlFor="tamano-texto" className="block text-sm font-medium text-slate-700 mb-2">
                        Tamaño de texto:
                    </label>
                    <select
                        id="tamano-texto"
                        value={tamanoTexto}
                        onChange={(e) => setTamanoTexto(e.target.value)}
                        className="w-full border-2 border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
                    >
                        <option value="normal">Normal (16px)</option>
                        <option value="grande">Grande (18px)</option>
                        <option value="extra-grande">Extra Grande (20px)</option>
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <label htmlFor="alto-contraste" className="text-sm font-medium text-slate-700">
                        Modo alto contraste
                    </label>
                    <button
                        id="alto-contraste"
                        onClick={() => setModoAltoContraste(!modoAltoContraste)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 ${modoAltoContraste ? 'bg-blue-600' : 'bg-slate-300'
                            }`}
                        role="switch"
                        aria-checked={modoAltoContraste}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${modoAltoContraste ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <label htmlFor="anuncios-voz" className="text-sm font-medium text-slate-700">
                        Anuncios por voz
                    </label>
                    <button
                        id="anuncios-voz"
                        onClick={() => setAnunciosActivados(!anunciosActivados)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 ${anunciosActivados ? 'bg-blue-600' : 'bg-slate-300'
                            }`}
                        role="switch"
                        aria-checked={anunciosActivados}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${anunciosActivados ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t-2 border-slate-200">
                <button
                    onClick={manejarGuardarConfiguracion}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
                >
                    Guardar
                </button>
                <button
                    onClick={() => setConfiguracionVisible(false)}
                    className="flex-1 bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-300 transition-colors focus:outline-none focus:ring-4 focus:ring-slate-300 focus:ring-offset-2"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ConfiguracionAccesibilidad;