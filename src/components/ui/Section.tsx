import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="w-full sl:py-16 sm:py-4 md:py-24">
      <div className="sl:max-w-7xl sl:mx-auto px-6">
        {children}
      </div>
    </section>
  );
}