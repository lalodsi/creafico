import { ServicesMarquee } from "components/ui/ServiceMarquee";
import { TitleBlock } from "components/ui/TitleBlock";
import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "types/assets";
import { customers } from "types/services";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

      {/* NOSOTROS */}
      <section className="py-24">
        <div className="text-center">
          <TitleBlock
            title="Sobre nosotros"
            subtitle=""
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square max-w-md mx-auto hidden lg:block">
            <Image
              src={assetUrl("./Logo.png")}
              alt="Sobre nosotros"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-6 text-zinc-700 leading-8">
            <p>
              Creemos que las mejores soluciones nacen de escuchar, cuestionar lo establecido y encontrar formas más inteligentes de hacer las cosas. Por eso, trabajamos en cada proyecto con atención al detalle, comunicación clara y el compromiso de entregar algo de lo que tanto nosotros como nuestros clientes podamos sentirnos orgullosos.
            </p>
            <p>
              Con más de 34 años de experiencia, hemos acompañado la evolución de nuestros clientes y sus necesidades, adaptándonos a los cambios y desarrollando soluciones que responden a los retos de cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16">

          <div className="flex flex-col justify-center">
            <div className="text-center">
              <TitleBlock
                title="Nuestros servicios"
                subtitle=""
              />
            </div>
            <p className="max-w-full text-foreground leading-8 text-center mb-8">
              Tenemos un amplio catálogo de servicios que se ajustan a tus necesidades, desde la fabricación de muebles de exhibición y material POP hasta el diseño de stands, escenografías y soluciones de impresión. Trabajamos con distintos materiales y formatos para dar vida a tus ideas, fortalecer la presencia de tu marca y responder a los requerimientos de cada proyecto.
            </p>

            <Link
              href="/services"
              className="
                border
                border-zinc-400
                px-8
                py-3
                text-center
                hover:bg-black
                hover:text-white
                transition
              "
            >
              Ver más
            </Link>
          </div>

          <ServicesMarquee />
        </div>
      </section>

      {/* CLIENTES */}
      <section className="py-24">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-center">

          <div className="space-y-20 text-center">
            <div>
              <h3 className="text-6xl mb-4">34+</h3>

              <p className="text-zinc-600">
                Años de experiencia
                <br />
                en el mundo de la
                <br />
                publicidad
              </p>
            </div>

            <div>
              <h3 className="text-6xl mb-4">1000+</h3>

              <p className="text-zinc-600">
                Proyectos realizados
                <br />
                con nuestros clientes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {
              customers.images.map((customer, i) => (
                <ClientLogo key={i} src={customer.imageUrl} />
              ))
            }
          </div>
        </div>
      </section>
    </section>
  );
}

type ServiceCardProps = {
  image: string;
  title: string;
};

function ClientLogo({
  src,
}: {
  src: string;
}) {
  return (
    <div className="relative h-36 bg-zinc-100">
      <Image
        src={assetUrl(src)}
        alt="Cliente"
        fill
        className="object-contain p-4"
      />
    </div>
  );
}