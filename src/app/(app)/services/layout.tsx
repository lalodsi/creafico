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
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
      <header>
        <h1 className="text-5xl font-bold mb-4">Servicios</h1>
        {isServicePage && (
          <p className="text-zinc-500 max-w-xl">
            Tenemos un amplio catálogo de servicios
          </p>
        )}
      </header>

      {children}
    </section>
  );
}
