
import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  variant?: "default" | "yellow" | "dark";
  className?: string;
}

export function Container({
  children,
  variant = "default",
  className,
}: ContainerProps) {
  const variants = {
    default: "bg-background text-foreground",
    yellow: "bg-primary text-black",
    dark: "bg-black text-white",
  };

  return (
    <div
      className={clsx(
        "w-full rounded-xl p-8 md:p-12 transition-all",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}