import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}