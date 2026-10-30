import { FlaskConical } from 'lucide-react';

export function Logo() {
  return (
    <span className="inline-flex items-center gap-3 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-accent">
        <FlaskConical size={18} strokeWidth={2} aria-hidden="true" />
      </span>
      <span>N° Labs</span>
    </span>
  );
}
