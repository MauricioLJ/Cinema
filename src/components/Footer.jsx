// components/Footer.jsx
import { ICONOS_ACCESIBILIDAD } from '../data/movies';

const Footer = ({ modoAltoContraste, tamanoTexto }) => {
    return (
        <footer className={`mt-20 py-12 border-t-4 ${modoAltoContraste
            ? 'border-black bg-slate-900 text-white'
            : 'border-slate-200 bg-white'
            }`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className={`font-bold mb-6 ${modoAltoContraste ? 'text-white' : 'text-slate-900'
                        } ${tamanoTexto === 'grande'
                            ? 'text-2xl'
                            : tamanoTexto === 'extra-grande'
                                ? 'text-3xl'
                                : 'text-xl'
                        }`}>
                        Nuestro Compromiso con la Inclusión
                    </h3>
                    <p className={`max-w-3xl mx-auto mb-8 leading-relaxed ${modoAltoContraste ? 'text-slate-200' : 'text-slate-600'
                        }`}>
                        En CineAccesible creemos que el cine debe ser disfrutado por todos. Por eso ofrecemos una experiencia
                        completamente accesible con tecnología de última generación y personal especializado.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {Object.entries(ICONOS_ACCESIBILIDAD).map(([key, config]) => (
                        <div key={key} className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="text-blue-600">
                                    {config.icono}
                                </div>
                            </div>
                            <h4 className={`font-semibold mb-2 ${modoAltoContraste ? 'text-white' : 'text-slate-900'
                                }`}>
                                {config.label}
                            </h4>
                            <p className={`text-sm leading-relaxed ${modoAltoContraste ? 'text-slate-200' : 'text-slate-600'
                                }`}>
                                {config.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`border-t-2 pt-8 text-center ${modoAltoContraste ? 'border-slate-600' : 'border-slate-200'
                    }`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className={`text-sm ${modoAltoContraste ? 'text-slate-200' : 'text-slate-600'
                            }`}>
                            © 2025 CineAccesible. Comprometidos con la inclusión y accesibilidad.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-4 focus:ring-blue-300 rounded px-2 py-1"
                            >
                                Política de Accesibilidad
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-4 focus:ring-blue-300 rounded px-2 py-1"
                            >
                                Contacto
                            </a>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-4 focus:ring-blue-300 rounded px-2 py-1"
                            >
                                Ayuda
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;