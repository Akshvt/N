import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Lines({ lines, className = "", as = "h2" }: { lines: string[]; className?: string; as?: "h1" | "h2" }) {
  const Tag = as;
  return (
    <Tag className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease, delay: i * 0.1 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Ring({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <circle cx="80" cy="120" r="62" stroke="currentColor" strokeWidth="10" />
      <circle cx="160" cy="44" r="22" stroke="currentColor" strokeWidth="8" />
      <path d="M124 78 L146 58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
