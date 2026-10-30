interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-ivory' : 'text-ink';
  const byColor = variant === 'light' ? 'text-accent' : 'text-cobalt';

  return (
    <span className={`inline-flex items-center gap-3.5 font-display tracking-tight ${textColor} ${className}`}>
      {/* Standalone prominent neon icon (no circle) with crisp thin dark outline to stand out on light background */}
      <img
        src="/brand/namhya-icon-clean.png"
        alt="By Namhya"
        className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-105 md:h-11 [filter:drop-shadow(0_0_1px_rgba(0,0,0,0.9))_drop-shadow(0_1px_1px_rgba(0,0,0,0.3))]"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-[10px] font-bold tracking-[0.24em] uppercase ${byColor}`}>By</span>
        <span className="text-[20px] font-bold tracking-[0.04em] uppercase md:text-[22px]">Namhya</span>
      </span>
    </span>
  );
}
