import type { LucideIcon } from 'lucide-react';
import { BookOpen, Check, Droplets, Eye } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Reveal } from '@/components/motion/Reveal';
import { useMobileCarousel } from '@/hooks/useMobileCarousel';

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

  const {
    containerRef: mobileRef,
    activeIdx: mobileActive,
    scrollTo: scrollToStep,
    handleScroll: handleMobileScroll,
    pauseAuto,
  } = useMobileCarousel({
    count: steps.length,
    autoScroll: true,
    interval: 4000,
  });

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

        {/* Right Column: Mobile Swipeable Auto-Carousel / Desktop Vertical Scroll */}
        <div>
          <div
            ref={mobileRef}
            onScroll={handleMobileScroll}
            onTouchStart={pauseAuto}
            className="-mx-6 px-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x scroll-smooth md:mx-0 md:px-0 md:flex-col md:gap-0 md:overflow-visible md:pb-0 md:pt-0"
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="w-[84%] sm:w-[72%] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none flex flex-col h-full will-change-transform"
              >
                <StepCard
                  step={step}
                  index={index}
                  activeDesktop={index === active}
                  activeMobile={index === mobileActive}
                />
              </div>
            ))}
          </div>

          {/* Mobile pagination indicator pills */}
          <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => scrollToStep(index)}
                aria-label={`Go to slide ${index + 1}: ${step.title}`}
                className={`h-1.5 rounded-full transition-all duration-500 ease-editorial ${
                  index === mobileActive ? 'w-8 bg-cobalt' : 'w-2 bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  activeDesktop,
  activeMobile,
}: {
  step: Step;
  index: number;
  activeDesktop: boolean;
  activeMobile: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="md:flex md:min-h-[70vh] md:items-center h-full">
      <div
        className={`w-full h-full flex flex-col justify-between rounded-card border bg-white p-6 sm:p-8 transition-[border-color,box-shadow] duration-500 ease-editorial md:p-12 min-h-[380px] md:min-h-0 ${
          activeMobile
            ? 'border-cobalt/40 shadow-xl'
            : 'border-silver/60'
        } ${
          activeDesktop
            ? 'md:border-cobalt/40 md:shadow-xl md:opacity-100 md:scale-[1.01]'
            : 'md:border-silver/60 md:opacity-35 md:hover:opacity-70 md:hover:shadow-md md:scale-100'
        }`}
      >
        <div>
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
        </div>
        <div className="mt-8">
          <div className="md:hidden">
            <StepGraphic index={index} active={activeMobile} />
          </div>
          <div className="hidden md:block">
            <StepGraphic index={index} active={activeDesktop} />
          </div>
        </div>
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
