import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

interface Review {
  quote: string;
  name: string;
  detail: string;
  badge: string;
}

const reviews: Review[] = [
  {
    quote: 'I stopped skipping breakfast on busy mornings. Daily Nourish fits into my routine without any fuss.',
    name: 'Ananya R.',
    detail: 'Daily Nourish, Bengaluru',
    badge: 'Verified Routine',
  },
  {
    quote: 'The label tells me exactly what is in the tub. That clarity is why I kept coming back.',
    name: 'Meera K.',
    detail: 'Daily Gut, Pune',
    badge: 'Verified Buyer',
  },
  {
    quote: 'Training five days a week, I wanted something simple and consistent. Daily Strength is exactly that.',
    name: 'Rohan D.',
    detail: 'Daily Strength, Delhi',
    badge: 'Consistent Routine',
  },
  {
    quote: 'Sachets are perfect for travel. I never have to think about what I packed on busy flights.',
    name: 'Ishita S.',
    detail: 'Daily Nourish sachets, Mumbai',
    badge: 'Frequent Flier',
  },
  {
    quote: 'Within three weeks of Daily Gut, afternoon bloating subsided completely. Digestion feels light and calm.',
    name: 'Vikram T.',
    detail: 'Daily Gut, Hyderabad',
    badge: '3-Month Routine',
  },
  {
    quote: 'Clean ingredients, zero artificial sweet taste. It mixes smoothly into warm oats or water.',
    name: 'Pooja M.',
    detail: 'Daily Nourish, Gurgaon',
    badge: 'Verified Buyer',
  },
  {
    quote: 'Helps power my evening strength sessions with no sudden crash or heavy stomach.',
    name: 'Arjun S.',
    detail: 'Daily Strength, Chandigarh',
    badge: 'Active Lifestyle',
  },
];

// Staggered Zigzag offsets, delicate natural rotations, and bobbing float waves
const zigzagConfig = [
  {
    offset: 'translate-y-0',
    tilt: '-rotate-1',
    floatClass: 'animate-float-card-1',
  },
  {
    offset: 'translate-y-8 md:translate-y-14',
    tilt: 'rotate-[1.5deg]',
    floatClass: 'animate-float-card-2',
  },
  {
    offset: '-translate-y-6 md:-translate-y-10',
    tilt: '-rotate-[1.2deg]',
    floatClass: 'animate-float-card-3',
  },
  {
    offset: 'translate-y-10 md:translate-y-16',
    tilt: 'rotate-[1deg]',
    floatClass: 'animate-float-card-4',
  },
  {
    offset: '-translate-y-4 md:-translate-y-8',
    tilt: '-rotate-[1.5deg]',
    floatClass: 'animate-float-card-1',
  },
  {
    offset: 'translate-y-6 md:translate-y-12',
    tilt: 'rotate-[1.2deg]',
    floatClass: 'animate-float-card-2',
  },
  {
    offset: '-translate-y-2 md:-translate-y-4',
    tilt: '-rotate-[0.8deg]',
    floatClass: 'animate-float-card-3',
  },
];

export function Testimonials() {
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      {/* Section Header */}
      <div className="mx-auto flex max-w-content items-end justify-between gap-6 px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Real results, real routines</p>
          <h2 className="mt-4 font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] md:text-[56px] md:leading-[60px]">
            Loved by people who check.
          </h2>
        </Reveal>

        {/* Direction & Navigation Controls */}
        <div className="hidden items-center gap-3 md:flex">
          <span className="text-[13px] font-medium tracking-[0.05em] uppercase text-ink-muted mr-2">
            Auto-scrolling
          </span>
          <button
            type="button"
            aria-label="Scroll reviews backwards"
            onClick={() => setDirection('reverse')}
            className={`flex h-13 w-13 items-center justify-center rounded-full border border-ink/80 text-ink transition-all duration-300 hover:scale-105 ${
              direction === 'reverse'
                ? 'bg-ink text-ivory shadow-md'
                : 'bg-white/60 hover:bg-ink hover:text-ivory'
            }`}
          >
            <ChevronLeft size={22} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Scroll reviews forward"
            onClick={() => setDirection('normal')}
            className={`flex h-13 w-13 items-center justify-center rounded-full border border-ink/80 text-ink transition-all duration-300 hover:scale-105 ${
              direction === 'normal'
                ? 'bg-ink text-ivory shadow-md'
                : 'bg-white/60 hover:bg-ink hover:text-ivory'
            }`}
          >
            <ChevronRight size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Auto-Scroll Zigzag Floating Track Container */}
      <div
        className="relative mt-12 overflow-hidden py-10 md:py-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fades for seamless visual flow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-ivory via-ivory/80 to-transparent md:w-36"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-ivory via-ivory/80 to-transparent md:w-36"
        />

        {/* Infinite Marquee Track with Zigzag Cards */}
        <div
          className={`flex w-max items-center gap-6 md:gap-8 ${
            direction === 'normal' ? 'animate-marquee-scroll' : 'animate-marquee-scroll-reverse'
          }`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {marqueeItems.map((review, idx) => {
            const config = zigzagConfig[idx % zigzagConfig.length];

            return (
              <div
                key={`${review.name}-${idx}`}
                className={`transition-transform duration-700 ease-out will-change-transform ${config.offset}`}
              >
                {/* Floating Bobbing Wave Motion */}
                <div className={config.floatClass}>
                  <figure
                    className={`group relative flex w-[310px] shrink-0 flex-col justify-between rounded-card border border-ink/5 bg-white p-7 shadow-sm transition-all duration-500 ease-editorial hover:-translate-y-2 hover:scale-[1.03] hover:border-ink/20 hover:shadow-xl md:w-[480px] md:p-10 ${config.tilt} hover:rotate-0`}
                  >
                    <div>
                      {/* Rating Stars & Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              size={16}
                              className="fill-ink text-ink transition-transform duration-300 group-hover:scale-110"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <span className="rounded-full bg-ivory px-3 py-1 font-display text-[11px] font-semibold tracking-wide text-ink-muted uppercase">
                          {review.badge}
                        </span>
                      </div>

                      {/* Quote */}
                      <blockquote className="mt-6 font-display text-[20px] font-medium leading-[28px] tracking-[-0.02em] text-ink md:mt-8 md:text-[26px] md:leading-[34px]">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Author info */}
                    <figcaption className="mt-8 flex items-center justify-between border-t border-ink/5 pt-4 text-[14px] md:text-[15px]">
                      <div>
                        <span className="block font-medium text-ink">{review.name}</span>
                        <span className="text-[13px] text-ink-muted">{review.detail}</span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
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
