"use client"

import { Header } from "components/Header";
import { NavBar } from "components/Navbar";
import { usePathname } from "next/navigation";
import { PAGES } from "types/constants";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname() as PAGES
  return (
    <div className="min-h-screen text-zinc-900">
      <NavBar />
      {
        path !== "CONTACT" &&
        <Header />
      }
      <main className="py-12">
        {children}
      </main>
    </div>
  );
}
