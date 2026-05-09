/** Perfil de expositor (texto editable; foto en `expositores/{id}.webp`) */
export type FairExpositor = {
  /** Coincide con el nombre de archivo sin extensión, p. ej. `expositor-01` */
  id: string;
  name: string;
  title: string;
  bio: string;
};

/** Imagen de apoyo para la sección Componente internacional */
export type FairInternationalVisual = {
  /** Nombre de archivo en `internacional/`, p. ej. `internacional-01-mapa.webp` */
  file: string;
  label: string;
  alt: string;
};

export type Fair = {
  slug: string;
  name: string;
  tagline: string;
  /** Portada horizontal — OG, hero en detalle de feria */
  featuredImage: string;
  /** Imagen más vertical para la tarjeta en `/nuestras-ferias` (si no se define, se usa `featuredImage`) */
  listCardImage?: string;
  dateLabel: string;
  upcomingLabel: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  mission: string;
  vision: string;
  offerings: string[];
  targetAudience: string[];
  whyParticipate: string[];
  internationalComponent: string;
  expositores?: FairExpositor[];
  internationalGallery?: FairInternationalVisual[];
};

export const companyData = {
  name: "STRATEGIC EXPO GROUP SAS",
  description:
    "STRATEGIC EXPO GROUP SAS es un holding empresarial especializado en la conceptualización, estructuración y ejecución de ferias, exposiciones y eventos de alto impacto en Colombia. Diseñamos plataformas estratégicas que conectan sectores productivos, inversionistas, marcas, gobiernos y consumidores, generando escenarios reales de negocio, posicionamiento y crecimiento económico regional.",
  mission:
    "Crear escenarios de negocio sólidos, sostenibles y estratégicamente estructurados que generen valor económico, visibilidad y crecimiento para los sectores productivos.",
  vision:
    "Convertirnos en el grupo líder en desarrollo de exposiciones sectoriales en la región Caribe y expansión nacional, consolidando eventos insignia que impulsen la competitividad empresarial.",
  values: [
    "Innovación",
    "Excelencia",
    "Integridad",
    "Desarrollo regional",
    "Alianzas estratégicas"
  ],
  businessLines: [
    "Diseño gráfico / industrial",
    "Stand custom",
    "Interiorismo y vitrinismo",
    "Impresión gran formato"
  ]
};

export const serviceLines = [
  {
    title: "Eventos corporativos",
    description:
      "Planeación y ejecución de eventos empresariales con enfoque en posicionamiento y relacionamiento."
  },
  {
    title: "Ferias comerciales",
    description:
      "Diseño de plataformas feriales que conectan oferta, demanda y oportunidades de negocio reales."
  },
  {
    title: "Congresos",
    description:
      "Organización de congresos con contenido estratégico para impulsar conocimiento y networking sectorial."
  },
  {
    title: "Stands y experiencias",
    description:
      "Desarrollo de espacios de marca memorables para fortalecer visibilidad e interacción comercial."
  },
  {
    title: "Ruedas de negocios",
    description:
      "Generación de agendas de reuniones efectivas entre empresas, aliados e inversionistas potenciales."
  },
  {
    title: "Activaciones comerciales",
    description:
      "Acciones experienciales orientadas a aumentar alcance, recordación y conversión de marca."
  }
] as const;

export type Partner = {
  name: string;
  /** kebab-case: coincide con el nombre de archivo en /assets/logos/partners/ */
  slug: string;
};

export const partners: Partner[] = [
  { name: "ALCALDÍA DE CARTAGENA", slug: "alcaldia-cartagena" },
  { name: "GOBIERNO DE BOLÍVAR", slug: "gobierno-bolivar" },
  { name: "CAMARA COMERCIO DE LA COSTA", slug: "camara-comercio-costa" },
  { name: "UNIVERSIDAD DE LA COSTA", slug: "universidad-costa" },
  { name: "MAS PAÍS", slug: "mas-pais" },
  { name: "comfamiliar", slug: "comfamiliar" },
  { name: "SENA", slug: "sena" }
];

/** Lista de nombres para páginas que solo muestran texto */
export const allies = partners.map((p) => p.name);

