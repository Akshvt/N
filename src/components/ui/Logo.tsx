interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-ivory' : 'text-ink';
  const byColor = variant === 'light' ? 'text-accent' : 'text-cobalt';

  return (
    <span className={`inline-flex items-center gap-3 font-display tracking-tight ${textColor} ${className}`}>
      {/* Circle with properly zoomed tight brand mark */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cobalt p-2 shadow-sm transition-transform duration-300 hover:scale-105 overflow-hidden">
        <img
          src="/brand/namhya-icon-tight.png"
          alt="By Namhya"
          className="h-full w-full object-contain scale-110"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[9px] font-bold tracking-[0.24em] uppercase ${byColor}`}>By</span>
        <span className="text-[18px] font-bold tracking-[0.04em] uppercase">Namhya</span>
      </span>
    </span>
  );
}
