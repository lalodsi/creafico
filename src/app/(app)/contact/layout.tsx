
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-4xl mx-auto px-16 py-12">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Contacto
        </h1>
        <p className="text-zinc-500 mt-4">
          ¿Tienes una idea o un proyecto? Hablemos.
        </p>
      </header>

      {children}
    </section>
  );
}
