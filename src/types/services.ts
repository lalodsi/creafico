export interface SubItem {
  title: string;
  description: string;
  image?: string;
  layoutType: string;
}

export interface Service {
  title: string;
  layoutType: string;
  description: string;
  subItems?: SubItem[];
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
        image: "/madera1.jpg",
      },
      {
        layoutType: "Right",
        title: "Metálicos",
        description:
          "Reprehenderit consequat sunt culpa sint aliquip id veniam id. Dolore veniam est proident est elit exercitation. Do irure labore Lorem qui aute nulla cupidatat do eu ipsum elit. Irure in qui incididunt labore reprehenderit minim duis dolore nulla sunt voluptate. Id sint qui nisi cupidatat sit excepteur quis. Eu esse amet sunt ex aute occaecat aliqua quis. Minim esse irure magna amet ut do laborum eiusmod.",
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
      },
      {
        layoutType: "Right",
        title: "Coroplast",
        description: "lorem",
      },
      {
        layoutType: "Right",
        title: "Plotter",
        description: "lorem",
      },
    ],
  },
  {
    layoutType: "Right",
    title: "Stands",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Branding rotulacion",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Lonas",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Impresion",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Banners",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Burreras",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "PortaLaptop",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Danglers",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Ilustraciones",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Etiquetas",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Showcar",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
  {
    layoutType: "Right",
    title: "Materiales Eventos",
    description:
      "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
  },
];
