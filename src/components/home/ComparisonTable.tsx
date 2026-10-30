import { Check, X } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/home/SectionHeading';

const rows: { label: string; labelOurs: boolean; typical: boolean }[] = [
  { label: 'Third-party lab tested', labelOurs: true, typical: false },
  { label: 'Whole-food based formulas', labelOurs: true, typical: false },
  { label: 'Every ingredient amount on the label', labelOurs: true, typical: false },
  { label: 'No hidden proprietary blends', labelOurs: true, typical: false },
  { label: 'Batch-level lab reports', labelOurs: true, typical: false },
  { label: 'Single-serve sachets for travel', labelOurs: true, typical: true },
];

export function ComparisonTable() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-40">
      <SectionHeading eyebrow="Compare" title="Not all supplements are built the same." />

      <Reveal delay={150}>
        <div className="mt-16">
          <div className="grid grid-cols-[1fr_96px_96px] items-end border-b border-ink/15 pb-6 text-[13px] font-medium uppercase tracking-[0.08em] text-ink-muted md:grid-cols-[1fr_180px_180px]">
            <span />
            <span className="text-center text-ink">
              <span className="inline-block rounded-full bg-accent px-3 py-1.5 normal-case tracking-normal text-[15px] font-semibold text-ink">
                N° Labs
              </span>
            </span>
            <span className="text-center">Typical</span>
          </div>

          <ul>
            {rows.map((row) => (
              <li
                key={row.label}
                className="grid grid-cols-[1fr_96px_96px] items-center border-b border-silver/70 py-6 md:grid-cols-[1fr_180px_180px]"
              >
                <span className="pr-4 text-[17px] leading-[26px] text-ink">{row.label}</span>
                <span className="flex justify-center">
                  <CompareMark positive={row.labelOurs} ours />
                </span>
                <span className="flex justify-center">
                  <CompareMark positive={row.typical} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function CompareMark({ positive, ours = false }: { positive: boolean; ours?: boolean }) {
  const label = positive ? 'Yes' : 'No';

  if (positive) {
    return (
      <span
        role="img"
        aria-label={label}
        className={`flex h-9 w-9 items-center justify-center rounded-full ${ours ? 'bg-ink text-accent' : 'bg-ink/10 text-ink'}`}
      >
        <Check size={18} strokeWidth={2.25} aria-hidden="true" />
      </span>
    );
  }

  return (
    <span role="img" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted">
      <X size={18} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
