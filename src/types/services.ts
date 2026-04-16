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


export interface Service {
  title: string;
  layoutType: string;
  description: string;
  subItems?: SubItem[];
  images?: Image[]
}

interface Customer {
  name: string;
  imageUrl: string
}

export const customers = {
  images: [
    { name: "Roshfrans", url: "/products/productImage73.jpg" },
    { name: "Gapelli", url: "/products/productImage63.jpg" },
    { name: "SPC", url: "/products/productImage64.jpg" },
    { name: "Instituto de ingenieria UNAM", url: "/products/productImage72.jpg" },
    { name: "Anfitriones", url: "/products/productImage67.jpg" },
    { name: "Imbera", url: "/products/productImage65.jpg" },
    { name: "Sportika", url: "/products/productImage71.jpg" },
    { name: "Maxigas", url: "/products/productImage70.jpg" },
    { name: "Widex", url: "/products/productImage74.jpg" },
    { name: "Koblenz", url: "/products/productImage69.jpg" },
    { name: "Coresa", url: "/products/productImage66.jpg" },
  ]
}

export const services: Service[] = [
  {
    layoutType: "Right",
    title: "Exhibidores de producto",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
      {
        layoutType: "Right",
        title: "Madera",
        description:
          "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
        images: [
          { name: "Imagen Madera 1", url: "/products/productImage75.jpg" },
          { name: "Imagen Madera 2", url: "/products/productImage76.jpg" },
          { name: "Imagen Madera 3", url: "/products/productImage77.jpg" }
        ]
      },
      {
        layoutType: "Right",
        title: "Metálicos",
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
        title: "Plotter",
        description: "lorem",
        images: [
          { name: "Imagen Pops Plotter 1", url: "/products/productImage53.jpg" },
          { name: "Imagen Pops Plotter 2", url: "/products/productImage51.jpg" },
          { name: "Imagen Pops Plotter 3", url: "/products/productImage52.jpg" },
        ]
      },
    ],
  },
  {
    layoutType: "Right",
    title: "Stands",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen stands 1", url: "/products/productImage68.jpg" },
      { name: "Imagen stands 2", url: "/products/productImage57.jpg" },
      { name: "Imagen stands 3", url: "/products/productImage46.jpg" },
      { name: "Imagen stands 4", url: "/products/productImage13.jpg" },
      { name: "Imagen stands 5", url: "/products/productImage35.jpg" },
      { name: "Imagen stands 6", url: "/products/productImage24.jpg" },
    ]
  },
  {
    layoutType: "Right",
    title: "Branding rotulacion",
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
    ]
  },
  {
    layoutType: "Right",
    title: "Lonas",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
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
  },
  {
    layoutType: "Right",
    title: "Impresion",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen impresion papel 1", url: "/products/productImage26.jpg" },
      { name: "Imagen impresion papel 1", url: "/products/productImage23.jpg" },
      { name: "Imagen impresion papel 1", url: "/products/productImage25.jpg" },
      { name: "Imagen impresion papel 1", url: "/products/productImage22.jpg" },
    ]
  },
  {
    layoutType: "Right",
    title: "Banners",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen banners 1", url: "/products/productImage27.jpg" },
      { name: "Imagen banners 1", url: "/products/productImage28.jpg" },
      { name: "Imagen banners 1", url: "/products/productImage29.jpg" },
    ]
  },
  {
    layoutType: "Right",
    title: "Burreras",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen burreras 1", url: "/products/productImage30.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage31.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage32.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage33.jpg" },
      { name: "Imagen burreras 1", url: "/products/productImage87.jpg" },
    ]
  },
  {
    layoutType: "Right",
    title: "PortaLaptop",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen porta laptop 1", url: "/products/productImage34.jpg" },
      { name: "Imagen porta laptop 1", url: "/products/productImage36.jpg" },
      { name: "Imagen porta laptop 1", url: "/products/productImage37.jpg" },
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
    title: "Ilustraciones",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen ilustraciones 1", url: "/products/productImage42.jpg" },
      { name: "Imagen ilustraciones 1", url: "/products/productImage43.jpg" },
      { name: "Imagen ilustraciones 1", url: "/products/productImage44.jpg" },
      { name: "Imagen ilustraciones 1", url: "/products/productImage45.jpg" },
    ]
  },
  {
    layoutType: "Right",
    title: "Etiquetas",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen etiquetas 1", url: "/products/productImage47.jpg" },
      { name: "Imagen etiquetas 1", url: "/products/productImage48.jpg" },
      { name: "Imagen etiquetas 1", url: "/products/productImage49.jpg" },
      { name: "Imagen etiquetas 1", url: "/products/productImage50.jpg" },
    ]
  },
  {
    layoutType: "Right",
    title: "Showcar",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen showcar 1", url: "/products/productImage54.jpg" },
      { name: "Imagen showcar 1", url: "/products/productImage55.jpg" },
    ]
  },
  {
    layoutType: "Right",
    title: "Materiales Eventos",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    images: [
      { name: "Imagen materiales eventos 1", url: "/products/productImage56.jpg" },
      { name: "Imagen materiales eventos 1", url: "/products/productImage58.jpg" },
      { name: "Imagen materiales eventos 1", url: "/products/productImage59.jpg" },
      { name: "Imagen materiales eventos 1", url: "/products/productImage60.jpg" },
      { name: "Imagen materiales eventos 1", url: "/products/productImage61.jpg" },
      { name: "Imagen materiales eventos 1", url: "/products/productImage62.jpg" },
    ]
  },
];


