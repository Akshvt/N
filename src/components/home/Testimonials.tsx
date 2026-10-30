import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const reviews = [
  {
    quote: 'I stopped skipping breakfast on busy mornings. Daily Nourish fits into my routine without any fuss.',
    name: 'Ananya R.',
    detail: 'Daily Nourish, Bengaluru',
  },
  {
    quote: 'The label tells me exactly what is in the tub. That clarity is why I kept coming back.',
    name: 'Meera K.',
    detail: 'Daily Gut, Pune',
  },
  {
    quote: 'Training five days a week, I wanted something simple and consistent. Daily Strength is exactly that.',
    name: 'Rohan D.',
    detail: 'Daily Strength, Delhi',
  },
  {
    quote: 'Sachets are perfect for travel. I never have to think about what I packed.',
    name: 'Ishita S.',
    detail: 'Daily Nourish sachets, Mumbai',
  },
  {
    quote: 'Within three weeks of Daily Gut, afternoon bloating subsided completely. Digestion feels light and calm.',
    name: 'Vikram T.',
    detail: 'Daily Gut, Hyderabad',
  },
  {
    quote: 'Clean ingredients, zero artificial sweetness. My morning shake finally tastes natural and keeps me full.',
    name: 'Pooja M.',
    detail: 'Daily Nourish, Gurgaon',
  },
];

export function Testimonials() {
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');

  const animationClass = direction === 'normal' ? 'animate-marquee' : 'animate-marquee-reverse';

  return (
    <section className="overflow-hidden py-20 md:py-40">
      {/* Header */}
      <div className="mx-auto flex max-w-content items-end justify-between gap-6 px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Real results, real routines</p>
          <h2 className="mt-4 font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] md:text-[56px] md:leading-[60px]">
            Loved by people who check.
          </h2>
        </Reveal>

        {/* Direction Controls */}
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => setDirection('reverse')}
            className={`flex h-14 w-14 items-center justify-center rounded-full border border-ink transition-colors duration-300 ${
              direction === 'reverse'
                ? 'bg-ink text-ivory'
                : 'text-ink hover:bg-ink hover:text-ivory'
            }`}
          >
            <ChevronLeft size={22} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => setDirection('normal')}
            className={`flex h-14 w-14 items-center justify-center rounded-full border border-ink transition-colors duration-300 ${
              direction === 'normal'
                ? 'bg-ink text-ivory'
                : 'text-ink hover:bg-ink hover:text-ivory'
            }`}
          >
            <ChevronRight size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Auto-scrolling zigzag floating tracks */}
      <div className="marquee-wrapper mt-16 flex w-full overflow-hidden py-8 md:py-14">
        {/* Track 1 */}
        <div className={`flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8 ${animationClass}`}>
          {reviews.map((review, index) => {
            const isZigzagOffset = index % 2 === 1;
            const floatClass = isZigzagOffset ? 'animate-float-wave-down' : 'animate-float-wave-up';

            return (
              <div
                key={`t1-${review.name}`}
                className={`transition-transform duration-500 will-change-transform ${
                  isZigzagOffset ? 'translate-y-8 md:translate-y-12' : 'translate-y-0'
                }`}
              >
                <div className={floatClass}>
                  <figure className="flex w-[320px] shrink-0 flex-col justify-between rounded-card bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg md:w-[540px] md:p-12">
                    <div>
                      <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={18} className="fill-ink text-ink" aria-hidden="true" />
                        ))}
                      </div>
                      <blockquote className="mt-8 font-display text-[24px] font-medium leading-[32px] tracking-[-0.02em] text-ink md:text-[30px] md:leading-[38px]">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>
                    </div>
                    <figcaption className="mt-10 flex flex-col gap-1 text-[15px]">
                      <span className="font-medium text-ink">{review.name}</span>
                      <span className="text-ink-muted">{review.detail}</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Duplicate for infinite seamless scroll) */}
        <div aria-hidden="true" className={`flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8 ${animationClass}`}>
          {reviews.map((review, index) => {
            const isZigzagOffset = index % 2 === 1;
            const floatClass = isZigzagOffset ? 'animate-float-wave-down' : 'animate-float-wave-up';

            return (
              <div
                key={`t2-${review.name}`}
                className={`transition-transform duration-500 will-change-transform ${
                  isZigzagOffset ? 'translate-y-8 md:translate-y-12' : 'translate-y-0'
                }`}
              >
                <div className={floatClass}>
                  <figure className="flex w-[320px] shrink-0 flex-col justify-between rounded-card bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg md:w-[540px] md:p-12">
                    <div>
                      <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={18} className="fill-ink text-ink" aria-hidden="true" />
                        ))}
                      </div>
                      <blockquote className="mt-8 font-display text-[24px] font-medium leading-[32px] tracking-[-0.02em] text-ink md:text-[30px] md:leading-[38px]">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>
                    </div>
                    <figcaption className="mt-10 flex flex-col gap-1 text-[15px]">
                      <span className="font-medium text-ink">{review.name}</span>
                      <span className="text-ink-muted">{review.detail}</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
