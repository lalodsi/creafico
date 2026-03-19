import { NavBar } from "components/Navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-zinc-900">
      <NavBar />
      <main className="py-12">
        {children}
      </main>
    </div>
  );
}
