"use client"

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { TitleBlock } from "./ui/TitleBlock";
import Image from "next/image";


export function Header() {
  const path = usePathname()
  console.log(path)

  return (
    <header className="bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-16 py-4 flex items-center justify-between">
        <nav className="flex flex-col items-center gap-6 text-sm">
          <TitleBlock
            title="Dale un impulso a tu negocio"
            subtitle="Con nuestras soluciones de publicidad que se ajustan a tu estilo y necesidades"
          />
          <button
            className="border-2 p-2 rounded-2xl w-3/4"
          >Contáctanos</button>
        </nav>
        <Image
          src="/Logo.png"
          alt=""
          width={300}
          height={300}
          className="object-cover -z-10"
          priority
        />
      </div>
    </header>
  );
}
