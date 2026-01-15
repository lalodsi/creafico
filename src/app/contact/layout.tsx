import { Navbar } from "components/Navbar";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <section className="max-w-5xl mx-auto px-16 py-24">
        <header className="mb-16">
          <h1 className="text-4xl font-bold">Contacto</h1>
          <p className="text-zinc-500 mt-4">
            ¿Tienes una idea o un proyecto? Hablemos.
          </p>
        </header>

        {children}
      </section>
    </div>
  );
}
