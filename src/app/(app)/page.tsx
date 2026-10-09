import { ServicesMarquee } from "components/ui/ServiceMarquee";
import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "types/assets";
import { customers } from "types/services";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

      {/* NOSOTROS */}
      <section className="py-24">
        <h2 className="text-4xl md:text-5xl text-center mb-20">
          Sección "Nosotros"
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src={assetUrl("./Logo.png")}
              alt="Nosotros"
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
            <h2 className="text-5xl mb-8">
              Nuestros
              <br />
              servicios
            </h2>

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