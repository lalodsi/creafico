import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b  bg-purple/80 border-yellow-800 text-in-purple-bg">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-end">
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:font-bold">Inicio</Link>
          <Link href="/services" className="hover:font-bold">Servicios</Link>
          <Link href="/contact" className="hover:font-bold">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
