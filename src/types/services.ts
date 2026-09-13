interface Image {
  name: string,
  url: string
}

export interface SubItem {
  title: string;
  shortDescription?: string;
  description?: string;
  layoutType: string;
  images?: Image[]
}

type layoutType=
  | "Right"
  | "Left"
  | "Carousel"
  | "HoverExpand"
  | "Masonry"
  | "Grid"
  | "Tabs"
  
export interface Service {
  title: string;
  layoutType: layoutType;
  shortDescription?: string;
  description: string;
  subItems?: SubItem[];
  images?: Image[];
}

interface CustomerImages {
  name: string;
  imageUrl: string
}


export const customers: {images: CustomerImages[]} = {
  images: [
    { name: "Roshfrans", imageUrl: "./products/productImage73.jpg" },
    { name: "Gapelli", imageUrl: "./products/productImage63.jpg" },
    { name: "SPC", imageUrl: "./products/productImage64.jpg" },
    { name: "Instituto de ingenieria UNAM", imageUrl: "./products/productImage72.jpg" },
    { name: "Anfitriones", imageUrl: "./products/productImage67.jpg" },
    { name: "Imbera", imageUrl: "./products/productImage65.jpg" },
    { name: "Sportika", imageUrl: "./products/productImage71.jpg" },
    { name: "Maxigas", imageUrl: "./products/productImage70.jpg" },
    { name: "Widex", imageUrl: "./products/productImage74.jpg" },
    { name: "Koblenz", imageUrl: "./products/productImage69.jpg" },
    { name: "Coresa", imageUrl: "./products/productImage66.jpg" },
  ]
}

