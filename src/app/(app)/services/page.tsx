
const services = [
  { title: "Exhibidores de producto", subItems: [
    { title: "Madera" },
    { title: "Metálicos" },
  ] },
  { title: "Pops", subItems: [
    { title: "Tótems" },
    { title: "Coroplast" },
    { title: "Plotter" },
  ] },
  { title: "Stands" },
  { title: "Branding rotulacion" },
  { title: "Lonas" },
  { title: "Impresion" },
  { title: "Banners" },
  { title: "Burreras" },
  { title: "PortaLaptop" },
  { title: "Danglers" },
  { title: "Ilustraciones" },
  { title: "Etiquetas" },
  { title: "Showcar" },
  { title: "Materiales Eventos" },
]

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto py-32 px-16 space-y-32">
      {services.map((service, i) => {

        if("subItems" in service && service.subItems?.length) {
          return (
            <section key={i} id={`service${i}`}>
              {
                service.subItems.map((subservice, j) => (
                  <div key={j}>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <h3 className="text-2xl font-bold mb-4 pl-4">{subservice.title}</h3>
                    <p className="pl-4">Descripción del servicio {i}</p>
                  </div>
                ))
              }
            </section>
          )
        }

        return (
          <section className="mb-8" key={i} id={`service${i}`}>
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p>Descripción del servicio {i}</p>
          </section>
        )
      })}
    </main>
  );
}
