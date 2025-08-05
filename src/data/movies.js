// constants/movies.js

// Importar imágenes (ajustar rutas según tu estructura)
import avatar from '../assets/avatar.jpg';
import flow from '../assets/flow.jpg';
import jurassic from '../assets/jurassic.jpg';
import strange from '../assets/strange.jpg';
import topgun from '../assets/topgun.jpg';

export const MOVIES_DATA = {
  "peliculas": [
    {
      "id": 1,
      "titulo": "Avatar: El Camino del Agua",
      "genero": "Acción/Aventura",
      "duracion": "192 min",
      "clasificacion": "PG-13",
      "rating": 4.5,
      "poster": avatar,
      "sinopsis": "Jake Sully vive con su nueva familia formada en el planeta de Pandora. Cuando una amenaza familiar regresa para terminar lo que se empezó anteriormente, Jake debe trabajar con Neytiri y el ejército de la raza Na'vi para proteger su planeta.",
      "horarios": ["14:00", "17:30", "20:45"],
      "categorias": ["3D", "IMAX", "Doblada"],
      "accesibilidad": ["subtitulos", "audiodescripcion", "acceso_silla_ruedas"],
      "precio": "$12.50",
      "director": "James Cameron",
      "reparto": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
    },
    {
      "id": 2,
      "titulo": "Top Gun: Maverick",
      "genero": "Acción/Drama",
      "duracion": "131 min",
      "clasificacion": "PG-13",
      "rating": 4.8,
      "poster": topgun,
      "sinopsis": "Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete 'Maverick' Mitchell está donde pertenece, empujando los límites como un valiente piloto de prueba.",
      "horarios": ["15:15", "18:00", "21:15"],
      "categorias": ["IMAX", "Subtitulada", "Doblada"],
      "accesibilidad": ["subtitulos", "audiodescripcion", "acceso_silla_ruedas"],
      "precio": "$14.00",
      "director": "Joseph Kosinski",
      "reparto": ["Tom Cruise", "Miles Teller", "Jennifer Connelly"]
    },
    {
      "id": 3,
      "titulo": "Doctor Strange: Multiverso",
      "genero": "Acción/Fantasía",
      "duracion": "126 min",
      "clasificacion": "PG-13",
      "rating": 4.2,
      "poster": strange,
      "sinopsis": "El Doctor Strange desata un mal inimaginable al abrir las puertas del multiverso con la ayuda de Wong y Wanda Maximoff.",
      "horarios": ["16:00", "19:30", "22:00"],
      "categorias": ["3D", "4DX", "Subtitulada"],
      "accesibilidad": ["subtitulos", "audiodescripcion", "acceso_silla_ruedas", "bucle_inductivo"],
      "precio": "$15.50",
      "director": "Sam Raimi",
      "reparto": ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"]
    },
    {
      "id": 4,
      "titulo": "Flow",
      "genero": "Animación/Aventura",
      "duracion": "85 min",
      "clasificacion": "PG",
      "rating": 5.0,
      "poster": flow,
      "sinopsis": "Una fábula sin diálogos sobre un gato que navega un mundo inundado junto a otros animales, aprendiendo sobre amistad y supervivencia.",
      "horarios": ["14:00", "17:00", "20:00"],
      "categorias": ["Animada", "Familiar"],
      "accesibilidad": ["subtitulos", "audiodescripcion"],
      "precio": "$10.00",
      "director": "Gints Zilbalodis",
      "reparto": ["Gato", "Capibara", "Lemur", "Perro"]
    },
    {
      "id": 5,
      "titulo": "Jurassic World Rebirth",
      "genero": "Ciencia ficción/Aventura",
      "duracion": "133 min",
      "clasificacion": "PG-13",
      "rating": 4.3,
      "poster": jurassic,
      "sinopsis": "Una expedición busca muestras genéticas en una isla remota habitada por dinosaurios para salvar a la humanidad.",
      "horarios": ["14:30", "17:45", "20:30"],
      "categorias": ["IMAX", "Doblada"],
      "accesibilidad": ["subtitulos", "acceso_silla_ruedas"],
      "precio": "$15.00",
      "director": "Gareth Edwards",
      "reparto": ["Scarlett Johansson", "Mahershala Ali"]
    }
  ]
};

export const CATEGORIAS = [
  { id: 'todas', nombre: 'Todas las películas', icono: '', colorClase: 'bg-slate-600 hover:bg-slate-700 text-white' },
  { id: '3D', nombre: 'Experiencia 3D', icono: '', colorClase: 'bg-purple-600 hover:bg-purple-700 text-white' },
  { id: 'IMAX', nombre: 'Formato IMAX', icono: '', colorClase: 'bg-orange-600 hover:bg-orange-700 text-white' },
  { id: 'Subtitulada', nombre: 'Versión subtitulada', icono: '', colorClase: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
  { id: 'Doblada', nombre: 'Versión doblada', icono: '', colorClase: 'bg-pink-600 hover:bg-pink-700 text-white' },
  { id: '4DX', nombre: 'Experiencia 4DX', icono: '', colorClase: 'bg-red-600 hover:bg-red-700 text-white' }
];

export const ICONOS_ACCESIBILIDAD = {
  subtitulos: {
    label: "Subtítulos disponibles en español e inglés",
    description: "Subtítulos sincronizados con diálogos y efectos sonoros"
  },
  audiodescripcion: {
    label: "Audiodescripción profesional disponible",
    description: "Narración descriptiva de elementos visuales importantes"
  },
  acceso_silla_ruedas: {
    label: "Accesibilidad completa para sillas de ruedas",
    description: "Asientos designados y accesos adaptados"
  },
  bucle_inductivo: {
    label: "Sistema de bucle inductivo para audífonos",
    description: "Conectividad directa con dispositivos auditivos"
  }
};