import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex gap-6 p-6">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/services#service1">Service 1</Link>
      <Link href="/services#service2">Service 2</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
