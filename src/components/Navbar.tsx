import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200 dark:bg-black/80 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-16 py-4 flex items-center justify-between">
        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          {/* <Link href="/services#service1">Service 1</Link> */}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
