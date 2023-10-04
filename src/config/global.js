export default {
  global: {
    componenteFormativo: 'Análisis de datos y elaboración de informes',
    descripcionCurso:
      'La aplicación de los principios de la estadística en los sistemas de recolección y análisis de los datos puede aportar herramientas para la toma de decisiones en ámbitos empresariales. Comprender el manejo de la información y aplicar las metodologías más adecuadas para su debida conservación, dota de seguridad tanto a la compañía como a los terceros vinculados a esta. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Codificación de la información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tabulación de datos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Gráficos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Análisis de datos',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normativa de seguridad informática',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Informes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura bajo Normas APA ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estructura bajo Norma Técnica de Calidad (NTC 1486)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Hallazgos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Pasos para implementarlo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Acciones correctivas y de mejora',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_007_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.	Estadística',
      referencia:
        'Matemáticas profe Alex. (2017). Conceptos básicos de estadística [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Xq3thcQqwbc',
    },
    {
      tema: '1.4 Tabulación de datos',
      referencia:
        'math2me. (2015). Tabulación de datos cualitativos [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/6oLDbenzHrQ',
    },
    {
      tema: '3.2 Estructura bajo las Normas APA',
      referencia:
        'SENA (2020). Instructivo uso del estilo APA 7ª edición. Dirección de Formación Profesional.',
      tipo: 'Instructivo ',
      link: 'https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cronograma',
      significado:
        'Representación gráfica de actividades dispuestas en un periodo de tiempo.',
    },
    {
      termino: 'Fenómeno',
      significado:
        'Cualquier situación o manifestación que se percibe con los sentidos.',
    },
    {
      termino: 'Inferencia',
      significado: 'Que deduce una afirmación a partir de otra.',
    },
    {
      termino: 'Informe',
      significado: 'Documento elaborado con el fin de compartir información.',
    },
    {
      termino: 'Muestra',
      significado: 'Conjunto de población sobre la que se extraerán los datos.',
    },
    {
      termino: 'Parafraseo',
      significado:
        'Reescribir ideas o conceptos de forma diferente al autor original.',
    },
    {
      termino: 'Población',
      significado: 'Totalidad de individuos objeto de estudio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Evaluación de la Calidad y Acreditación. (2015). Plan de mejoras, herramienta de trabajo. ',
      link:
        'https://www.academia.edu/28134046/PLAN_DE_MEJORAS_Herramienta_de_trabajo_Agencia_Nacional_de_Evaluaci%C3%B3n_de_la_Calidad_y_Acreditaci%C3%B3n  ',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2018). Norma Técnica Colombiana NTC 1486. Documentación. Presentación de trabajos académicos. ',
      link:
        'https://academia.utp.edu.co/seminario-investigacion-II/files/2017/03/Norma_Tecnica_Colombiana_NTC_1486_completa_archivo.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
