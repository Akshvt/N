interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-ivory' : 'text-ink';
  const byColor = variant === 'light' ? 'text-accent' : 'text-cobalt';

  return (
    <span className={`inline-flex items-center gap-2.5 font-display tracking-tight ${textColor} ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt p-1.5 shadow-sm transition-transform duration-300 hover:scale-105">
        <img
          src="/brand/namhya-icon.png"
          alt="By Namhya"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[9px] font-bold tracking-[0.22em] uppercase ${byColor}`}>By</span>
        <span className="text-[18px] font-bold tracking-[0.04em] uppercase">Namhya</span>
      </span>
    </span>
  );
}
