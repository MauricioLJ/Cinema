import { useEffect, useState } from 'react';
import ComponenteCarga from '../components/ComponenteCarga';
import ConfiguracionAccesibilidad from '../components/ConfiguracionAccesibilidad';
import DetallesPelicula from '../components/DetallesPelicula';
import Encabezado from '../components/Encabezado';
import Filtros from '../components/Filtros';
import TarjetaListaPelicula from '../components/TarjetaListaPelicula';
import TarjetaPelicula from '../components/TarjetaPelicula';
import { MOVIES_DATA } from '../data/movies';

export default function Home() {
    const [peliculas, setPeliculas] = useState([]);
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
    const [modoLista, setModoLista] = useState(false);
    const [modoAltoContraste, setModoAltoContraste] = useState(false);
    const [tamanoTexto, setTamanoTexto] = useState('normal');
    const [peliculasFavoritas, setPeliculasFavoritas] = useState(new Set());

    useEffect(() => {
        // Simulación de carga inicial
        setTimeout(() => {
            setPeliculas(MOVIES_DATA.peliculas);
        }, 500);
    }, []);

    const toggleFavorito = (id) => {
        setPeliculasFavoritas((prev) => {
            const nuevo = new Set(prev);
            if (nuevo.has(id)) nuevo.delete(id);
            else nuevo.add(id);
            return nuevo;
        });
    };

    if (peliculas.length === 0) return <ComponenteCarga />;

    return (
        <div className={`${modoAltoContraste ? 'bg-yellow-50 text-black' : 'bg-slate-50 text-slate-900'} min-h-screen`}>
            <Encabezado
                modoLista={modoLista}
                setModoLista={setModoLista}
                modoAltoContraste={modoAltoContraste}
                setModoAltoContraste={setModoAltoContraste}
                tamanoTexto={tamanoTexto}
                setTamanoTexto={setTamanoTexto}
            />

            <main className="container mx-auto px-4 py-8">
                {peliculaSeleccionada ? (
                    <DetallesPelicula
                        pelicula={peliculaSeleccionada}
                        onVolver={() => setPeliculaSeleccionada(null)}
                        tamanoTexto={tamanoTexto}
                        modoAltoContraste={modoAltoContraste}
                    />
                ) : (
                    <>
                        <Filtros
                            peliculas={MOVIES_DATA.peliculas}
                            setPeliculas={setPeliculas}
                        />
                        <div className="grid gap-8 mt-8">
                            {peliculas.map((pelicula) =>
                                modoLista ? (
                                    <TarjetaListaPelicula
                                        key={pelicula.id}
                                        pelicula={pelicula}
                                        modoAltoContraste={modoAltoContraste}
                                        onSeleccionar={setPeliculaSeleccionada}
                                    />
                                ) : (
                                    <TarjetaPelicula
                                        key={pelicula.id}
                                        pelicula={pelicula}
                                        modoAltoContraste={modoAltoContraste}
                                        tamanoTexto={tamanoTexto}
                                        toggleFavorito={toggleFavorito}
                                        peliculasFavoritas={peliculasFavoritas}
                                        onSeleccionar={setPeliculaSeleccionada}
                                    />
                                )
                            )}
                        </div>
                    </>
                )}
            </main>

            <ConfiguracionAccesibilidad
                tamanoTexto={tamanoTexto}
                setTamanoTexto={setTamanoTexto}
                modoAltoContraste={modoAltoContraste}
                setModoAltoContraste={setModoAltoContraste}
            />
        </div>
    );
}
