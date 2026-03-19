import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition">
      {children}
    </div>
  );
}