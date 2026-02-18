/**
 * Contenido del negocio – Mr. Barbaro Caucel.
 * Centralizar aquí toda la información para no hardcodear en componentes.
 * Las secciones se muestran u ocultan según la presencia de datos (opcionales).
 */

export const site = {
  name: 'Mr. Barbaro Caucel',
  shortName: 'Mr. Barbaro',
  tagline: 'Barbería en Caucel, Mérida, Yucatán',
  description:
    'Barbería profesional con excelente servicio y atención. Cortes de cabello, perfilado de barba y más. Ubicados en Plaza Gran Santa Fe.',
  rating: 4.7,
  reviewCount: 740,
};

export const contact = {
  phone: null,
  phoneTel: null,
  whatsapp: 'https://api.whatsapp.com',
  address: 'Merida - Caucel 407, Cd Caucel, 97314 Caucel, Yuc.',
  location: 'Plaza Gran Santa Fe',
  plusCode: '2837+XC Caucel, Yucatán',
  facebook: null,
  email: null,
};

export const hours = [
  { days: 'Lunes a sábado', hours: '10:00 a.m. – 9:00 p.m.' },
  { days: 'Domingo', hours: '10:00 a.m. – 6:00 p.m.' },
];

export const mapEmbed = {
  enabled: true,
  iframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.777100024965!2d-89.70554871284179!3d21.0048888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5674a04a6c1ad3%3A0xe01369dfc5b9603c!2sMr.%20Barbaro%20Caucel!5e0!3m2!1ses-419!2smx!4v1771369051209!5m2!1ses-419!2smx',
  title: 'Ubicación de Mr. Barbaro Caucel en Google Maps',
};

export const services = [
  { icon: 'ContentCut', title: 'Corte de cabello', text: 'Estilos clásicos y modernos adaptados a tu gusto personal.' },
  { icon: 'Face', title: 'Perfilado de barba', text: 'Diseño y definición profesional para una barba impecable.' },
  { icon: 'Straighten', title: 'Afeitado clásico', text: 'Afeitado con navaja y toalla caliente para un acabado perfecto.' },
  { icon: 'ChildCare', title: 'Corte infantil', text: 'Atención paciente y cuidadosa para los más pequeños.' },
  { icon: 'AutoFixHigh', title: 'Diseño de cejas', text: 'Perfilado limpio y detallado para un look completo.' },
  { icon: 'Spa', title: 'Masaje capilar', text: 'Relajante masaje al final de tu corte para una experiencia premium.' },
];

export const features = [
  {
    icon: 'AccessibleForward',
    title: 'Entrada accesible',
    text: 'Entrada accesible para personas en silla de ruedas.',
  },
  {
    icon: 'LocalParking',
    title: 'Estacionamiento accesible',
    text: 'Estacionamiento accesible para personas en silla de ruedas.',
  },
  {
    icon: 'EmojiEvents',
    title: 'Barberos profesionales',
    text: 'Personal con experiencia y capacitación constante.',
  },
  {
    icon: 'Verified',
    title: 'Calificación 4.7',
    text: '740 opiniones avalan la calidad de nuestro servicio.',
  },
];

export const planning = {
  enabled: true,
  title: 'Agenda tu cita',
  description:
    'Se recomienda concertar cita para garantizar tu atención. Contáctanos por WhatsApp para reservar tu lugar.',
  ctaText: 'Agendar por WhatsApp',
  ctaHref: 'https://api.whatsapp.com',
};

export const payments = {
  enabled: true,
  title: 'Formas de pago',
  description: 'Aceptamos diversos métodos de pago para tu comodidad.',
  methods: [
    'Pagos móviles NFC',
    'Tarjetas de crédito',
    'Tarjetas de débito',
  ],
};

export const parking = {
  enabled: true,
  title: 'Estacionamiento',
  description:
    'Contamos con estacionamiento accesible en Plaza Gran Santa Fe para tu comodidad al visitarnos.',
};

export const testimonials = [
  {
    quote: 'Excelente servicio y atención, bien cortado, buena música, clima adecuado.',
    author: null,
  },
  {
    quote: 'Muy buen servicio, fui sin buscar un corte en específico y me encantó como quedó.',
    author: null,
  },
  {
    quote: 'Fueron puntuales con mi cita y se agradece el masaje al final del corte.',
    author: null,
  },
  {
    quote: 'Me ayudó a recomendar un corte que por años no pasaba por miedo. Muy contento, súper recomendable.',
    author: 'Felipe A.',
  },
  {
    quote: 'Muy buen servicio, lo recomiendo mucho. Hace muy bien su trabajo.',
    author: 'Diego C.',
  },
  {
    quote: 'Excelente servicio, súper recomendable.',
    author: null,
  },
];

export const gallerySpace = [
  { src: '/interior.png', alt: 'Interior de Mr. Barbaro Caucel' },
  { src: '/fachada.png', alt: 'Fachada exterior de Mr. Barbaro Caucel' },
];

export const galleryWork = [
  { src: '/corte-1.png', alt: 'Barbero realizando corte de cabello' },
  { src: '/corte-2.png', alt: 'Detalle de corte fade con máquina' },
  { src: '/corte-3.png', alt: 'Barbero peinando a cliente' },
  { src: '/equipo.png', alt: 'Equipo de barberos de Mr. Barbaro' },
];

export const hero = {
  backgroundImage: '/interior.png',
  subtitle: site.tagline,
  ctaPrimary: { text: 'Agendar cita', href: 'https://api.whatsapp.com' },
  ctaSecondary: { text: 'Ver servicios', href: '#servicios' },
};