export const services: Service[] = [
  {
    "layoutType": "Right",
    "title": "Muebles Exhibición",
    "description": "",
    "subItems": [
      {
        "layoutType": "Grid",
        "title": "Exhibidores Madera",
        "description": "En un mercado competitivo, la presentación lo es todo. Nuestros exhibidores de madera están diseñados para resaltar la calidad de tus productos mientras optimizan el espacio en tu punto de venta. Fabricados con materiales duraderos y acabados de primera, estos muebles no solo son funcionales, sino que también transmiten una imagen de prestigio, calidez y profesionalismo. Nos adaptamos a las necesidades de tu empresa, creando estructuras a la medida que refuerzan tu identidad de marca. Atrae más clientes, mejora la experiencia de compra y aumenta tus ventas con soluciones de exhibición que realmente marcan la diferencia.",
        "images": [
          {
            "name": "Imagen Madera 1",
            "url": "./products/productImage75.jpg"
          },
          {
            "name": "Imagen Madera 2",
            "url": "./products/productImage76.jpg"
          },
          {
            "name": "Imagen Madera 3",
            "url": "./products/productImage77.jpg"
          }
        ],
        "shortDescription": "Destaca tus productos con nuestros exhibidores de madera. Diseños a la medida que aportan elegancia, resistencia y un toque natural a tu punto de venta. Ideales para captar la atención de tus clientes y mejorar la presentación de tu marca en cualquier espacio comercial."
      },
      {
        "layoutType": "Grid",
        "title": "Exhibidores Metal",
        "description": "Nuestros exhibidores de metal son la inversión perfecta para marcas que buscan durabilidad y un diseño industrial o moderno. Fabricados para resistir el desgaste del uso diario en puntos de venta de alto tráfico, garantizan que tus productos estén siempre seguros y bien presentados. Ofrecemos estructuras modulares y personalizables que se adaptan a diferentes tamaños y pesos, optimizando cada centímetro de tu espacio comercial. Ya sea para supermercados, ferreterías o boutiques, estos muebles metálicos combinan resistencia técnica con un acabado estético impecable, proyectando una imagen de solidez y confiabilidad que tus clientes notarán de inmediato.",
        "images": [
          {
            "name": "Imagen Metalico 1",
            "url": "./products/productImage83.jpg"
          },
          {
            "name": "Imagen Metalico 2",
            "url": "./products/productImage80.jpg"
          },
          {
            "name": "Imagen Metalico 3",
            "url": "./products/productImage81.jpg"
          },
          {
            "name": "Imagen Metalico 4",
            "url": "./products/productImage82.jpg"
          },
          {
            "name": "Imagen Metalico 5",
            "url": "./products/productImage78.jpg"
          }
        ],
        "shortDescription": "Maximiza el impacto visual con exhibidores de metal de alta resistencia. Diseñados para soportar alto tráfico y carga, ofrecen una solución moderna, versátil y duradera para presentar tus productos de manera organizada y profesional en cualquier tienda o evento."
      }
    ]
  },
  {
    "layoutType": "Right",
    "title": "Pops",
    "description": "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    "subItems": [
      {
        "layoutType": "Left",
        "title": "Coroplast",
        "description": "El coroplast es la solución ideal para empresas que necesitan publicidad temporal o señalización de alto impacto sin exceder su presupuesto. Este material plástico corrugado es extremadamente ligero, fácil de instalar y resistente a la intemperie, lo que lo hace perfecto tanto para interiores como exteriores. Con nuestra impresión de alta calidad, tus gráficos lucirán nítidos y con colores vibrantes, asegurando que tu mensaje promocional llegue de manera efectiva a tu público objetivo. Ideal para puntos de venta, ferias, campañas políticas o eventos especiales, el coroplast ofrece una excelente relación costo-beneficio para destacar tu marca rápidamente.",
        "images": [
          {
            "name": "Imagen Pops Coroplast 1",
            "url": "./products/productImage3.jpg"
          },
          {
            "name": "Imagen Pops Coroplast 1",
            "url": "./products/productImage4.jpg"
          },
          {
            "name": "Imagen Pops Coroplast 1",
            "url": "./products/productImage5.jpg"
          },
          {
            "name": "Imagen Pops Coroplast 1",
            "url": "./products/productImage88.jpg"
          }
        ],
        "shortDescription": "Impulsa tus campañas con material POP en coroplast. Ligero, económico y altamente resistente a exteriores e interiores. Perfecto para señalización, promociones temporales y lanzamientos de productos, garantizando visibilidad inmediata y colores vibrantes que atrapan la mirada de tus clientes."
      },
      {
        "layoutType": "Right",
        "title": "Tótems",
        "description": "Destaca frente a la competencia con nuestros tótems publicitarios, la herramienta perfecta para captar la atención desde cualquier ángulo. Gracias a su diseño vertical, aprovechan al máximo el espacio en pasillos, entradas de tiendas, exposiciones y centros comerciales, ofreciendo un área de exhibición amplia y visible desde la distancia. Fabricados con materiales de alta calidad y excelente estabilidad, nuestros tótems son ligeros, fáciles de transportar y montar. Personalízalos con la identidad de tu empresa para comunicar promociones, informar sobre nuevos servicios o simplemente reforzar el posicionamiento de tu marca con una presencia imponente y profesional.",
        "images": [
          {
            "name": "Imagen Pops Totems 1",
            "url": "./products/productImage84.jpg"
          },
          {
            "name": "Imagen Pops Totems 1",
            "url": "./products/productImage85.jpg"
          },
          {
            "name": "Imagen Pops Totems 1",
            "url": "./products/productImage86.jpg"
          }
        ],
        "shortDescription": "Domina el espacio visual de tu punto de venta con nuestros tótems publicitarios. Estructuras verticales, elegantes y fáciles de armar que posicionan tu marca a la altura de la mirada del cliente, ideales para destacar lanzamientos, promociones y dar la bienvenida."
      },
      {
        "layoutType": "Left",
        "title": "Danglers",
        "description": "Los danglers son pequeñas pero poderosas piezas de comunicación visual diseñadas para sobresalir en los estantes y anaqueles. Al estar suspendidos y moverse sutilmente con el aire, rompen el campo visual estático del supermercado o tienda, atrayendo la mirada del consumidor justo en el momento de la decisión de compra. Son la opción perfecta para Pymes que desean destacar promociones, descuentos especiales o el lanzamiento de un nuevo producto de forma económica y directa. Impresos con la más alta resolución, garantizamos colores llamativos y troquelados precisos que harán que tu marca resalte sobre la competencia.",
        "images": [
          {
            "name": "Imagen danglers 1",
            "url": "./products/productImage39.jpg"
          },
          {
            "name": "Imagen danglers 1",
            "url": "./products/productImage40.jpg"
          },
          {
            "name": "Imagen danglers 1",
            "url": "./products/productImage41.jpg"
          }
        ],
        "shortDescription": "Atrapa la atención en los anaqueles con danglers personalizados. Estos elementos publicitarios colgantes rompen la monotonía del pasillo y dirigen la mirada del consumidor directamente hacia tu producto, siendo una herramienta económica y efectiva para impulsar compras de impulso."
      },
      {
        "layoutType": "Right",
        "title": "Glomificadores",
        "description": "Dale a tu producto estrella el escenario que merece con nuestros glorificadores de mostrador. Estas piezas de exhibición están diseñadas específicamente para aislar y destacar un solo artículo, elevando su valor percibido y atrayendo todas las miradas. Son ideales para lanzamientos de cosméticos, tecnología, botellas de licores o cualquier producto de alta gama que requiera un trato visual preferencial. Fabricados con materiales elegantes y opciones de iluminación o texturas personalizadas, los glorificadores transforman un simple mostrador en una experiencia de marca premium. Aumenta la interacción del cliente y asegura que tu producto sea el centro de atención indiscutible.",
        "shortDescription": "Realza tus productos premium con glorificadores a la medida. Estructuras de exhibición individuales que otorgan protagonismo exclusivo a tu artículo, proyectando lujo y exclusividad en vitrinas, mostradores y puntos de cobro para incentivar la venta directa."
      }
    ]
  },
  {
    "layoutType": "Right",
    "title": "Stands",
    "description": "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    "subItems": [
      {
        "layoutType": "Carousel",
        "title": "Stands (Ferias)",
        "description": "Tu presencia en una feria o exposición es una oportunidad única para conectar con nuevos clientes, y nuestro servicio de diseño y armado de stands asegura que dejes una impresión inolvidable. Creamos espacios arquitectónicos efímeros que combinan estética, funcionalidad y confort, reflejando fielmente los valores y la imagen de tu empresa. Desde estructuras modulares prácticas hasta diseños a la medida con áreas de atención, exhibición de productos y almacenamiento. Nos encargamos de que tu stand no solo sea visualmente impactante, sino también un entorno estratégico que invite a los asistentes a acercarse, interactuar y hacer grandes negocios contigo.",
        "images": [
          {
            "name": "Imagen stands 1",
            "url": "./products/productImage68.jpg"
          },
          {
            "name": "Imagen stands 2",
            "url": "./products/productImage57.jpg"
          },
          {
            "name": "Imagen stands 5",
            "url": "./products/productImage35.jpg"
          },
          {
            "name": "Imagen stands 6",
            "url": "./products/productImage24.jpg"
          }
        ],
        "shortDescription": "Brilla en tu próxima exposición con nuestros stands para ferias. Diseños atractivos, funcionales y adaptados a tu identidad corporativa que optimizan el espacio para recibir clientes, cerrar negocios y hacer que tu empresa destaque entre la multitud de manera profesional."
      },
      {
        "layoutType": "Left",
        "title": "Escenografias",
        "description": "La atmósfera de tu evento es clave para mantener la atención y el interés de tu audiencia. Nuestro servicio de diseño de escenografías transforma espacios comunes en entornos extraordinarios y cien por ciento alineados con la identidad de tu empresa. Ya sea para una convención anual, el lanzamiento de un nuevo producto, una entrega de premios o un congreso, diseñamos y construimos fondos de escenario, elementos tridimensionales, apoyos visuales y estructuras que realzan la experiencia de los asistentes. Con materiales de primera y un cuidado absoluto por los detalles, garantizamos que tu evento proyecte máxima profesionalidad, modernidad y prestigio.",
        "images": [
          {
            "name": "Imagen stands 3",
            "url": "./products/productImage46.jpg"
          },
          {
            "name": "Imagen stands 4",
            "url": "./products/productImage13.jpg"
          }
        ],
        "shortDescription": "Transforma tus eventos corporativos con escenografías impactantes. Creamos ambientes inmersivos, profesionales y personalizados para convenciones, presentaciones de productos y congresos, asegurando que el mensaje de tu empresa se transmita en un escenario que refleje innovación y liderazgo."
      }
    ]
  },
  {
    "layoutType": "Right",
    "title": "Lona, Tela y Letreros Impresos",
    "description": "",
    "images": [
      {
        "name": "Imagen Pops Plotter 1",
        "url": "./products/productImage53.jpg"
      },
      {
        "name": "Imagen Pops Plotter 2",
        "url": "./products/productImage51.jpg"
      },
      {
        "name": "Imagen Pops Plotter 3",
        "url": "./products/productImage52.jpg"
      }
    ],
    "subItems": [
      {
        "layoutType": "Right",
        "title": "Mantas",
        "description": "Las mantas publicitarias siguen siendo una de las formas más efectivas y rentables de generar visibilidad inmediata para tu negocio. Impresas en materiales de gran durabilidad y con tintas resistentes a los rayos UV y la lluvia, garantizan que tu mensaje permanezca vibrante y legible incluso en condiciones climáticas adversas. Son fáciles de instalar, enrollar y transportar, lo que las hace ideales para fachadas, bardas, eventos deportivos o ferias. Ya sea que necesites anunciar una gran liquidación, la apertura de una nueva sucursal o una campaña de concientización, nuestras mantas ofrecen el alcance masivo que tu Pyme necesita sin comprometer el presupuesto.",
        "shortDescription": "Comunica tus mensajes a lo grande con mantas publicitarias impresas en alta resolución. Resistentes a exteriores, económicas y muy versátiles, son la solución más práctica para anunciar aperturas, promociones o eventos masivos, asegurando que tu negocio sea visto por todos."
      },
      {
        "layoutType": "Left",
        "title": "Pendones y banners (con soporte)",
        "description": "Proyecta una imagen corporativa impecable en cualquier lugar con nuestros pendones y banners portátiles, como los populares roll-ups o arañas (X-banners). Estas estructuras son el aliado perfecto para vendedores, promotores y Pymes que participan constantemente en ferias, congresos o que desean destacar promociones en la entrada de su local. Su mecanismo retráctil o plegable permite un armado en cuestión de segundos sin necesidad de herramientas. Además, la lona o tela impresa ofrece una calidad fotográfica excepcional que hace resaltar tu logotipo y mensajes clave. Son una inversión duradera, ya que puedes reutilizar el soporte y simplemente cambiar el gráfico publicitario.",
        "images": [
          {
            "name": "Imagen banners 1",
            "url": "./products/productImage27.jpg"
          },
          {
            "name": "Imagen banners 1",
            "url": "./products/productImage28.jpg"
          },
          {
            "name": "Imagen banners 1",
            "url": "./products/productImage29.jpg"
          }
        ],
        "shortDescription": "Lleva tu marca a donde quieras con nuestros pendones y banners con soporte. Ligeros, portátiles y de armado rápido, son ideales para exposiciones, recepciones y puntos de venta. Ofrecen una excelente visibilidad vertical y gráficos nítidos que atraen miradas."
      },
      {
        "layoutType": "Grid",
        "title": "Serialización Industrial (Letreros)",
        "description": "La seguridad y la organización son pilares fundamentales para el correcto funcionamiento de cualquier empresa, fábrica o almacén. Nuestro servicio de señalización y letreros industriales está diseñado para soportar entornos exigentes, utilizando materiales rígidos, cintas reflectantes y tintas de alta resistencia química y al desgaste. Creamos letreros de rutas de evacuación, zonas de peligro, identificación de áreas, reglas de seguridad y normativas de protección civil, todos elaborados con tipografías claras y pictogramas estandarizados. Con nuestra señalética, no solo garantizas un entorno de trabajo más seguro para tus empleados, sino que también cumples con las inspecciones gubernamentales, proyectando profesionalismo.",
        "images": [
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage17.jpg"
          },
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage14.jpg"
          },
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage15.jpg"
          },
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage16.jpg"
          },
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage18.jpg"
          },
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage19.jpg"
          },
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage20.jpg"
          },
          {
            "name": "Imagen lonas 1",
            "url": "./products/productImage21.jpg"
          }
        ],
        "shortDescription": "Mantén tu empresa segura y organizada con nuestra señalización industrial. Letreros duraderos, claros y fabricados bajo normas de seguridad, ideales para fábricas, bodegas y corporativos. Ayudan a prevenir accidentes, guiar al personal y cumplir con los requisitos de protección civil."
      }
    ]
  },
  {
    "layoutType": "Grid",
    "title": "Impresión Papel (Offset) y Polypap",
    "description": "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    "subItems": [
      {
        "layoutType": "Right",
        "title": "Folletos",
        "description": "El material impreso sigue siendo una herramienta táctil poderosa para generar confianza y cerrar ventas. Nuestros folletos, ya sean dípticos, trípticos o formatos personalizados, te permiten desglosar la información de tus productos o servicios de forma estructurada, visual y muy profesional. Utilizando impresión offset de última generación, garantizamos colores precisos, textos definidos y una gran variedad de acabados, desde barniz UV hasta plastificados mate o brillante, que aportan un toque premium al tacto. Son ideales para entregas en ferias, envíos por correo, buzones o para tenerlos disponibles en la recepción de tu empresa, ayudando a que tus prospectos te recuerden.",
        "images": [
          {
            "name": "Imagen impresion papel 1",
            "url": "./products/productImage22.jpg"
          }
        ],
        "shortDescription": "Entrega información clave en las manos de tus clientes con nuestros folletos impresos en alta calidad. Trípticos, dípticos y volantes diseñados para comunicar tus servicios de manera clara y atractiva, siendo una herramienta de ventas indispensable para cualquier Pyme."
      },
      {
        "layoutType": "Left",
        "title": "Revistas y Libros",
        "description": "Publicar un catálogo detallado, una revista corporativa o un libro conmemorativo es una estrategia excelente para consolidar la autoridad de tu marca en el mercado. Ofrecemos servicios completos de impresión editorial mediante tecnología offset, lo que asegura una consistencia de color absoluta y la más alta calidad fotográfica en cada página. Manejamos una amplia gama de gramajes y tipos de papel, incluyendo couché, bond y ecológicos, así como diversas opciones de encuadernación: grapa, hot melt o pasta dura. Ya sea para presentar tus líneas de productos de temporada, manuales de capacitación internos o publicaciones periódicas, te entregamos un producto final superior.",
        "images": [
          {
            "name": "Imagen impresion papel 1",
            "url": "./products/productImage23.jpg"
          }
        ],
        "shortDescription": "Dale prestigio a tus contenidos con nuestra impresión de revistas, catálogos y libros. Ofrecemos encuadernación profesional, papel de alta calidad y acabados impecables para que tus publicaciones corporativas, manuales o portafolios destaquen y dejen una impresión duradera en tus clientes."
      },
      {
        "layoutType": "Right",
        "title": "Posters",
        "description": "Los posters son un medio de comunicación clásico y sumamente efectivo por su capacidad para captar la atención en segundos gracias a su tamaño y diseño visual. En nuestra imprenta, producimos carteles y posters con una calidad de imagen sorprendente, ideales para promocionar próximos eventos, ofertas especiales de temporada o incluso para exhibir la misión y valores en los pasillos de tu oficina. Gracias a la impresión en papeles estucados de alto rendimiento o en Polypap (un sustrato sintético resistente al desgarro y la humedad), garantizamos durabilidad y una apariencia siempre nítida. Una solución rápida y económica para vestir cualquier espacio.",
        "images": [
          {
            "name": "Imagen impresion papel 1",
            "url": "./products/productImage26.jpg"
          }
        ],
        "shortDescription": "Decora, anuncia e impacta con nuestros posters de alta resolución. Impresos en papel de excelente gramaje y colores vivos, son perfectos para promocionar eventos, decorar el punto de venta o comunicar campañas internas dentro de las oficinas de tu empresa."
      },
      {
        "layoutType": "Left",
        "title": "Etiquetas Adheribles",
        "description": "La etiqueta es, muchas veces, el primer contacto visual que un cliente tiene con tu producto; por lo tanto, debe ser impecable. Ofrecemos impresión de etiquetas adheribles en planillas o en rollo, utilizando papel tradicional o materiales avanzados como el Polypap y películas plásticas, que resisten la humedad, la refrigeración y el roce constante. Desde empaques de alimentos y bebidas hasta cosméticos y productos industriales, nuestras etiquetas garantizan una adherencia perfecta y colores vibrantes que no se desvanecen. Puedes elegir acabados como foil metalizado, relieves o barnices para darle a tus artículos un aspecto premium que destaque y eleve tus ventas.",
        "images": [
          {
            "name": "Imagen etiquetas 1",
            "url": "./products/productImage47.jpg"
          },
          {
            "name": "Imagen etiquetas 1",
            "url": "./products/productImage48.jpg"
          },
          {
            "name": "Imagen etiquetas 1",
            "url": "./products/productImage49.jpg"
          },
          {
            "name": "Imagen etiquetas 1",
            "url": "./products/productImage50.jpg"
          },
          {
            "name": "Imagen impresion papel 1",
            "url": "./products/productImage25.jpg"
          }
        ],
        "shortDescription": "Identifica y realza tus productos con etiquetas adheribles de calidad superior. Impresas en papel o materiales sintéticos, con cortes precisos y gran fijación, son el toque final que tu empaque necesita para transmitir profesionalismo y confianza al consumidor final."
      }
    ]
  },
  {
    "layoutType": "Grid",
    "title": "Branding (rotulacion) vinil adhesivo",
    "description": "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    "subItems": [
      {
        "layoutType": "Carousel",
        "title": "Vehiculos",
        "description": "La rotulación de vehículos comerciales es una de las inversiones publicitarias más inteligentes para cualquier Pyme, ya que transforma tus autos utilitarios en espectaculares móviles que generan miles de impactos visuales diarios sin costos recurrentes. Utilizamos viniles fundidos y calandrados de grado automotriz que se adaptan a las curvas del vehículo, asegurando un acabado perfecto y resistente a la intemperie, al lavado y al sol. Además de posicionar tu marca en cada calle de la ciudad, este servicio ayuda a proteger la pintura original de tus unidades. Proyecta confianza, seriedad y profesionalismo cuando tus técnicos o vendedores visiten a tus clientes.",
        "images": [
          {
            "name": "Imagen branding rotulacion 1",
            "url": "./products/productImage8.jpg"
          },
          {
            "name": "Imagen branding rotulacion 1",
            "url": "./products/productImage10.jpg"
          },
          {
            "name": "Imagen branding rotulacion 1",
            "url": "./products/productImage9.jpg"
          },
          {
            "name": "Imagen branding rotulacion 1",
            "url": "./products/productImage6.jpg"
          },
          {
            "name": "Imagen branding rotulacion 1",
            "url": "./products/productImage11.jpg"
          },
          {
            "name": "Imagen branding rotulacion 1",
            "url": "./products/productImage12.jpg"
          },
          {
            "name": "Imagen branding rotulacion 1",
            "url": "./products/productImage7.jpg"
          }
        ],
        "shortDescription": "Convierte la flotilla de tu empresa en publicidad móvil 24/7. Rotulamos vehículos con vinil adhesivo de alta durabilidad, protegiendo la pintura original mientras proyectas una imagen corporativa seria, profesional y visible en cada trayecto que realicen tus colaboradores."
      },
      {
        "layoutType": "Grid",
        "title": "Camiones",
        "description": "Los camiones de carga y reparto ofrecen lienzos en blanco gigantescos que tu empresa no puede desaprovechar. Con nuestro servicio de rotulación en vinil adhesivo de gran formato, transformamos las cajas secas o remolques en poderosos anuncios rodantes. Diseñados para resistir los rigores del transporte pesado, el clima extremo y la fricción, nuestros materiales garantizan que tu marca luzca colores vibrantes y gráficos nítidos por años. Esta estrategia es ideal para empresas de logística, distribuidoras y fabricantes que desean incrementar el reconocimiento de su marca a nivel regional o nacional, consolidando su presencia en el mercado de manera masiva y rentable.",
        "images": [
          {
            "name": "Imagen showcar 1",
            "url": "./products/productImage54.jpg"
          },
          {
            "name": "Imagen showcar 1",
            "url": "./products/productImage55.jpg"
          }
        ],
        "shortDescription": "Maximiza la visibilidad de tu negocio con la rotulación de camiones y cajas secas. Aprovecha el gran formato de tus vehículos de carga para exhibir gráficos espectaculares que llevan el mensaje de tu marca a todas las carreteras y ciudades."
      }
    ]
  },
  {
    "layoutType": "Grid",
    "title": "Materiales para eventos y convenciones",
    "description": "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    "subItems": [
      {
        "layoutType": "Left",
        "title": "Gafetes",
        "description": "La primera impresión de tu evento o corporativo comienza en el registro. Nuestros gafetes personalizados no solo facilitan el control de acceso y la seguridad, sino que también fomentan el networking al identificar claramente a los asistentes, ponentes y staff. Fabricados en PVC rígido, estireno o cartulinas laminadas de alto gramaje, ofrecen una excelente durabilidad y resistencia. Imprimimos con calidad fotográfica para que tu logotipo, códigos de barras o QR y los datos del usuario se lean a la perfección. Es el detalle organizativo indispensable que demuestra el nivel de cuidado, planeación y profesionalismo de tu Pyme ante todos.",
        "images": [
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage56.jpg"
          },
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage58.jpg"
          },
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage61.jpg"
          }
        ],
        "shortDescription": "Organiza y controla el acceso a tus eventos con gafetes corporativos de alta calidad. Claros, duraderos y personalizados con el logo de tu empresa, aportan seguridad y una apariencia profesional a congresos, exposiciones y al control de personal interno."
      },
      {
        "layoutType": "Right",
        "title": "Diplomas, Bipticos",
        "description": "El reconocimiento es una parte vital para la cultura corporativa y la fidelización de clientes. Imprimir diplomas, reconocimientos y dípticos informativos para tus congresos, cursos de capacitación o premiaciones requiere un estándar de calidad superior. Utilizamos papeles texturizados, aperlados y cartulinas finas, acompañados de técnicas de impresión que pueden incluir sellos metálicos (hot stamping) y relieves. Esto garantiza que cada certificado entregado se perciba como un documento de gran valor y prestigio, digno de ser enmarcado. Asimismo, los programas en formato díptico ofrecen a tus asistentes una guía elegante y ordenada sobre el itinerario del evento, reflejando máximo profesionalismo.",
        "images": [
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage60.jpg"
          }
        ],
        "shortDescription": "Reconoce el talento y la participación con diplomas y programas impresos impecablemente. Utilizamos papeles finos y acabados de lujo para certificar logros o guiar a los asistentes en convenciones, aportando elegancia y un gran valor institucional a tus eventos."
      },
      {
        "layoutType": "Left",
        "title": "Serialización Programa",
        "description": "El éxito de un evento corporativo, simposio o convención radica en su organización y puntualidad. Los programas impresos y serializados son la herramienta fundamental para guiar a tus asistentes a través de las diferentes conferencias, talleres y actividades de networking. Nos encargamos de imprimir itinerarios con diseños limpios, tipografías legibles y una estructura intuitiva que refleja la seriedad de tu empresa. Podemos personalizar la serialización o incluir datos variables para asignar lugares o grupos específicos. Al entregar un programa físico de alta calidad, evitas confusiones, mejoras la experiencia general del usuario y demuestras un control logístico absoluto y eficiente.",
        "images": [
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage59.jpg"
          }
        ],
        "shortDescription": "Mantén a tu audiencia informada con programas serializados de diseño claro y atractivo. Ideales para itinerarios de convenciones y congresos, aseguran que cada asistente conozca las actividades del día, horarios y ponentes, facilitando el flujo exitoso de tu evento."
      },
      {
        "layoutType": "Right",
        "title": "Cordones para Gafetes",
        "description": "Los cordones para gafetes, conocidos como lanyards, son mucho más que un simple accesorio de sujeción; son una extensión de tu estrategia de branding. Al estar ubicados en el centro de la vestimenta de cada asistente, garantizan que tu logotipo o el de tus patrocinadores sea visto en cada interacción durante el evento. Fabricados con cintas de poliéster suaves y resistentes, y equipados con ganchos de seguridad o broches desprendibles, ofrecen máxima comodidad para un uso prolongado. Su impresión mediante sublimación permite colores vivos que no se deslavan. Además, son un artículo práctico que los usuarios suelen conservar tras el evento.",
        "images": [
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage58.jpg"
          },
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage56.jpg"
          },
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage61.jpg"
          }
        ],
        "shortDescription": "Complementa la imagen de tu evento con cordones impresos (lanyards) para gafetes. Cómodos, resistentes y personalizables con los colores y el logotipo de tu marca, son un artículo promocional sutil pero altamente visible y útil para cualquier asistente."
      },
      {
        "layoutType": "Left",
        "title": "Bandas Edecan",
        "description": "En exposiciones concurridas o eventos corporativos de gran escala, es crucial que los clientes identifiquen de inmediato a tu equipo de atención. Las bandas para edecanes y promotores son el accesorio perfecto para lograr esta visibilidad con gran elegancia. Confeccionadas en telas satinadas de alta calidad, garantizan una excelente caída y ajuste, brindando comodidad durante largas jornadas de trabajo. Las personalizamos mediante serigrafía, vinil textil o sublimación, asegurando que el logotipo de tu Pyme resalte con nitidez. Este elemento protocolario no solo organiza visualmente a tu staff, sino que también transmite una imagen de exclusividad, orden y excelente servicio al cliente.",
        "images": [
          {
            "name": "Imagen materiales eventos 1",
            "url": "./products/productImage62.jpg"
          }
        ],
        "shortDescription": "Destaca al personal de atención y protocolo con bandas de edecán personalizadas. Elegantes y confeccionadas a la medida, permiten identificar fácilmente al staff de tu marca en exposiciones, activaciones y recepciones, aportando un toque de distinción y profesionalismo."
      }
    ]
  },
  {
    "layoutType": "Grid",
    "title": "Impresión etiquetas adheribles",
    "description": "",
    "subItems": [
      {
        "layoutType": "Left",
        "title": "Papel laminado",
        "description": "Cuando buscas que tu producto destaque en el estante y mantenga una apariencia impecable hasta llegar a las manos del consumidor, las etiquetas de papel laminado son la opción indicada. Este proceso añade una fina capa plástica transparente (en acabado mate o brillante) sobre la impresión, lo que no solo intensifica la viveza de los colores y textos, sino que proporciona una barrera protectora vital. Resisten mucho mejor la fricción durante el transporte, las salpicaduras ocasionales y el polvo, en comparación con el papel regular. Son la alternativa perfecta para Pymes que envasan alimentos secos, suplementos o productos en frascos.",
        "shortDescription": "Protege tus diseños con etiquetas de papel laminado. Cuentan con un recubrimiento plástico que realza los colores y ofrece resistencia adicional contra raspones y humedad leve, ideales para empaques de productos de consumo que requieren un acabado profesional y duradero."
      },
      {
        "layoutType": "Right",
        "title": "Vinil Estático",
        "description": "Las etiquetas y calcomanías de vinil estático ofrecen una solución de señalización increíblemente versátil para tu negocio. Su tecnología permite adherirse firmemente a superficies lisas y no porosas, como vitrinas comerciales, espejos, ventanas de vehículos y pantallas, utilizando únicamente energía estática, es decir, cero residuos de adhesivo. Esto facilita que tu propio personal pueda colocarlas, ajustarlas o retirarlas en cuestión de segundos, sin dañar la superficie ni requerir limpieza posterior. Son excelentes para anunciar rebajas temporales, horarios de atención, promociones de temporada o decoraciones festivas. Al ser reutilizables, representan una inversión publicitaria inteligente y sumamente redituable.",
        "shortDescription": "Comunica promociones sin dejar rastro con etiquetas de vinil estático. Se adhieren a superficies lisas como vidrio o metal mediante estática, sin usar pegamento. Son fáciles de colocar, remover y reutilizar, perfectas para escaparates, ventanas y electrodomésticos."
      },
      {
        "layoutType": "Left",
        "title": "Vinil Adherible",
        "description": "Si tus productos enfrentan condiciones exigentes, el papel tradicional no será suficiente. El vinil adherible es la solución definitiva para etiquetas que requieren durabilidad extrema y un rendimiento a prueba de todo. Al ser un material plástico, es completamente impermeable y no se rasga, soportando la inmersión en agua, condensación por refrigeración, aceites e incluso la exposición prolongada a los rayos UV sin perder su color ni desprenderse. Es el material obligado para bebidas artesanales, productos químicos, cosméticos líquidos, herramientas y maquinaria. Con opciones transparentes, blancos o metalizados, estas etiquetas aseguran una presentación impecable durante toda la vida útil del producto.",
        "shortDescription": "Máxima resistencia para tus empaques y señalización con etiquetas de vinil adherible. Soportan agua, refrigeración, sol y desgaste continuo. Ideales para productos expuestos a condiciones extremas, garantizando que tu marca permanezca intacta en botellas, maquinaria y artículos de uso rudo."
      }
    ]
  },
  {
    "layoutType": "Grid",
    "title": "Ilustraciones",
    "description": "",
    "subItems": [
      {
        "layoutType": "Right",
        "title": "Personajes",
        "description": "En un mercado saturado, generar una conexión emocional con tus clientes es el mayor diferenciador. El diseño de mascotas corporativas o personajes ilustrados humaniza tu marca, aportando carisma y facilidad de recuerdo. Nuestro equipo de ilustradores desarrolla personajes desde cero, alineados a los valores, tono y giro de tu Pyme, ya sea para un enfoque corporativo, educativo o puramente comercial. Un personaje propio se convierte en el vocero perfecto para tus manuales de capacitación internos, campañas en redes sociales, empaques y presentaciones de ventas. Facilita la comunicación de ideas complejas y genera empatía, ayudando a que tu empresa destaque.",
        "images": [
          {
            "name": "Imagen ilustraciones 1",
            "url": "./products/productImage42.jpg"
          },
          {
            "name": "Imagen ilustraciones 1",
            "url": "./products/productImage45.jpg"
          }
        ],
        "shortDescription": "Dale un rostro único a tu marca con el diseño de personajes y mascotas corporativas. Creamos ilustraciones originales que conectan emocionalmente con tu audiencia, humanizan tu empresa y hacen que tus campañas publicitarias sean más memorables, amigables y cercanas."
      },
      {
        "layoutType": "Left",
        "title": "Comics",
        "description": "A veces, los textos corporativos o las instrucciones complejas pueden resultar tediosos para tus clientes o empleados. Utilizar ilustraciones en formato cómic o historieta es una estrategia brillante de 'storytelling' visual para simplificar la información y hacerla entretenida. Diseñamos tiras cómicas personalizadas que pueden explicar el uso de un producto nuevo, ilustrar normativas de seguridad en la empresa, o simplemente narrar la historia de éxito de tu marca en folletos y redes sociales. Al combinar arte visual atractivo con diálogos concisos, garantizamos que tu mensaje sea leído, comprendido y recordado, rompiendo el molde de la publicidad tradicional corporativa.",
        "images": [
          {
            "name": "Imagen ilustraciones 1",
            "url": "./products/productImage44.jpg"
          }
        ],
        "shortDescription": "Cuenta la historia de tu empresa de forma dinámica con ilustraciones estilo cómic. Transformamos manuales, procesos o campañas narrativas en secuencias visuales atractivas y fáciles de digerir, captando la atención inmediata de tus clientes y colaboradores con un formato innovador."
      },
      {
        "layoutType": "Right",
        "title": "Viñetas",
        "description": "Los detalles gráficos hacen una gran diferencia en la presentación de tus documentos profesionales. Las viñetas ilustradas son pequeños elementos visuales creados específicamente para acompañar, separar o enfatizar bloques de texto en tus revistas, manuales corporativos, páginas web o presentaciones ejecutivas. A diferencia de utilizar imágenes de stock genéricas, diseñar viñetas personalizadas asegura que todos los elementos gráficos mantengan el mismo estilo y paleta de colores de tu marca, logrando una cohesión visual perfecta. Son ideales para ilustrar listas de beneficios, pasos de un proceso o categorías de servicios, haciendo que la lectura sea mucho más ágil y persuasiva.",
        "images": [
          {
            "name": "Imagen ilustraciones 1",
            "url": "./products/productImage43.jpg"
          }
        ],
        "shortDescription": "Enriquece tus materiales editoriales y presentaciones con viñetas ilustradas a medida. Pequeñas piezas gráficas que complementan tus textos, rompen la monotonía visual y destacan conceptos clave, aportando un diseño fresco, profesional y fácil de leer a tus documentos empresariales."
      }
    ]
  },
  {
    "layoutType": "Grid",
    "title": "Papelería Fina (Serigrafia, offset, grabado, hot stamping)",
    "description": "",
    "subItems": [
      {
        "layoutType": "Right",
        "title": "Empresarial",
        "description": "En el mundo de los negocios, los pequeños detalles construuyen grandes reputaciones. Entregar una tarjeta de presentación con texturas especiales, relieves y detalles metálicos transmite solidez, confianza y un alto nivel de profesionalismo antes de que digas una sola palabra. Nuestro servicio de papelería fina empresarial combina el arte de las artes gráficas tradicionales, como la serigrafía, el grabado en seco (cuño ciego) y el estampado a calor (hot stamping), para crear piezas corporativas exclusivas. Desde hojas membretadas hasta carpetas de presentación y sobres ejecutivos, utilizamos papeles de algodón o texturizados de la más alta gama, elevando la percepción de tu Pyme.",
        "shortDescription": "Proyecta máxima elegancia y autoridad con nuestra papelería fina empresarial. Tarjetas de presentación, hojas membretadas y sobres impresos con técnicas premium como grabado y hot stamping. El detalle indispensable para cerrar grandes negocios y dejar una impresión invaluable."
      },
      {
        "layoutType": "Right",
        "title": "Invitaciones festejos",
        "description": "Un evento corporativo de alto nivel, como el aniversario de tu empresa, una cena de fin de año con inversionistas o la inauguración de nuevas instalaciones, merece una presentación a la altura. Nuestras invitaciones impresas con técnicas de papelería fina son el preludio perfecto para garantizar la asistencia y generar una enorme expectativa. Combinamos diseño elegante con procesos artesanales como el hot stamping (detalles dorados o plateados), realces y serigrafía sobre cartulinas importadas de lujo. El resultado es una pieza física que transmite exclusividad, agradecimiento y distinción, haciendo que tus invitados se sientan verdaderamente valorados por ser parte de tu éxito.",
        "shortDescription": "Celebra los grandes hitos de tu empresa con invitaciones de alta costura gráfica. Diseños exclusivos con acabados de lujo como serigrafía y hot stamping, perfectos para aniversarios, cenas de gala o inauguraciones, demostrando la importancia y el estatus de tu evento."
      }
    ]
  },
  {
    "layoutType": "Grid",
    "title": "Maletas y estuches personalizados",
    "description": "",
    "images": [
      {
        "name": "Imagen porta laptop 1",
        "url": "./products/productImage34.jpg"
      },
      {
        "name": "Imagen porta laptop 1",
        "url": "./products/productImage36.jpg"
      },
      {
        "name": "Imagen porta laptop 1",
        "url": "./products/productImage37.jpg"
      },
      {
        "name": "Imagen burreras 1",
        "url": "./products/productImage30.jpg"
      },
      {
        "name": "Imagen burreras 1",
        "url": "./products/productImage31.jpg"
      },
      {
        "name": "Imagen burreras 1",
        "url": "./products/productImage32.jpg"
      },
      {
        "name": "Imagen burreras 1",
        "url": "./products/productImage33.jpg"
      },
      {
        "name": "Imagen burreras 1",
        "url": "./products/productImage87.jpg"
      }
    ]
  }
] as const;




