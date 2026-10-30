import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { PillButton } from '@/components/ui/PillButton';

const pillars = [
  {
    number: '01',
    title: 'Electric Botanical Energy',
    description:
      'Crafted with active plant extracts to support daily stamina and cellular vitality without caffeine crashes.',
  },
  {
    number: '02',
    title: 'Whole-Food Purity',
    description:
      'No synthetic dyes, no hidden proprietary blends, and no artificial sweeteners—just pure, lab-tested goodness.',
  },
  {
    number: '03',
    title: 'Ayurvedic Daily Rituals',
    description:
      'Saffron, Triphala, Ashwagandha, and clean proteins harmonised for daily routines that stick.',
  },
];

export function BrandStory() {
  return (
    <section className="overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Full-Height Editorial Moodboard Image Frame */}
          <div className="flex flex-col lg:col-span-6">
            <Reveal variant="image" className="h-full">
              <div className="group relative flex h-full min-h-[480px] w-full flex-col overflow-hidden rounded-[32px] border border-silver/60 bg-white p-2 shadow-2xl transition-transform duration-700 hover:scale-[1.005] lg:min-h-full">
                <div className="relative h-full min-h-[460px] w-full overflow-hidden rounded-[26px] bg-ink lg:min-h-full">
                  <img
                    src="/brand/namhya-moodboard.jpg"
                    alt="By Namhya brand moodboard and packaging renders"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                  />
                  {/* Floating Top Pill */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-ivory/90 px-4 py-1.5 backdrop-blur-md border border-silver/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-cobalt uppercase">
                      Formula Moodboard
                    </span>
                  </div>

                  {/* Floating Bottom Badge */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-full bg-ivory/95 px-5 py-3 shadow-lg backdrop-blur-md border border-silver/40">
                    <span className="flex items-center gap-2 text-[13px] font-semibold tracking-wide text-ink uppercase">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      Rooted in Ayurveda. Modern Science.
                    </span>
                    <span className="hidden font-display text-[12px] font-bold text-cobalt uppercase tracking-wider sm:inline">
                      By Namhya
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Brand Philosophy & New Accent Color Harmony */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-cobalt/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-cobalt">
                  <Sparkles size={14} className="text-cobalt" />
                  The New Aesthetic
                </span>
                <h2 className="mt-4 font-display text-[38px] font-medium leading-[42px] tracking-[-0.02em] text-ink md:text-[52px] md:leading-[56px]">
                  Modern nutrition for real life.
                </h2>
                <p className="mt-6 text-[17px] leading-[28px] text-ink-muted">
                  We combine centuries-proven Ayurvedic botanicals with clean, clinical-grade nutrition. Every formula is designed to feel effortless, taste natural, and look as good on your counter as it feels in your body.
                </p>
              </Reveal>

              {/* 3 Pillars with Blue background & Fluorescent Yellow numbers */}
              <div className="mt-8 space-y-4">
                {pillars.map((pillar, index) => (
                  <Reveal key={pillar.number} delay={(index + 1) * 100}>
                    <div className="flex items-start gap-4 rounded-2xl border border-silver/60 bg-white p-5 transition-all duration-300 hover:border-cobalt/40 hover:shadow-md">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt text-[14px] font-bold text-accent shadow-sm">
                        {pillar.number}
                      </span>
                      <div>
                        <h4 className="font-display text-[18px] font-semibold text-ink">
                          {pillar.title}
                        </h4>
                        <p className="mt-1 text-[14px] leading-[22px] text-ink-muted">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={400}>
              <div className="mt-8 flex items-center gap-4">
                <PillButton href="#shop">
                  Explore packaging & formulas
                  <ArrowRight size={18} />
                </PillButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
