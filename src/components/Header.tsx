"use client";

import Image from "next/image";
import { TitleBlock } from "./ui/TitleBlock";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-zinc-200 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[600px]">
        <nav className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full lg:w-1/2">
          <TitleBlock
            title="Dale un impulso a tu negocio"
            subtitle="Con nuestras soluciones de publicidad que se ajustan a tu estilo y necesidades"
          />
          <button className="border-2 px-6 py-3 rounded-2xl w-full sm:w-auto hover:bg-black hover:text-white transition">
            Contáctanos
          </button>
        </nav>

        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/Logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}