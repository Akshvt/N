import { useState } from 'react';
import { Plus } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { Reveal } from '@/components/motion/Reveal';

const cards = [
  {
    number: '01',
    title: 'Every Batch',
    summary: 'Each production run is sampled and sent to an independent laboratory before it is released.',
    detail: 'Batch numbers are printed on every tub and sachet, so any batch can be traced back to its test results.',
  },
  {
    number: '02',
    title: 'Every Test',
    summary: 'Panels cover contaminants, microbial safety and label accuracy.',
    detail: 'Results are compared against the ingredient amounts on the label before a batch is approved for sale.',
  },
  {
    number: '03',
    title: 'Every Time',
    summary: 'No batch ships without a passing result, and full reports are published for every formula.',
    detail: 'Reports are organised by formula and batch, so you can check any result yourself.',
  },
];

export function ScienceTeaser() {
  return (
    <section id="science" className="bg-lilac text-ink">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-cobalt font-bold tracking-[0.12em] uppercase">Our science</p>
          <h2 className="mt-4 max-w-3xl font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] text-ink md:text-[56px] md:leading-[60px]">
            Tested for those who test themselves.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-[28px] text-ink-muted">
            Independent clinical verification. Every batch verified for potency, heavy metals, and label precision.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 120} className="h-full">
              <ScienceCard {...card} id={`science-card-${index}`} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16">
            <PillButton href="#shop">View lab reports</PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface ScienceCardProps {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
}

function ScienceCard({ id, number, title, summary, detail }: ScienceCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-detail`;

  return (
    <article
      className={`group flex h-full flex-col rounded-card border transition-all duration-500 ease-editorial p-8 md:p-10 backdrop-blur-xl ${
        open
          ? 'border-white/90 bg-white/70 shadow-[0_16px_36px_-8px_rgba(42,36,189,0.12)]'
          : 'border-white/60 bg-white/45 shadow-[0_8px_30px_rgba(42,36,189,0.05)] hover:border-white/85 hover:bg-white/60 hover:shadow-[0_16px_36px_-8px_rgba(42,36,189,0.1)]'
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-cobalt">
            {number}
          </span>
          <h3 className="mt-2 font-display text-[30px] font-medium leading-[36px] tracking-[-0.02em] text-ink md:text-[32px]">
            {title}
          </h3>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? `Hide ${title} details` : `Show ${title} details`}
          onClick={() => setOpen((value) => !value)}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
            open
              ? 'border-ink bg-ink text-white shadow-sm'
              : 'border-white/80 bg-white/70 text-ink backdrop-blur-sm hover:border-accent hover:bg-accent'
          }`}
        >
          <Plus
            size={20}
            strokeWidth={2}
            aria-hidden="true"
            className={`transition-transform duration-500 ease-editorial ${open ? 'rotate-45' : 'rotate-0'}`}
          />
        </button>
      </div>

      <p className="mt-6 text-[16px] leading-[26px] text-ink-muted">{summary}</p>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-500 ease-editorial ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-ink/10 pt-5 mt-5 text-[15px] leading-[24px] text-ink/80">
            {detail}
          </p>
        </div>
      </div>
    </article>
  );
}
