import type { LucideIcon } from 'lucide-react';
import { BookOpen, Check, Droplets, Eye } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Reveal } from '@/components/motion/Reveal';

interface Step {
  title: string;
  line: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    title: 'Absorption',
    line: 'Ingredients chosen for how well they are taken up by the body, not only how they read on paper.',
    icon: Droplets,
  },
  {
    title: 'Transparency',
    line: 'Every ingredient and its amount is printed on the label. Nothing is tucked into a hidden blend.',
    icon: Eye,
  },
  {
    title: 'Research first',
    line: 'Each ingredient earns its place through published research before it goes into a tub or sachet.',
    icon: BookOpen,
  },
];

export function SplitSticky() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const active = Math.min(Math.round(progress * (steps.length - 1)), steps.length - 1);

  return (
    <section className="mx-auto max-w-content px-6 md:px-10">
      <div ref={ref} className="grid gap-12 py-16 md:grid-cols-2 md:items-start md:gap-24 md:py-0">
        {/* Sticky Left Column with Centered Content */}
        <div className="md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center">
          <Reveal>
            <p className="eyebrow text-cobalt font-bold tracking-[0.12em] uppercase">How it is made</p>
            <h2 className="mt-4 font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] md:text-[68px] md:leading-[72px]">
              Designed for your body.
            </h2>
            <p className="mt-6 max-w-sm text-[17px] leading-[28px] text-ink-muted">
              Three principles behind every formula we make, shown step by step as you read on.
            </p>
          </Reveal>
          <div className="mt-10 hidden items-center gap-3 md:flex" aria-hidden="true">
            {steps.map((step, index) => (
              <span
                key={step.title}
                className={`h-1.5 rounded-full transition-all duration-500 ease-editorial ${
                  index === active ? 'w-12 bg-cobalt' : 'w-4 bg-ink/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Preserving Original Scroll Rhythm with 70% Calibrated Gap */}
        <div className="flex flex-col gap-6 md:gap-0">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} active={index === active} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index, active }: { step: Step; index: number; active: boolean }) {
  const Icon = step.icon;

  return (
    <div className="md:flex md:min-h-[70vh] md:items-center">
      <div
        className={`w-full rounded-card border bg-white p-8 transition-all duration-700 ease-editorial md:p-12 ${
          active
            ? 'border-cobalt/40 shadow-xl opacity-100 scale-[1.01]'
            : 'border-silver/60 opacity-35 hover:opacity-70 hover:shadow-md'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cobalt text-accent shadow-sm">
            <Icon size={24} strokeWidth={2} aria-hidden="true" />
          </span>
          <span className="font-mono text-[14px] font-bold text-cobalt">0{index + 1}</span>
        </div>
        <h3 className="mt-8 font-display text-[30px] font-medium leading-[36px] tracking-[-0.02em] text-ink md:text-[34px] md:leading-[40px]">
          {step.title}
        </h3>
        <p className="mt-3 max-w-md text-[17px] leading-[28px] text-ink-muted">{step.line}</p>
        <StepGraphic index={index} active={active} />
      </div>
    </div>
  );
}

function StepGraphic({ index, active }: { index: number; active: boolean }) {
  if (index === 0) {
    return (
      <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-ink/10" aria-hidden="true">
        <div
          className={`h-full rounded-full bg-cobalt transition-[width] duration-[1000ms] ease-editorial ${
            active ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    );
  }

  if (index === 1) {
    const rows = ['Protein source', 'Creatine monohydrate', 'Probiotic cultures'];
    return (
      <ul className="mt-10 space-y-4" aria-hidden="true">
        {rows.map((row, rowIndex) => (
          <li
            key={row}
            className={`flex items-center gap-3 border-b border-silver/70 pb-3 text-[15px] transition-all duration-700 ease-editorial ${
              active ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: `${rowIndex * 180}ms` }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cobalt text-accent">
              <Check size={14} strokeWidth={2.5} />
            </span>
            <span className="font-medium text-ink">{row}</span>
          </li>
        ))}
      </ul>
    );
  }

  const bars = [40, 62, 48, 80, 70];
  return (
    <div className="mt-10 flex h-24 items-end gap-3" aria-hidden="true">
      {bars.map((height, barIndex) => (
        <span
          key={barIndex}
          style={{ height: `${height}%`, transitionDelay: `${barIndex * 110}ms` }}
          className={`flex-1 origin-bottom rounded-t-[10px] bg-ink/20 transition-transform duration-[900ms] ease-editorial ${
            active ? 'scale-y-100' : 'scale-y-[0.2]'
          } ${barIndex === 3 ? 'bg-accent' : barIndex === 1 ? 'bg-cobalt' : ''}`}
        />
      ))}
    </div>
  );
}
