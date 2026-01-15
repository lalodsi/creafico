import { Navbar } from "components/Navbar";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header exclusivo de Services */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-16 py-6">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="text-zinc-500 mt-2">
            Soluciones diseñadas para crecer contigo
          </p>
        </div>
      </header>

      {/* Navegación general */}
      <Navbar />

      {/* Contenido de la página */}
      <div>{children}</div>
    </div>
  );
}
