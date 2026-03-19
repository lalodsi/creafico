import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b  bg-black/80 border-zinc-800 text-zinc-100">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-end">
        <nav className="flex gap-6 text-sm">
          <Link href="/">Inicio</Link>
          <Link href="/services">Servicios</Link>
          <Link href="/contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
