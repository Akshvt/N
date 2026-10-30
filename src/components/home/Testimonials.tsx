import { useRef } from 'react';
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
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden py-20 md:py-40">
      <div className="mx-auto flex max-w-content items-end justify-between gap-6 px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Real results, real routines</p>
          <h2 className="mt-4 font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] md:text-[56px] md:leading-[60px]">
            Loved by people who check.
          </h2>
        </Reveal>
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => scrollByCard(-1)}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-ink text-ink transition-colors duration-500 hover:bg-ink hover:text-ivory"
          >
            <ChevronLeft size={22} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => scrollByCard(1)}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-ink text-ink transition-colors duration-500 hover:bg-ink hover:text-ivory"
          >
            <ChevronRight size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-6 [scrollbar-width:none] md:px-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
      >
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="flex w-[84%] shrink-0 snap-start flex-col justify-between rounded-card bg-white p-8 md:w-[560px] md:p-12"
          >
            <div>
              <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} className="fill-ink text-ink" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-8 font-display text-[28px] font-medium leading-[36px] tracking-[-0.02em] text-ink md:text-[32px] md:leading-[40px]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-10 flex flex-col gap-1 text-[15px]">
              <span className="font-medium text-ink">{review.name}</span>
              <span className="text-ink-muted">{review.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
