import { PillButton } from '@/components/ui/PillButton';
import { Reveal } from '@/components/motion/Reveal';

export function QuizBand() {
  return (
    <section className="bg-lilac">
      <div className="mx-auto flex max-w-content flex-col items-center text-center gap-8 px-6 py-20 md:px-10 md:py-32">
        <Reveal className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <p className="eyebrow text-cobalt font-semibold mb-3 text-center">Rooted in Ayurveda. Modern science.</p>
          <h2 className="font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] text-ink md:text-[56px] md:leading-[60px] text-center">
            Not sure where to start?
            <br />
            Find your daily formula.
          </h2>
        </Reveal>
        <Reveal delay={150} className="text-center">
          <div className="flex flex-col items-center gap-3">
            <PillButton href="#shop">Take the quiz</PillButton>
            <p className="text-[13px] uppercase tracking-[0.08em] text-ink-muted text-center">Takes about two minutes</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
