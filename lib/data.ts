export type Fair = {
  slug: string;
  name: string;
  tagline: string;
  featuredImage: string;
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

export const allies = [
  "ALCALDÍA DE CARTAGENA",
  "GOBIERNO DE BOLÍVAR",
  "CAMARA COMERCIO DE LA COSTA",
  "UNIVERSIDAD DE LA COSTA",
  "MAS PAÍS",
  "comfamiliar"
] as const;

export const fairs: Fair[] = [
  {
    slug: "feria-educacion-caribe",
    name: "Feria Educación Caribe 2026",
    tagline: "Conectando el talento del Caribe con el futuro",
    dateLabel: "Próximamente en 2026",
    upcomingLabel: "Próximamente",
    location:
      "Barranquilla, Colombia (evento presencial con espacios experienciales, académicos y comerciales)",
    featuredImage:
      "https://placehold.co/1200x600/1E3A8A/FFFFFF?text=Feria+Educaci%C3%B3n+Caribe+2026",
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
      "Participación de agencias y programas en países como Canadá, Estados Unidos, Australia, España y Reino Unido."
  }
];

export const contactData = {
  email: "Strategicexpogroup@gmail.com",
  phone: "+57 314 577 4050",
  instagram: "@strategicexpogroup",
  website: "www.strategicexpogroup.com"
};
