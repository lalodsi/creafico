"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex justify-center lg:justify-start">
            <h2 className="text-3xl font-light tracking-wide">
              Creáfico
            </h2>
          </div>

          <nav className="flex flex-col items-center lg:items-start gap-8 text-zinc-700">
            <Link
              href="/about"
              className="hover:text-black transition"
            >
              Nosotros
            </Link>

            <Link
              href="/services"
              className="hover:text-black transition"
            >
              Servicios
            </Link>

            <Link
              href="/clients"
              className="hover:text-black transition"
            >
              Clientes
            </Link>

            <Link
              href="/gallery"
              className="hover:text-black transition"
            >
              Galería
            </Link>
          </nav>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
            <h3 className="font-medium">Creáfico</h3>

            <p className="text-zinc-700">
              Diseño | Espacios | Impresión
            </p>

            <a
              href="mailto:contacto@creafico.com"
              className="hover:underline"
            >
              Correo Electrónico: contacto@creafico.com
            </a>

            <a
              href="tel:+525512345678"
              className="hover:underline"
            >
              Teléfono: +52 55 1234 5678
            </a>

            <a
              href="https://wa.me/525512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Contáctanos por WhatsApp
            </a>

            {/* Logo */}
            <div className="relative w-56 h-32 mt-6 border border-zinc-300">
              <Image
                src="/Logo.png"
                alt="Logo Creáfico"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}