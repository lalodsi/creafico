import { NavBar } from "components/Navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <NavBar />
      <main className="py-12">
        {children}
      </main>
    </div>
  );
}
