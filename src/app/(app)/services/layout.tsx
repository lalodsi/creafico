"use client";

import { usePathname } from "next/navigation";



export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isServicePage = pathname.endsWith("/services");

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8">
      <header>
        {isServicePage && (
          <>
            <h1 className="text-5xl font-bold mb-4">Servicios</h1>
            <p className="text-foreground max-w-full">
              Contamos con soluciones para destacar tu marca en cada espacio, desde exhibidores y material publicitario hasta stands, escenografías e impresión en distintos formatos. Cuéntanos qué tienes en mente y te ayudaremos a encontrar la opción que mejor se adapte a tu proyecto, tus necesidades y tu presupuesto. <strong>Solicita una cotización y trabajemos juntos para hacerlo realidad.</strong>
            </p>
          </>
        )}
      </header>

      {children}
    </section>
  );
}
