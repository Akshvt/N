import { useScrollProgress } from '@/hooks/useScrollProgress';
import { ProductRender } from '@/components/home/ProductRender';
import { products } from '@/components/home/productData';

const benefits = [
  {
    name: 'Energy',
    headline: 'Steady energy, built on whole foods.',
    body: 'A whole-food base for the days that ask more of you.',
  },
  {
    name: 'Strength',
    headline: 'Strength that keeps pace with training.',
    body: 'Creatine and botanicals in one simple daily routine.',
  },
  {
    name: 'Gut',
    headline: 'Gut care that fits your day.',
    body: 'A prebiotic and probiotic blend you can take alongside the rest of your routine.',
  },
  {
    name: 'Calm',
    headline: 'Room to breathe between tasks.',
    body: 'Consistency is the point. Small daily formulas, taken every day.',
  },
];

const hero = products[0];

export function BenefitsCarousel() {
  return (
    <section className="bg-lilac/40">
      <DesktopBenefits />
      <MobileBenefits />
    </section>
  );
}

function DesktopBenefits() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const active = Math.round(progress * (benefits.length - 1));
  const current = benefits[active];

  return (
    <div ref={ref} className="relative hidden h-[400vh] md:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-content grid-cols-12 items-center gap-8 px-10">
          <ol className="col-span-3 space-y-6">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.name}
                aria-current={index === active ? 'step' : undefined}
                className={`flex items-center gap-4 font-display text-[28px] font-medium tracking-[-0.02em] transition-all duration-700 ease-editorial ${
                  index === active ? 'translate-x-2 text-ink' : 'text-ink/35'
                }`}
              >
                <span className="text-[13px] tracking-[0.08em]">0{index + 1}</span>
                {benefit.name}
              </li>
            ))}
          </ol>

          <div className="relative col-span-5 flex items-center justify-center">
            <div aria-hidden="true" className="absolute h-[440px] w-[440px] rounded-full bg-white/70" />
            <div className="relative scale-125">
              <ProductRender product={hero} format="tub" />
            </div>
          </div>

          <div className="col-span-4">
            <div key={active} className="animate-rise">
              <p className="eyebrow">Benefit {active + 1} of {benefits.length}</p>
              <h3 className="mt-4 font-display text-[44px] font-medium leading-[48px] tracking-[-0.02em] md:text-[56px] md:leading-[60px]">
                {current.headline}
              </h3>
              <p className="mt-6 max-w-sm text-[17px] leading-[28px] text-ink-muted">{current.body}</p>
            </div>
            <div className="mt-12 h-px w-full bg-ink/15" aria-hidden="true">
              <div
                className="h-px origin-left bg-ink transition-transform duration-500 ease-editorial"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBenefits() {
  return (
    <div className="py-20 md:hidden">
      <div className="px-6">
        <p className="eyebrow">What it helps with</p>
        <h2 className="mt-4 font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em]">
          Four reasons to stay consistent.
        </h2>
      </div>
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none]">
        {benefits.map((benefit) => (
          <article
            key={benefit.name}
            className="w-[82%] shrink-0 snap-center rounded-card bg-white p-8"
          >
            <p className="eyebrow">{benefit.name}</p>
            <h3 className="mt-4 font-display text-[32px] font-medium leading-[38px] tracking-[-0.02em]">
              {benefit.headline}
            </h3>
            <p className="mt-4 text-[15px] leading-[24px] text-ink-muted">{benefit.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
