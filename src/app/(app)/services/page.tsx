import clsx from "clsx";
import Image from "next/image";

interface SubItem {
  title: string,
  description: string,
  image?: string,
  
}
interface Service {
  title: string,
  description: string,
  subItems?: SubItem[]
}

const services: Service[] = [
  { title: "Exhibidores de producto", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
    {
      title: "Madera",
      description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
      image: "/madera1.jpg"
    },
    { title: "Metálicos",
      description: "Reprehenderit consequat sunt culpa sint aliquip id veniam id. Dolore veniam est proident est elit exercitation. Do irure labore Lorem qui aute nulla cupidatat do eu ipsum elit. Irure in qui incididunt labore reprehenderit minim duis dolore nulla sunt voluptate. Id sint qui nisi cupidatat sit excepteur quis. Eu esse amet sunt ex aute occaecat aliqua quis. Minim esse irure magna amet ut do laborum eiusmod."
    },
  ] },
  { title: "Pops", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.",
    subItems: [
    { title: "Tótems", description: "lorem" },
    { title: "Coroplast", description: "lorem" },
    { title: "Plotter", description: "lorem" },
  ] },
  { title: "Stands", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Branding rotulacion", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Lonas", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Impresion", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Banners", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Burreras", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "PortaLaptop", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Danglers", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Ilustraciones", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Etiquetas", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Showcar", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
  { title: "Materiales Eventos", description: "Amet culpa proident in tempor elit cillum fugiat consequat. Minim eu aute consequat adipisicing enim Lorem aliqua anim incididunt non eu dolore proident dolore. Sit velit tempor sit esse exercitation aliquip magna. Ipsum eiusmod irure culpa ad id qui deserunt. Dolor eiusmod nulla proident pariatur.", },
]

const SectionRight = (props: SubItem & { i: number }) => {

  const randomNumber = Math.random()
  const randomColor = randomNumber > 0.5 ? "bg-yellow" : "bg-purple"

  return (
    <div key={props.i} className="p-4 flex gap-4">
      <div className={clsx(
        randomColor,
        props.image && "w-[60%]"
      )}>
        <h3 className="text-2xl font-bold mb-4 pl-4">{props.title}</h3>
        <p className="pl-4">{props.description}</p>
      </div>
        {
          props.image &&
          <div >
            <Image
              src={props.image}
              alt=""
              width={250}
              height={220}
              className="object-cover -z-10"
              priority
            />
          </div>
        }
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-16 space-y-32">
      {services.map((service, i) => {

        if("subItems" in service && service.subItems?.length) {
          return (
            <section key={i} id={`service${i}`}>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              {
                service.subItems.map((subservice, j) => (
                  <SectionRight {...subservice} i={j} />
                ))
              }
            </section>
          )
        }

        return (
          <SectionRight
            {...service} i={i}
          />
        )
      })}
    </main>
  );
}
