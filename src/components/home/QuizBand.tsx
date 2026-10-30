import { PillButton } from '@/components/ui/PillButton';
import { Reveal } from '@/components/motion/Reveal';

export function QuizBand() {
  return (
    <section className="bg-lilac">
      <div className="mx-auto flex max-w-content flex-col items-start gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-cobalt font-semibold mb-3">Rooted in Ayurveda. Modern science.</p>
          <h2 className="font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] text-ink md:text-[56px] md:leading-[60px]">
            Not sure where to start?
            <br />
            Find your daily formula.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="flex flex-col items-start gap-4">
            <PillButton href="#shop">Take the quiz</PillButton>
            <p className="text-[13px] uppercase tracking-[0.08em] text-ink-muted">Takes about two minutes</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
