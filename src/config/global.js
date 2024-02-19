export default {
  global: {
    componenteFormativo: 'La ciencia de las cosas ',
    descripcionCurso:
      'La ciencia es el conjunto de conocimientos adquiridos a lo largo de la actividad humana, que busca dar respuesta a través de estudios a preguntas aún sin resolver, acerca de la naturaleza. Apoyada en expresiones y modelos matemáticos que permiten verificar o negar hipótesis con la experimentación. Esta se divide en las ciencias de la vida y las ciencias físicas que serán el centro de esta fundamentación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Física ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Variables físicas y sistema de unidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Marcos de referencia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Magnitudes escalares y vectoriales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Operaciones con vectores ',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cinemática ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos básicos ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Movimiento Uniforme (MU)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Movimiento Uniformemente Acelerado (MUA)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Caída libre',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Movimiento curvilíneo',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Movimiento de proyectiles',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Movimiento circular uniforme',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Dinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Primera ley de Newton',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Conceptos básicos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Segunda ley de Newton',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Equilibrio dinámico',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Tercera ley de Newton ',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Inercia rotacional de los cuerpos sólidos',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Equilibrio rotacional',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Ley de Gravitación universal',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conservación de la energía ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Trabajo efectuado por una fuerza (constante - variable)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Energía cinética ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Termodinámica ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Parámetros termodinámicos fundamentales',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Escalas termométricas ',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Procesos termodinámicos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Electromagnetismo (electromagnético)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Oscilaciones y ondas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Arenas, F. C. (2020). Física universitaria. Córdoba, Jorge Sarmiento Editor - Universitas. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/174517?page=1',
    },
    {
      referencia:
        'Serway, R. A. Jewett, J. W. y Cervantes González, S. R. (2015). Física para ciencias e ingeniería Vol. 1 (9a. ed.). México, D. F., Cengage. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93202?page=35',
    },
    {
      referencia:
        'Serway, R. A. y Vuille, C. (2012). Fundamentos de física. Vol. 1 (9a. ed.). México, D. F., Cengage. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93223?page=59',
    },
    {
      referencia:
        'Serway, R. A. Jewett, J. W. y Cervantes González, S. R. (2015). Física para ciencias e ingeniería Vol. 2 (9a. ed.). México, D. F., Cengage. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93203?page=30',
    },
    {
      referencia:
        'Tejada Betancourt, L. (Ed.) y Gómez López, N. (2020). Física general. Santiago de los Caballeros, Universidad Abierta para Adultos (UAPA). ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Espacio',
      significado:
        'Medio físico en el que se sitúan los cuerpos y los movimientos, y que suele caracterizarse como homogéneo, continuo, tridimensional e ilimitado.',
    },
    {
      termino: 'Patinete',
      significado:
        'Aparato de entretenimiento para deslizarse por superficies duras y lisas que consiste en una plataforma alargada montada sobre dos o cuatro ruedas y provista de una barra y un manillar en el que se apoyan las manos; para montar en él, se coloca un pie sobre la plataforma impulsando desde el suelo con el otro pie.',
    },
    {
      termino: 'Ingeniería',
      significado:
        'Arte y técnica de aplicar los conocimientos científicos a la invención, diseño, perfeccionamiento y manejo de nuevos procedimientos en la industria y otros campos de aplicación científicos.',
    },
    {
      termino: 'Diapasón',
      significado:
        'Barra metálica en forma de U que al vibrar produce un tono determinado; sirve para estudios de acústica, pruebas de audición, etc.',
    },
    {
      termino: 'Oído',
      significado:
        'Órgano corporal que sirve para oír; en el hombre y en los animales superiores es par, se halla situado a ambos lados de la cabeza y consta de oído externo (u oreja) oído medio (o caja del tímpano) y oído interno (o laberinto).',
    },
    {
      termino: 'Eco',
      significado:
        'Fenómeno acústico en que se produce la repetición de un sonido al chocar las ondas sonoras contra un obstáculo y reflejarse hasta llegar al lugar donde se ha emitido.',
    },
    {
      termino: 'Tempestad',
      significado:
        'Fenómeno meteorológico producido por desequilibrios térmicos en la atmósfera, que progresivamente se manifiesta con viento, grandes nubes y culmina en violentas precipitaciones acompañadas de aparato eléctrico como rayos, truenos y relámpagos.',
    },
  ],
  complementario: [
    {
      texto:
        'Moreno M. y Heredia A. Ejercicios de Física. Dinámica, DFISTS Escuela Politécnica Superior Universidad de Alicante.',
      tipo: 'Cuadernillo de ejercicios resueltos',
      descarga: 'downloads/dinamica-ejercicios.pdf',
    },
    {
      texto:
        'Franco G. (2008). Fundamentos físicos. Principio de conservación de la energía.',
      tipo: 'Libro',
      link:
        'http://www.sc.ehu.es/sbweb/ocw-fisica/problemas/dinamica/trabajo/problemas/energia1_problemas.xhtml',
    },
    {
      texto:
        'Chi D. (2016). Problemas Propuestos y Resueltos de Electromagnetismo.',
      tipo: 'Cuadernillo de ejercicios',
      descarga:
        'downloads/Problemas_Propuestos_y_Resueltos_de_Electromagnetismo_RChi.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Hernando José Góngora Valencia',
        cargo: 'Experto temático',
        centro:
          'Centro de Diseño Tecnológico Industrial - Regional Valle del Cauca',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de la Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