export const fairs: Fair[] = [
  {
    slug: "feria-educacion-caribe",
    name: "Feria Educación Caribe 2026",
    tagline: "Conectando el talento del Caribe con el futuro",
    dateLabel: "19 al 21 de octubre de 2026",
    upcomingLabel: "19-21 OCT 2026",
    location:
      "Cubo de Cristal (Plaza de la Paz), Barranquilla, Atlántico.",
    featuredImage: "/assets/images/feria-educacion-caribe-cover.webp",
    listCardImage: "/assets/images/event-education-caribe.webp",
    shortDescription:
      "La plataforma que reúne las mejores oportunidades de educación superior, formación técnica, programas internacionales y financiamiento educativo para jóvenes del Caribe colombiano.",
    longDescription:
      "La Feria Educación Caribe 2026 es una iniciativa liderada por Strategic Expo Group SAS, enfocada en crear un espacio de conexión entre estudiantes, instituciones educativas, empresas y entidades públicas, con el propósito de impulsar el desarrollo académico, profesional y social de la región Caribe colombiana. Somos una plataforma estratégica que reúne en un solo lugar las mejores oportunidades de educación superior, formación técnica, programas internacionales, financiamiento educativo y orientación vocacional, facilitando la toma de decisiones de miles de jóvenes que buscan construir su futuro.",
    mission:
      "Brindar a los jóvenes del Caribe colombiano acceso a información clara, oportunidades educativas de calidad y herramientas que les permitan tomar decisiones acertadas sobre su futuro académico y profesional.",
    vision:
      "Para el año 2028, ser la feria educativa líder en Colombia, reconocida por su impacto en la orientación vocacional, la internacionalización académica y la conexión efectiva entre educación, empresa y sociedad.",
    offerings: [
      "Acceso directo a universidades e instituciones educativas",
      "Información sobre becas, créditos y financiamiento",
      "Programas de estudio en el exterior",
      "Orientación vocacional especializada",
      "Conferencias y charlas académicas",
      "Espacios de networking y oportunidades laborales"
    ],
    targetAudience: [
      "Estudiantes de secundaria (grados 9°, 10° y 11°)",
      "Estudiantes universitarios",
      "Padres de familia",
      "Jóvenes emprendedores",
      "Instituciones educativas",
      "Empresas del sector educativo y financiero"
    ],
    whyParticipate: [
      "Posicionar tu marca frente a miles de estudiantes",
      "Generar leads calificados",
      "Fortalecer tu presencia en el mercado educativo",
      "Conectar con aliados estratégicos",
      "Impulsar procesos de admisión y matrícula"
    ],
    internationalComponent:
      "Participación de agencias y programas en países como Canadá, Estados Unidos, Australia, España y Reino Unido.",
    expositores: [
      {
        id: "expositor-01",
        name: "Nombre y apellido",
        title: "Profesión o cargo / Institución",
        bio: "Breve resumen del perfil, experiencia y rol frente a los visitantes de la feria. Podrás sustituir este texto por la biografía oficial."
      },
      {
        id: "expositor-02",
        name: "Nombre y apellido",
        title: "Profesión o cargo / Institución",
        bio: "Texto corto orientado a credibilidad y temas que abordará en el evento."
      },
      {
        id: "expositor-03",
        name: "Nombre y apellido",
        title: "Profesión o cargo / Institución",
        bio: "Un párrafo breve basta: enfoque académico, empresarial o de orientación según corresponda."
      }
    ],
    internationalGallery: [
      {
        file: "internacional-01-programas-exterior.webp",
        label: "Programas en el exterior",
        alt: "Estudiantes explorando oportunidades de educación internacional"
      },
      {
        file: "internacional-02-agencias.webp",
        label: "Agencias y aliados",
        alt: "Representantes de agencias educativas internacionales"
      },
      {
        file: "internacional-03-networking-global.webp",
        label: "Conexión global",
        alt: "Networking y encuentros con enfoque internacional"
      }
    ]
  }
];

export const contactData = {
  email: "Strategicexpogroup@gmail.com",
  phone: "+57 314 577 4050",
  instagram: "@strategicexpogroup",
  website: "www.strategicexpogroup.com",
  address: "Barranquilla, Colombia",
  hours: "Lun. a Vie. 9:00 a. m. – 6:00 p. m."
};
