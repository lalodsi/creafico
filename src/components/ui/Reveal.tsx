"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
};

export function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      node.classList.remove("reveal-from-right-pending");
      node.classList.add("animate-enter-right");
      node.addEventListener(
        "animationend",
        () => node.classList.remove("animate-enter-right"),
        { once: true },
      );
      observer.disconnect();
    };

    node.classList.add("reveal-from-right-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        play();
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    node.addEventListener("focusin", play);

    return () => {
      observer.disconnect();
      node.removeEventListener("focusin", play);
    };
  }, []);

  return (
    <div className="overflow-x-clip">
      <div ref={ref}>{children}</div>
    </div>
  );
}
