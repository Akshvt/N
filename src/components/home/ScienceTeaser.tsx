import { useState } from 'react';
import { Plus } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { Reveal } from '@/components/motion/Reveal';

const cards = [
  {
    title: 'Every Batch',
    summary: 'Each production run is sampled and sent to an independent laboratory before it is released.',
    detail: 'Batch numbers are printed on every tub and sachet, so any batch can be traced back to its test results.',
  },
  {
    title: 'Every Test',
    summary: 'Panels cover contaminants, microbial safety and label accuracy.',
    detail: 'Results are compared against the ingredient amounts on the label before a batch is approved for sale.',
  },
  {
    title: 'Every Time',
    summary: 'No batch ships without a passing result, and full reports are published for every formula.',
    detail: 'Reports are organised by formula and batch, so you can check any result yourself.',
  },
];

export function ScienceTeaser() {
  return (
    <section id="science" className="bg-ink text-ivory">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-accent">Our science</p>
          <h2 className="mt-4 max-w-3xl font-display text-[40px] font-medium leading-[44px] tracking-[-0.02em] md:text-[56px] md:leading-[60px]">
            Tested for those who test themselves.
          </h2>
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
            <PillButton href="/science">View lab reports</PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface ScienceCardProps {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

function ScienceCard({ id, title, summary, detail }: ScienceCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-detail`;

  return (
    <article
      className={`flex h-full flex-col rounded-card border border-ivory/15 p-8 transition-colors duration-700 ease-editorial md:p-10 ${
        open ? 'bg-white/[0.07]' : 'bg-white/[0.03]'
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="font-display text-[32px] font-medium leading-[38px] tracking-[-0.02em]">{title}</h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? `Hide ${title} details` : `Show ${title} details`}
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ivory/30 transition-colors duration-500 hover:bg-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Plus
            size={20}
            strokeWidth={1.75}
            aria-hidden="true"
            className={`transition-transform duration-700 ease-editorial ${open ? 'rotate-45' : 'rotate-0'}`}
          />
        </button>
      </div>

      <p className="mt-6 text-[17px] leading-[28px] text-ivory/80">{summary}</p>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-700 ease-editorial ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-6 text-[15px] leading-[24px] text-ivory/75">{detail}</p>
        </div>
      </div>
    </article>
  );
}
