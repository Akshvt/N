import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface PillButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const shell: Record<Variant, string> = {
  primary: 'bg-accent text-ink font-semibold',
  secondary: 'border border-ink text-ink',
};

const sweep: Record<Variant, string> = {
  primary: 'bg-cobalt',
  secondary: 'bg-ink',
};

const labelHover: Record<Variant, string> = {
  primary: 'group-hover:text-white',
  secondary: 'group-hover:text-ivory',
};

export function PillButton({ children, variant = 'primary', href, onClick, className = '' }: PillButtonProps) {
  const classes = `group relative inline-flex h-14 shrink-0 items-center justify-center overflow-hidden rounded-full px-8 text-[15px] font-medium transition-transform duration-700 ease-editorial hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${shell[variant]} ${className}`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-700 ease-editorial group-hover:scale-x-100 ${sweep[variant]}`}
      />
      <span className={`relative z-10 inline-flex items-center gap-2 transition-colors duration-700 ${labelHover[variant]}`}>
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
