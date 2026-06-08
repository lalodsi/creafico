interface Image {
  name: string,
  url: string
}

export interface SubItem {
  title: string;
  description: string;
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
  description: string;
  subItems?: SubItem[];
  images?: Image[]
}

interface CustomerImages {
  name: string;
  imageUrl: string
}


export const customers: {images: CustomerImages[]} = {
  images: [
    { name: "Roshfrans", imageUrl: "/products/productImage73.jpg" },
    { name: "Gapelli", imageUrl: "/products/productImage63.jpg" },
    { name: "SPC", imageUrl: "/products/productImage64.jpg" },
    { name: "Instituto de ingenieria UNAM", imageUrl: "/products/productImage72.jpg" },
    { name: "Anfitriones", imageUrl: "/products/productImage67.jpg" },
    { name: "Imbera", imageUrl: "/products/productImage65.jpg" },
    { name: "Sportika", imageUrl: "/products/productImage71.jpg" },
    { name: "Maxigas", imageUrl: "/products/productImage70.jpg" },
    { name: "Widex", imageUrl: "/products/productImage74.jpg" },
    { name: "Koblenz", imageUrl: "/products/productImage69.jpg" },
    { name: "Coresa", imageUrl: "/products/productImage66.jpg" },
  ]
}

export const services: Service[] = [
  {
    layoutType: "Right",
    title: "Muebles Exhibición",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
      {
        layoutType: "Grid",
        title: "Exhibidores Madera",
        description:
          "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
        images: [
          { name: "Imagen Madera 1", url: "/products/productImage75.jpg" },
          { name: "Imagen Madera 2", url: "/products/productImage76.jpg" },
          { name: "Imagen Madera 3", url: "/products/productImage77.jpg" }
        ]
      },
      {
        layoutType: "Grid",
        title: "Exhibidores Metal",
        description:
          "Reprehenderit consequat sunt culpa sint aliquip id veniam id. Dolore veniam est proident est elit exercitation. Do irure labore Lorem qui aute nulla cupidatat do eu ipsum elit. Irure in qui incididunt labore reprehenderit minim duis dolore nulla sunt voluptate. Id sint qui nisi cupidatat sit excepteur quis. Eu esse amet sunt ex aute occaecat aliqua quis. Minim esse irure magna amet ut do laborum eiusmod.",
          images: [
          { name: "Imagen Metalico 1", url: "/products/productImage83.jpg" },
          { name: "Imagen Metalico 2", url: "/products/productImage80.jpg" },
          { name: "Imagen Metalico 3", url: "/products/productImage81.jpg" },
          { name: "Imagen Metalico 4", url: "/products/productImage82.jpg" },
          { name: "Imagen Metalico 5", url: "/products/productImage78.jpg" },
        ]
      },
    ],
  },
  {
    layoutType: "Right",
    title: "Pops",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
      {
        layoutType: "Right",
        title: "Coroplast",
        description: "lorem",
        images: [
          { name: "Imagen Pops Coroplast 1", url: "/products/productImage3.jpg" },
          { name: "Imagen Pops Coroplast 1", url: "/products/productImage4.jpg" },
          { name: "Imagen Pops Coroplast 1", url: "/products/productImage5.jpg" },
          { name: "Imagen Pops Coroplast 1", url: "/products/productImage88.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Tótems",
        description: "lorem",
        images: [
          { name: "Imagen Pops Totems 1", url: "/products/productImage84.jpg" },
          { name: "Imagen Pops Totems 1", url: "/products/productImage85.jpg" },
          { name: "Imagen Pops Totems 1", url: "/products/productImage86.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Danglers",
        description:
          "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
        images: [
          { name: "Imagen danglers 1", url: "/products/productImage39.jpg" },
          { name: "Imagen danglers 1", url: "/products/productImage40.jpg" },
          { name: "Imagen danglers 1", url: "/products/productImage41.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Glomificadores",
        description: "",
      },
    ],
  },
  {
    layoutType: "Carousel",
    title: "Stands",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
      {
        layoutType: "Caroucel",
        title: "Stands (Ferias)",
        description: "",
        images: [
          { name: "Imagen stands 1", url: "/products/productImage68.jpg" },
          { name: "Imagen stands 2", url: "/products/productImage57.jpg" },
          { name: "Imagen stands 5", url: "/products/productImage35.jpg" },
          { name: "Imagen stands 6", url: "/products/productImage24.jpg" },
        ],
      },
      {
        layoutType: "Right",
        title: "Escenografias",
        description: "",
        images: [
          { name: "Imagen stands 3", url: "/products/productImage46.jpg" },
          { name: "Imagen stands 4", url: "/products/productImage13.jpg" },
        ]
      }
    ]
  },
  {
    layoutType: "Right",
    title: "Lona, Tela y Letreros Impresos",
    description: "",
    images: [
      { name: "Imagen Pops Plotter 1", url: "/products/productImage53.jpg" },
      { name: "Imagen Pops Plotter 2", url: "/products/productImage51.jpg" },
      { name: "Imagen Pops Plotter 3", url: "/products/productImage52.jpg" },
    ],
    subItems: [
      {
        layoutType: "Right",
        title: "Mantas",
        description: "",
      },
      {
        layoutType: "Right",
        title: "Pendones y banners (con soporte)",
        description: "",
        images: [
          { name: "Imagen banners 1", url: "/products/productImage27.jpg" },
          { name: "Imagen banners 1", url: "/products/productImage28.jpg" },
          { name: "Imagen banners 1", url: "/products/productImage29.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Serialización Industrial (Letreros)",
        description: "",
        images: [
          { name: "Imagen lonas 1", url: "/products/productImage17.jpg" },
          { name: "Imagen lonas 1", url: "/products/productImage14.jpg" },
          { name: "Imagen lonas 1", url: "/products/productImage15.jpg" },
          { name: "Imagen lonas 1", url: "/products/productImage16.jpg" },
          { name: "Imagen lonas 1", url: "/products/productImage18.jpg" },
          { name: "Imagen lonas 1", url: "/products/productImage19.jpg" },
          { name: "Imagen lonas 1", url: "/products/productImage20.jpg" },
          { name: "Imagen lonas 1", url: "/products/productImage21.jpg" },
        ]
      }

    ]
  },
  {
    layoutType: "Grid",
    title: "Impresión Papel (Offset) y Polypap",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
      {
        layoutType: "Right",
        title: "Folletos",
        description: "",
        images: [
          { name: "Imagen impresion papel 1", url: "/products/productImage22.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Revistas y Libros",
        description: "",
        images: [
          { name: "Imagen impresion papel 1", url: "/products/productImage23.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Posters",
        description: "",
        images: [
          { name: "Imagen impresion papel 1", url: "/products/productImage26.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Etiquetas Adheribles",
        description:
          "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
        images: [
          { name: "Imagen etiquetas 1", url: "/products/productImage47.jpg" },
          { name: "Imagen etiquetas 1", url: "/products/productImage48.jpg" },
          { name: "Imagen etiquetas 1", url: "/products/productImage49.jpg" },
          { name: "Imagen etiquetas 1", url: "/products/productImage50.jpg" },
          { name: "Imagen impresion papel 1", url: "/products/productImage25.jpg" },
        ]
      },
    ]
  },
  {
    layoutType: "Grid",
  title: "Branding (rotulacion) vinil adhesivo",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen branding rotulacion 1", url: "/products/productImage8.jpg" },
      { name: "Imagen branding rotulacion 1", url: "/products/productImage10.jpg" },
      { name: "Imagen branding rotulacion 1", url: "/products/productImage9.jpg" },
      { name: "Imagen branding rotulacion 1", url: "/products/productImage6.jpg" },
      { name: "Imagen branding rotulacion 1", url: "/products/productImage11.jpg" },
      { name: "Imagen branding rotulacion 1", url: "/products/productImage12.jpg" },
      { name: "Imagen branding rotulacion 1", url: "/products/productImage7.jpg" },
    ],
    subItems: [
      {
        layoutType: "Right",
        title: "Vehiculos",
        description: "",
        images: [
          { name: "Imagen branding rotulacion 1", url: "/products/productImage8.jpg" },
          { name: "Imagen branding rotulacion 1", url: "/products/productImage10.jpg" },
          { name: "Imagen branding rotulacion 1", url: "/products/productImage9.jpg" },
          { name: "Imagen branding rotulacion 1", url: "/products/productImage6.jpg" },
          { name: "Imagen branding rotulacion 1", url: "/products/productImage11.jpg" },
          { name: "Imagen branding rotulacion 1", url: "/products/productImage12.jpg" },
          { name: "Imagen branding rotulacion 1", url: "/products/productImage7.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Camiones",
        description:"",
        images: [
          { name: "Imagen showcar 1", url: "/products/productImage54.jpg" },
          { name: "Imagen showcar 1", url: "/products/productImage55.jpg" },
        ]
      },
    ]
  },
  {
    layoutType: "Grid",
    title: "Materiales para eventos y convenciones",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
      {
        layoutType: "Right",
        title: "Gafetes",
        description: "",
        images: [
          { name: "Imagen materiales eventos 1", url: "/products/productImage56.jpg" },
          { name: "Imagen materiales eventos 1", url: "/products/productImage58.jpg" },
          { name: "Imagen materiales eventos 1", url: "/products/productImage61.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Diplomas, Bipticos",
        description: "",
        images: [
          { name: "Imagen materiales eventos 1", url: "/products/productImage60.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Serialización Programa",
        description: "",
        images: [
          { name: "Imagen materiales eventos 1", url: "/products/productImage59.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Cordones para Gafetes",
        description: "",
      },
      {
        layoutType: "Right",
        title: "Bandas Edecan",
        description: "",
        images: [
          { name: "Imagen materiales eventos 1", url: "/products/productImage62.jpg" },
        ]
      },
    ]
  },
  {
    layoutType: "Grid",
    title: "Impresión etiquetas adheribles",
    description: "",
    subItems: [
      {
        layoutType: "Right",
        title: "Papel laminado",
        description: ""
      },
      {
        layoutType: "Right",
        title: "Vinil Estático",
        description: ""
      },
      {
        layoutType: "Right",
        title: "Vinil Adherible",
        description: ""
      },
    ]
  },
  {
    layoutType: "Grid",
    title: "Ilustraciones",
    description: "",
    subItems: [
      {
        layoutType: "Right",
        title: "Personajes",
        description: "",
        images:[
          { name: "Imagen ilustraciones 1", url: "/products/productImage42.jpg" },
          { name: "Imagen ilustraciones 1", url: "/products/productImage45.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Comics",
        description: "",
        images: [
          { name: "Imagen ilustraciones 1", url: "/products/productImage44.jpg" },
        ]
      },
      {
        layoutType: "Right",
        title: "Viñetas",
        description: "",
        images: [
          { name: "Imagen ilustraciones 1", url: "/products/productImage43.jpg" }
        ]
      },
    ]
  },
  {
    layoutType: "Grid",
    title: "Papelería Fina (Serigrafia, offset, grabado, hot stamping)",
    description: "",
    subItems: [
      {
        layoutType: "Right",
        title: "Empresarial",
        description: ""
      },
      {
        layoutType: "Right",
        title: "Invitaciones festejos",
        description: ""
      },
    ]
  },
  {
    layoutType: "Grid",
    title: "Maletas y estuches personalizados",
    description: "",
    images: [
      { name: "Imagen porta laptop 1", url: "/products/productImage34.jpg" },
      { name: "Imagen porta laptop 1", url: "/products/productImage36.jpg" },
      { name: "Imagen porta laptop 1", url: "/products/productImage37.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage30.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage31.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage32.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage33.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage87.jpg" },
    ]
  }
];



