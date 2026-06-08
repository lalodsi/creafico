import Image from "next/image";
import { Container } from "components/ui/Container";
import { Section } from "components/ui/Section";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* FORMULARIO */}
          <div>
            <h1 className="text-4xl font-semibold mb-6">
              Contáctanos
            </h1>

            <p className="text-zinc-600 max-w-md mb-4">
              Siéntete libre de enviarnos un correo para conocer
              sobre nuestros servicios o comenzar una cotización.
            </p>

            <p className="text-sm text-zinc-500 mb-12">
              Horarios de atención: 9:00 AM a 6:00 PM
            </p>

            <form className="flex flex-col gap-10">
              <input
                type="text"
                placeholder="Nombre"
                className="
                  bg-transparent
                  border-b
                  border-zinc-400
                  pb-2
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Correo"
                className="
                  bg-transparent
                  border-b
                  border-zinc-400
                  pb-2
                  outline-none
                "
              />

              <textarea
                placeholder="Mensaje"
                rows={3}
                className="
                  resize-none
                  bg-transparent
                  border-b
                  border-zinc-400
                  pb-2
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  border
                  border-zinc-500
                  rounded-xl
                  py-3
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                Enviar
              </button>
            </form>
          </div>

          {/* CONTACTO */}
          <div className="flex flex-col items-center">
            <div className="relative w-56 h-28 mb-12">
              <Image
                src="/Logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-6 w-full">
              <ContactCard
                icon="📞"
                title="Teléfono"
                value="+52 55 1234 5678"
              />

              <ContactCard
                icon="✉️"
                title="Correo Electrónico"
                value="contacto@creafico.com"
              />

              <ContactCard
                icon="💬"
                title="WhatsApp"
                value="+52 55 1234 5678"
              />
            </div>
          </div>
        </div>

        {/* POLÍTICA */}
        <Container className="mt-24">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Política de Privacidad
          </h2>

          <div className="space-y-6 text-zinc-600 leading-8">
            <p>
              Fusce at nisi arcu. Quisque sed dolor nec dui
              scelerisque dapibus...
            </p>

            <p>
              Nullam vehicula magna sit amet magna ullamcorper...
            </p>

            <p>
              Integer a ipsum vitae urna varius egestas...
            </p>

            <p>
              Donec et urna vel risus feugiat pharetra...
            </p>

            <p>
              Sed vehicula magna at lacus interdum...
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}

type ContactCardProps = {
  icon: string;
  title: string;
  value: string;
};

function ContactCard({
  icon,
  title,
  value,
}: ContactCardProps) {
  return (
    <div
      className="
        border
        border-zinc-300
        rounded-2xl
        p-8
        text-center
        min-h-[220px]
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="font-medium mb-4">
        {title}
      </h3>

      <p className="text-sm text-zinc-500">
        {value}
      </p>
    </div>
  );
}