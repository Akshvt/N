interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-ivory' : 'text-ink';
  const byColor = variant === 'light' ? 'text-accent' : 'text-cobalt';
  const circleClass =
    variant === 'light'
      ? 'bg-white/10 border-white/20'
      : 'bg-white shadow-sm border-silver/60';

  return (
    <span className={`inline-flex items-center gap-3 font-display tracking-tight ${textColor} ${className}`}>
      {/* Clean circular container with white background and transparent neon icon */}
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border p-2 transition-transform duration-300 hover:scale-105 ${circleClass}`}>
        <img
          src="/brand/namhya-icon-clean.png"
          alt="By Namhya"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[9px] font-bold tracking-[0.24em] uppercase ${byColor}`}>By</span>
        <span className="text-[18px] font-bold tracking-[0.04em] uppercase">Namhya</span>
      </span>
    </span>
  );
}
